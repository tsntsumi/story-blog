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
import { imageURL } from "@/lib/firebase/storage"

function applyQueryFilters(q, { slug, offset, limitnum, category }) {
  if (slug) {
    q = query(q, where("slug", "==", slug))
  }
  if (offset > 0) {
    q = query(q, offset(offset))
  }
  if (limit > 0) {
    q = query(q, limit(limitnum))
  }
  if (category) {
    q = query(q, where("category", "==", category))
  }
  return q
}

export async function retrieveBlogs(filters = {}) {
  const c = query(collection(db, "blogs"))
  const q = applyQueryFilters(c, filters)
  const r = await getDocs(q)
  return r.docs.map((d) => {
    const data = d.data()
    data.createdat = new Date(d.data().createdat).toLocaleString()
    data.heroURL = imageURL(data.hero)
    return {
      id: d.id,
      ...data,
      timestamp: new Date(d.data().timestamp)
    }
  })
}

export async function retrieveBlogsSnapshot(cb, filters = {}) {
  if (typeof cb !== "function") {
    console.log("Error: The callback parameter is not a function")
    return
  }
  const c = query(collection(db, "blogs"))
  const q = applyQueryFilters(c, filters)
  const unsubscribe = onSnapshot(q, (querySnapshot) => {
    const r = querySnapshot.docs.map((d) => {
      const data = d.data()
      return {
        id: d.id,
        ...data,
        createdat: data.createdat.toDate().toLocaleDateString()
      }
    })
    cb(r)
  })
  return unsubscribe
}

export async function blogBySlug(slug) {
  if (!slug) {
    console.log("Error: Invalid slug received: ", slug)
    return
  }
  return blogs({ slug: slug, limit: 1 })
}
