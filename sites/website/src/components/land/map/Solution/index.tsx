"use client"
import React from "react"
import { motion } from "framer-motion"
import { Image, Video } from "@/components/Assets/media"
import { solutionData } from "./solutionData"
import SlideIn from "@/components/Assets/slidein"
import Link from "next/link"
import Schedule from "@/components/land/map/Assets/Schedule"
import CtaButton from "@/components/land/Assets/Cta/Button"

export default function Solution() {
  return (
    <>
      <section id="solution" className="p-0 m-0 px-2">
        <div className="mx-auto max-w-c-1315 p-4 pb-0 md:px-4 xl:px-16 text-justify">
          <h1 className="text-xl text-center traking-4 bg-black text-white p-1 px-2 rounded-full ">
            店舗オーナーのネット集客講座
          </h1>
          <div className="text-sm text-center mt-0 pt-0">
            パソコン初心者でも、パート主婦まかせでもOK
          </div>
          <div className="w-full py-0 my-0">
            <Image
              src="gs://story-made.appspot.com/images/land/map/map-shukyaku-logo.png"
              alt="Webinar logo"
              width={554}
              height={199}
              className="object-cover w-full"
            />
          </div>
        </div>
        <div className="mx-4">
          <h2 className="text-sm mx-auto max-w-c-1315 m-0 my-2 px-4 py-0">
            店舗が、今取り組むべきGoogle
            <span className="tracking-tight">ビジネスプロフィール</span>
            を使ったマップ集客の全て
          </h2>
          <h3 className="my-0 py-2 rounded-t-lg w-full bg-formal text-formal-accent text-center">
            講師紹介：堤紀久夫
          </h3>
          <div className="mx-auto max-w-c-1315 py-2 rounded-b-lg my-0 px-4 text-justify text-xs text-black bg-formal-light">
            <div className="columns-2">
              <p className="mt-0 pt-0">はじめまして、「堤」と申します</p>
              <p>
                わたしが初めてGoogleマップでの集客に出会ったのは、
                ２０１５年ごろ、行きつけの場末のスナックでした。
              </p>
              <p>
                そのお店の情報をGoogleマップに登録するのを手伝ったことがきっかけでした。
              </p>
              <p>
                そこからGoogleマップにホームページに代わる可能性を見つけて、
                情報を集め、実際にやってみて実践で経験を積んできました。
              </p>
              <p>
                昨年2023年には、ある整体院さんのマップの登録情報を見直しただけで、
                ３ヶ月間で10万アクセスを達成させています。
              </p>
              <p>
                わたしは、コロナ禍が始まったばかりの頃に、
                ある事情から独立せざるを得ななくなり、
                たいへんツライ思いをしてきました。
              </p>
              <p>
                そのことから、少しでも店舗オーナーさんの力になりたい、
                個人で独立・起業している方の力になりたい思ってきました。
              </p>
              <p>
                そこで今回、わたしの経験の全てをお伝えする講座を開催することにしました。
              </p>
              <p>
                不安定な時代だからこそ、安定的に集客できる効果の高いマップ集客のノウハウを手に入れてほしいと思ってます。
              </p>
              <div className="py-2 w-full md:w-2/3 mx-auto">
                <Image
                  src="gs://story-made.appspot.com/images/hero/avatar.png"
                  alt="堤のプロフィール写真"
                  width={720}
                  height={720}
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="text-xs leading-tight mt-2 w-fit mx-auto">
          <Schedule />
          <div className="text-xs ml-4 text-black">
            <span className="text-sm font-bold">参加費</span>
            <span>
              ： <span className="text-base font-bold">10,000</span>
            </span>
            <span className="text-[7pt]">円(＋税)</span>
          </div>
        </div>
        <SlideIn className="animate_bottom">
          <div className="pb-4">
            <CtaButton>
              <Link href="/map/menu">今すぐ席を確保する</Link>
            </CtaButton>
          </div>
        </SlideIn>
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
    </>
  )
}
