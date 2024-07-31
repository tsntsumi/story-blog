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
      <section id="lead-magnet" className="p-0 m-0 mb-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <h1 className="mt-0 pt-12 pb-4">
            <span className="text-base">Webサイト限定プレゼント：</span>
            <br />
            ライバルを出し抜いて集客する方法？
          </h1>
          <div className="text-sm">
            <h2 className="mt-0 text-2xl">
              Alizza Ideal の月刊集客成功事例集・最新号PDFを無料でプレゼント
            </h2>
            <div className="w-2/5 ml-2 mb-2 max-w-[320px] float-right">
              <Video
                src={offerimage}
                alt="月刊集客成功事例集"
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
            <ul className="list-outside ml-0 mt-0">
              <li>なぜか、集客がうまくいかない……</li>
              <li>SNSの更新に疲れた……</li>
              <li>ホットペッパーや食べログに登録しているのに集客できない……</li>
              <li>ホットペッパーから来たお客がリピートしない……</li>
            </ul>
            <p>そんなことが頭をよぎったら……</p>
            <p>
              「月刊集客成功事例集」では、
              集客に成功した奇想天外なアイデアを紹介しています。
            </p>
            <p>
              これらのアイデアを真似すれば、
              あなたもライバルを出し抜くことだって夢ではありません。
            </p>
            <h3 className="text-2xl">読んだら、真似してやってみよう</h3>
            <p>読んだだけでは、成功しません。</p>
            <p>
              ホームランを打ってから打席に立とうと考えている人が大勢います。
            </p>
            <p>
              でも、ホームランを打つ最も可能性の高い方法は、まず打席に立つことです。
              打席に立たなければホームランを打つ可能性はゼロです。
            </p>
            <p>
              自信がつくまで待つ必要はありません。
              打席に立つだけなら、覚悟を決めさえすればいいんです。
              打席に立ったあなたには、もう無限大の可能性しかありません。
            </p>
            <p>
              みんな打席に立つことを怖がっています。
              空振りして笑われないかと心配してるんです。
            </p>
            <p>
              でもみんなが怖がっている中なら、打席に立つだけで称賛されるべきです。
            </p>
            <p>
              無料プレゼントの月刊集客成功事例集PDFは、Eメールでお送りします。
              是非目を通してどんなアイデアがあるか確認してください。
            </p>
            <div className="my-4 w-full">
              <AcceptOffer
                offer={{
                  title: "月刊集客成功事例集",
                  url: offerdocument,
                  category: `集客成功事例`,
                  image: offerimage
                }}
              >
                今すぐ読む
              </AcceptOffer>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Magnet
