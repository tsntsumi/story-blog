"use client"
import React from "react"
import { motion } from "framer-motion"
import PlanItem from "./PlanItem"
import planData from "./planData"
import Join from "@/components/Join"
import SectionHeader from "@/components/Common/SectionHeader"

const Plan = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section id="plan" className="home">
        <div className="mx-auto max-w-c-1390 px-4  md:px-8 2xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "どうやって集客するのか",
              subtitle: (
                <>
                  <div>
                    キャッチコピーの錬金術で、売れ続ける仕組みを手に入れる３ステップ
                  </div>
                </>
              ),
              description: (
                <div className="w-full text-adjustment">
                  キャッチコピーの錬金術を学べば、集客に時間をかけずに売れ続ける仕組みを、たったの３ステップで手に入れることができます。
                </div>
              )
            }}
          />
          <div className="mt-12.5 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {planData?.map((item, key) => (
              <PlanItem item={item} key={key} />
            ))}
          </div>
        </div>

        <motion.div
          variants={{
            hidden: {
              opacity: 0,
              y: -20
            },

            visible: {
              opacity: 1,
              y: 0
            }
          }}
          initial="hidden"
          whileInView="visible"
          transition={{ duration: 1, delay: 0.1 }}
          viewport={{ once: true }}
          className="animate_top mx-auto text-adjustment"
        >
          <h1 className="mx-auto mt-24 mb-4 text-3xl text-justify font-bold text-black dark:text-white md:w-4/5 xl:w-1/2 xl:text-sectiontitle3">
            キャッチコピーの錬金術を学んで、あなたが得られるもの
          </h1>
          <div className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-justify">
            <ul>
              <li>魅惑の集客メッセージ</li>
              <li>売り込まずに売れる仕組み</li>
              <li>あなたから買いたいと言わせる商品コンセプト</li>
              <li>増え続ける売上</li>
              <li>顧客との関係を強化</li>
              <li>あなたのビジネス・カテゴリーでのトップポジション</li>
              <li>スタッフ間での意識の統一</li>
              <li>スタッフへ明確なビジョンを提示しリーダーシップを強化</li>
            </ul>
            <p>
              わたしたち Alizza Ideal
              は、わかりやすく理解しやすいコミュニケーションこそが競争で優位に働き、あなたがライバルに打ち勝つことが出来ると信じています。
            </p>
            <p>
              わかりやすく理解しやすいメッセージを発信出来るようになれば、成功は約束されたも同然です。
            </p>
          </div>
        </motion.div>
        <div className="text-center mx-auto mt-12.5 gap-7.5 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
          詳細を知るために、スケジュールを確保して下さい
        </div>
        <div className="mt-10">
          <Join>サービス説明をスケジュール</Join>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  )
}

export default Plan
