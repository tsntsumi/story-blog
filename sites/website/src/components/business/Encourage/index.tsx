"use client"
import React from "react"
import { encourageData, type Encourage } from "./encourageData"
import SingleEncourage from "./SingleEncourage"
import Link from "next/link"
import Subscribe from "@/components/Assets/subscribe"
import { SoloPreneur, 個人起業家 } from "@/components/Assets/logos"
import SpecialOffer from "@/components/main/Assets/specialoffer"

export default function Encourage() {
  const workshopIsVisible: boolean = false
  return (
    <>
      <section id="encourage" className="p-0 m-0 mb-20">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          <h1 className="text-2xl">
            あなたのコーチング・ビジネスが成功し、成長し始めると……
          </h1>
          <div className="mt-12.5 grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-7.5 lg:mt-15 xl:mt-20 xl:gap-12.5">
            {encourageData &&
              encourageData.map((p, key) => {
                return <SingleEncourage key={key} {...p} />
              })}
          </div>
          <h1 className="text-2xl">さあ、旅に出よう、あなたの人生の旅に</h1>
          <p>
            Alizza Ideal でコーチング・ビジネスを学び、
            あなたのゴールに向かって旅にでかけましょう。
          </p>
          <p>そのときには、わたしもあなたのパーティーに加えて下さい。</p>
          <div className="my-8 mx-auto">
            <Link href="https://cal.alizza-ideal.com">
              <Subscribe className="text-xs md:text-sm py-4 px-6 mx-auto">
                無料相談会をスケジュール
              </Subscribe>
            </Link>
          </div>
          {workshopIsVisible && (
            <div>
              <h2 className="text-xl">
                まだ自信がなくて始められないという方は、わたしのワークショップを試してみてください
              </h2>
              <p>
                普段は10,000円で提供しているワークショップを、いまなら期間限定、無料でお試しいただけます。
              </p>
              <SpecialOffer />
            </div>
          )}
        </div>
      </section>
    </>
  )
}
