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
  const content: string = document.content
    ?.filter((c) => c.type === "text")
    ?.at(0).value as string
  return (
    <>
      <div className="border-2 border-slate-200 rounded-lg">
        <NextLink href={`/blog/${document.category}/${document.slug}`}>
          <div className="aspect-video w-full overflow-hidden">
            <Image
              src={document.hero}
              width={512}
              height={256}
              alt={document.title}
              className="object-cover rounded-t-lg"
              controls
              muted
              autoPlay
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              preload="auto"
            />
          </div>
          <h3 className="text-xl text-ellipsis overflow-hidden p-2 my-0 line-clamp-2 inline-block font-medium text-black duration-300 hover:text-gold xl:text-itemtitle2 w-full text-justify h-[3.8rem] min-h-[3.8rem]">
            {document.title}
          </h3>
          <SlideIn className="animate_bottom">
            <div className="text-xs whitespace-nowrap overflow-hidden font-mono p-2 m-0 bg-slate-100">
              {document?.date}
            </div>
            <div className="py-2 text-xs px-2 h-[4.3rem] min-h-[4.3rem] max-h-[4.3rem] overflow-hidden items-start">
              <Markdown
                rehypePlugins={[rehypeRaw, rehypeKatex, rehypeSanitize]}
                remarkPlugins={[remarkGfm]}
                className="text-xs text-ellipsis overflow-hidden"
              >
                {document?.summary}
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
