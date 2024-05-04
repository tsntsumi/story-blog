import React from "react"
import { Video } from "@/components/common/media"
import Link from "next/link"
import SlideIn from "@/components/common/slidein"
import AcceptOffer from "@/components/common/acceptoffer"
import { motion } from "framer-motion"

const Magnet = () => {
  const offerimage =
    "gs://story-made.appspot.com/videos/hero/alizzas-sales-funnel-newsletter.mp4"
  const offerdocument =
    "https://drive.google.com/file/d/1i61L4gQ6fCQ3eSfogX6FTTU8892BMjUp/view?usp=sharing"
  return (
    <>
      {/* <!-- ===== Magnet Start ===== --> */}
      <section id="lead-magnet" className="p-0 m-0 mb-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <h1 className="mt-0 pt-12 pb-4 text-xl">
            ライバルを出し抜いて集客する方法を知りたくありませんか？
          </h1>
          <div className="flex flex-row gap-4">
            <div className="bias-3/5 text-sm">
              <h2 className="mt-0 text-base">
                月刊集客導線確保成功事例集最新号を差し上げます
              </h2>
              <p>
                あなたは、SNSやポータルサイトで集客しているのでしょうか。
                しかし、そこには多くのライバルがひしめいています。
              </p>
              <p>
                でももし、違う場所からお客さんをつれてくる導線を作れたとしたら、
                あなたのビジネスはどうなるでしょうか。
              </p>
              <p>
                きっとたくさんの人々を集客できるようになり、
                クライアントに貢献できるように成ると思いませんか？
              </p>
              <p>
                月刊集客導線確保成功事例集では、成功したアイデア紹介しています。
                あなたもその中のアイデアを真似すれば、 成功も夢ではなくなります
              </p>
            </div>
            <div className="bias-2/5 max-w-[320px] max-h-[320px]">
              <Video
                src={offerimage}
                alt="集客導線確保成功事例集"
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
          </div>
          <h3>読んだら、真似してやってみよう</h3>
          <p>
            ゴールに近づく最も確実な方法は、はじめの一歩を踏み出すことです。
            すぐに真似してください。
          </p>
          <p>あなたの理想のゴールはどこですか？</p>
          <div className="my-4 w-full">
            <AcceptOffer
              offer={{
                title: "集客導線確保成功事例集",
                url: offerdocument,
                category: `導線確保成功事例集`
              }}
            >
              今すぐ読む
            </AcceptOffer>
          </div>
        </div>
      </section>
      {/* <!-- ===== Magnet End ===== --> */}
    </>
  )
}

export default Magnet
