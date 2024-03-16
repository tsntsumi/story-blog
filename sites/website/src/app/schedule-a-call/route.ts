import LRUCache from "lru-cache"
import sendMail from "@/lib/email"
import NotificationEmail from "@/lib/email/messages/Notification"
import ConfirmationEmail from "@/lib/email/messages/Confirmation"
import getHash from "@/lib/hash"
import { NextRequest, NextResponse } from "next/server"
import { store, storage } from "@/lib/firebase/app"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { ref, getDownloadURL } from "firebase/storage"
import type { OwnerData, ScheduleData } from "@/lib/types"

export const dynamic = "force-dynamic" // defaults to auto

// Define the rate limiter
const rateLimitLRU = new LRUCache({
  max: 500,
  ttl: 60_000 // 60_000 milliseconds = 1 minute
})
const REQUESTS_PER_IP_PER_MINUTE_LIMIT = 5

export async function POST(request: NextRequest) {
  const limitReached = checkRateLimit()

  if (limitReached) {
    return NextResponse.json({ error: "Rate limit exceeded" }, { status: 429 })
  }

  const data: ScheduleData = await request.json()

  const validationResult = validateRequest(data)

  await setDoc(doc(store, "users", data.email), {
    name: data.name,
    email: data.email,
    category: "schedule-a-call",
    title: "schedule-a-call",
    url: "",
    address: "",
    phone: data.phone,
    mobile: "",
    seqno: -1,
    type: "subscriber"
  })

  const ss = await getDoc(doc(store, "users/owner"))
  const owner: OwnerData = ss.data() as OwnerData
  owner.id = ss.id

  // Generate and send the notify email
  const notificationEmail = await ScheduleNotificationEmail(owner, data)
  await sendMail({
    to: owner.email,
    subject: notificationEmail.subject,
    body: notificationEmail.body
  })

  // Generate and send the confirmation email
  const confirmationEmail = await ConfirmationEmail({
    owner,
    data
  })
  await sendMail({
    to: data.email,
    subject: confirmationEmail.subject,
    body: confirmationEmail.body
  })

  return NextResponse.json({ success: true, url: data.url }, { status: 200 })

  /**
   * Checks the rate limit for the current IP address.
   *
   * @return {boolean} Whether the rate limit has been reached.
   */
  function checkRateLimit(): boolean {
    const ip = (request.headers["x-forwarded-for"] ?? "127.0.0.1").split(",")[0]

    const tokenCount = (rateLimitLRU.get(ip) as number[]) || [0]
    if (tokenCount[0] === 0) {
      rateLimitLRU.set(ip, tokenCount)
    }
    tokenCount[0] += 1
    const currentUsage = tokenCount[0]
    return currentUsage >= REQUESTS_PER_IP_PER_MINUTE_LIMIT
  }

  function validateRequest(data: AcceptOfferData) {
    const result = {
      success: true,
      error: null
    }

    const tests = [
      { key: "email", required: true, defaultValue: "" },
      {
        key: "name",
        required: false,
        defaultValue: data.email?.split("@").at(0)
      },
      { key: "title", required: true, defaultValue: "" },
      { key: "url", required: true, defaultValue: "" }
    ]
    tests.map((test) => {
      if (data.hasOwnProperty(test.key)) {
        return true
      } else if (!test.required) {
        data[test.key] = test.defaultValue
        return true
      }
      result.success = false
      result.error = { message: `required key ${test.key} is not entered` }
      return false
    })

    return result
  }
}
