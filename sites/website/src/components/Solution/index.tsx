"use client"
import React from "react"
import { motion } from "framer-motion"
import { Image } from "@/components/common/media"
import { solutionData } from "./solutionData"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import SlideIn from "@/components/common/slidein"
import Link from "next/link"
import Subscribe from "@/components/common/subscribe"

const SoloPreneur = () => (
  <ruby>
    個人起業家
    <rp>(</rp>
    <rt>ソロプレナー</rt>
    <rp>)</rp>
  </ruby>
)
const 個人起業家 = () => <SoloPreneur />

export default function Solution() {
  return (
    <>
      <section id="solution" className="pt-24">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <h1>
            <個人起業家 />
            ビジネス・ドライビング・スクールは、
            個人起業家が理想のゴールに向かうために必要な全てのツールを提供します
          </h1>
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 grid-cols-2 xl:mt-20 xl:gap-12.5">
            {solutionData &&
              solutionData.map((solution, key) => {
                const { title, image, description } = solution
                return (
                  <div
                    key={key}
                    className="border-2 border-slate-200 rounded-xl p-0"
                  >
                    {image && (
                      <Image
                        src={image}
                        width={512}
                        height={256}
                        alt={title}
                        className="object-cover w-full rounded-t-lg"
                      />
                    )}
                    <h2 className="flex items-center m-0 p-4 line-clamp-2 inline-block font-medium text-black duration-300 hover:text-gold xl:text-itemtitle2 w-full text-justify bg-gold text-darkgold text-2xl h-[6rem] min-h-[6rem] max-h-[6rem]">
                      {title}
                    </h2>
                    <SlideIn className="animate_top">
                      <div className="w-full p-4 pt-0">
                        <Markdown
                          rehypePlugins={[
                            rehypeRaw,
                            rehypeKatex,
                            rehypeSanitize
                          ]}
                          remarkPlugins={[remarkGfm]}
                        >
                          {description || ""}
                        </Markdown>
                      </div>
                    </SlideIn>
                  </div>
                )
              })}
          </div>
          <div className="my-8 mx-auto">
            <Link href="https://meet.alizza-ideal.com">
              <Subscribe className="text-xs md:text-sm py-4 px-6">
                相談を予約
              </Subscribe>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
