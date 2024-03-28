"use client"
import React from "react"
import { encourageData, type Encourage } from "./encourageData"
import SingleEncourage from "./SingleEncourage"
import Link from "next/link"
import Subscribe from "@/components/common/subscribe"
import { SoloPreneur, 個人起業家 } from "@/components/common/logos"

export default function Encourage() {
  return (
    <>
      {/* <!-- ===== Encouragees Start ===== --> */}
      <section id="encourage" className="p-0 m-0 mb-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <h1>
            成功した <個人起業家 /> のビジネスが成長し始めると……
          </h1>
          <div className="mt-12.5 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-7.5 lg:mt-15 grid-cols-2 xl:mt-20 xl:gap-12.5">
            {encourageData &&
              encourageData.map((p, key) => {
                return <SingleEncourage key={key} {...p} />
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

      {/* <!-- ===== Encourage End ===== --> */}
    </>
  )
}
