import LRUCache from "lru-cache"
import sendMail from "@/lib/email"
import NotificationEmail from "@/lib/email/messages/Notification"
import ConfirmationEmail from "@/lib/email/messages/Confirmation"
import getHash from "@/lib/hash"
import { NextRequest, NextResponse } from "next/server"
import { store } from "@/lib/firebase/app"
import { doc, getDoc } from "firebase/firestore"

//const logger = require("firebase-functions/logger")
//require("firebase-functions/logger/compat")

export const dynamic = "force-dynamic" // defaults to auto

type OwnerData = {
  id: string
  name: string
  email: string
  replyto: string
  sender: string
}

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

  const data = await request.json()

  const validationResult = validateRequest(data)

  if (!validationResult.success) {
    console.debug("validete data error", validationResult.error.message)

    return NextResponse.json(
      { error: validationResult.error.message },
      { status: 400 }
    )
  }

  const ss = await getDoc(doc(store, "users/owner"))
  const owner: OwnerData = ss.data() as OwnerData
  owner.id = ss.id

  console.debug("owner", owner)

  // Generate and send the notify email
  const notificationEmail = NotificationEmail(data)
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

  return NextResponse.json({ success: true }, { status: 200 })

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

  function validateRequest(data) {
    const result = {
      success: true,
      error: null
    }
    console.debug("validate data", JSON.stringify(data, null, 2))
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
