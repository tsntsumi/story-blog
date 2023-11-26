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
              <div className="md:mb-4.5 text-base md:text-2xl font-medium text-black dark:text-white">
                ホームページすら持っていないのに、まさか、
              </div>
              <div className="mb-4.5 text-lg md:text-2xl font-medium text-black dark:text-white">
                Googleで検索１位が実現できるなんて……
              </div>
              <h1 className="mb-5 text-2xl md:text-3xl font-bold text-black dark:text-white xl:text-hero ">
                そんなこと
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  無理に
                </span>
                決まってる
              </h1>
              <div className="text-base md:text-2xl">
                って、私もそう思ってました……
              </div>
              <div className="text-base md:text-2xl">
                少なくとも、この現実を目にするまでは……
              </div>
              <div className="mb-6 mt-3 md:mt-6 text-base md:text-xl">
                でも、Googleが提供している、誰でも使える「ある無料ツール」を使うことで、彼らは
                <span className="font-black"> １位表示を実現</span>
                しただけでなく、
                <span className="font-black">こんな成果をいとも簡単に</span>
                手に入れてしまったのです。
              </div>

              <div className="flex flex-nowrap">
                <div className="bg-orange-100 py-2 rounded-l-xl md:rounded-xl text-sm md:text-2xl">
                  <div className="rounded-full text-white font-bold bg-orange-600 w-fit p-2 px-4 mx-3">
                    驚きの集客効果‼
                  </div>
                  <ul className="list-outside my-4 px-4">
                    <li className="text-sm md:text-base">
                      導入後１ヶ月で５０件のアクセス！
                      <div>２件の電話問い合わせ（印鑑・印章店）</div>
                    </li>
                    <li className="text-sm md:text-base">
                      導入３ヶ月ほどで毎週１件の電話問い合わせ！！
                      <div>
                        産業用中古機器販売：１取引あたり単価数百万〜数千万円
                      </div>
                    </li>
                    <li className="text-sm md:text-base">
                      導入後２１日間で３１回のアクセス！
                      ２件の問い合わせ（食品小売店）
                    </li>
                  </ul>
                </div>
                <div className="animate_right block w-2/5 md:hidden">
                  <div className=" relative aspect-[520/693] w-full">
                    <Image
                      className="shadow-solid-l dark:hidden rounded-tr-xl"
                      src={`/images/hero/gbp-setup-guide-light-half.png`}
                      alt="GBPビジネス情報設定ガイド"
                      unoptimized
                      fill
                    />
                    <Image
                      className="hidden shadow-solid-l dark:block bg-slate-200 rounded-tr-xl"
                      src={`/images/hero/gbp-setup-guide-dark-half.png`}
                      alt="GBPビジネス情報設定ガイド"
                      fill
                      unoptimized
                    />
                  </div>
                  <p className="my-2 mx-1 text-justify text-xs">
                    勉強会で使用するPDFは、LINEのお友だちに配布しています。
                  </p>
                  <div className="flex flex-wrap gap-5">
                    <Join>
                      <span className="text-xs">勉強する</span>
                    </Join>
                  </div>
                </div>
              </div>
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
                    src={`/images/hero/gbp-setup-guide-light.png`}
                    alt="GBPビジネス情報設定ガイド"
                    unoptimized
                    fill
                  />
                  <Image
                    className="hidden shadow-solid-l dark:block bg-slate-200"
                    src={`/images/hero/gbp-setup-guide-dark.png`}
                    alt="GBPビジネス情報設定ガイド"
                    fill
                    unoptimized
                  />
                </div>
                <p className="my-4 text-justify">
                  勉強会で使用するPDFは、LINEのお友だちに配布しています。
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
