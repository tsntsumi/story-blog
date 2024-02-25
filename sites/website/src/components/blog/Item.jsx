"use client"
import { motion } from "framer-motion"
import NextLink from "next/link"
import Link from "@/components/common/link"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import Media, { Image, Video } from "@/components/common/media"

const components = {
  img: Image,
  vedio: Video
}

export default function Item({ document }) {
  const elipsis = (text, count) =>
    text?.slice(0, count) + (text?.length > count ? "..." : "")
  const content = document.content
    ?.filter((c) => c.type === "text")
    ?.at(0).value
  const summary = elipsis(content, 40)
  return (
    <>
      <div>
        <div className="px-4">
          <NextLink href={`/${document.category}/${document.slug}`}>
            <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2 w-full text-justify">
              {elipsis(document.title, 40)}
            </h3>
          </NextLink>
          <div>{document?.date}</div>
          <div>
            <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeKatex]}>
              {summary || ""}
            </Markdown>
          </div>
          <Link href={`/${document.category}/${document.slug}`}>詳しく</Link>
        </div>
      </div>
    </>
  )
}
