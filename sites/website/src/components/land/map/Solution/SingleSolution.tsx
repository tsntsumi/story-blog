import React from "react"
import { type Solution } from "./solutionData"
import Image from "next/image"
import { motion } from "framer-motion"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"

export default function SingleSolution({ solution }: { solution: Solution }) {
  const { image, title, description } = solution

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10
          },

          visible: {
            opacity: 1,
            y: 0
          }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-0 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark"
      >
        <div className="relative flex min-h-64 w-full items-center justify-center bg-transparent">
          <Image
            src={image}
            width={780}
            height={572}
            alt="title"
            className="w-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-7.5 xl:p-12.5">
          <h2 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
            {title}
          </h2>
          <div className="text-justify">
            <Markdown
              rehypePlugins={[rehypeRaw, rehypeKatex, rehypeSanitize]}
              remarkPlugins={[remarkGfm]}
              className="markdown"
            >
              {description}
            </Markdown>
          </div>
        </div>
      </motion.div>
    </>
  )
}
