"use client"
import workingFeatureData from "./workingFeaturesData"
import SingleFeature from "./SingleFeature"
import SectionHeader from "../Common/SectionHeader"
import Join from "@/components/Join"

import { motion } from "framer-motion"
import Image from "next/image"

const Details = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="feature-1" className="py-6 lg:py-8 xl:py-10">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "一緒に構築",
              subtitle: (
                <>
                  あなたのセールス・ファネルを
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                    一緒に構築する時{" "}
                  </span>
                  Alizza Idealはこんなふうに仕事をします。
                </>
              ),
              description: ``
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Features item Start --> */}

            {workingFeatureData?.map((feature, key) => (
              <SingleFeature feature={feature} key={key} />
            ))}
            {/* <!-- Features item End --> */}
          </div>
          <Join>一緒に始めましょう</Join>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}

      {/* <!-- ===== Features Two Start ===== --> */}
      <section id="feature-2" className="py-20 lg:py-25 xl:py-30">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "シンプル明解",
              subtitle: (
                <>
                  シンプルで明解だから
                  <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                    説得力がある。
                  </span>
                  <br />
                  ストーリー・セールスファネル戦略とは？
                </>
              ),
              description: (
                <>
                  さあ、あなたもストーリー・セールスファネルを立ち上げましょう。その仕組みは次の通りです。
                </>
              )
            }}
          />
          {/* <!-- Section Title End --> */}
        </div>
      </section>

      {/* <!-- ===== Features Two End ===== --> */}
    </>
  )
}

export default Details
