"use client"
import { useState, useEffect } from "react"
import { storage } from "@/lib/firebase/app"
import { ref, getDownloadURL } from "firebase/storage"
import NextImage from "next/image"

export function Image({ src, alt, ...opts }) {
  const [mediaURL, setMediaURL] = useState("")
  useEffect(() => {
    if (!mediaURL && src) {
      const mediaRef = ref(storage, src)
      getDownloadURL(mediaRef).then((url) => setMediaURL(url))
    }
  }, [src, mediaURL])

  if (!mediaURL) {
    return <div className="text-center h-full my-auto">loading...</div>
  }

  return <NextImage src={mediaURL} alt={alt} {...opts} />
}

export function Video({ src, ...opts }) {
  const [mediaURL, setMediaURL] = useState("")
  useEffect(() => {
    if (!mediaURL && src) {
      const mediaRef = ref(storage, src)
      getDownloadURL(mediaRef).then((url) => setMediaURL(url))
    }
  }, [src, mediaURL])

  if (!mediaURL) {
    return <div className="text-center h-full my-auto">loading...</div>
  }

  return <video src={mediaURL} {...opts} />
}

export default function Media({ src, alt, ...opts }) {
  if (src.endsWith(".mp4")) {
    return <Video src={src} alt={alt || "video"} {...opts} />
  } else {
    return <Image src={src} alt={alt || "image"} {...opts} />
  }
}
