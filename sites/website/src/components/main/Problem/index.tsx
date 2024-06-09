"use client"
import { Image, Video } from "@/components/Assets/media"
import SlideIn from "@/components/Assets/slidein"
import Subscribe from "@/components/main/Assets/join"
import GoOffer from "@/components/main/Assets/go-offer"

const Problem = () => {
  return (
    <>
      <section id="problem" className="pt-0 mt-0 mb-4">
        <div className="p-0 py-8 mx-auto max-w-c-1390 text-justify bg-ai-yellow text-ai-blue">
          <h2 className="mx-8">
            <span className="text-ai-red">セールスとは、</span>
            お客さまに
            <span className="text-ai-red">売り込み</span>
            をして、購入させようとすることではありません
          </h2>
          <h3 className="mx-8">
            しかし、商品を売ろうとしている
            <span className="text-ai-red">ほとんどの人は、</span>
            そのような方法しか知りません
          </h3>
          <div className="text-center text-ai-red my-12 font-bold">
            売り込みをすると、
            <span className="whitespace-nowrap">何が起こるでしょうか……</span>
          </div>
          <SlideIn className="animate_left">
            <div className="my-8 mr-10 p-8 pr-18 rounded-r-full bg-ai-red text-white">
              <div className="w-fit ml-auto">
                お客さまは、プレッシャーを感じ、話を聞かなくなる
              </div>
            </div>
          </SlideIn>
          <SlideIn className="animate_right">
            <div className="my-8 ml-10 p-8 pl-18 rounded-l-full bg-ai-red text-white">
              セールスは、「お客さまを助けることだ」ということを忘れる
            </div>
          </SlideIn>
          <SlideIn className="animate_left">
            <div className="my-8 mr-10 p-8 pr-18 rounded-r-full bg-ai-red text-white">
              <div className="w-fit ml-auto">
                売り上げが上がらず、ビジネスが安定しなくなる
              </div>
            </div>
          </SlideIn>
          <div className="mt-8 p-8 bg-white text-ai-blue text-justify border-y-4 border-y-ai-gold">
            <p>
              「お客さまが主人公」のストーリー・セールス・フレームワークは、
              ストーリーの力を使って、セールスでのコミュニケーションに
              アプローチする方法です。
            </p>
          </div>
          <div className="mb-8 p-8 bg-ai-blue text-white text-justify">
            <p>
              商品を売り込むのではなく、お客さまをストーリーの世界に招待します。
              お客さまは、あなたの商品によって問題が解決することを
              明確にイメージすることができます。
            </p>
            <p className="w-fit mx-auto mt-8">
              ストーリー・セールス・フレームワークを使うと、
            </p>
            <div className="text-ai-gold md:mx-10 my-4 py-4 px-8 rounded-full bg-white border-8 border-ai-gold">
              <p>
                お客さまに売り込まれていると感じさせない、
                あなたもストレスを感じない、そんなセールスができるようになります
              </p>
            </div>
            <div className="w-5/6 mx-auto">
              <p className="">
                そんなセールスをするためには、
                あなたのストーリー・セールス・シナリオを作ることから始めます
              </p>
            </div>
          </div>
          <div className="mx-12 border-4 border-ai-gold rounded-lg p-4 bg-white text-ai-gold">
            LINE公式アカウントでは、ストーリー・セールスはもとより、
            セールスの役に立つ情報をお伝えしています。
            ぜひ、お友達になってください。
          </div>
          <Subscribe>お友だちになる</Subscribe>
          <div className="mx-12 mb-4 border-4 border-ai-gold rounded-lg p-4 bg-white text-ai-gold">
            この公式サイトでは、集客の役に立つ成功事例集をプレゼントしています。
            セールスする見込み客がなかなか集らないなら、ぜひダウンロードして読んでみてください。
          </div>
          <GoOffer />
        </div>
      </section>
    </>
  )
}

export default Problem
