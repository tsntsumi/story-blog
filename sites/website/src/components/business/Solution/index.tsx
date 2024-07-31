"use client"
import React from "react"
import { motion } from "framer-motion"
import { Image, Video } from "@/components/Assets/media"
import { solutionData } from "./solutionData"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import SlideIn from "@/components/Assets/slidein"
import Link from "next/link"
import Subscribe from "@/components/Assets/subscribe"
import {
  SoloPreneur,
  個人起業家,
  DrivingSchool,
  CoachingToolbox
} from "@/components/Assets/logos"

export default function Solution() {
  return (
    <>
      <section id="solution" className="p-0 m-0 mb-4">
        <div className="mx-auto max-w-c-1315 px-4 md:px-4 xl:px-16 text-justify">
          <div className="bg-formal-light p-4 rounded-t-xl">
            <h1 className="text-black text-xl">
              <span className="font-serif">Alizza Ideal</span>の
              <ruby>
                コーチング・ビジネス教習センター<rp>(</rp>
                <rt>Coaching School of Business</rt>
                <rp>)</rp>
              </ruby>
            </h1>
            は、 コーチのあなたが、理想のゴールに向かって
            コーチング・ビジネスを運転していくために必要な全ての解決策を提供します
          </div>
          <div className="columns-2">
            <p>
              ほとんどの起業塾や集客コンサルタントは、
              人を集めるところまでしか教えてくれません。
              しかし、人を集めただけではクライアントになってもらえません。
              そこにはセールスが必要です。
            </p>
            <p>
              なかには、あなたに大きなリスクを負わせた条件でセールスさせようとする
              コンサルタントもいます。
              でもそれでは、あなたのコーチングの成果が出なかったら、
              あなたは大きな損失をかぶることになります。
            </p>
            <p>
              集客コンサルタントは言うでしょう。「それはあなたのコーチングの問題だ」と。
            </p>
            <p>
              Alizza Idealでは、あなたがコーチング・ビジネスを
              安心して安全に安定した運転をしていくための
              ３つのテクニックを教習します。
            </p>
          </div>
          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 xl:mt-20 xl:gap-12.5">
            {solutionData &&
              solutionData.map((solution, key) => {
                const { title, image, description } = solution
                return (
                  <div
                    key={key}
                    className="border-2 border-slate-200 rounded-xl p-0"
                  >
                    {image && (
                      <Video
                        src={image}
                        width={512}
                        height={256}
                        alt={title}
                        className="object-cover w-full rounded-t-lg"
                        controls
                        muted
                        autoPlay
                        loop={true}
                        controlsList="nodownload"
                        playsInline={true}
                        preload="auto"
                      />
                    )}
                    <h2 className="flex items-center m-0 p-4 line-clamp-2 inline-block font-medium text-black duration-300 hover:text-gold xl:text-itemtitle2 w-full text-justify bg-sky-950 text-gold text-2xl h-[6rem] min-h-[6rem] max-h-[6rem]">
                      {title}
                    </h2>
                    <SlideIn className="animate_top">
                      <div className="w-full p-4 pt-0 text-justify text-sm">
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
            <Link href="https://cal.alizza-ideal.com">
              <Subscribe className="text-xs md:text-sm py-4 px-6 mx-auto">
                無料相談会をスケジュール
              </Subscribe>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
