"use client"
import React from "react"
import NextImage from "next/image"
import { Image, Video } from "@/components/Assets/media"
import Link from "next/link"
import SlideIn from "@/components/Assets/slidein"

const Problem = () => {
  return (
    <>
      <section id="problem" className="p-0 m-0 px-2">
        <div className="rounded-t-2xl text-formal-accent bg-formal-main">
          <p className="indent-0 pt-2 my-0 text-center text-xs font-bold">
            お金を１円も使わずに
          </p>
          <p className="indent-0 pb-0 my-0 text-center text-base font-black">
            お客さん、２倍,３倍,５倍を目指すオンライン講座
          </p>
        </div>
        <div className="rounded-b-2xl p-2 m-0 bg-formal-main">
          <ul className="m-2 mx-8 py-2 pb-1 rounded-md text-xs bg-white list-image-[url(/images/icon/check-sign-icon.svg)]">
            <li>これまでの集客方法が通じない</li>
            <li>ネット集客はわからないことだらけ</li>
            <li>お金がかかりすぎる</li>
            <li>SNSは続かない</li>
            <li>これからは、ネット集客しないと</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Problem
