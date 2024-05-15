"use client"
import React from "react"
import { Image, Video } from "@/components/Assets/media"
import { planData, type Plan } from "./planData"
import SinglePlan from "./SinglePlan"
import Link from "next/link"
import Schedule from "@/components/land/map/Assets/Schedule"
import CtaButton from "@/components/land/Assets/Cta/Button"

export default function Plan() {
  return (
    <>
      {/* <!-- ===== Planes Start ===== --> */}
      <section id="plan" className="p-0 m-0 px-2 mx-2">
        <h2 className="mt-2 py-2 text-center bg-formal text-formal-accent">
          この講座でわかること
        </h2>
        <div className="mb-2 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-7.5 grid-cols-2 xl:gap-12.5">
          {planData &&
            planData.map((p, key) => {
              return <SinglePlan key={key} {...p} />
            })}
        </div>
        <div className="text-sm text-justify w-fit mx-auto">
          <Schedule />
          <div className="text-xs ml-4 text-black">
            <span className="text-sm font-bold">参加費</span>
            <span>
              ： <span className="text-base font-bold">10,000</span>
            </span>
            <span className="text-[7pt]">円(＋税)</span>
          </div>
          <CtaButton>
            <Link href="/map/menu">今すぐ席を確保する</Link>
          </CtaButton>
        </div>
        <div className="w-full">
          <Image
            src="gs://story-made.appspot.com/images/land/map/map-shukyaku-offer.png"
            alt="マップ集客オファーイメージ写真"
            width={571}
            height={313}
            className="object-cover"
          />
        </div>
      </section>

      {/* <!-- ===== Planes End ===== --> */}
    </>
  )
}
