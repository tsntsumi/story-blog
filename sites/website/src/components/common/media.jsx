"use client"
import { useState, useEffect } from "react"
import { storage } from "@/lib/firebase/app"
import { ref, getDownloadURL } from "firebase/storage"
import NextImage from "next/image"
import Spinner from "@/components/common/spinner"

export function Image({ src, alt, ...rest }) {
  const [url, setUrl] = useState(undefined)

  useEffect(() => {
    const media = ref(storage, src)
    getDownloadURL(media).then((url) => setUrl(url))
  }, [src])

  if (!url) {
    return (
      <div className="text-center h-full my-auto">
        <Spinner />
      </div>
    )
  }

  return <NextImage src={url} alt={alt} {...rest} />
}

export function Video({ src, ...opts }) {
  const [url, setUrl] = useState(undefined)
  useEffect(() => {
    if (src) {
      const media = ref(storage, src)
      getDownloadURL(media).then((url) => setUrl(url))
    }
  }, [src])

  if (!url) {
    return (
      <div className="text-center h-full my-auto">
        <Spinner />
      </div>
    )
  }

  return <video src={url} {...opts} />
}

export default function Media({ src, alt, ...opts }) {
  if (!src) {
    return null
  }
  if (src.endsWith(".mp4") || src.endsWith(".mov")) {
    return <Video src={src} alt={alt || "video"} {...opts} />
  } else {
    return <Image src={src} alt={alt || "image"} {...opts} />
  }
}
