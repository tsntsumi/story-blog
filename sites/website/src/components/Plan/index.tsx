"use client"
import React from "react"
import { planData, type Plan } from "./planData"
import SinglePlan from "./SinglePlan"
import Link from "next/link"
import Subscribe from "@/components/common/subscribe"

const SoloPreneur = () => (
  <ruby>
    個人起業家
    <rp>(</rp>
    <rt>ソロプレナー</rt>
    <rp>)</rp>
  </ruby>
)
const 個人起業家 = () => <SoloPreneur />

export default function Plan() {
  return (
    <>
      {/* <!-- ===== Planes Start ===== --> */}
      <section id="plan" className="pt-25">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <h1 className="text-center">
            コンマ２つの
            <個人起業家 />
            ビジネスを構築する方法
          </h1>
          <div className="mt-12.5 grid grid-cols-3 gap-7.5 lg:mt-15 grid-cols-2 xl:mt-20 xl:gap-12.5">
            {planData &&
              planData.map((p, key) => {
                return <SinglePlan key={key} {...p} />
              })}
          </div>
          <div className="my-8 mx-auto">
            <Link href="https://meet.alizza-ideal.com">
              <Subscribe className="text-xs md:text-sm py-4 px-6">
                相談を予約
              </Subscribe>
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- ===== Planes End ===== --> */}
    </>
  )
}
