"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const ADDFRIEND: string = "https://lin.ee/wZk6khE"
const LINEID: string = "@534dvpmo"
const LINENAME: string = "起業する勇気"

const Join = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return (
    <>
      <section className="overflow-hidden px-4 pb-6 md:px-8 lg:py-10 xl:py-10 2xl:px-0">
        <div className="flex flex-nowrap items-center justify-center gap-4">
          <div>
            <div>{LINEID}</div>
            <div>{LINENAME}</div>
          </div>
          <div>
            <Image
              src="/images/icon/line-add-friend.png"
              width="92"
              height="32"
              alt={`${LINENAME} LINE 公式アカウント`}
              unoptimized
              className="m-2 border-4 rounded-lg border-white"
            />
          </div>
          <a
            href={`${ADDFRIEND}`}
            className="rounded-full bg-green-600 text-xs px-4 py-2 text-white "
            onClick={() => true}
          >
            {children}
          </a>
        </div>
      </section>
    </>
  )
}

export default Join
