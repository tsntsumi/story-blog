import { ref, getDownloadURL } from "firebase/storage"
import { storage } from "@/lib/firebase/app"

export async function imageURL(path) {
  if (!path) {
    return null
  }
  const imageRef = ref(storage, path)
  return await getDownloadURL(imageRef)
}
