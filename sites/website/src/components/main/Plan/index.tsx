"use client"
import React from "react"
import { Image, Video } from "@/components/Assets/media"
import Subscribe from "@/components/main/Assets/join"
import SlideIn from "@/components/Assets/slidein"
import GoOffer from "@/components/main/Assets/go-offer"

export default function Plan() {
  return (
    <>
      <section id="plan" className="p-0 m-0 pb-10">
        <div className="py-4 bg-ai-yellow text-black">
          <SlideIn className="animate_right">
            <h2 className="bg-ai-blue text-2xl ml-4  p-4 pl-10 rounded-l-full text-white">
              ストーリー・セールス完全習得講座で得られるもの
            </h2>
          </SlideIn>
          <ul className="mx-8 list-image-[url(/images/icon/check-sign-icon-2.png)] list-outside">
            <li className="">
              お客さまが主人公のストーリー・セールス・フレームワークの完全な内容と、
              それを実際に使用する方法を学べる７つの講義動画
            </li>
            <li className="">
              お客さまに売り込まれていると感じさせない、
              その上あなたもストレスを感じない、
              ストーリー・セールス・シナリオを作成する方法を段階的に説明する講義動画。
            </li>
            <li>ストーリー・セールス・シナリオを作るためのテンプレートPDF</li>
            <li>
              ストーリー・セールス・シナリオを使ってセールスを行うためのアドバイス
            </li>
          </ul>
          <div className="my-8">
            <h3 className="text-inherit w-fit mx-auto">メンターと始める方法</h3>
            <ul className="text-ai-blue list-none list-outside mx-0 px-0 flex flex-wrap text-justify">
              <li className="text-inherit w-1/3 px-4">
                <div className="flex items-center justify-center w-20 h-20 mb-2 mx-auto bg-ai-yellow rounded-full bg-gradient-to-b from-blue-400 to-blue-950">
                  <div className="flex items-center justify-center w-16 h-16 max-w-16 max-h-16 p-2 m-2 rounded-full mx-auto bg-transparent text-white border-4 border-white">
                    1
                  </div>
                </div>
                <div className="w-fit mx-auto text-sm">
                  ストーリー・セールス完全習得講座を視聴する
                </div>
              </li>
              <li className="text-inherit w-1/3 px-4">
                <div className="flex items-center justify-center w-20 h-20 mb-2 mx-auto bg-ai-yellow rounded-full bg-gradient-to-b from-blue-400 to-blue-950">
                  <div className="flex items-center justify-center w-16 h-16 max-w-16 max-h-16 p-2 m-2 rounded-full mx-auto bg-transparent text-white border-4 border-white">
                    2
                  </div>
                </div>
                <div className="w-fit mx-auto text-sm">
                  メンターと一緒に、セールス・シナリオを作る
                </div>
              </li>
              <li className="text-inherit w-1/3 px-4">
                <div className="flex items-center justify-center w-20 h-20 mb-2 mx-auto bg-ai-yellow rounded-full bg-gradient-to-b from-blue-400 to-blue-950">
                  <div className="flex items-center justify-center w-16 h-16 max-w-16 max-h-16 p-2 m-2 rounded-full mx-auto bg-transparent text-white border-4 border-white">
                    3
                  </div>
                </div>
                <div className="w-fit mx-auto text-sm">
                  お客さまに感謝されながら、セールスを楽しむ
                </div>
              </li>
            </ul>
          </div>
          <div className="mx-12 border-4 border-ai-gold rounded-lg p-4 bg-blue-50 text-ai-gold">
            LINE公式アカウントでは、セールスだけでなく、集客の役に立つ情報をお伝えしています。
            ぜひ、お友達になってください。
          </div>
          <Subscribe>お友だちになる</Subscribe>
          <div className="mx-12 mb-4 border-4 border-ai-gold rounded-lg p-4 bg-blue-50 text-ai-gold text-sm">
            この公式サイトでは、集客の役に立つ成功事例集をプレゼントしています。
            セールスする見込み客がなかなか集らないなら、ぜひダウンロードして読んでみてください。
          </div>
          <GoOffer />
        </div>
      </section>
    </>
  )
}
