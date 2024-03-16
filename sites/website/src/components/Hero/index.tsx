"use client"
import Image from "@/components/common/media"
import NextImage from "next/image"
import Link from "next/link"
import { useState } from "react"
import AcceptOffer from "@/components/common/acceptoffer"
import Subscribe from "@/components/common/subscribe"
import { gtag_report_conversion } from "@/lib/googleTag"
import SlideIn from "@/components/common/slidein"
import Magnet from "@/components/Magnet"

const SCHEDULE_TO_CALL: string = "https://meet.alizza-ideal.com"

const SoloPreneur = () => (
  <ruby>
    個人起業家
    <rp>(</rp>
    <rt>ソロプレナー</rt>
    <rp>)</rp>
  </ruby>
)
const 個人起業家 = () => <SoloPreneur />

const Hero = () => {
  return (
    <>
      <section id="first-view" className="overflow-hidden">
        <div className="flex flex-wrap w-full m-0 p-8 bg-sky-950">
          <div className="md:w-2/5">
            <h1 className="h3 text-3xl md:text-4xl text-justify font-medium mt-6 text-gold ">
              コーチ、コンサルタントの
              <個人起業家 />が
              <ruby>
                理想<rp>(</rp>
                <rt>IDEAL</rt>
                <rp>)</rp>
              </ruby>
              に向かってビジネスをドライブするためのビジネス・ドライビング・スクール
            </h1>
            <p className="text-lg text-white">
              <b className="text-gold">
                オンラインコース、ウェビナー、メールおよびリモート相談
              </b>
              を通じて、
              あなたのビジネスがコンマ２つある７桁以上の月商に拡大していくことを目指せる。
            </p>
            <div className="my-4 mx-auto">
              <Link href={SCHEDULE_TO_CALL}>
                <Subscribe className="text-lg md:text-sm py-4 px-6">
                  相談を予約
                </Subscribe>
              </Link>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-2/5 mx-auto mt-6 mb-4">
            <Image
              src="gs://story-made.appspot.com/images/hero/cars-output-short.gif"
              alt="enjoy driving"
              width={1024}
              height={576}
              className="object-cover mx-auto rounded-xl"
            />
          </div>
        </div>
        {/* <p>
            ほとんどの人々は、本当にコーチを必要としています。
            この困難な時代、多くの人が時間と日々の雑務に追われ、
            どうすれば困難を乗り越え、充実した人生を送れるのか知りたがっています。
            </p>
            <p>そこであなたの出番です。</p>
            <p>
            あなた自身が、すでに困難を克服した経験を持っており、
            提供できる知恵を持っているなら、その知恵を知りたがっている人々にとって、
            それは非常に価値があります。
            </p>
            <p>
            しかし、コーチとして起業しビジネスを成長させていけるのか不安なことでしょう。
            起業したばかりの他のコーチと同じように、あなたもこんな疑問を持っていることでしょう。
            </p>
            <ul>
            <li>新しいクライアントをどうやって見つければいいのか？</li>
            <li>信頼を得るために、どんな資格を得ればいいのか？</li>
            <li>どのようなメソッドをクライアントに提供すればいいのか？</li>
            <li>価格をいくらにすればいいのか？</li>
            <li>どのような「商品・サービス」を販売すればいいのか？</li>
            <li>
            自分のやり方が正しいかどうか迷ったとき、誰に相談すればいいのか？
            </li>
            <li>いつ、どのようにコーチとして起業すればいいのか？</li>
            </ul> */}
      </section>
    </>
  )
}

export default Hero
