"use client"
import { Image, Video } from "@/components/Assets/media"
import NextImage from "next/image"
import Link from "next/link"
import { UpperArrow, RightArrow } from "@/components/Assets/link"
import { useState } from "react"
import AcceptOffer from "@/components/Assets/acceptoffer"
import Subscribe from "@/components/Assets/subscribe"
import SlideIn from "@/components/Assets/slidein"
import {
  SoloPreneur,
  個人起業家,
  DrivingSchool
} from "@/components/Assets/logos"

const SCHEDULE_TO_CALL: string = "https://cal.alizza-ideal.com"

const Hero = () => {
  const workshopIsVisible: boolean = false
  const workshopVisiblity: string = workshopIsVisible ? "" : "hidden"
  const columnWidth: string = workshopIsVisible ? "md:w-2/5" : "md:w-full"
  return (
    <>
      <section id="first-view" className="overflow-hidden mb-10">
        <div className="flex flex-nowrap items-start justify-arround w-full max-w-c-1390 mx-auto gap-4  font-bold text-xs bg-gold text-black md:rounded-t-lg m-0 py-1 px-2">
          <div className="md:w-2/5 m-0 p-0 mx-auto">
            起業する勇気と副業する覚悟を応援する{" "}
            <span className="text-base">
              A<span className="text-xs">LIZZA</span> I
              <span className="text-xs">DEAL</span>
            </span>
          </div>
        </div>
        <div className="flex flex-wrap items-end justify-around w-full max-w-c-1390 mx-auto gap-4 m-0 p-4 bg-sky-950 text-white">
          <div className={`${columnWidth}`}>
            <h1 className="h3 text-xl md:text-4xl text-justify font-medium text-gold ">
              <div className="text-white text-sm md:text-2xl">
                あなたの得意で<span className="text-gold">選ばれる</span>
                コーチになる
              </div>
              <div className="text-white text-sm my-1 md:text-xl">
                Alizza Ideal&apos;s Coaching School of Business
              </div>
              コーチング・ビジネス
              <span className="whitespace-nowrap">教習</span>
              <span className="whitespace-nowrap">センター</span>
            </h1>
            <div className="text-base text-white mb-2">
              コーチングの、独自性の出し方、標準価格設定、
              クライアント集客技法、プレゼン技術を学び、
              時間も収入も豊かなコーチを目指せる
            </div>
            <div>
              <Image
                src="gs://story-made.appspot.com/images/hero/CoachingToolbox_Toolbox_land.png"
                alt="Alizza Ideal's Coaching School of Business -  コーチング・ビジネス教習センター"
                width={640}
                height={453}
                className="object-cover rounded-lg mx-auto"
              />
            </div>
          </div>
          {workshopIsVisible && (
            <>
              <div>
                <p className="text-sm">
                  今なら、通常10,000円の
                  <b className="text-gold text-base">
                    「高収益コンテンツ制作ワークショップ」
                  </b>
                  に無料で参加して、
                  選ばれやすいあなたのオリジナルコンテンツを作れます
                </p>
                <Link href={`https://bit.ly/profitable-content-workshop`}>
                  <Subscribe className="text-lg md:text-sm py-3 px-6 mx-auto my-4">
                    今すぐ参加
                  </Subscribe>
                </Link>
              </div>
              <div className={`${columnWidth}`}>
                <div className="text-base">
                  <p>
                    ワークショップであなたの独自コンテンツを制作し、
                    ７２時間の集客にもチャレンジしていただきます。
                    もちろん、集客・プレゼン・成約のサポートもいたします。
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
            </>
          )}
        </div>
      </section>
    </>
  )
}

export default Hero
