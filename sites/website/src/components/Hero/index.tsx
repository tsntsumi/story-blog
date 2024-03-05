"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import AcceptOffer from "@/components/common/acceptoffer"
import Subscribe from "@/components/common/subscribe"
import { gtag_report_conversion } from "@/lib/googleTag"
import SlideIn from "@/components/common/slidein"
import Magnet from "@/components/Magnet"

const SCHEDULE_TO_CALL: string = "https://meet.alizza-ideal.com"

const Hero = () => {
  return (
    <>
      <section id="first-view" className="overflow-hidden">
        <div className="flex flex-col w-full m-0 p-0 bg-sky-950">
          <h1 className="h4 text-sm md:text-2xl text-justify font-medium rounded-full p-4 mt-2 text-gold">
            コーチ・ヒーラー・治療家・セラピストが、より多くの人に貢献するための集客の仕組み
          </h1>
          <Image
            src="/images/hero/jumping.jpg"
            width={1366}
            height={382}
            alt="Jumping happy kids"
            className="w-full object-fill hidden md:block"
          />
          <Image
            src="/images/hero/jumping-6kids.jpg"
            width={1168}
            height={382}
            alt="Jumping happy kids"
            className="w-full object-fill hidden"
          />
          <Image
            src="/images/hero/jumping-5kids.jpg"
            width={923}
            height={382}
            alt="Jumping happy kids"
            className="w-full object-fill block md:hidden"
          />
          <h2 className="flex flex-wrap items-center justify-center mb-5 mx-4 text-lg md:text-2xl font-bold text-gold">
            <div className="text-base">この困難な時代に、</div>
            <div className="inline-block text-base">他人の役に立とうとする</div>
            <div className="inline-block text-base">
              あなたの素晴らしいサービスが、
            </div>
            <div className="inline-block text-base">
              悩めるクライアントに見つけられ、
            </div>
            <div className="inline-block text-base">選ばれ続ける</div>
            <div className="inline flex flex-wrap w-full items-center justify-center">
              <span>ネット集客　</span>
              <span className="text-5xl">導線確保</span>
              <span>　の仕組み</span>
            </div>
            <div className="inline whitespace-nowrap">限定公開中</div>
          </h2>
        </div>
        <Magnet />
        <div className="my-4">
          <Subscribe
            onClick={() => gtag_report_conversion(SCHEDULE_TO_CALL)}
            className="text-xs md:text-sm py-4 px-6"
          >
            <Link href={SCHEDULE_TO_CALL}>無料相談を予約する</Link>
          </Subscribe>
        </div>
      </section>
    </>
  )
}

export default Hero
