import { ref, getDownloadURL } from "firebase/storage"
import { storage } from "@/lib/firebase/app"

export async function imageURL(path) {
  const imageRef = ref(storage, path)
  return await getDownloadURL(imageRef)
}
