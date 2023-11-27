"use client"
import { React, useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import Media, { Image, Video } from "@/components/Media"

const components = {
  Image: Image,
  Video: Video,
  Media: Media
}

export default function BlogItem({ blog }) {
  const elipsis = (text, count) =>
    text?.slice(0, count) + (text?.length > count ? "..." : "")
  return (
    <>
      <div>
        <Link
          href={`/blog/${blog.slug}`}
          className="relative block aspect-[368/239]"
        >
          <Media src={blog.hero} alt={blog.title} unoptimized fill />
        </Link>

        <div className="px-4">
          <Link href={`/blog/${blog.slug}`}>
            <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2 w-full text-justify">
              {elipsis(blog.title, 40)}
            </h3>
          </Link>
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
