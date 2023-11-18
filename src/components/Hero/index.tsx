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
      <section className="overflow-hidden pb-8 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:py-0">
          <div className="flex lg:items-center lg:gap-8 xl:gap-32.5">
            <div className="md:w-1/2 md:mx-auto text-justify">
              <div className="h4 mb-4.5 text-lg font-medium text-black dark:text-white">
                🧲ホームページにお客が集まるだけで満足してますか？
              </div>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                集まった人々を顧客に
                <ruby>
                  変える<rp>(</rp>
                  <rt>コンバージョンさせる</rt>
                  <rp>)</rp>
                </ruby>
                セールスホームページを
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  構築
                </span>
              </h1>
              <p>ほとんどのホームページには、足りないものがあります。</p>
              <p>
                それは、あなたのホームページを訪れた人を、欲しがらせ、注文させ、顧客にする仕組みです。
              </p>
              <p>
                その仕組み、ストーリー・セールスファネルの仕組みで、あなたのホームページを構築すれば、
                ２４時間３６５日、あなたがお客さんにサービスしている間に、
                ホームページが注文を取り続けます。
                もちろん、あなたが寝ている間でさえも。
              </p>
              <p>
                一度構築してしまえば、あなたが本来やりたかったお客さんへのサービスに集中できるようになります。
              </p>

              <div className="mt-10">
                <div className="flex flex-wrap gap-5">
                  <Join>一緒に始めましょう</Join>
                </div>
                <p>
                  Alizza Idealのストーリーセールス公式LINEアカウントで、
                  お友だちになってください。
                </p>

                <p className="mt-5 text-black dark:text-white"></p>
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
                <div className=" relative aspect-[700/444] w-full">
                  <Image
                    className="shadow-solid-l dark:hidden object-cover"
                    src="/images/hero/buying.webp"
                    alt="Hero"
                    unoptimized
                    width={700}
                    height={444}
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block object-cover"
                    src="/images/hero/buying.webp"
                    alt="Hero"
                    unoptimized
                    width={700}
                    height={444}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="overflow-hidden px-4 py-2 md:px-8 2xl:px-12">
          <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark xl:py-0 mx-0 md:mx-8">
            <div className="flex flex-nowrap gap-2 text-justify sm:flex-nowrap md:items-center justify-start">
              <div className="h-full p-0 min-w-[120px] md:min-w-[180px] m-0 relative">
                <Image
                  alt="ご提案"
                  src="/images/shape/offer-01-small.png"
                  width={300}
                  height={240}
                  className="object-cover m-0 rounded-tl-lg md:rounded-l-lg"
                />
                <Image
                  src="https://qr-official.line.me/gs/M_259nufef_GW.png?oat__id=3206600&oat_content=qr"
                  className="mx-auto w-1/3 max-w-[80px] min-w-[40px] bottom-[6px] right-[6px] absolute"
                  alt="LINE QR"
                  width={128}
                  height={128}
                />
              </div>
              <div className="mx-2 md:mx-6 lg:mx-10 xl:mx-12">
                <p>
                  365日24時間、働いてる間も、寝てる間も売れ続けるLP型のHP
                  Webサイトテンプレートをプレゼント中。
                  LINEでお友だちになって売れるLP型HPを作り始めよう。
                  <a
                    data-v-6fa6a74a=""
                    href="https://lin.ee/dIMYuwu"
                    className="p-1.5 pb-2 inline bg-white rounded"
                  >
                    <Image
                      data-v-6fa6a74a=""
                      src="/images/icon/line-add-friend-ja.png"
                      alt="友だちになる"
                      className="w-[80px] inline"
                      width="92"
                      height="32"
                    />
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Hero
