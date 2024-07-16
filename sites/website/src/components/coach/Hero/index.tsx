"use client"
import { useState } from "react"
import NextImage from "next/image"
import { Image, Video } from "@/components/Assets/media"
import Link, { DownArrow } from "@/components/Assets/link"
import { UpperArrow, RightArrow } from "@/components/Assets/link"
import SlideIn from "@/components/Assets/slidein"
import Schedule from "@/components/coach/Assets/scheduletocall"

const IDEAL_MOVIE: string =
  "gs://story-made.appspot.com/videos/hero/closing-sales.mov"

const Hero = () => {
  const workshopIsVisible: boolean = false
  const workshopVisiblity: string = workshopIsVisible ? "" : "hidden"
  const columnWidth: string = workshopIsVisible ? "md:w-2/5" : "md:w-full"
  return (
    <>
      <section id="first-view" className="overflow-hidden mb-8">
        <div className="w-full mx-auto py-1 bg-ai-yellow text-ai-blue text-xs text-center">
          50代がコーチ起業する勇気と、
          <span className="whitespace-nowrap md:whitespace-wrap">
            副業する覚悟を応援する｜アリザ・アイデアル
          </span>
        </div>
        <div className="w-full mx-auto py-8 bg-ai-blue text-white">
          <h1 className="mx-8 text-justify text-white font-medium">
            <div className="text-xl">
              生涯現役組の50代のあなたが、専門知識を活かして
            </div>
            コーチングで起業するためのビジネス構築
          </h1>
          <div className="p-0 flex flex-row flex-nowrap justify-end bg-black rounded-l-full ml-4 md:ml-10 mb-4 border-4 border-r-0 border-white overflow-hidden">
            <div className="h-0 pb-[50%] relative w-full">
              <div className="pl-8 py-4 flex flex-col justify-around text-center text-sm sm:text-xl md:text-2xl text-white absolute z-20 h-full w-full">
                <div className="text-xl">クライアントを満足させる</div>
                <div className="w-fit mx-auto">
                  <DownArrow />
                </div>
                <div className="text-xl">クライアントを成功させる</div>
                <div className="w-fit mx-auto">
                  <DownArrow />
                </div>
                <div className="text-xl">ビジネスが成長する</div>
              </div>

              <Video
                src={IDEAL_MOVIE}
                controls={true}
                muted={true}
                autoPlay={true}
                loop={true}
                controlsList="nodownload"
                playsInline={true}
                preload="auto"
                className="w-full backdrop-brightness-0 brightness-50 absolute top-0 right-0"
              />
            </div>
          </div>

          <div className="mx-14 max-w-5/6 mb-4 border-4 border-ai-gold rounded-xl p-2 bg-yellow-50 text-ai-blue text-xs md:text-md text-justify">
            <p>
              アリザ・アイデアルでは、あなたのコーチング起業の悩みをお聞きして課題を発見する
              ビジネス・カウンセリングを <strong>今だけ無料</strong>
              で行っています。是非ご利用ください。
            </p>
          </div>
          <div className="mt-8">
            <Schedule />
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
