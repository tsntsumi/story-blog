"use client"
import React from "react"
import Subscribe from "@/components/main/Assets/join"
import GoOffer from "@/components/main/Assets/go-offer"

export default function Encourage() {
  return (
    <>
      {/* <!-- ===== Encouragees Start ===== --> */}
      <section id="encourage" className="p-0 m-0 mb-10">
        <div className="pt-4 bg-white text-ai-blue">
          <h2 className="bg-ai-blue text-white border-8 border-ai-yellow mx-8 rounded-full text-ai-blue p-4 px-6 mb-8 text-xl sm:text-3xl">
            ストーリーをベースにしたセールスで、
            <span className="text-ai-yellow">もっと売り上げをあげる</span>
          </h2>
          <div className="px-8 mb-8 text-ai-blue">
            <p>
              世の中のほとんどの人は、一度はひどいセールスの犠牲になっています。
              あなたも、こんな経験はありませんか？
            </p>
            <ul>
              <li className="text-ai-blue">必要のない商品を買わされた……</li>
              <li className="text-ai-blue">
                しつこいセールス電話に悩まされた……
              </li>
              <li className="text-ai-blue">強引に無理やり買わされた……</li>
            </ul>
            <p>こんな経験、イヤでしたよね。</p>
            <p>
              ALIZZA IDEAL の
              「『お客さまが主人公』のストーリー・セールス・フレームワーク」は、
              あなたが思い込んでいるセールスのイメージを完全に書き替えます。
            </p>
            <p>
              ストーリーの力と、お客さまを主人公にすることで、
              商品の価値を明確にわかりやすく伝えられるようになります。
            </p>
            <p className="mt-8">
              「『お客さまが主人公』のストーリー・セールス完全習得講座」では、
              ストーリーの力をセールスに応用する方法を学ぶことができます。
            </p>
            <p>
              もうお客さまに、商品を購入させようと売り込みをするのはやめましょう。
              その代わりに、あなたがお客さまにとって信頼できるアドバイザーになる方法を学びましょう。
            </p>
            <div>
              <div className="mx-4 my-8 px-6 py-4 text-center rounded-full border-8 border-ai-blue bg-ai-yellow text-ai-blue">
                ストーリー・セールス完全習得講座は６月中に開講予定です
              </div>
              <p>
                以下のLINE公式アカウントでお友達になっていただくと、
                開講する際にお知らせのメッセージをお送りします。
              </p>
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

      {/* <!-- ===== Encourage End ===== --> */}
    </>
  )
}
