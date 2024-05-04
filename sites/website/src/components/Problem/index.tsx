"use client"
import React from "react"
import NextImage from "next/image"
import { Image, Video } from "@/components/common/media"
import Link from "next/link"
import SlideIn from "@/components/common/slidein"
import Subscribe from "@/components/common/subscribe"
import {
  SoloPreneur,
  CoachingToolbox,
  DrivingSchool
} from "@/components/common/logos"
import SpecialOffer from "@/components/common/specialoffer"

const SCHEDULE_TO_CALL: string = "https://meet.alizza-ideal.com"

const items: string[] = [
  "クライアントのサポートに使うメソッド、カリキュラム、コンテンツの作成",
  "クライアントの興味をそそるコンセプトの設計と集客導線の構築",
  "高単価で契約してくれるクライアントに出会い、継続させるマーケティング",
  "コーチングに対する情熱と、意欲と、覚悟"
]

const Problem = () => {
  return (
    <>
      <section id="problem" className="pt-0 mt-0 mb-20">
        <div className="mx-auto max-w-c-1390 text-justify px-4 md:px-8 2xl:px-0 text-sm md:text-base">
          <h1 className="my-2 text-xl md:text-3xl">
            <div>
              コーチング・ビジネスは、クライアントの理想実現に貢献する素晴らしいお仕事です。
            </div>
            <div className="my-2">
              そんな重要な仕事にもかかわらず、ほとんどのコーチは高収益の仕組みを構築出来ていません。
            </div>
          </h1>
          <SlideIn className="animate_right">
            <div className="w-full mt-8 mb-4 text-4xl text-center">
              あなたは、もうこの準備は
              <div className="inline-block">できてますか？</div>
            </div>
          </SlideIn>
          <div className="bg-sky-950 p-4 text-gold rounded-xl">
            <div className="flex flex-wrap">
              {items.map((item, i) => (
                <div key={i} className="p-4 m-0 w-1/2 flex flex-nowrap">
                  <div className="m-0 p-0 pt-1">
                    <NextImage
                      src="/images/icon/check-sign-icon.png"
                      alt="check-sign"
                      width={28}
                      height={28}
                      className="object-none"
                    />
                  </div>
                  <div className="mx-4 text-2xl mt-0 w-full">{item}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mt-4">
            <div className="flex flex-wrap items-start justify-between w-full max-w-c-1390 mx-auto m-0 p-0">
              <div className="md:w-1/2 p-4">
                <h2>コーチングに必要なのは、コーチング能力だけではない</h2>
                <p>
                  あなたがコーチになろうとしているなら、すでにコーチングする分野の専門知識、
                  情熱、意欲はもう十分です。
                </p>
                <p>
                  しかし、まだビジネスのコンセプト、コンテンツ、見込み客がないとしたら、
                  継続していくのに必要な燃料が、すぐに補充できなくなってしまいます。
                </p>
                <h2>あなたは、あなたのビジネスの主役ではない</h2>
                <p>
                  コーチング・ビジネスの主役はあなたではありません。
                  あなたのクライアントが主役です。
                </p>
                <p>
                  映画で例えるなら、あなたはスター・ウォーズのオビ=ワンやヨーダ、
                  ロード・オブ・ザ・リングのガンダルフ、
                  オズの魔法使いの、北の良い魔女です。
                </p>
                <p>
                  つまり、あなたはあなたのビジネスの主役ではありません。
                  クライアントが主役です。
                  あなたは、クライアントにとっての魔法使いです。
                </p>
                <p>
                  クライアントに、進むべき正しい道へ導き、
                  ゴールへ歩いていくための知恵と勇気を与える役です。
                </p>
              </div>
              <div className="md:w-1/2 p-4">
                <h2>コーチング・ビジネスに必要なもの</h2>
                <p>ゴールまでの旅を続けるには、そのための燃料が必要です。</p>
                <p>
                  車で言えば<b>ガソリン</b> です。 あなたで言えば
                  <b>情熱とモチベーション</b> です。 ビジネスでいえば
                  <b>収益</b> です。
                </p>
                <p>
                  旅の途中で燃料がなくなれば、ガソリンが、情熱が、モチベーションが、お金がなくなれば、
                  先に進めなくなってしまいます。
                </p>
                <p>
                  あなたがいなくなったら、クライアントの人生はどうなってしまうでしょうか。
                  やはり、ゴールにたどり着けなくなります。
                </p>
                <h2>あなただって旅をしている</h2>
                <p>
                  あなたが守ってあげたかった大切な人だって、
                  人生の迷子になってしまいます。
                  あなたと一緒に旅をすることができなくなります。
                  離れ離れになってしまうかもしれません。
                </p>
                <p>
                  Alizza Ideal's Coaching School
                  （コーチング・ビジネス教習所）は、
                  あなたが、コーチとしてキャリアを築いていくために必要な
                  学びと訓練とアドバイスをする教習所です。
                </p>
                <p>
                  あなたが、クライアントや大切な人と一緒に、
                  人生のゴールに向かって安全に安心して安定した歩みで旅をするためのサポートをします。
                </p>
                <p>
                  わたしをあなたのヨーダだと思って下さい。希望を信じて一緒に旅を続けましょう。
                </p>
              </div>
              <div className="w-full">
                <Image
                  src="gs://story-made.appspot.com/images/hero/CoachingToolbox_Toolbox_land.png"
                  alt="Alizza Ideal コーチング・スクール"
                  width={1024}
                  height={768}
                  className="object-cover rounded-lg my-4 mx-auto"
                />
              </div>
            </div>
            <div className="text-center">
              <p className="w-full text-justify md:w-2/3 mx-auto">
                今なら通常10,000円の「高収益コンテンツ制作ワークショップ」に無料で参加して、
                あなたのオリジナルコンテンツを制作し、クライアントの獲得もできます。
              </p>
              <Link href={`https://bit.ly/profitable-content-workshop`}>
                <Subscribe className="text-lg md:text-sm py-3 px-6 mx-auto my-4">
                  今すぐ参加
                </Subscribe>
              </Link>
            </div>
            {/* <div>
                  <Video
                  src="gs://story-made.appspot.com/videos/hero/driving-to-goal-small.mp4"
                  alt="driving to ideal goal"
                  width={576}
                  height={1024}
                  className="object-cover rounded-lg my-8"
                  controls
                  muted
                  autoPlay
                  loop={true}
                  controlsList="nodownload"
                  playsInline={true}
                  preload="auto"
                  />
                  </div> */}
            <div className="w-full my-4">
              <SpecialOffer />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Problem
