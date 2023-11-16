import NextImage from "next/image"
import { getDownloadURL, ref } from "firebase/storage"
import { storage } from "@/lib/firebase"
const logger = require("firebase-functions/logger")

export default async function Image(params) {
  const { alt, width, height, src, ...rest } = params
  const image = ref(storage(), src)
  const imageURL = await getDownloadURL(image)
  return (
    <NextImage
      src={imageURL}
      alt={alt || "blog content image"}
      width={width || 640}
      height={height || 480}
      {...rest}
      className="object-cover mx-auto"
    />
  )
}
