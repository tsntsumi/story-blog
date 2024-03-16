import React from "react"
import { Image } from "@/components/common/media"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import SlideIn from "@/components/common/slidein"
import Link from "@/components/common/link"
import { planData, type Plan } from "./planData"

export default function SinglePlan(plan: Plan) {
  const { title, image, description } = plan

  return (
    <div className="p-0">
      <div className="w-1/2 mx-auto">
        {image && (
          <Image
            src={image}
            width={512}
            height={256}
            alt={title}
            className="object-cover rounded-t-lg"
          />
        )}
      </div>
      <h2 className="flex items-center m-0 p-4 line-clamp-2 inline-block font-medium duration-300 hover:text-gold xl:text-itemtitle2 w-full text-justify text-2xl h-[6rem] min-h-[6rem] max-h-[6rem]">
        {title}
      </h2>
      <SlideIn className="animate_top">
        <div className="w-full p-4 pt-0">
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
