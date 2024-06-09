"use client"
import React from "react"
import { Video } from "@/components/Assets/media"
import Link from "next/link"
import SlideIn from "@/components/Assets/slidein"
import AcceptOffer from "@/components/Assets/acceptoffer"
import { motion } from "framer-motion"

const Magnet = () => {
  const offerimage =
    "gs://story-made.appspot.com/videos/hero/alizzas-sales-funnel-newsletter.mp4"
  const offerdocument =
    "gs://story-made.appspot.com/offers/monthly-success-stories-2024-04.pdf"
  return (
    <>
      {/* <!-- ===== Magnet Start ===== --> */}
      <section id="lead-magnet" className="p-0 m-0">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <h1 className="mt-0 pb-4 text-justify">
            ライバルを出し抜いて<span className="whitespace-nowrap">集客</span>
            する方法？
          </h1>
          <div className="text-sm">
            <p>
              ここ Alizza Ideal の公式 Webサイトにアクセスしていただいた方に、
            </p>
            <h2 className="mt-0 text-2xl">
              「月刊・集客成功事例」最新号の電子書籍版を無料でプレゼント
            </h2>
            <div className="w-2/5 ml-2 mb-2 max-w-[320px] float-right">
              <Video
                src={offerimage}
                alt="月刊・集客成功事例・最新号"
                width={596 / 2}
                height={842 / 2}
                className="object-cover rounded-lg"
                controls
                muted
                autoPlay
                loop={true}
                controlsList="nodownload"
                playsInline={true}
                preload="auto"
              />
            </div>
            <ul className="list-outside ml-4 mt-0">
              <li>なぜか、集客がうまくいかない……</li>
              <li>SNSの更新に疲れた……</li>
              <li>クチこみサイトに掲載しているのに集客できない……</li>
              <li>お客がリピートしない……</li>
            </ul>
            <p>そんな悩みが頭にうかんだら……</p>
            <p>成功した集客のアイデアをまねしてください。</p>
            <p>
              「月刊・集客成功事例」では、 あなたのライバルが思いもしなかった、
              成果実証済みの集客アイデアを毎月10事例ずつ紹介しています。
            </p>
            <p>
              これらのアイデアを真似すれば、
              あなたもライバルを出し抜いて地域ナンバーワン店を目指すことも夢ではありません。
            </p>
            <p>
              Webサイト限定の無料プレゼント「月刊集客成功事例」PDFは、Eメールでお送りします。
            </p>
            <p>是非、目を通してどんなアイデアがあるか確認してください。</p>
            <div className="my-4 w-full">
              <AcceptOffer
                offer={{
                  title: "月刊集客成功事例",
                  url: offerdocument,
                  category: `集客成功事例`,
                  image: offerimage
                }}
              >
                <span className="text-sm md:text-md">今すぐ成功事例を読む</span>
              </AcceptOffer>
            </div>
          </div>
        </div>
        <div className="clear-both" />
      </section>
      {/* <!-- ===== Magnet End ===== --> */}
    </>
  )
}

export default Magnet
