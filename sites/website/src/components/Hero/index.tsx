"use client"
import { Image, Video } from "@/components/common/media"
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
        <div className="flex flex-nowrap items-start justify-arround w-full max-w-c-1390 mx-auto gap-4  font-bold text-xs bg-gold text-black rounded-t-lg m-0 py-1 px-2">
          <div className="md:w-2/5 m-0 p-0">
            起業する勇気と副業する覚悟を応援する{" "}
            <span className="text-base">
              A<span className="text-xs">LIZZA</span> I
              <span className="text-xs">DEAL</span>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-end justify-around w-full max-w-c-1390 mx-auto gap-4 m-0 p-4 bg-sky-950 text-white">
          <div className="md:w-2/5">
            <h1 className="h3 text-xl md:text-4xl text-justify font-medium text-gold ">
              <div className="text-white text-sm md:text-2xl">
                あなたの得意でコーチになる
              </div>
              <div className="text-white text-sm md:text-2xl">
                Alizza Ideal's Coaching School
              </div>
              コーチング・ビジネス教習所
            </h1>
            <div>
              <p className="text-base text-gold">
                <b className="text-white">
                  オンライン講座、テンプレート集、モチベーション維持支援
                </b>
                を通じて、コンマが２つの月商を目指せる
              </p>
            </div>
            <div>
              <Image
                src="gs://story-made.appspot.com/images/hero/CoachingToolbox_Toolbox_land.png"
                alt="Alizza Ideal's Coaching School -  コーチング・ビジネス教習所"
                width={1024 / 2}
                height={768 / 2}
                className="object-cover rounded-lg mx-auto"
              />
            </div>
            <div>
              <p className="text-sm">
                今なら、通常10,000円の「高収益コンテンツ制作ワークショップ」に無料で参加して、
                選ばれやすいあなたのオリジナルコンテンツを作れます
              </p>
              <Link href={`https://bit.ly/profitable-content-workshop`}>
                <Subscribe className="text-lg md:text-sm py-3 px-6 mx-auto my-4">
                  今すぐ参加
                </Subscribe>
              </Link>
            </div>
          </div>
          <div className="md:w-2/5">
            <div className="text-base">
              <p>
                ワークショップであなたの独自コンテンツを制作し、
                ７２時間の集客にもチャレンジしていただきます。
                もちろん、集客のアドバイスとテンプレートの提供もいたします。
              </p>
            </div>
            <div className="w-full">
              <Image
                src="gs://story-made.appspot.com/images/hero/CoachingToolbox_Althea_Workshop_land.png"
                alt="高収益コンテンツ制作無料ワークショップ＋７２時間集客チャレンジ"
                width={576}
                height={1024}
                className="object-cover mx-auto rounded-lg"
              />
            </div>
            <div className="text-base">
              <p>
                優秀な成果を出した方には、Alizza Ideal の有料サービス「
                <span className="text-gold">
                  Alizza Ideal コーチング・ビジネス教習所
                </span>
                」を、
                <span className="font-bold text-black bg-gold rounded-lg p-2 py-1 m-1">
                  無料で最大６ヶ月間
                </span>
                ご利用いただけます。
              </p>
            </div>
            <Link href={`https://bit.ly/profitable-content-workshop`}>
              <Subscribe className="text-lg md:text-sm py-3 px-6 mx-auto my-4">
                今すぐ参加
              </Subscribe>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
