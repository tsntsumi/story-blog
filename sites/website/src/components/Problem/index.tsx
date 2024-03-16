"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideIn from "@/components/common/slidein"
import Subscribe from "@/components/common/subscribe"

const SCHEDULE_TO_CALL: string = "https://meet.alizza-ideal.com"

const items: string = [
  "クライアントのサポートに使うメソッド、カリキュラム、コンテンツの作成",
  "効果的に集客するマーケティングメソッドの習得",
  "高単価で契約してくれるクライアントに出会い、継続させる方法の学習",
  "自分のビジネスに対する情熱と、意欲と、才能への確信"
]

const SoloPreneur = () => (
  <ruby>
    個人起業家
    <rp>(</rp>
    <rt>ソロプレナー</rt>
    <rp>)</rp>
  </ruby>
)

const Problem = () => {
  return (
    <>
      <section id="problem" className="pt-20 lg:pt-25 xl:pt-30">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 mb-8">
          <h1 className="mb-2 text-3xl">
            個人起業家が、自分の知識と経験とスキルで貢献する収益性の高いビジネスを構築する道には、
            ゴールまでに舗装されていない悪路や山や谷が待ち受けています
          </h1>
          <SlideIn className="animate_right">
            <div className="w-full mt-8 mb-4 text-4xl text-center">
              もうこれらの準備はすんでますか？
            </div>
          </SlideIn>
          <SlideIn className="animate_left">
            <div className="flex flex-wrap w-full justify-start mb-8">
              {items.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-nowrap items-center w-1/2 text-justify"
                >
                  <Image
                    src="/images/icon/check-sign-icon.svg"
                    width={38}
                    height={38}
                    alt=""
                  />
                  <div className="m-2 p-0 px-2 ovreflow-hidden ">
                    <div>{item}</div>
                  </div>
                </div>
              ))}
            </div>
          </SlideIn>
          <p>
            あなたにはもう、コーチになるための専門知識、情熱、意欲があります。
            しかし、計画がなければ、ビジネスを継続するのに十分な燃料は得られません。
          </p>
          <p>
            <SoloPreneur />
            ビジネス・ドライビング・トレーニングは、
            コーチ、コンサル、セラピストとしての豊富なキャリアを積み上げるための計画と、
            計画を着実にできていると確信できるだけのサポートを提供します。
          </p>
          <div className="my-4 mx-auto">
            <Link href={SCHEDULE_TO_CALL}>
              <Subscribe className="text-xs md:text-sm py-4 px-6">
                相談を予約
              </Subscribe>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Problem
