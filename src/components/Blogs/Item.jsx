"use client"
import { React, useState, useEffect } from "react"
import { storage, firestore } from "@/lib/firebase/app"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ref, getDownloadURL } from "firebase/storage"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"

function StorageImage({ src, alt, ...opts }) {
  const [imageURL, setImageURL] = useState("")
  useEffect(() => {
    if (!imageURL) {
      getDownloadURL(ref(storage, src)).then((url) => setImageURL(url))
    }
  }, [src, imageURL])

  if (!imageURL) {
    return <div className="text-center justifi-center">loading image...</div>
  }
  return (
    <>
      <Image src={imageURL} alt={alt} {...opts} />
    </>
  )
}

export default function BlogItem({ blog }) {
  const elipsis = (text, count) =>
    text?.slice(0, count) + (text.length > count ? "..." : "")
  return (
    <>
      <div>
        <Link
          href={`/blog/${blog.slug}`}
          className="relative block aspect-[368/239]"
        >
          <StorageImage src={blog.hero} alt={blog.title} unoptimized fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2 w-full text-justify">
            <Link href={`/blog/${blog.slug}`}>{elipsis(blog.title, 40)}</Link>
          </h3>
          <div>
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeKatex]}>
              {blog.summary}
            </Markdown>
          </div>
        </div>
      </div>
    </>
  )
}
