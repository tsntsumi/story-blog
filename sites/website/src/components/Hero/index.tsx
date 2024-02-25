"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import Join from "@/components/common/join"
import {
  BookWithLineTalk,
  BookWithCalendar,
  BookWithPhoneCall
} from "@/components/common/book"

const Hero = () => {
  const [email, setEmail] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <section className="overflow-hidden pb-0 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:py-0">
          <div className="flex lg:items-start lg:gap-8 xl:gap-32.5">
            <div className="w-8/10 md:mx-auto text-justify">
              <h1 className="h4 mb-8 text-sm md:text-2xl text-center font-medium rounded-full bg-orange-500 px-6 py-1 text-white">
                水戸市で「慢性のしびれ・痛み」といえば、
                <span className="whitespace-nowrap">
                  まきせにお任せください
                </span>
              </h1>
              <div className="flex flex-wrap flex-col">
                <div>
                  <h1 className="mb-5 text-2xl font-bold text-black dark:text-white xl:text-6xl">
                    もし、医師もお手上げの慢性のしびれと痛みを
                    <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                      たった数回で
                    </span>
                    改善できて再発しないとしたら？
                  </h1>
                  <div className="flex flex-nowrap items-end md:items-start gap-4 ">
                    <div className="flex flex-col justify-between w-1/2 md:w-full text-xl md:text-5xl">
                      <p className="indent-0 mb-6">
                        ずっと改善されず、もう諦めているなら
                      </p>
                      <p className="indent-0">
                        一度だけ、わたしを信じてみて下さい……
                      </p>
                      <p className="text-sm mt-10 indent-0 m-0 p-0">
                        ご予約は画面上部の「ご予約はこちら」をタップしてください
                      </p>
                    </div>
                    <div className="w-2/5 md:w-1/2">
                      <Image
                        src="/images/hero/hero-image.png"
                        alt="まきせ院長"
                        width="720"
                        height="1024"
                        className="object-cover w-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
