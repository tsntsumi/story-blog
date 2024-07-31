import { basename } from "path"
import { useCallback } from "react"
import {
  collection,
  onSnapshot,
  query,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  orderBy,
  startAfter,
  Timestamp,
  runTransaction,
  where,
  limit,
  addDac
} from "firebase/firestore"

import { db } from "@/lib/firebase/app"
import { imageURL } from "@/lib/firebase/storage"

const DEFAULT_ROOTDIR = "blogs"

function applyQueryFilters(q, { slug, title, category, status, ...params }) {
  if (slug) {
    q = query(q, where("slug", "==", basename(slug)))
  }
  if (title) {
    q = query(q, where("title", "==", title))
  }
  if (category) {
    q = query(q, where("category", "==", category))
  }
  if (status) {
    q = query(q, where("status", "==", status))
  }
  if (params.limit > 0) {
    q = query(q, limit(params.limit))
  }
  if (params.orderBy === "createdat") {
    q = query(q, orderBy("createdat", "desc"))
  }
  return q
}

export async function retrieveDocuments(rootdir, filters = {}) {
  const c = query(collection(db, rootdir || DEFAULT_ROOTDIR))
  filters.status = filters.status || "published"
  const q = applyQueryFilters(c, filters)
  const r = await getDocs(q)
  return r.docs
    .map((d) => {
      const data = d.data()
      data.date = new Date(data.createdat.seconds * 1000).toLocaleString()
      return {
        id: d.id,
        ...data
      }
    })
    .sort((a, b) => b.createdat.seconds - a.createdat.seconds)
}

export function retrieveDocumentsSnapshot(rootdir, cb, filters = {}) {
  if (typeof cb !== "function") {
    console.error("Error: The callback parameter is not a function")
    return
  }
  const c = query(collection(db, rootdir || DEFAULT_ROOTDIR))
  const q = applyQueryFilters(c, filters)
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const r = querySnapshot.docs
      .map((d) => {
        const data = d.data()
        data.date = new Date(data.createdat.seconds * 1000).toLocaleString()
        return {
          id: d.id,
          ...data
        }
      })
      .sort((a, b) => b.createdat.seconds - a.createdat.seconds)
    cb(r)
  })
  return unsubscribe
}

export async function documentBySlug(rootdir, slug) {
  if (!slug) {
    console.error("Error: Invalid slug received: ", slug)
    return
  }
  const documents = await retrieveDocuments(rootdir, { slug: slug, limit: 1 })
  return documents?.shift()
}

export async function updateDocumentRating(rootdir, id, rating) {
  if (!id) {
    console.error("Error: Missing document id")
    return
  }
  const docref = doc(db, rootdir || DEFAULT_ROOTDIR, id)
  await updateDoc(docref, "rating", rating)
}

export async function ownerConfig() {
  // owner fields:
  // address: string
  // bcc: string[]
  // email: string
  // name: string
  // phone: string
  // reply_to: string
  // time_zone: string
  // user_account: string
  const r = doc(db, "configure", "owner")
  const ss = await getDoc(r)
  if (!ss.exists()) {
    return null
  }
  const owner = ss.data()
  owner.id = ss.id
  return owner
}

export async function calendarConfig() {
  /*
     bookedCalendars: string[]
     date_format: string[]
     time_format: string[]
     event_calendar: string
     reminders: string[][]
     timeZone: stirng
     weekdays: string[]
  */
  const r = doc(db, "configure", "calendars")
  const ss = await getDoc(r)
  if (!ss.exists()) {
    return null
  }
  return ss.data()
}

export async function slotsConfig() {
  /*
     lead_time: number
     menu: {course: string, duration: number, name: string}[]
     offer: { days: number, offset: number }
     padding: numebr
  */
  const r = doc(db, "configure", "slots")
  const ss = await getDoc(r)
  if (!ss.exists()) {
    return null
  }
  return ss.data()
}
