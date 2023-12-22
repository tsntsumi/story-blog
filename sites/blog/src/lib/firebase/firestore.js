import { basename } from "path"
import {
  collection,
  onSnapshot,
  query,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  orderBy,
  Timestamp,
  runTransaction,
  where,
  limit,
  addDac
} from "firebase/firestore"

import { db } from "@/lib/firebase/app"
import { imageURL, imageURLSync } from "@/lib/firebase/storage"

function applyQueryFilters(q, params) {
  const { slug, offset, category, status } = params

  const w = []
  if (slug) {
    q = query(q, where("slug", "==", slug))
  }
  if (category) {
    q = query(q, where("category", "==", category))
  }
  if (status) {
    q = query(q, where("status", "==", status))
  }
  if (offset > 0) {
    q = query(q, offset(offset))
  }
  if (params.limit > 0) {
    q = query(q, limit(params.limit))
  }
  // q = query(q, orderBy("createdat", "desc"))
  return q
}

export async function retrieveBlogs(filters = {}) {
  const c = query(collection(db, "blogs"))
  const q = applyQueryFilters(c, filters)
  const r = await getDocs(q)
  return r.docs.map((d) => {
    const data = d.data()
    data.date = new Date(data.createdat.seconds * 1000).toLocaleString()
    return {
      id: d.id,
      ...data
    }
  })
}

export function retrieveBlogsSnapshot(cb, filters = {}) {
  if (typeof cb !== "function") {
    console.error("Error: The callback parameter is not a function")
    return
  }
  const c = query(collection(db, "blogs"))
  const q = applyQueryFilters(c, filters)
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const r = querySnapshot.docs.map((d) => {
      const data = d.data()
      data.date = new Date(data.createdat.seconds * 1000).toLocaleString()
      return {
        id: d.id,
        ...data
      }
    })
    cb(r)
  })
  return unsubscribe
}

export async function blogBySlug(slug) {
  if (!slug) {
    console.error("Error: Invalid slug received: ", slug)
    return
  }
  return await retrieveBlogs({ slug: slug, limit: 1 })
}
