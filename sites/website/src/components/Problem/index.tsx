"use client"
import React from "react"
import Image from "next/image"
import SectionHeader from "../common/sectionheader"

const Problem = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="problem" className="pt-20 lg:pt-25 xl:pt-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "",
              subtitle: (
                <div className="text-2xl md:text-3xl text-center text-orange-500">
                  「どこへ行っても改善しない」と諦めているあなたへ
                </div>
              ),
              description: (
                <>
                  <hr />
                  <div className="mt-8 mb-6 text-center">
                    こんな経験はありませんか？
                  </div>
                  <hr />
                </>
              )
            }}
          />
          {/* <!-- Section Title End --> */}
        </div>
        <div className="md:w-1/2 md:mx-auto">
          <Image
            src="/images/features/yotsu.png"
            alt="腰痛"
            width="256"
            height="256"
            className="md:mx-auto hidden md:block object-contain w-[128px] md:w-1/4 md:h-full md:mx-16 float-right"
          />
          <ul className="ml-8 list-outside list-image-[url(/images/icon/list-style-check.png)]">
            <li>長年のしびれ・痛みがつらい</li>
            <li>痛み止めに頼る生活を送りたくない</li>
            <li>注射や手術は絶対にしたくない</li>
            <li>毎日、しびれや痛みでやる気がしない</li>
            <li>
              病院に行っても原因が不明と言われた
              <Image
                src="/images/features/yotsu.png"
                alt="腰痛"
                width="256"
                height="256"
                className="md:mx-4 md:hidden object-contain w-[128px] md:w-1/3 float-right"
              />
            </li>
            <li>歩くのも痛くて、趣味、旅行、仕事ができない</li>
            <li>
              家族に迷惑をかけたくないけど、ずっと改善されず、もう諦めかけている
            </li>
          </ul>
          <div className="clear-both" />
        </div>
      </section>
      <section className="mx-4 md:mx-32 py-8 lg:py-12">
        <div className="mx-auto max-w-c-1315 px-4 mb-16 md:px-8 xl:px-16">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "お任せください",
              subtitle: (
                <div className="text-2xl md:text-2xl text-center text-orange-500">
                  その悩み、お任せください
                </div>
              ),
              description: (
                <>
                  <p>
                    もしあなたが今、上記のようにお悩みなら、ほんの少しでも心のどこかに、よくなりたいと思うのなら……まきせ鍼灸整骨院に来院し、そのつらい慢性のしびれ・痛みの根本改善をしませんか？
                  </p>
                </>
              )
            }}
          />
          {/* <!-- Section Title End --> */}
        </div>
        <div className="md:w-2/3 md:mx-auto text-justify ">
          <p>
            もし、あなたが「そんなのどこの整骨院も同じこと言ってるじゃん！どうせ無理でしょ！」とお思いなら、あなたの大切な時間の無駄になってしまいますので、今すぐこのページを閉じていただいて結構です。
          </p>
          <p>
            でも、「まぁ、ダマされたと思って話だけでも聞こうかな」と感じてくださったのなら、ゆっくりとページをお進みください。
          </p>
          <p>
            まずは、実際に私の整骨院にいらっしゃった慢性の痛みを持ちのお客様からはこんな声を頂いております…
          </p>
        </div>
      </section>
      {/* <!-- ===== Features End ===== --> */}
    </>
  )
}

export default Problem
