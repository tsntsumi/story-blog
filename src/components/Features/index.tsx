"use client"
import React from "react"
import featuresData from "./featuresData"
import SingleFeature from "./SingleFeature"
import SectionHeader from "../Common/SectionHeader"
import FeaturesDetail from "./Details"
import Join from "@/components/Join"

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "ストーリーによる戦略",
              subtitle: (
                <>
                  ストーリー・セールスファネル戦略を採用すれば、あなたのビジネスが
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                    成長し続けます
                  </span>
                </>
              ),
              description: (
                <>
                  ストーリー・セールスファネル戦略の概略がわかったら、その次は？ストーリー・セールスファネル戦略の仕組みを理解しただけでは、ビジネス成長にはつながりません。つまり、その時こそ、ストーリー・セールスファネル戦略を導入する時です。
                </>
              )
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {featuresData?.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
          <Join>LINEでメッセージを送る</Join>
        </div>
      </section>

      <FeaturesDetail />

      {/* <!-- ===== Features End ===== --> */}
    </>
  )
}

export default Feature
