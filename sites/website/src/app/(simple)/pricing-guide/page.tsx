import React from "react"
import type { Metadata } from "next"
import menu from "@/components/coach/Assets/Menu"
import { Image } from "@/components/Assets/media"
import GetTheGuide, {
  CallToTheGuide
} from "@/components/coach/CallToAction/GetTheGuide"
export const metadata: Metadata = {
  title: "コーチのための盛らない下げない適正価格設定ガイド",
  description: `あなたは、安すぎる価格でコーチングしていませんか？このガイドブックを読んで、あなたのコーチングの価値に見合う、盛らない、下げない、適正価格のサービスメニューを作成し、より多くのクライアントの興味を惹きつけましょう。`
}

const BOOKIMAGE =
  "gs://story-made.appspot.com/offers/適正価格設定ガイド.png"

const Page = () => {
  return (
    <>
      <div className="m-0 p-0 md:w-md md:max-w-md min-w-[320px] mx-auto">
        <section className="m-0 p-0">
          <div className="mx-4 p-0">
            <h1>
              <div className="text-lg">
                あなたのコーチングサービスを、 盛らずに下げずに
              </div>
              価値に見合った価格に設定する方法
            </h1>
            <div>
              無理なく働き、賢く働き、クライアントあたりの収益を増やそう
            </div>
            <div className="md:w-1/5 mx-auto my-4">
              <Image
                src={BOOKIMAGE}
                alt="コーチングサービス適正価格設定ガイドブック"
                width={200}
                height={300}
                className="object-cover mx-auto"
              />
            </div>
          </div>
          <div className="my-4">
            <CallToTheGuide />
          </div>
        </section>
        <section className="m-0 p-0">
          <div className="mx-4 px-4 py-2 bg-ai-blue rounded-3xl text-white">
            <h2 className="text-lg text-white">
              自分自身で、自分のサービスと知識を過小評価してしまうと、
              本来得られるべき収入を得られなくなります
            </h2>
            <h3 className="w-fit mx-auto text-white text-lg">
              このガイドブックを読むとわかること
            </h3>
            <div className="checked-disc">
              <ul className="grid grid-cols-2 grid-rows-2 gap-x-12 mx-4 text-justify">
                <li className="text-white">
                  おすすめのコーチングの価格と、サービス内容
                </li>
                <li className="text-white">
                  価格設定に役立つ、４つのキーポイント
                </li>
                <li className="text-white">
                  コーチング・パッケージを作成する前に検討すべき重要な質問
                </li>
                <li className="text-white">
                  クライアントに、より多くのコーチングと「アップグレード」を売る秘訣
                </li>
              </ul>
            </div>
            <p>
              コーチング・ビジネスでは、生き残るために収益を得る必要があります。
            </p>
            <p>
              この価格設定ガイドは、あなたがコーチとして成功するために、
              コーチング・サービスをどのように構成して、
              どのように価格を設定するかを示します。
            </p>
            <div className="my-4">
              <CallToTheGuide />
            </div>
          </div>
        </section>
        <section className="m-0 p-0">
          <div className="mx-4 px-4 py-2">
            <h2>この価格設定ガイドの使い方</h2>
            <ul className="grid grid-cols-1 grid-rows-3 gap-y-8 list-none mx-4 text-justify">
              <li className="text-center">
                <div className="flex items-center justify-center bg-ai-gold rounded-full max-w-12 min-w-12 w-12 max-h-12 min-h-12 h-12 font-black text-white mx-auto mb-2">
                  1
                </div>
                PDFをダウンロードする
              </li>
              <li className="text-center">
                <div className="flex items-center justify-center bg-ai-gold rounded-full max-w-12 min-w-12 w-12 max-h-12 min-h-12 h-12 font-black text-white mx-auto mb-2">
                  2
                </div>
                クライアントに提供するサービスメニューを作成する
              </li>
              <li className="text-center">
                <div className="flex items-center justify-center bg-ai-gold rounded-full max-w-12 min-w-12 w-12 max-h-12 min-h-12 h-12 font-black text-white mx-auto mb-2">
                  3
                </div>
                あなたのコーチング・ビジネスが成長し、繁盛していくのを実感する
              </li>
            </ul>
            <div className="my-4">
              <CallToTheGuide />
            </div>
          </div>
        </section>
        <GetTheGuide />
      </div>
    </>
  )
}

export default Page
