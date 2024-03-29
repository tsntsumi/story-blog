"use client"
import { Image } from "@/components/common/media"
import NextImage from "next/image"
import Link from "next/link"
import { UpperArrow, RightArrow } from "@/components/common/link"
import { useState } from "react"
import AcceptOffer from "@/components/common/acceptoffer"
import Subscribe from "@/components/common/subscribe"
import { gtag_report_conversion } from "@/lib/googleTag"
import SlideIn from "@/components/common/slidein"
import {
  SoloPreneur,
  個人起業家,
  DrivingSchool
} from "@/components/common/logos"

const SCHEDULE_TO_CALL: string = "https://meet.alizza-ideal.com"

const Hero = () => {
  return (
    <>
      <section id="first-view" className="overflow-hidden mb-20">
        <div className="m-0 py-1 px-4 font-bold text-sm bg-gold text-black">
          起業する勇気と継続する力を応援する A
          <span className="text-xs">LIZZA</span> I
          <span className="text-xs">DEAL</span>
        </div>
        <div className="flex flex-wrap w-full max-w-c-1390 mx-auto text-justify m-0 p-4 pt-0 bg-sky-950 text-white">
          <div className="md:w-2/5">
            <h1 className="h3 text-2xl md:text-4xl text-justify font-medium text-gold ">
              コーチ、カウンセラー、セラピストが
              <span className="text-xl md:text-3xl">
                理想のゴールに向かってビジネスを
                <ruby>
                  ドライブして<rp>(</rp>
                  <rt>走らせて</rt>
                  <rp>)</rp>
                </ruby>
                いくための
              </span>
              ビジネス・ドライビング・スクール
            </h1>
            <h2 className="text-5xl m-4 text-white font-bold flex flex-wrap justify-between">
              <DrivingSchool />
            </h2>

            <p className="text-base text-white">
              <b className="text-gold">
                オンラインコース、ウェビナー、メール相談、リモート対面コーチング
              </b>
              を通じて、あなたの月商にコンマが２つ見える売上げを目指せる。
            </p>
            <div className="my-4 mx-auto">
              <Link href={SCHEDULE_TO_CALL}>
                <Subscribe className="text-lg md:text-sm py-3 px-6 mx-auto">
                  無料相談会をスケジュール
                </Subscribe>
              </Link>
            </div>
          </div>
          <div>
            <h3 className="mt-0 font-normal text-base bg-white rounded-md p-2">
              あなたのライバルがいないところで集客してみませんか？
            </h3>
            <p>
              SNSやポータルサイトの更新に疲れたときに読む本をPDFで差し上げてます。
            </p>
            <Link href={`/#lead-magnet`}>
              <Subscribe className="text-lg md:text-sm py-3 px-6 mx-auto my-4">
                今すぐもらう↓
              </Subscribe>
            </Link>
          </div>
          <div className="md:w-2/5 mx-2 flex flex-nowrap gap-4 items-start justify-around">
            <Image
              src="gs://story-made.appspot.com/images/hero/solopreneurs.gif"
              alt="solopreneurs"
              width={576 / 4}
              height={1024 / 4}
              className="object-cover rounded-lg"
            />
            <Image
              src="gs://story-made.appspot.com/images/hero/driving-to-goal.gif"
              alt="driving to ideal goal"
              width={576 / 4}
              height={1024 / 4}
              className="object-cover rounded-lg"
            />
          </div>
          <div className="my-4 mx-auto">
            <Link href={SCHEDULE_TO_CALL}>
              <Subscribe className="text-lg md:text-sm py-3 px-6 mx-auto">
                無料相談会をスケジュール
              </Subscribe>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
