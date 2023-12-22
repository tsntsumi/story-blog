"use client"
import React from "react"
import solutionsData from "./solutionsData"
import SingleSolution from "./SingleSolution"
import SectionHeader from "../Common/SectionHeader"
import Join from "@/components/Join"

const Solutions = () => {
  return (
    <>
      {/* <!-- ===== Solutions Start ===== --> */}
      <section id="solutions" className="home">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "どうすれば集まるのか",
              subtitle: (
                <>
                  あなたの商品を輝かせ、注目を集める
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                    キャッチコピー
                  </span>
                  の錬金術
                </>
              ),
              description: (
                <div className="w-full text-adjustment">
                  <p>
                    キャッチコピーの錬金術を使うと、２つのテンプレートに当てはめ、１つのシナリオを真似して、売れるコンセプトと仕組みを構築することができます。
                  </p>
                  <p>
                    キャッチコピーの錬金術では、神話と伝説の時代から脈々と伝わってきたストーリーテリングの原則を用います。
                  </p>
                  <p>
                    遺伝子レベルで組み込まれているメッセージの構造になぞらえて作成するので、一瞬で理解できるメッセージが作れます。
                  </p>
                </div>
              )
            }}
          />
          {/* <!-- Section Title End --> */}
          <div className="mt-7 mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-justify">
            <p>
              ほとんどのハリウッド映画でも使われているストーリーの原則です。
            </p>
            <p>
              例えばこんな人気映画が、このストーリーの原則で作られています：
            </p>
            <ul>
              <li>スターウォーズ</li>
              <li>ロード・オブ・ザ・リング</li>
              <li>バック・トゥー・ザ・フューチャー</li>
              <li>プラダを着た悪魔</li>
              <li>素晴らしき哉、人生</li>
            </ul>
            <p>
              世界中で大ヒットする、忘れがたい映画のストーリーを創る原則ですから、
              あなたの商品も誰にだってわかりやすく、そして魅惑的に説明することが出来るんです。
            </p>
            <p className="mt-12">
              そんなキャッチコピーを作り、集客を成功させる秘訣は、次の３つです:
            </p>
          </div>

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Solutions item Start --> */}

            {solutionsData?.map((solution, key) => (
              <SingleSolution solution={solution} key={key} />
            ))}
            {/* <!-- Solutions item End --> */}
          </div>

          <div className="text-center mx-auto mt-12.5 gap-7.5 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            詳細を知るために、スケジュールを確保して下さい
          </div>
          <div className="mt-10">
            <Join>サービス説明をスケジュール</Join>
          </div>
        </div>
      </section>

      {/* <!-- ===== Solutions End ===== --> */}
    </>
  )
}

export default Solutions
