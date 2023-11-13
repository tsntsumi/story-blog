import { app, db } from "@/lib/firebase"
import {
  collection,
  getDocs,
  orderBy,
  query,
  limit,
  limitToLast,
  where
} from "firebase/firestore"

const BlogData = async (slug = null, upto = 0) => {
  const c = collection(db(), "blogs")
  const o = orderBy("createdAt", "desc")
  const u = upto > 0 ? limit(upto) : limitToLast()
  const q = slug ? query(c, where("slug", "==", slug), o, u) : query(c, o, u)

  const { docs } = await getDocs(q)
  const blogs = docs.map((doc) => doc.data())

  return blogs
}

export default BlogData
