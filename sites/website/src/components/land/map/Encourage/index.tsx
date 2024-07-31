"use client"
import React from "react"
import { Image, Video } from "@/components/Assets/media"
import Link from "next/link"
import SlideIn from "@/components/Assets/slidein"
import Schedule from "@/components/land/map/Assets/Schedule"
import CtaButton from "@/components/land/Assets/Cta/Button"

export default function Encourage() {
  return (
    <>
      <section
        id="encourage"
        className="p-0 m-0 mx-2 px-2 my-4 text-justify text-sm"
      >
        <h1>本気でチャレンジしてみたい方限定です</h1>
        <p>
          時代は、食べログ・ぐるなび・ホットペッパーからGoogleマップ集客に！
        </p>
        <div className="p-4 mb-2 bg-formal-main">
          <p className="mt-0 mb-2 text-base text-formal-accent">
            本気で、お店を繁盛させたいというこんな方は、ぜひ参加してください。
          </p>
          <ul className="m-0 bg-white pl-6 pr-2 px-4 pt-2 pb-1 list-outside text-xs">
            <li>食べログ、ぐるなび、ホットペッパーから集客できない</li>
            <li>口コミサイトの費用対効果が年々と悪化している</li>
            <li>Googleマップの効果的な活用方法を知りたい</li>
            <li>良いクチコミを集めてお店を流行らせたい</li>
            <li>お金を使わずに、これまで以上の集客を実現したい</li>
          </ul>
        </div>
        <div className="text-xs leading-tight w-fit mx-auto">
          <Schedule />
          <div className="text-xs ml-4 text-black">
            <span className="text-sm font-bold">参加費</span>
            <span>
              ： <span className="text-base font-bold">10,000</span>
            </span>
            <span className="text-[7pt]">円(＋税)</span>
          </div>
        </div>
        <SlideIn className="animate_bottom">
          <div className="pb-4">
            <CtaButton>
              <Link href="/map/menu">今すぐ席を確保する</Link>
            </CtaButton>
          </div>
        </SlideIn>
        <div className="w-full">
          <Image
            src="gs://story-made.appspot.com/images/land/map/map-shukyaku-offer.png"
            alt="マップ集客オファーイメージ写真"
            width={571}
            height={313}
            className="object-cover"
          />
        </div>
      </section>
    </>
  )
}
