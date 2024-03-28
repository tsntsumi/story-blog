"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideIn from "@/components/common/slidein"
import Subscribe from "@/components/common/subscribe"
import { SoloPreneur, DrivingSchool } from "@/components/common/logos"

const SCHEDULE_TO_CALL: string = "https://meet.alizza-ideal.com"

const items: string[] = [
  "クライアントのサポートに使うメソッド、カリキュラム、コンテンツの作成",
  "効果的に集客するためのマーケティングメソッドの習得",
  "高単価で契約してくれるクライアントに出会い、継続させる方法の学習",
  "ビジネスに対する自分の情熱と、意欲と、才能への確信"
]

const Problem = () => {
  return (
    <>
      <section id="problem" className="pt-0 mt-0 mb-20">
        <div className="mx-auto max-w-c-1390 text-justify px-4 md:px-8 2xl:px-0 text-sm md:text-base">
          <h1 className="my-2 text-xl md:text-3xl">
            <div>
              ほとんどの個人起業家は、人のお役に立てる素晴らしいビジネスをしています。
            </div>
            <div className="my-2">
              にもかかわらず、高収益のビジネスの仕組みを構築する方法を知りません。
            </div>
          </h1>
          <SlideIn className="animate_right">
            <div className="w-full mt-8 mb-4 text-4xl text-center">
              もうこの準備は
              <div className="inline-block">できてますか？</div>
            </div>
          </SlideIn>
          <div className="columns-2 gap-4 m-8 md:m-8 text-sm md:text-base bg-gold text-darkgold rounded-xl">
            {items.map((item, i) => (
              <div key={i} className="p-4">
                <div className="flex flex-nowrap items-start justify-start">
                  <Image
                    src="/images/icon/check-sign-icon.png"
                    alt=""
                    width={28}
                    height={28}
                    className="object-none "
                  />
                  <div className="mx-4">{item}</div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8">
            あなたにはすでに、コーチになるための専門知識、情熱、意欲があります。
            しかし、計画がないのなら、ビジネスを継続させるのに必要な燃料を補充できなくなります。
          </p>
          <p>
            途中で燃料がなくなれば、理想のゴールにたどりつけないだけではありません。
            あなたの大切な人も道連れになってしまいます。
            その上、これまでお役に立ってきたクライアントの将来も危ぶまれます。
          </p>
          <p>
            ここで言う燃料、つまり車で言うガソリンとは、ビジネスで言えば収益です。
          </p>
          <div className="my-8">
            <div className="rounded-xl bg-sky-950 p-4 text-white mb-2 w-fit mx-auto">
              <span className="text-gold"> Alizza Ideal の</span>{" "}
              <DrivingSchool />
            </div>
            は、 あなたが、コーチ、ヒーラー、セラピスト、コンサルタントとしての
            豊富なキャリアを積み上げるための計画と、
            着実にゴールに向かっていると確信できるだけのサポートを提供します。
          </div>
          <div className="my-4 mx-auto">
            <Link href={SCHEDULE_TO_CALL}>
              <Subscribe className="text-xs md:text-sm py-4 px-6 mx-auto">
                無料相談会をスケジュール
              </Subscribe>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Problem
