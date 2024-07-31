import LRUCache from "lru-cache"
import sendMail from "@/lib/email"
import getHash from "@/lib/hash"
import { NextRequest, NextResponse } from "next/server"
import { store, storage } from "@/lib/firebase/app"
import { doc, getDoc, setDoc } from "firebase/firestore"
import { ref, getDownloadURL } from "firebase/storage"
import type { OwnerData, OwnerConfig, EmailParams } from "@/lib/types"
import { ownerConfig } from "@/lib/firebase/firestore"

type CounsellingRequestData = {
  title: string
  category: string
  name: string
  email: string
  phone: string
  coachinglevel: string
  coachingtypes: string[]
  coachingproblem: string
}

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

  const data: CounsellingRequestData = await request.json()

  await setDoc(doc(store, "users", data.email), {
    name: data.name,
    email: data.email,
    category: data.category,
    title: data.title,
    url: "",
    address: "",
    phone: data.phone,
    mobile: "",
    coachinglevel: data.coachinglevel,
    coachingtypes: data.coachingtypes,
    coachingproblem: data.coachingproblem,
    seqno: -1,
    type: "subscriber",
    status: "active"
  })

  const owner: OwnerConfig = (await ownerConfig()) as OwnerConfig

  // Generate and send the notify email
  try {
    await sendMail({
      to: owner.email,
      template: "notification",
      context: {
        data: data,
        owner: owner
      }
    } as EmailParams)
  } catch (e) {
    console.error("exception: send notfy mail", e.toString())
    return NextResponse.json(
      {
        error: e.toString()
      },
      { status: 200 }
    )
  }

  // Generate and send the confirmation email
  try {
    await sendMail({
      to: data.email,
      template: "counselling-confirmation",
      context: {
        data,
        owner
      }
    } as EmailParams)
  } catch (e) {
    console.error("exception: send cofirm mail", e.toString())
    return NextResponse.json(
      {
        error: e.toString()
      },
      { status: 200 }
    )
  }

  return NextResponse.json(
    {
      success: true,
      owneremail: owner.email,
      ownername: owner.name
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
