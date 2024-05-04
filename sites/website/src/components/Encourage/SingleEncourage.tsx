import React from "react"
import { Image, Video } from "@/components/common/media"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import SlideIn from "@/components/common/slidein"
import Link from "@/components/common/link"
import { encourageData, type Encourage } from "./encourageData"

export default function SingleEncourage(encourage: Encourage) {
  const { title, image, description } = encourage

  return (
    <div className="p-0 mx-auto text-justify">
      <div className="w-1/2 md:w-1/3 mx-auto my-4">
        {image && (
          <Image
            src={image}
            width={512}
            height={256}
            alt={title}
            className="object-cover rounded-t-lg mx-auto"
          />
        )}
      </div>
      <h2 className="flex items-center justify-center m-0 mt-4 line-clamp-2 inline-block font-medium duration-300 hover:text-gold xl:text-itemtitle2 w-full text-justify text-lg md:text-2xl h-[6rem] min-h-[6rem] max-h-[6rem]">
        {title}
      </h2>
      <SlideIn className="animate_top">
        <div className="w-full pb-4 pt-0">
          <Markdown
            rehypePlugins={[rehypeRaw, rehypeKatex, rehypeSanitize]}
            remarkPlugins={[remarkGfm]}
          >
            {description || ""}
          </Markdown>
        </div>
      </SlideIn>
    </div>
  )
}
