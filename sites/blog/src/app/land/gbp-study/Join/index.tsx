"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const Join = ({ children }) => {
  return (
    <>
      {/* <!-- ===== Join Start ===== --> */}
      <div className="overflow-hidden px-4 py-0 md:px-8 lg:py-10 xl:py-10 2xl:px-0">
        <div className="mx-auto">
          <div className="flex flex-wrap gap-5 items-center justify-center">
            <Link
              href="https://lin.ee/t69bsx2"
              className=" font-bold text-xl justify-between large rounded-full border border-stroke px-6 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
            >
              @534dvpmo{"  "}
              <Image
                src="/images/icon/line-add-friend-ja.png"
                width="92"
                height="32"
                alt="Googleマップ集客情報室 LINE公式"
                unoptimized
                className="inline-block border-4 rounded-lg border-white"
              />
            </Link>
            <Link
              href="https://lin.ee/t69bsx2"
              className="flex rounded-full bg-black px-7.5 py-2 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
            >
              {children}
            </Link>
          </div>
        </div>
      </div>
      {/* <!-- ===== Join End ===== --> */}
    </>
  )
}

export default Join
