import LRUCache from "lru-cache"
import sendMail from "@/lib/email"
import getHash from "@/lib/hash"
import { NextRequest, NextResponse } from "next/server"
import { store, storage } from "@/lib/firebase/app"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { ref, getDownloadURL } from "firebase/storage"
import type { OwnerData, OfferRequestData } from "@/lib/types"

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

  const data: OfferRequestData = await request.json()

  if (data.url?.startsWith("gs://")) {
    const cref = ref(storage, data.url)
    data.url = await getDownloadURL(cref)
  }

  await setDoc(doc(store, "users", data.email), {
    name: data.name,
    email: data.email,
    category: data.category,
    title: data.title,
    url: data.url,
    address: "",
    phone: data.phone,
    mobile: "",
    coachingtypes: data.coachingtypes,
    seqno: -1,
    type: "subscriber",
    status: "active"
  })

  const ss = await getDoc(doc(store, "configure/owner"))
  const owner: OwnerData = ss.data() as OwnerData
  owner.id = ss.id

  // Generate and send the notify email
  const notifysub = `${data.name}さまから ${data.title}のお申し込みがありました`
  await sendMail({
    to: owner.email,
    subject: notifysub,
    template: "notification",
    context: {
      owner: owner,
      data: data
    }
  })

  // Generate and send the confirmation email
  const confirmsub = `${data.title} のお申し込みありがとうございます｜${owner.name}`
  await sendMail({
    to: data.email,
    subject: confirmsub,
    template: "pricing-guide-confirm",
    context: {
      owner: owner,
      data: data
    }
  })

  return NextResponse.json(
    {
      success: true,
      owneremail: owner.email,
      ownername: owner.name,
      data: data
    },
    { status: 200 }
  )

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
}
