"use client"
import React from "react"
import solutionsData from "./solutionsData"
import SingleSolution from "./SingleSolution"
import SectionHeader from "../Common/SectionHeader"
import Image from "next/image"
import Subscribe from "@/components/Common/Subscribe"

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
            <h4>なぜそんなことができるのか？</h4>
            <p>
              集客の錬金術では、神話と伝説の時代から脈々と伝わってきた
              ストーリーの原則を集客に用います。
            </p>
            <p>
              人間には、遺伝子レベルでストーリーを理解する能力を持っています。
            </p>
            <p>
              原始時代、狩りに出かけた人々は、まずばらばらに獲物を探します。
            </p>
            <p>
              獲物を発見すると、みんなで集まって、
              どこにいって何を目撃したか、どんな危険があって、それをどう避けて戻ってきたか、
              情報交換します。
            </p>
            <p>
              それは、ストーリーを語ることです。
              そして、一番わかり易いストーリーを語ったものの命令に従うのです。
            </p>
            <h4>ストーリーを話し理解する能力は生存本能</h4>
            <p>
              ようするに、人がストーリーを聞くのが好きなのは、
              生き延びるために発達した能力です。
            </p>
            <p>
              人がストーリーを語るのが好きなのは、大衆の行動に影響を与えたいからです。
            </p>
            <p>これは心理学というよりも、ほとんど生物学の領域です。</p>
            <p>
              だから、難しい知識を勉強する必要はありません。
              あなたにもすでに備わっているからです。
            </p>
            <p>
              普段から見聞きしているドラマや映画のエッセンスを、
              正しく真似するだけでいいんです。
            </p>
            <p>
              例えば、こんなヒット作のあらすじから真似てつくることができます。
            </p>
            <ul>
              <li>スターウォーズ</li>
              <li>ロード・オブ・ザ・リング</li>
              <li>バック・トゥー・ザ・フューチャー</li>
              <li>プラダを着た悪魔</li>
              <li>プライベート・ライアン</li>
            </ul>
            <p>
              ストーリーの構造を意識するだけでいいので、
              薫り高い文学の書き方を学んだり理解する必要はありません。
            </p>
            <p>また、作者の気持ちは何かを考える必要もありません。</p>
            <p>
              なぜなら、あなたにはもうポテンシャルがあるのだから。
              あとは、その能力を開放するだけでいいんです。
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
              商品の価値と魅力を言語化します。
            </p>
            <p>そして、お客の買おうかどうしようかという迷いを取り除きます。</p>
            <p>
              結果、商品が欲しいという気持ちだけが抽出されるんです。
              集客の錬金術は、いわばオンラインの買いたい気持ちの
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
              alt="お客の頭から迷いをろ過して、買いたい気持ちを抽出する"
              className="block rounded-lg my-4 mx-auto"
              width="640"
              height="360"
            />
            <p className="mb-4 text-center text-sm">
              お客の頭から迷いをろ過して、買いたい気持ちを抽出するオンラインろ過装置
            </p>
            <div className="mt-10 w-fit mx-auto">
              <Subscribe />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ===== Solutions End ===== --> */}
    </>
  )
}

export default Solutions
