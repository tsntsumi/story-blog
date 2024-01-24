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

  const 集客の錬金術 = () => (
    <strong className="rounded-full m-1 p-2 py-1 bg-slate-600 text-amber-300 dark:text-amber-600">
      集客の錬金術
    </strong>
  )

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
        <div className=" relative aspect-[720/404] w-full justify-center">
          <figure className="w-full">
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
            <figurecaption className="text-xs text-center">
              言語化できない商品を集客の錬金術で黄金色に輝かせる
            </figurecaption>
          </figure>
        </div>
      </div>
    )
  }

  return (
    <>
      <section
        id="hero"
        className="overflow-hidden py-4 pt-10 md:pt-35 md:pb-14 xl:pb-18"
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:py-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2 text-lg md:mx-auto text-justify">
              <h1 className="text-base">
                <集客の錬金術 />
                で、あなたの商品をゴールドのように輝かせる
              </h1>
              <h2 className="my-8 pr-16 text-xl font-bold text-black dark:text-white xl:text-hero ">
                <span className="whitespace-nowrap"> みんなが欲しがる</span>
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:rounded-full before:bg-amber-200 dark:before:bg-amber-600 ">
                  売れる
                </span>
                <span className="whitespace-nowrap"> キャッチコピー</span>
                を言語化
              </h2>
              <p>
                みんなを欲しがらせるキャッチコピーを言語化できれば、
                あなたの商品を<strong>自然と買わせる</strong>
                ことができるようになります。
              </p>
            </div>

            <div className="animate_right md:w-1/2">
              <OfferImage />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
