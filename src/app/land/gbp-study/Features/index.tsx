"use client"
import React from "react"
import Image from "next/image"
import SectionHeader from "@/components/Common/SectionHeader"
import Join from "../Join"

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-4">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "初めよければ全てよし",
              subtitle: (
                <>
                  適切にビジネス情報を設定すれば、お客さんが
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                    集まりだす
                  </span>
                </>
              ),
              description: (
                <div className="mx-10">
                  <p>
                    適切にビジネス情報を設定すれば、お客さんからの信頼だけでなく、
                    Googleからの信頼も得られます。
                  </p>
                  <p>
                    そうなれば、Googleがこのお店はみんなに知ってもらう価値のある
                    お店だと判断し、検索上位に表示するようになるんです。
                  </p>
                </div>
              )
            }}
          />
          <div className="w-full mt-4 md:w-[46em] mx-auto">
            <p>
              花を育てようとしても、根っこが腐っていては、花が咲くどころか枯れてしまいますよね？
            </p>
            <p>
              それと同じです。あなたのお店を、Googleマップで検索上位に表示させたいなら、根本の根っこが肝心です。
            </p>
            <p>
              効果的なビジネス情報を設定する方法を知って、適切に設定して下さい。
            </p>
            <p>まだ見ぬお客さんが、あなたのお店を見つけやすくなります。</p>
            <p>今回の勉強会では、以下のことを勉強します。</p>
            <div className="my-2 p-6 bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 rounded-xl">
              <ol className="list-decimal mx-2 ml-4 md:mx-12 p-0 text-justify">
                <li>なぜ今Googleビジネスプロフィールなのか</li>
                <li>
                  知らないと一発退場もありうる！始める前に知っておくべきこと 〜
                  Googleのポリシ〜
                </li>
                <li>
                  Googleビジネスプロフィール運用のキモ。設定が終わったらやるべきこと６つ
                </li>
                <li>
                  適当に設定すると後悔する、正確に設定すべき
                  検索結果に影響する１０項目
                </li>
                <li>
                  これをしておかないと店舗情報の信頼度が下がる「オーナー確認」の手順３つのパターン
                  <ol className="list-decimal ml-12 my-2">
                    <li>Googleビジネスプロフィールのサイトから</li>
                    <li>Googleマップから</li>
                    <li>なぜかすでに登録されてた場合</li>
                  </ol>
                </li>
                <li>他社と差別化を図るサービスの説明を書く３つのコツ</li>
                <li>
                  検索順位が上がりやすくなるビジネス情報を書くたった１つのポイント
                </li>
              </ol>
            </div>
            <Image
              alt="Fruit harvest"
              src="/images/features/fruit-harvest.png"
              width={1807}
              height={939}
              className="w-full mx-auto"
            />
            <p className="text-[0.75em]">
              なお、勉強会の最後に、ご希望の方へ「地域ナンバーワンをめざすあなたのための　ビジネスプロフィール運用勉強会＆相談会（テキスト付き）」をご案内させていただいております。
            </p>
          </div>
          {/* <!-- Section Title End --> */}
        </div>
      </section>

      {/* <FeaturesDetail /> */}

      {/* <!-- ===== Features End ===== --> */}
    </>
  )
}

export default Feature
