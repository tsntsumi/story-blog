"use client"
import React from "react"
import Subscribe from "@/components/main/Assets/join"
import GoOffer from "@/components/main/Assets/go-offer"

export default function Solution() {
  return (
    <>
      <section id="solution" className="p-0 m-0 mb-4">
        <div className="my-10 max-w-c-1315 text-justify bg-ai-blue py-8">
          <h2 className="p-4 px-8 mb-8 mx-10 text-center bg-ai-yellow text-blue rounded-full border-4 border-white">
            売り込まずに売る?
            <span className="whitespace-nowrap">本当にできるの？</span>
          </h2>
          <div className="mx-8 text-white">
            <p className="w-full text-white">
              「お客さまが主人公」のストーリー・セールス・フレームワークなら可能です。
            </p>
            <p className="w-full my-8">
              ALIZZA IDEAL の「
              <strong>ストーリー・セールス完全習得講座</strong>
              」では、 この日本初上陸のセールス・フレームワークを使って、
              自信を持ってセールスし、 より多くのセールスで成約し、
              ビジネスを安定させる方法を具体的に学べます。
            </p>
            <p className="w-full">
              問題が解決していくストーリーの世界へ、お客さまを招待するために、
              ストーリー・セールス・シナリオをまず最初に作成してください。
            </p>
            <p>
              ストーリー・セールス・シナリオは、
              ハリウッド映画が100年近くかけて進化させてきた、
              見る人を惹きつけるストーリーの型を使って作成します。
            </p>
            <p>
              無料のセールス・シナリオ・テンプレートを使用すれば、
              あなたが何度でも組み合わせて使うことができる、
              ５つの重要なセールス・トークの要素を作成できます。
            </p>
            <p>
              この５つの要素を組み合わせることで、ストーリー・セールス・シナリオが完成します。
            </p>
            <div className="my-8">
              <h3 className="text-inherit w-fit mx-auto">自分で始める方法</h3>
              <ul className="text-white list-none list-outside mx-0 px-0 flex flex-wrap">
                <li className="text-inherit w-1/3 px-2">
                  <div className="flex items-center justify-center w-20 h-20 mb-2 mx-auto bg-ai-yellow rounded-full bg-gradient-to-b from-amber-200 to-amber-500">
                    <div className="flex items-center justify-center w-16 h-16 max-w-16 max-h-16 p-2 m-2 rounded-full mx-auto bg-transparent text-ai-blue border-4 border-ai-blue">
                      1
                    </div>
                  </div>
                  <div className="w-full text-xs sm:text-sm">
                    テンプレートをダウンロードする
                  </div>
                </li>
                <li className="text-inherit w-1/3 px-2">
                  <div className="flex items-center justify-center w-20 h-20 mb-2 mx-auto bg-ai-yellow rounded-full bg-gradient-to-b from-amber-200 to-amber-500">
                    <div className="flex items-center justify-center w-16 h-16 max-w-16 max-h-16 p-2 m-2 rounded-full mx-auto bg-transparent text-ai-blue border-4 border-ai-blue">
                      2
                    </div>
                  </div>
                  <div className="w-full text-xs sm:text-sm">
                    ストーリー・セールス・シナリオを作る
                  </div>
                </li>
                <li className="text-inherit w-1/3 px-2">
                  <div className="flex items-center justify-center w-20 h-20 mb-2 mx-auto bg-ai-yellow rounded-full bg-gradient-to-b from-amber-200 to-amber-500">
                    <div className="flex items-center justify-center w-16 h-16 max-w-16 max-h-16 p-2 m-2 rounded-full mx-auto bg-transparent text-ai-blue border-4 border-ai-blue">
                      3
                    </div>
                  </div>
                  <div className="w-full text-xs sm:text-sm">
                    より多くのセールスで成約を決める
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="mx-4 mt-8 px-6 py-4 rounded-full border-8 border-ai-gold bg-blue-50 text-ai-gold text-sm sm:text-lg">
                <div className="w-fit mx-auto">
                  セールス・シナリオ・テンプレートは、LINEのお友達に配布しています
                </div>
              </div>
              <Subscribe>お友だちになる</Subscribe>
              <div className="mx-12 mb-4 border-4 border-ai-gold rounded-lg p-4 bg-blue-50 text-ai-gold text-sm">
                この公式サイトでは、集客の役に立つ成功事例集をプレゼントしています。
                セールスする見込み客がなかなか集らないなら、ぜひダウンロードして読んでみてください。
              </div>
              <GoOffer />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
