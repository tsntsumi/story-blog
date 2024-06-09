"use client"
import React from "react"
import NextImage from "next/image"
import { Image, Video } from "@/components/Assets/media"
import Link from "next/link"
import SlideIn from "@/components/Assets/slidein"
import Subscribe from "@/components/Assets/subscribe"
import {
  SoloPreneur,
  CoachingToolbox,
  DrivingSchool
} from "@/components/Assets/logos"
import SpecialOffer from "@/components/main/Assets/specialoffer"

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
      <section id="problem" className="pt-0 mt-0 mb-4">
        <div className="mx-auto max-w-c-1390 text-justify px-4 md:px-8 2xl:px-0 text-sm md:text-base">
          <h1 className="my-2 text-xl md:text-3xl">
            コーチング・ビジネスは、クライアントの理想実現に貢献する素晴らしいお仕事です。
          </h1>
          <h2 className="text-lg md:text-2xl">
            <div className="my-2">
              そんな重要な仕事にもかかわらず、ほとんどのコーチは高収益の仕組みを構築出来ていません。
            </div>
          </h2>
          <SlideIn className="animate_right">
            <div className="w-full mt-8 mb-4 text-xl md:text-2xl text-center">
              あなたは、もうこの準備は
              <div className="inline-block">できてますか？</div>
            </div>
          </SlideIn>
          <div className="bg-sky-950 px-4 text-gold rounded-xl">
            <ul className="flex flex-wrap py-4 mx-0 list-outside list-image-[url(/images/icon/check-sign-icon.svg)]">
              {items.map((item, i) => (
                <li
                  key={i}
                  className="ml-0 pr-6 md:w-1/2 text-white text-base mt-0 text-justify"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full">
            <div className="w-full max-w-c-1390 mx-auto">
              <div className="columns-1 md:columns-2 xl:columns-3 md:gap-8">
                <h2 className="mt-0 pt-0 text-xl">
                  高収益のコーチに必要なのは、コーチング能力ではありません
                </h2>
                <p>
                  あなたがコーチになろうとしているなら、すでにコーチングする分野の専門知識、
                  情熱、意欲はもう十分です。
                </p>
                <p>
                  しかし、まだコーチングのコンセプト、コンテンツ、見込み客がないとしたら、
                  継続していくのに必要な燃料が、すぐに空になってしまいます。
                </p>
                <h2 className="text-xl">あなたが主人公ではありません</h2>
                <p>
                  コーチング・ビジネスの主人公はクライアントです。
                  あなたではありません。
                </p>
                <p>
                  映画で例えるなら、あなたはスター・ウォーズのオビ=ワンやヨーダ、
                  ロード・オブ・ザ・リングの魔法使いガンダルフ、
                  オズの魔法使いの、北の良い魔女です。
                </p>
                <p>
                  つまり、あなたはクライアントがゴールに到達するまでの
                  道案内役であり、シェルパであり、魔法使いです。
                </p>
                <p>
                  クライアントを、正しい道へ導き、
                  ゴールへ向かって進んでいくための知恵と勇気を与える役です。
                </p>
                <h2 className="text-xl">コーチング・ビジネスに必要なもの</h2>
                <p>
                  ビジネスは、クライアントを乗せて走る自動車のようなものです。
                </p>
                <p>ゴールまで旅を続けるには、そのための燃料が必要です。</p>
                <p>
                  車で言えば<b>ガソリン</b> です。 あなたで言えば
                  <b>情熱とモチベーション</b> です。 ビジネスでいえば
                  <b>収益</b> です。
                </p>
                <p>
                  旅の途中で燃料がなくなれば、ガソリンが、情熱が、
                  モチベーションが、お金がなくなってしまったら、
                  先に進めなくなってしまいます。
                </p>
                <p>
                  あなたがいなくなったら、
                  クライアントの人生はどうなってしまうでしょうか。
                  やはり、ゴールにたどり着けなくなります。
                </p>
                <h2 className="text-xl">あなただって旅をしている</h2>
                <p>
                  あなたが守ってあげたかった大切な人だって、
                  人生の迷子になってしまいます。
                  あなたと一緒に旅をすることができなくなります。
                  離れ離れになってしまうかもしれません。
                </p>
                <p>
                  Alizza Ideal's Coaching School of Business
                  （コーチング・ビジネス教習センター）は、
                  あなたが、コーチとしてキャリアを築いていくために必要な
                  学びと訓練と支援をする教習所です。
                </p>
                <p>
                  あなたのクライアントや大切な人と一緒に、
                  あなたの理想のゴールに向かって、
                  安全に、安心して、安定してゴールまで運転していく
                  サポートをします。
                </p>
                <p>
                  わたしをあなたのヨーダにして下さい。
                  希望を信じて一緒に旅を続けましょう。
                </p>
              </div>
              <div className="w-full">
                <Image
                  src="gs://story-made.appspot.com/images/hero/CoachingToolbox_Toolbox_land.png"
                  alt="Alizza Ideal コーチング・ビジネス教習センター"
                  width={640}
                  height={453}
                  className="object-cover rounded-lg my-4 mx-auto"
                />
              </div>
            </div>
            <div className="text-center hidden">
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
          </div>
        </div>
      </section>
    </>
  )
}

export default Problem
