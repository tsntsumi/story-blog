"use client"
import { motion } from "framer-motion"
import NextLink from "next/link"
import Link from "@/components/Assets/link"
import SlideIn from "@/components/Assets/slidein"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import Media, { Image, Video } from "@/components/Assets/media"
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
            controls
            muted
            autoPlay
            loop={true}
            controlsList="nodownload"
            playsInline={true}
            preload="auto"
          />
          <h3 className="text-sm p-2 my-0 line-clamp-2 inline-block font-medium text-black duration-300 hover:text-gold xl:text-itemtitle2 w-full text-justify text-2xl h-[3rem] min-h-[3rem]">
            {elipsis(document.title, 48)}
          </h3>
          <SlideIn className="animate_bottom">
            <div className="text-xs whitespace-nowrap overflow-hidden font-mono p-2 m-0 bg-slate-100">
              {document?.date}
            </div>
            <div className="py-2 text-xs px-2 h-[4rem] min-h-[4rem] max-h-[4rem] overflow-hidden items-start">
              <Markdown
                rehypePlugins={[rehypeRaw, rehypeKatex, rehypeSanitize]}
                remarkPlugins={[remarkGfm]}
                className="text-xs"
              >
                {elipsis(summary || "", 70)}
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
