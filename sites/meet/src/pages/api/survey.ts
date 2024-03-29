import LRUCache from "lru-cache"
import type { NextApiRequest, NextApiResponse } from "next"
import { z } from "zod"
import { store, storage } from "@/lib/firebase/app"
import { doc, setDoc, getDoc } from "firebase/firestore"

import {
  OWNER_TIMEZONE,
  OWNER_EMAIL,
  MENU_ITEMS,
  COURSE_TO_NAME,
  COURSE_TO_DURATION,
} from "@/config"

import { formatLocalDate, formatLocalTime } from "@/lib/availability/helpers"
import getHash from "@/lib/hash"

// Define the rate limiter
const rateLimitLRU = new LRUCache({
  max: 500,
  ttl: 60_000, // 60_000 milliseconds = 1 minute
})
const REQUESTS_PER_IP_PER_MINUTE_LIMIT = 5
// Define the schema for the request body

const SurveySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string(),
  course: z.string(),
  occupation: z.string(),
  spaces: z.string(),
  problem: z.string(),
  earning: z.string(),
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" })
    return
  }

  // Apply rate limiting using the client's IP address

  const limitReached = checkRateLimit()

  if (limitReached) {
    res.status(429).json({ error: "Rate limit exceeded" })
    return
  }

  // Validate and parse the request body using Zod
  const validationResult = SurveySchema.safeParse(req.body)
  if (!validationResult.success) {
    res.status(400).json({ error: validationResult.error.message })
    return
  }
  const { data } = validationResult
  const { name, email, phone, course, occupation, spaces, problem, earning } =
    data
  const cname = COURSE_TO_NAME(course)
  const duration = COURSE_TO_DURATION(course)

  const userRef = doc(store, "users", email)
  const oldSnap = await getDoc(userRef)
  const initDoc = {
    "newsletter-seqno": -1,
    type: "subscriber",
  }
  const newDoc = {
    "newsletter-seqno": -1,
    type: oldSnap?.get("type") || "subscriber",
    name: name,
    email: email,
    phone: phone || oldSnap?.get("phone"),
    category: cname,
    course: course,
    duration: duration,
    occupation: occupation,
    spaces: spaces,
    problem: problem,
    earning: earning,
  }
  try {
    await setDoc(userRef, newDoc)
    return res.status(200).json({ success: true })
  } catch (e) {
    console.error("exception", e)
    return res.status(400).json({ error: e })
  }

  /**
   * Checks the rate limit for the current IP address.
   *
   * @return {boolean} Whether the rate limit has been reached.
   */
  function checkRateLimit(): boolean {
    const forwarded = req.headers["x-forwarded-for"]
    const ip =
      (Array.isArray(forwarded) ? forwarded[0] : forwarded) ??
      req.socket.remoteAddress ??
      "127.0.0.1"

    const tokenCount = (rateLimitLRU.get(ip) as number[]) || [0]
    if (tokenCount[0] === 0) {
      rateLimitLRU.set(ip, tokenCount)
    }
    tokenCount[0] += 1
    const currentUsage = tokenCount[0]
    return currentUsage >= REQUESTS_PER_IP_PER_MINUTE_LIMIT
  }
}
