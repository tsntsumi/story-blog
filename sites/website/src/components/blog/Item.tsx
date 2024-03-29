"use client"
import { motion } from "framer-motion"
import NextLink from "next/link"
import Link from "@/components/common/link"
import SlideIn from "@/components/common/slidein"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import Media, { Image, Video } from "@/components/common/media"
import { type BlogEntry } from "@/lib/types/blog"

export default function Item({ document }: { document: BlogEntry }) {
  const elipsis = (text: string, count: number): string =>
    text?.slice(0, count) + (text?.length > count ? "..." : "")
  const content: string = document.content
    ?.filter((c) => c.type === "text")
    ?.at(0).value as string
  const summary: string = elipsis(document.summary, 80)
  return (
    <>
      <div className="border-2 border-slate-200 rounded-lg">
        <NextLink href={`/blog/${document.category}/${document.slug}`}>
          <Image
            src={document.hero}
            width={512}
            height={256}
            alt={document.title}
            className="object-cover w-full rounded-t-lg"
          />
          <h3 className="text-base p-2 my-0 line-clamp-2 inline-block font-medium text-black duration-300 hover:text-gold xl:text-itemtitle2 w-full text-justify text-2xl h-[4rem] min-h-[4rem]">
            {elipsis(document.title, 24)}
          </h3>
          <SlideIn className="animate_bottom">
            <div className="text-xs whitespace-nowrap overflow-hidden font-mono px-2 m-0 bg-slate-100">
              {document?.date}
            </div>
            <div className="text-xs px-2 h-[9rem] min-h-[9em] max-h-[9em] overflow-hidden items-start">
              <Markdown
                rehypePlugins={[rehypeRaw, rehypeKatex, rehypeSanitize]}
                remarkPlugins={[remarkGfm]}
                className="text-xs"
              >
                {summary || ""}
              </Markdown>
            </div>
          </SlideIn>
        </NextLink>
        <div className="px-2 text-xs">
          <Link href={`/blog/${document.category}/${document.slug}`}>
            詳しく
          </Link>
        </div>
      </div>
    </>
  )
}
