"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import AcceptOffer from "@/components/common/acceptoffer"
import Subscribe from "@/components/common/subscribe"
import { gtag_report_conversion } from "@/lib/googleTag"
import SlideIn from "@/components/common/slidein"

const SCHEDULE_TO_CALL: string = "https://meet.alizza-ideal.com"

const Hero = () => {
  return (
    <>
      <section id="first-view" className="overflow-hidden">
        <div className="flex flex-col w-full m-0 p-0 bg-sky-950">
          <h1 className="h4 text-sm md:text-2xl text-justify font-medium rounded-full p-4 mt-2 text-btngold">
            コーチ・ヒーラー・治療家・セラピストが、より多くの人の悩みを解消し貢献し成長するための集客を実現する
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
          <h2 className="flex flex-wrap xl:flex-nowrap items-center justify-around mb-5 mx-4 text-lg md:text-2xl font-bold text-btngold">
            <div className="inline whitespace-nowrap">
              悩めるクライアントに見つけられ、選ばれ続ける
            </div>
            <div className="inline flex flex-wrap w-full items-center justify-center">
              <span>ネット集客　</span>
              <span className="text-5xl">導線確保</span>
              <span>　の仕組み</span>
            </div>
            <div className="inline whitespace-nowrap">を限定公開しています</div>
          </h2>
        </div>
        <div className="flex flex-nowrap my-4 gap-4 text-justify block">
          <div className="w-1/2 md:w-3/4">
            <SlideIn className="animate_left">
              <h3 className="mt-0 pt-0">
                導線を確保して集客に成功した事例集を無料進呈
              </h3>
              <div className="md:columns-2">
                <p className="indent-0">もしあなたが</p>
                <p>まだ、理想のクライアントに出会っていないなら、</p>
                <p>もっとたくさんのクライアントに貢献したいなら、</p>
                <p>より多くの貢献を通じてあなた自身も成長したいなら、</p>
                <p>そして、ご自身のビジネスも成長させていきたいなら、</p>
                <p>
                  あなたにピッタリあった集客の導線を確保して、多くの人を惹きつけよう
                </p>
                <p>
                  今すぐ、導線を確保して集客に成功した事例集を
                  無料でダウンロードしてください。
                </p>
              </div>
              <div className="my-4 w-full hidden md:block">
                <AcceptOffer>今すぐダウンロードする</AcceptOffer>
              </div>
            </SlideIn>
          </div>
          <div className="w-1/2 md:w-1/4 md:p-8">
            <SlideIn className="animate_right">
              <Image
                src="/images/hero/offer-ebook.png"
                alt="集客導線確保成功事例集 2024年03月号"
                width={596}
                height={842}
                className="object-cover w-full"
              />
            </SlideIn>
          </div>
        </div>
        <div className="my-4 w-full block md:hidden">
          <AcceptOffer>今すぐダウンロードする</AcceptOffer>
        </div>
        <div className="my-4">
          <Subscribe
            onClick={() => gtag_report_conversion(SCHEDULE_TO_CALL)}
            className="text-lg p-4"
          >
            <Link href={SCHEDULE_TO_CALL}>無料相談を予約</Link>
          </Subscribe>
        </div>
      </section>
    </>
  )
}

export default Hero
