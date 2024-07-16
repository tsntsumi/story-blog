"use client"
import React from "react"
import { Image, Video } from "@/components/Assets/media"
import SlideIn from "@/components/Assets/slidein"
import Schedule from "@/components/coach/Assets/scheduletocall"

export default function Plan() {
  return (
    <>
      <section id="plan" className="p-0 m-0 pb-10">
        <div className="py-4 bg-ai-yellow text-black">
          <SlideIn className="animate_right">
            <h2 className="bg-ai-blue ml-4  p-4 pl-10 rounded-l-full text-white">
              成長し続けるコーチング・ビジネスを構築する方法
            </h2>
          </SlideIn>
          <div className="my-8">
            <ul className="text-ai-blue list-none list-outside mx-0 px-0 flex flex-wrap text-justify">
              <li className="text-inherit w-1/3 px-4">
                <div className="flex items-center justify-center w-20 h-20 mb-2 mx-auto bg-ai-yellow rounded-full bg-gradient-to-b from-blue-400 to-blue-950">
                  <div className="flex items-center justify-center w-16 h-16 max-w-16 max-h-16 p-2 m-2 rounded-full mx-auto bg-transparent text-white border-4 border-white">
                    1
                  </div>
                </div>
                <h3 className="w-fit mx-auto text-sm md:text-lg">
                  『アイデアル・コーチング』ビジネス・スクールに参加する
                </h3>
                <div className="w-fit mx-auto text-sm">
                  スクールに参加すると、オンライン講座、 CRMソフトウェア、
                  オンラインコミュニティーにアクセスできます
                </div>
              </li>
              <li className="text-inherit w-1/3 px-4">
                <div className="flex items-center justify-center w-20 h-20 mb-2 mx-auto bg-ai-yellow rounded-full bg-gradient-to-b from-blue-400 to-blue-950">
                  <div className="flex items-center justify-center w-16 h-16 max-w-16 max-h-16 p-2 m-2 rounded-full mx-auto bg-transparent text-white border-4 border-white">
                    2
                  </div>
                </div>
                <h3 className="w-fit mx-auto text-sm md:text-lg">
                  マーケティング・ツールにアクセスする
                </h3>
                <div className="w-fit mx-auto text-sm">
                  集客テンプレートやプレゼンテーションサンプルを使って
                  時間を大幅に節約し、コーチングビジネスの成長を加速できます。
                </div>
              </li>
              <li className="text-inherit w-1/3 px-4">
                <div className="flex items-center justify-center w-20 h-20 mb-2 mx-auto bg-ai-yellow rounded-full bg-gradient-to-b from-blue-400 to-blue-950">
                  <div className="flex items-center justify-center w-16 h-16 max-w-16 max-h-16 p-2 m-2 rounded-full mx-auto bg-transparent text-white border-4 border-white">
                    3
                  </div>
                </div>
                <h3 className="w-fit mx-auto text-sm md:text-lg">
                  あなたのコーチング・ビジネスの成功を見守る
                </h3>
                <div className="w-fit mx-auto text-sm">
                  あなたの専門知識で、 人々の生活をより良いものに変える
                  有意義で収益性の高いコーチングを楽しんでください。
                </div>
              </li>
            </ul>
            <div className="mt-8 mb-4">
              <div className="text-center text-sm">
                あなたのコーチング起業の課題を発見する
              </div>
              <Schedule />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
