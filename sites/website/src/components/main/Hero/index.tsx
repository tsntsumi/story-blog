"use client"
import { Image, Video } from "@/components/Assets/media"
import NextImage from "next/image"
import Link, { DownArrow } from "@/components/Assets/link"
import { UpperArrow, RightArrow } from "@/components/Assets/link"
import { useState } from "react"
import AcceptOffer from "@/components/Assets/acceptoffer"
import SlideIn from "@/components/Assets/slidein"
import GoOffer from "@/components/main/Assets/go-offer"

const CLOSINGMOVIE: string =
  "gs://story-made.appspot.com/videos/hero/closing-sales.mov"

const Hero = () => {
  const workshopIsVisible: boolean = false
  const workshopVisiblity: string = workshopIsVisible ? "" : "hidden"
  const columnWidth: string = workshopIsVisible ? "md:w-2/5" : "md:w-full"
  return (
    <>
      <section id="first-view" className="overflow-hidden mb-8">
        <div className="w-full mx-auto py-1 bg-ai-yellow text-ai-blue text-xs text-center">
          起業する勇気と、
          <span className="whitespace-nowrap md:whitespace-wrap">
            副業する覚悟を応援する ALIZZA IDEAL
          </span>
        </div>
        <div className="w-full mx-auto py-8 bg-ai-blue text-white">
          <div className="w-fit mx-auto mb-4 py-1 px-6 bg-ai-yellow text-ai-red rounded-full border-8 border-ai-red">
            日本初上陸
          </div>
          <h1 className="text-center text-white font-medium">
            セールスの抵抗をなくす
            <div className="md:text-[2.4rem]">
              ストーリー・セールス・
              <span className="whitespace-nowrap">フレームワーク</span>
            </div>
          </h1>
          <div className="hidden p-0 flex flex-row flex-nowrap justify-end bg-ai-yellow rounded-l-full ml-4 md:ml-10 mb-4 border-2 border-r-0 border-white/40 border-b-ai-red">
            <div className="pl-8 py-2 flex flex-col justify-around text-center text-sm sm:text-xl md:text-2xl text-ai-blue">
              <div className="">セールス・シナリオを作成</div>
              <div className="w-fit mx-auto">
                <DownArrow />
              </div>
              <div>
                <div>自信を持って、楽しみながら</div>
                <div>より多くのセールスを成約</div>
              </div>
              <div className="w-fit mx-auto">
                <DownArrow />
              </div>
              <div className="">売り上げが安定</div>
            </div>
            <div className="h-0 pb-[50%] relative w-full">
              <Image
                src="gs://story-made.appspot.com/images/hero/profile-photo-leftmost.png"
                alt="avatar"
                width="769"
                height="684"
                className="hidden object-cover w-1/2 absolute bottom-0 right-0"
              />
            </div>
          </div>

          <div className="p-0 flex flex-row flex-nowrap justify-end bg-black rounded-l-full ml-4 md:ml-10 mb-4 border-4 border-r-0 border-white overflow-hidden">
            <div className="h-0 pb-[50%] relative w-full">
              <div className="pl-8 py-4 flex flex-col justify-around text-center text-sm sm:text-xl md:text-2xl text-white absolute z-20 h-full w-full">
                <div className="">ストーリー・セールスをする</div>
                <div className="w-fit mx-auto">
                  <DownArrow />
                </div>
                <div>より多くのセールスで成約</div>
                <div className="w-fit mx-auto">
                  <DownArrow />
                </div>
                <div className="">売り上げが安定</div>
              </div>

              <Video
                src={CLOSINGMOVIE}
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

          <div className="mx-12 mb-4 border-4 border-ai-gold rounded-lg p-4 bg-blue-50 text-ai-gold text-sm">
            この公式サイトでは、集客の役に立つ成功事例集をプレゼントしています。
            ぜひ受け取ってください。
          </div>
          <GoOffer />
        </div>
      </section>
    </>
  )
}

export default Hero
