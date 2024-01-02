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
              <div className="h4 mb-4.5 text-xl md:text-2xl font-bold text-black dark:text-white border rounded-full p-1 px-8 mr-16 shadow-md shadow-amber-400">
                <div className="text-lg md:text-xl">
                  商品の魅力を黄金の輝きに変える
                </div>
                集客の
                <span className="text-amber-600 text-2xl md:text-3xl font-serif font-black">
                  錬金術
                </span>
              </div>
              <div className="mb-3 mt-6 text-2xl font-bold text-black dark:text-white">
                あなたが集客できないのは、商品の魅力を簡潔明瞭に言語化できていないのが原因です……
              </div>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                集客の
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  錬金術
                </span>
                で魅了するキャッチコピーを作り、群衆を惹きつけ続けましょう
              </h1>
              <div className="text-base md:text-xl my-8 w-full items-start justify-between">
                <ul className="list-style-suffer pl-6">
                  <li className="list-style-happy">
                    商品やサービスに自身はある、、、でも
                  </li>
                  <li>なぜかお客が集まらないと感じている</li>
                  <li>商品を説明する国語力がないと思っている</li>
                  <li>自分の商品は簡単には説明できないと信じている</li>
                  <li>お客の目線で説明しているのに、自慢話ウザいと言われた</li>
                </ul>
                <p>
                  もしあなたが、そのように感じているのであれば、集客の錬金術のキャッチコピー・テンプレートに当てはめて、商品の価値を言語化してください。
                </p>
                <p>
                  言語化して、一瞬で「コレ欲しい！」と思わせられれば、
                  ネットでもチラシでもＰＯＰでも、集客できるようになり、
                  あなたの資産が増え続けていきます。
                </p>
              </div>

              <div className="mt-10">
                <Join>
                  <div className="grid grid-cols-1 justify-center">
                    <div className="text-sm mx-auto">集客の錬金術って何？</div>
                    <div>知るためのスケジュールをおさえる</div>
                  </div>
                </Join>
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
                    alt="言語化できていないパッケージを錬金術で黄金の輝きに変える"
                    unoptimized
                    width={720}
                    height={404}
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block object-cover"
                    src="/images/hero/alchemist-golden-red-packege.webp"
                    alt="言語化できていないパッケージを錬金術で黄金の輝きに変える"
                    unoptimized
                    width={720}
                    height={404}
                  />
                  <p className="text-xs text-center">
                    言語化できていないパッケージを集客の錬金術で黄金の輝きに変える
                  </p>
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
