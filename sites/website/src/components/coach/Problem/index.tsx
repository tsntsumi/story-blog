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
            自分の専門知識と経験を活かしてコーチング起業しようとしている人のほとんどが、
            こんな悩みと不安を感じています
          </h2>
          <SlideIn className="animate_left">
            <div className="my-8 mr-10 p-8 pr-18 rounded-r-full bg-ai-red text-white">
              <div className="w-fit ml-auto text-xl">
                コンセプトを作れない・説明できない・文章が書けない
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
              コーチングのフレームワーク、カリキュラム、コンテンツの作成
            </div>
            <div className="text-ai-blue md:mx-10 my-4 py-4 px-8 rounded-full bg-white border-8 border-ai-gold">
              高額でも報酬を支払ってくれるクライアントの集客、永く深い関係の維持
            </div>
            <div className="text-ai-blue md:mx-10 my-4 py-4 px-8 rounded-full bg-white border-8 border-ai-gold">
              相手が思わずお願いしたいと言いたくなるサービスコンセプトの伝え方の習得
            </div>
            <div className="max-w-5/6 mx-8">
              <h3 className="text-white my-8">
                定年を目前にコーチングで起業する生涯現役主義の
                <span className="whitespace-nowrap">50代</span>
                のためにアリザ・アイデアルが提供するのは
              </h3>
              <div className="w-fit mx-auto">
                <ul>
                  <li className="text-white">
                    安心してコーチングで起業するためのビジネス構築
                  </li>
                  <li className="text-white">
                    充実したコーチングビジネスのロードマップ
                  </li>
                  <li className="text-white">
                    正しい道を進んでいるという確信が持てるサポート
                  </li>
                </ul>
              </div>
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
