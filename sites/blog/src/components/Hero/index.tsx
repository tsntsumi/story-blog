"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Join from "@/components/Join"

const Hero = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section
        id="hero"
        className="overflow-hidden py-8 pt-25 md:pb-40 xl:pb-25"
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:py-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2 md:mx-auto text-justify">
              <div className="h4 mb-4.5 text-2xl font-bold text-black dark:text-white border rounded-full p-1 px-4 mr-16 shadow-md shadow-amber-400">
                キャッチコピーの
                <span className="text-amber-600 text-3xl">錬金術</span>
              </div>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                もっと売上を伸ばしたい経営者が、
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  キャッチコピー
                </span>
                の錬金術で商品を輝かせ、群衆を集め続ける
              </h1>
              <div className="text-base md:text-xl my-8 w-full items-start justify-between">
                <p>今や、どんな経営者も悩んでいます。</p>
                <ul className="list-style-suffer pl-6">
                  <li className="list-style-happy">
                    素敵な商品、素晴らしいサービスはある、、、でも
                  </li>
                  <li>なぜかお客が集まらないと感じている</li>
                  <li>言い方が悪いのか、集客の方法が悪いのかわからない</li>
                  <li>自分の商品は簡単には説明できないと思っている</li>
                  <li>本業忙しいから、もっと簡単に集客できたらと考えている</li>
                  <li>パソコンが苦手で、ネットで集客するのをためらっている</li>
                </ul>
                <p>
                  あなたが、今そのように感じているのであれば、キャッチコピーの錬金術テンプレートを使って、商品の価値を明確に言語化すれば、その悩みを解決できます。
                </p>
              </div>

              <div className="mt-10">
                <Join>サービス説明をスケジュール</Join>
              </div>
            </div>

            <div className="animate_right hidden md:w-1/2 md:block">
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
                    alt="Hero"
                    unoptimized
                    width={720}
                    height={404}
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block object-cover"
                    src="/images/hero/alchemist-golden-red-packege.webp"
                    alt="Hero"
                    unoptimized
                    width={720}
                    height={404}
                  />
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
