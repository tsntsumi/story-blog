"use client"
import React from "react"
import { planData, type Plan } from "./planData"
import SinglePlan from "./SinglePlan"
import Link from "next/link"
import Subscribe from "@/components/common/subscribe"
import { SoloPreneur, 個人起業家 } from "@/components/common/logos"

export default function Plan() {
  return (
    <>
      {/* <!-- ===== Planes Start ===== --> */}
      <section id="plan" className="p-0 m-0 pb-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0 text-justify">
          <h1>毎月コンマが２つ見られる高収益の ビジネスを構築する方法</h1>
          <div className="mt-12.5 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-7.5 lg:mt-15 grid-cols-2 xl:mt-20 xl:gap-12.5">
            {planData &&
              planData.map((p, key) => {
                return <SinglePlan key={key} {...p} />
              })}
          </div>
          <div className="my-8 mx-auto">
            <Link href="https://meet.alizza-ideal.com">
              <Subscribe className="text-xs md:text-sm py-4 px-6 mx-auto">
                無料相談会をスケジュール
              </Subscribe>
            </Link>
          </div>
        </div>
      </section>

      {/* <!-- ===== Planes End ===== --> */}
    </>
  )
}
