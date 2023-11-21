"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Join from "../Join"

const Hero = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="overflow-hidden py-8 xl:pb-25">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex items-start lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2 md:mx-auto text-justify">
              <div className="h4 mb-4.5 text-lg font-medium text-black dark:text-white">
                Googleビジネスプロフィールを一緒に勉強しましょう。
              </div>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                検索上位表示でみんなが
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  集まるお店に
                </span>
              </h1>
              <h2 className="text-2xl">ありがとうございます。</h2>
              <p>このページにたどり着いてくれて、本当にありがとう。</p>
              <h3 className="text-xl">
                あなたがしていることは、素晴らしいことです
              </h3>
              <p>
                あなたが毎日しているのは、どんなことであろうと素晴らしいことなんです。
                なぜなら、あなたは
                <ruby>
                  専門家<rp>(</rp>
                  <rt>エキスパート</rt>
                  <rp>)</rp>
                </ruby>
                だからです。
              </p>
              <h3 className="text-xl">
                あなたが提供している最も価値のあるもの
              </h3>
              <p>
                あなたが経営している事業ではありません。販売している商品でもありません。
                サービスしていることでも、あなたが作っている最高の製品でもありません。
              </p>
              <p>それは、あなたの知っていること。つまり知識とスキルです。</p>
              <p>
                それこそが、あなたが今まで投資してきたなかで、もっとも価値のあるものなんです。
              </p>
              <p>
                血と汗を流しながら試練をかいくぐり、今あなたがいるその場所にたどり着くためにであった障害。
                経験しなければならなかったすべての障害こそ、あなたが投資してきたことで得た最高のものなんです。
              </p>
            </div>

            <div className="animate_right hidden md:w-1/2 md:block">
              <div className="relative 2xl:-mr-7.5">
                <Image
                  src="/images/shape/shape-01.png"
                  alt="shape"
                  width={46}
                  height={246}
                  unoptimized
                  className="absolute -left-11.5 top-0"
                />
                <Image
                  src="/images/shape/shape-02.svg"
                  alt="shape"
                  width={36.9}
                  height={36.7}
                  unoptimized
                  className="absolute bottom-0 right-0 z-10"
                />
                <Image
                  src="/images/shape/shape-03.svg"
                  alt="shape"
                  width={21.64}
                  height={21.66}
                  unoptimized
                  className="absolute -right-6.5 bottom-0 z-1"
                />
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden"
                    src="/images/hero/gbp-setup-guide-light.png"
                    alt="GBPビジネス情報設定ガイド"
                    unoptimized
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block bg-slate-200"
                    src="/images/hero/gbp-setup-guide-dark.png"
                    alt="GBPビジネス情報設定ガイド"
                    fill
                    unoptimized
                  />
                </div>
                <p className="my-4 text-justify">
                  LINEでお友だちになってPDFを読んで、
                  内容に納得がいったら参加表明して下さい。
                </p>
                <p>
                  真剣にGoogleビジネスプロフィールを学んで、
                  マジでお店を繁盛させたいという方の参加をお待ちしております。
                </p>
                <div className="flex flex-wrap gap-5">
                  <Join>一緒に勉強する</Join>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
