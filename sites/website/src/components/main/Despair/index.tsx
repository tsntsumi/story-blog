import Link from "next/link"
import { Image, Video } from "@/components/Assets/media"
import SlideIn from "@/components/Assets/slidein"
import Subscribe from "@/components/main/Assets/join"
import GoOffer from "@/components/main/Assets/go-offer"

export default function Despair() {
  return (
    <>
      <section id="despair" className="p-0 m-0 mb-10">
        <div className="py-8 bg-ai-red text-white">
          <SlideIn className="animate_top">
            <h2 className="text-xl sm:text-3xl mx-4 sm:mx-10 mb-8 px-4 sm:px-10 py-4 rounded-full border-8 border-ai-yellow bg-ai-red text-white">
              お客さまに価値が伝わらないと、どのようなリスクがあるでしょうか？
            </h2>
          </SlideIn>
          <div className="mx-8 mb-8 text-justify">
            <p>
              素晴らしい製品やサービスがあるのに、売上げも見込み客も増えてない場合、
              その原因は、お客さまに商品の価値が正確に伝わっていないせいです。
            </p>
            <p>
              あなたがどのようにしてお客さまを助けることができるのか、お客さまに伝わっていません。
            </p>
            <p>
              そのため、お客さまは、たとえ機能や品質が劣っていても、
              わかりやすいセールスをしている人から購入してしまうのです。
            </p>
            <h3 className="bg-ai-yellow text-ai-blue my-8 p-2 rounded-lg">
              あなただけではありません、ほとんどの人が価値を伝えるのが苦手です
            </h3>
            <p>
              自分の商品について説明しようとすると、多くの人は苦労してしまいます。
            </p>
            <p>
              製品やサービスがあまりに身近なため、お客さまに説明しようとすると
              全く的を外してしまうのです。
            </p>
            <h3 className="bg-ai-blue text-white p-2 rounded-lg my-8">
              安心してください、それは改善可能です
            </h3>
            <p>
              お客さまへのセールス・トークから、複雑さ、混乱の素を取り除ければ、
              あなたのビジネスに大きなメリットをもたらします。
            </p>
            <p>
              このストーリー・セールス・フレームワークを学べば、
              お客さまに注目され、反応が返ってくるようになります。
              すると、売り上げが上がります。
              ずっとそうなるはずだと信じていた結果が、現実のものになります。
            </p>
            <h3 className="text-ai-yellow bg-ai-blue p-2 rounded-lg">
              セールス・トークをシンプルでわかりやすく
            </h3>
            <p>
              ストーリーの力で、セールス・トークをシンプルで明確にすれば、
              ホームページもあなたのために機能し始めます。
            </p>
            <p>
              このフレームワークで、セールスするときに話すシナリオ、
              ストーリー・セールス・シナリオを作ってください。
              セールス・シナリオは、ホームページ、電子メールキャンペーン、
              LINEキャンペーン、SNS発信、営業活動など、ビジネスでの発信で使用することができます。
            </p>
            <p>
              マーケティングの細かいノウハウは必要ありません。
              優れたクリエーターになる必要もありません。
              このストーリー・セールス・フレームワークを利用するだけで、
              注目が集まるメッセージを作成できます。
            </p>
            <h3 className="bg-ai-yellow text-ai-red p-2 rounded-lg">
              人間の脳は、わかりにくいものは、見えない、聞こえない
            </h3>
            <p>
              人間の脳は、簡単でわかりやすい説明を求め、複雑なものは避けようとします。
              お客さまは、あなたの説明が一瞬で理解することができないと、
              あなたの言葉を無視し、わかりやすいセールスをしている人から購入してしまうのです。
            </p>
            <p>
              商品の説明を、わかりやすく発信している人が、市場で生き残ります。
            </p>
            <p>
              あなたの説明がお客さまに伝わりにくいだけだったとしたら、
              もうセールスに悩む必要はありません。
              いますぐ、ストーリー・セールス・フレームワークを学んでください。
            </p>
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
