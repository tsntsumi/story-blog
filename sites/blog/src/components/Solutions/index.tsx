"use client"
import React from "react"
import solutionsData from "./solutionsData"
import SingleSolution from "./SingleSolution"
import SectionHeader from "../Common/SectionHeader"
import Image from "next/image"
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
              title: "どうすれば集客できるのか",
              subtitle: (
                <>
                  あなたの商品を輝かせ、魅了する、集客の
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                    錬金術
                  </span>
                  の仕組みとは？
                </>
              ),
              description: (
                <div className="w-full text-adjustment">
                  <p>
                    集客の錬金術では、３つのテンプレートに商品の特徴を当てはめ、売れる商品コンセプトと仕組みを構築することができます。
                  </p>
                </div>
              )
            }}
          />
          {/* <!-- Section Title End --> */}
          <div className="mt-7 mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-justify">
            <h4>なぜソレができるのか？</h4>
            <p>
              集客の錬金術では、神話と伝説の時代から脈々と伝わってきた
              ストーリーテリングの原則を集客に用います。
            </p>
            <p>
              遺伝子レベルで組み込まれているストーリーの構造になぞらえて作成するので、
              一瞬で理解できるメッセージが作れます。
            </p>
            <p>
              ほとんどのハリウッド映画でも使われているストーリーの原則です。
            </p>
            <p>
              例えばこんなヒット作が、このストーリーの原則で作られています：
            </p>
            <ul>
              <li>スターウォーズ</li>
              <li>ロード・オブ・ザ・リング</li>
              <li>バック・トゥー・ザ・フューチャー</li>
              <li>プラダを着た悪魔</li>
              <li>プライベート・ライアン</li>
              <li>英国王のスピーチ</li>
            </ul>
            <p>
              世界中で大ヒットする、忘れがたい映画のストーリーを創る原則ですから、
              あなたの商品だって、誰にでもわかりやすく、
              そして魅惑的に説明することが出来るんです。
            </p>
            <p>しかも、単に魅了するメッセージが作れるだけではありません。</p>
            <p>
              ドラマチックな感動的な動画を作れるようになるだけではありません。
            </p>
            <p>
              世界的な、時代を超えた名画や、神話などのストーリーは、
              単にハラハラする、見終わってスッキリしただけではない、
              心に残る何かがあります。
            </p>
            <p>
              もし、あなたの商品が、そのような心に響く商品を作れたとしたらどうでしょう。
            </p>
            <p>
              生涯売れ続ける、息の長い定番の商品が出来上がるとは思いませんか？
            </p>
            <p className="mt-12">
              そんな、商品の隠れた魅力を見つけ出し、魅惑のキャッチコピーを作って、
              集客を成功させ、一生お金に困らなくなる仕組みを構築する秘訣は、次の３つです:
            </p>
          </div>

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Solutions item Start --> */}

            {solutionsData?.map((solution, key) => (
              <SingleSolution solution={solution} key={key} />
            ))}
            {/* <!-- Solutions item End --> */}
          </div>

          <div className="mt-14 mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-justify">
            <p>
              集客の錬金術では、３つのテンプレートで、
              大勢の目を惹きつけ、魅力を一撃で伝わるように言語化し、
              段階を踏んで買う気にさせます。
            </p>
            <p>
              いわば、お客の買おうかどうしようかという迷いを取り除き、
              買いたいという気持ちだけを抽出する、
              <ruby>
                ろ過装置<rp>(</rp>
                <rt>ファネル</rt>
                <rp>)</rp>
              </ruby>
              のようなものなのです。
            </p>
          </div>
          <div className="mt-12.5 lg:mt-15 xl:mt-20 w-fit mx-auto">
            <Image
              src="/images/solutions/sales-funnel.gif"
              alt="お客の頭から雑念をろ過して、買いたい気持ちを抽出する"
              className="block rounded-lg my-4 mx-auto"
              width="640"
              height="360"
            />
            <p className="mb-4 text-center text-sm">
              お客の頭から雑念と迷いをろ過して、買いたい気持ちを抽出するオンラインろ過装置
            </p>
          </div>

          <div className="mt-10">
            <Join>
              <div className="grid grid-cols-1 justify-center">
                <div className="text-sm mx-auto">集客の錬金術って何？</div>
                <div>知るためのスケジュールをおさえる</div>
              </div>
            </Join>
          </div>
        </div>
      </section>

      {/* <!-- ===== Solutions End ===== --> */}
    </>
  )
}

export default Solutions
