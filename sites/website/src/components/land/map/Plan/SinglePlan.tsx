import React from "react"
import Media from "@/components/Assets/media"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import SlideIn from "@/components/Assets/slidein"
import Link from "@/components/Assets/link"
import { planData, type Plan } from "./planData"

export default function SinglePlan(plan: Plan) {
  const { title, image, description } = plan

  return (
    <div className="p-0 m-0 mx-auto">
      <div className="mx-auto">
        {image && (
          <Media
            src={image}
            width={512}
            height={256}
            alt={title}
            className="object-cover rounded-t-lg mx-auto"
            controls
            muted
            autoPlay
            loop={true}
            controlsList="nodownload"
            playsInline={true}
            preload="auto"
          />
        )}
      </div>
      <div className="bg-formal-light rounded-b-lg mb-1">
        {title && (
          <h2 className="flex m-0 p-2 line-clamp-2 inline-block font-medium duration-300 xl:text-itemtitle2 w-full text-justify text-lg md:text-3xl h-[5rem] min-h-[5rem] max-h-[5rem] md:min-h-[7.5rem]">
            {title}
          </h2>
        )}
        {description && (
          <SlideIn className="animate_top">
            <div className="w-full p-4 pt-0 text-justify">
              <Markdown
                rehypePlugins={[rehypeRaw, rehypeKatex, rehypeSanitize]}
                remarkPlugins={[remarkGfm]}
              >
                {description || ""}
              </Markdown>
            </div>
          </SlideIn>
        )}
      </div>
    </div>
  )
}
