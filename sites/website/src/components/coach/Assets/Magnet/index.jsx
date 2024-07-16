"use client"
import React from "react"
import { Image } from "@/components/Assets/media"
import Link from "@/components/Assets/link"
import { CallToTheGuide } from "@/components/coach/CallToAction/GetTheGuide"

const HREF = "/pricing-guide"
const BOOKIMAGE =
  "gs://story-made.appspot.com/offers/適正価格設定ガイド.png"

export default function Magnet() {
  return (
    <>
      {/* <!-- ===== Magnet Start ===== --> */}
      <section id="lead-magnet" className="p-0 m-0">
        <div className="max-w-c-1315 m-4 mb-8 p-6 bg-amber-50 rounded-2xl md:px-8 xl:px-0">
          <div className="flex w-full md:flex-nowrap">
            <div className="text-sm w-1/2 pr-0">
              <h1 className="text-justify">
                <div className="text-lg rounded-full border-4 border-black px-2 w-fit">
                  盛らない・下げない
                </div>
                適正なコーチング価格設定ガイド
              </h1>
              <div className="my-4">
                <b>無料</b>
                の「適正価格設定ガイドブック」をダウンロードしてください
              </div>
              <p>
                あなたは、安すぎる価格でコーチングしていませんか？
                そのせいで、あなたのコーチング自身の価値を下げていませんか？
              </p>
              <p>
                このガイドブックを読んで、あなたのコーチングの価値に見合う、
                盛らない、下げない、
                適正価格のサービスメニューを作成し、より多くのクライアントの興味を惹きつけましょう。
              </p>
            </div>
            <div className="w-1/2 p-2 pr-0">
              <Image
                src={BOOKIMAGE}
                alt="適正価格設定ガイドブック"
                width={200}
                height={300}
                className="object-cover mx-auto"
              />
            </div>
          </div>
          <div className="mt-8 mb-2 mx-auto w-fit">
            <CallToTheGuide className="text-black" />
          </div>
        </div>
        <div className="clear-both" />
      </section>
      {/* <!-- ===== Magnet End ===== --> */}
    </>
  )
}
