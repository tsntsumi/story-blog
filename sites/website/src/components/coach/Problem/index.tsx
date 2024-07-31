"use client"
import { Image, Video } from "@/components/Assets/media"
import SlideIn from "@/components/Assets/slidein"
import Schedule from "@/components/coach/Assets/scheduletocall"

const Problem = () => {
  return (
    <>
      <section id="problem" className="pt-0 mt-0 mb-4">
        <div className="p-0 pt-8 mx-auto max-w-c-1390 text-justify bg-ai-yellow text-ai-blue">
          <h2 className="mx-8">
            今、これまで培ってきた知恵を活かして、
            コーチングで起業しようとしている会社員が増えています。
            <div>しかし、同時にこんな悩みと不安を感じています</div>
          </h2>
          <SlideIn className="animate_left">
            <div className="my-8 mr-10 p-8 pr-18 rounded-r-full bg-ai-red text-white">
              <div className="w-fit ml-auto text-xl">
                コーチングのコンセプトを打ち出せない・差別化できない
              </div>
            </div>
          </SlideIn>
          <SlideIn className="animate_right">
            <div className="my-8 ml-10 p-8 pl-18 rounded-l-full bg-ai-red text-white text-xl">
              高額メニューが作れない・請求する自信がない
            </div>
          </SlideIn>
          <SlideIn className="animate_left">
            <div className="my-8 mr-10 p-8 pr-18 rounded-r-full bg-ai-red text-white">
              <div className="w-fit ml-auto text-xl">
                集客する方法がわからない・売り込みするのが怖い
              </div>
            </div>
          </SlideIn>
          <div className="mb-0 p-8 bg-ai-blue text-white text-justify">
            <h3 className="text-white my-8">
              コーチングで起業する悩みと不安を感じているあなたが先ずすることは......
            </h3>
            <div className="text-ai-blue md:mx-10 my-4 py-4 px-8 rounded-full bg-white border-8 border-ai-gold">
              どんな人を徹底的に幸せにしたいか、どう幸せにしたいかを明確に伝わるコンセプトを作成する
            </div>
            <div className="text-ai-blue md:mx-10 my-4 py-4 px-8 rounded-full bg-white border-8 border-ai-gold">
              あなたのコーチング・サービスの内容を、明確でわかりやすく、気になって仕方がなくなるメニュー表を作成する
            </div>
            <div className="text-ai-blue md:mx-10 my-4 py-4 px-8 rounded-full bg-white border-8 border-ai-gold">
              売り込まなくても、あなたのコーチングの価値が自然と伝わる完全オンライン・セミナーの作成
            </div>
            <div className="max-w-5/6 mx-8">
              <h3 className="text-white my-8">
                職場で、上司からクレージーだ、はみ出しものだ、トラブルメーカーだ、
                不適格者だと烙印を押されて、自信を失いかけ、才能をを発揮できないでいる
                <span className="whitespace-nowrap">あなた</span>
                にアリザ・アイデアルが提供するのは
              </h3>
              <div className="w-fit mx-auto">
                <ul>
                  <li className="text-white">
                    安心してコーチングで起業するためのコンセプト設計
                  </li>
                  <li className="text-white">
                    あなたのコーチングの価値を伝えるオンライン・セミナーの構築
                  </li>
                  <li className="text-white">
                    あなたのコンセプトやコンテンツを作るときに応用できる、生成AIの活用技術
                  </li>
                </ul>
              </div>
              <p>
                人とは違うものの見方をする人、規則を嫌う人、現状維持を尊重しない人。
                そんなあなたにこそ、わたしの理想とするコーチ像にぴったりです。
              </p>
              <p>
                そういった人たちが、世界を変え、人類を進化させ、
                多くの人たちを幸福なゴールに導いてきたのです。
              </p>
            </div>
            <div className="mt-8 mb-4">
              <div className="text-center text-sm">
                あなたのコーチング起業の課題を発見する
              </div>
              <Schedule />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Problem
