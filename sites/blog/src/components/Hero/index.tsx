"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Subscribe from "@/components/Common/Subscribe"

const Hero = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const OfferImage = () => {
    return (
      <div className="relative 2xl:-mr-7.5">
        <Image
          src="/images/shape/shape-01.png"
          alt="shape"
          width={46}
          height={246}
          className="absolute -left-11.5 top-0"
        />
        <Image
          src="/images/shape/shape-02.svg"
          alt="shape"
          width={36.9}
          height={36.7}
          className="absolute bottom-0 right-0 z-10"
        />
        <Image
          src="/images/shape/shape-03.svg"
          alt="shape"
          width={21.64}
          height={21.66}
          className="absolute -right-6.5 bottom-0 z-1"
        />
        <div className=" relative aspect-[720/404] w-full">
          <Image
            className="shadow-solid-l dark:hidden object-cover"
            src="/images/hero/alchemist-golden-packege.webp"
            alt="言語化できないパッケージが錬金術で黄金色に輝きだす"
            unoptimized
            width={720}
            height={404}
          />
          <Image
            className="hidden shadow-solid-l dark:block object-cover"
            src="/images/hero/alchemist-golden-red-packege.webp"
            alt="言語化できない商品を錬金術で黄金色に輝かせる"
            unoptimized
            width={720}
            height={404}
          />
          <p className="text-xs text-center">
            言語化できない商品を集客の錬金術で黄金色に輝かせる
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <section
        id="hero"
        className="overflow-hidden py-8 pt-25 md:pb-14 xl:pb-18"
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:py-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2 text-xl md:mx-auto text-justify">
              <h1 className="my-8 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                ほとんどの個人ビジネスには、人々を惹きつける
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  キャッチコピー
                </span>
                がありません
              </h1>
              <p>そのため、集客ができず資産を増やせていません。</p>
              <div className="animate_right block md:hidden">
                <OfferImage />
              </div>

              <div className="text-base md:text-xl my-8 w-full items-start justify-between">
                <h2 className="my-8 pr-16 text-2xl font-medium text-black dark:text-white xl:text-hero ">
                  アリザ・アイデアルでは、あなたの商品の
                  <span className="relative inline-block before:absolute before:bottom-2 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                    価値
                  </span>
                  から
                  <span className="relative inline-block before:absolute before:bottom-2 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                    キャッチコピー
                  </span>
                  を作るノウハウをお伝えしています
                </h2>
                <p>
                  この秘訣で作ったキャッチコピーがあれば、
                  あなたの商品が大勢に知られ、欲しがられ、
                  記憶に残るようになり、大勢の人々を集客できるようになります。
                </p>
                <p>
                  すでに欲しがっている人を集客するのですから、
                  売り込みもセールスもほとんど必要なくなります。
                </p>
                <p>
                  ということは、あなたの資産がどんどん増え続けて行くのです。
                </p>
              </div>
              <div className="text-base md:text-xl my-8 w-full items-start justify-between">
                <h3>
                  その秘密のノウハウが
                  <em className="text-amber-400 rounded-lg bg-black pl-2 pr-4 mx-1">
                    集客の錬金術
                  </em>
                  です
                </h3>
                <p>
                  <em className="font-black pr-1">集客の錬金術</em>
                  は、こんな人におすすめです。
                </p>
                <ul className="list-style-suffer pl-6">
                  <li>商品やサービスの良さに自信はある、、、でも</li>
                  <li>なぜかお客が集まらないと感じている</li>
                  <li>あなたの商品の良さは、一言で説明できないと信じている</li>
                  <li>国語力がないから商品をうまく説明できないと思っている</li>
                  <li>値引きしないと買ってくれなくなると心配している</li>
                  <li>月末になると、いつも支払いに怯えている</li>
                  <li>貯金がどんどん減っていくので通帳を見るのが怖い</li>
                </ul>
                <p>
                  これらの悩み、
                  <em className="font-black pr-1">集客の錬金術</em>
                  を知れば、すべて解決します。
                </p>
                <h4>集客の錬金術を知ることで・・・</h4>
                <p>
                  大勢の人々を
                  <ruby>
                    注目させ<rp>(</rp>
                    <rt>Awear</rt>
                    <rp>)</rp>
                  </ruby>
                  、
                  <ruby>
                    興味を持たせ<rp>(</rp>
                    <rt>Interest</rt>
                    <rp>)</rp>
                  </ruby>
                  、
                  <ruby>
                    欲しがらせ<rp>(</rp>
                    <rt>Desire</rt>
                    <rp>)</rp>
                  </ruby>
                  、
                  <ruby>
                    憶えさせ<rp>(</rp>
                    <rt>Memory</rt>
                    <rp>)</rp>
                  </ruby>
                  られるようになるキャッチコピーを作れるようになります。
                </p>
                <h4>欲しがってる人を集客できたとしたら・・・</h4>
                <p>
                  あなたの商品・サービスに興味があって欲しがっている人々が
                  集客できたとしたら、どうでしょうか？
                </p>
                <p>
                  売り込みも、セールスも、値引きもほとんどする必要がなくなり、
                  あなたの商品の<b>価値</b>を適切な<b>価格</b>と<b>等価交換</b>
                  できるようになりますよね。
                </p>
                <p>その結果、あなたの資産はどんどん増え続けていきます。</p>
                <h4>それは簡単なコツに気づくだけ・・・</h4>
                <p>
                  しかも、それが<b>すでにあなたの知っている、 ある簡単なコツ</b>
                  に気づくだけで出来るとしたらどうでしょうか？
                </p>
                <p>試してみたいと思いませんか？</p>
                <div className="mt-6 w-fit mx-auto">
                  <Subscribe>集客の錬金術情報を手に入れる</Subscribe>
                </div>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 md:block">
              <OfferImage />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
