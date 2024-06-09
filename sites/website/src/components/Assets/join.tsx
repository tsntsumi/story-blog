"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const ADDFRIEND: string = "https://lin.ee/wZk6khE"
const LINEID: string = "@534dvpmo"

const Join = ({ children }: { children: React.ReactNode }): React.ReactNode => {
  return (
    <>
      {/* <!-- ===== Join Start ===== --> */}
      <section className="overflow-hidden px-4 pb-6 md:px-8 lg:py-10 xl:py-10 2xl:px-0">
        <div className="mx-auto">
          <div className="flex flex-wrap gap-5 items-center justify-center">
            <a
              href={`${ADDFRIEND}`}
              className=" font-bold text-xl justify-between large rounded-full border border-stroke px-6 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
              onClick={() => true}
            >
              {LINEID}
              <Image
                src="/images/icon/line-add-friend.png"
                width="92"
                height="32"
                alt="起業する勇気 LINE 公式アカウント"
                unoptimized
                className="inline-block border-4 rounded-lg border-white"
              />
            </a>
            <a
              href={`${ADDFRIEND}`}
              className="flex rounded-full bg-black px-7.5 py-2 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
              onClick={() => true}
            >
              {children}
            </a>
          </div>
        </div>
      </section>
      {/* <!-- ===== Join End ===== --> */}
    </>
  )
}

export default Join
