"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Join from "../Join"
import { motion } from "framer-motion"

const CTA = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section className="overflow-hidden px-2 mx-2 md:mx-18 xl:mx-32">
        <div className="overfulow-hidden grid md:grid-cols-2 gap-4 justify-between rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-4 md:px-7.5 py-4 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5">
          <div>
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20
                },

                visible: {
                  opacity: 1,
                  x: 0
                }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left text-justify"
            >
              <div className="relative">
                <div className="bg-orange-400 text-white rounded-full p-2 px-6 w-fit">
                  <div className="text-sm md:text-xl text-bold">
                    地域密着でがんばる
                  </div>
                  <div className="text-sm md:text-xl text-bold">
                    店舗オーナーのための集客勉強会
                  </div>
                </div>
                <div className="flex flex-col rounded-full bg-orange-600 text-white text-sm md:text-3xl font-bold w-fit items-center justify-center w-[4rem] h-[4rem] md:w-[8rem] md:h-[8rem] absolute top-[-1rem] right-[-1rem]">
                  <div>参加費</div>
                  <div>無料</div>
                </div>
              </div>

              <h2 className="mb-5 md:pr-10 text-xl md:text-2xl font-bold text-black dark:text-white xl:text-hero ">
                あなたのお店をGoogle上位表示にして
                <br />
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  新規客を大量に
                </span>
                集める方法
              </h2>
              <h3 className="my-1 text-lg md:text-xl">開催方法</h3>
              <div className="text-sm md:text-base">
                Googleミートによるリモート会議
              </div>
              <h3 className="my-1 text-lg md:text-xl">開催日時</h3>
              <ul className="my-1 text-sm md:text-base">
                <li>12月5日（火）14:00〜16:00</li>
                <li>12月6日（水）14:00〜16:00</li>
                <li>12月8日（金）14:00〜16:00</li>
                <li>12月11日（月）14:00〜16:00</li>
              </ul>
              <h3 className="my-1 text-lg md:text-xl">申込み締め切り</h3>
              <div className="text-sm md:text-base">
                １２月４日（月）２３：５９まで
              </div>
              <h3 className="my-1 text-lg md:text-xl">定員</h3>
              <div className="text-sm md:text-base">１〜１０名程度</div>
              <h3 className="my-1 text-lg md:text-xl">応募方法</h3>
              <p className="text-sm md:text-base">
                LINEでお友だちになって、当日使用するスライド資料をダウンロードした後、
                ご希望の開催日をご登録下さい。
              </p>
              <h3 className="my-1 text-lg md:text-xl">参加方法</h3>
              <p className="text-sm md:text-base">
                ご希望の開催日に近づきましたら、
                参加用のURLリンクをお伝えします。
              </p>
              <p className="text-xs m-4">
                勉強会の最後に、ご希望の方にだけ、
                次回に予定しているビジネスプロフィール運用ガイド勉強会のご案内があります。
              </p>
            </motion.div>
          </div>
          <div className="mx-auto bg-slate-50 rounded-lg">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20
                },

                visible: {
                  opacity: 1,
                  x: 0
                }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right "
            >
              <div className="flex flex-col flex-wrap items-center justify-center">
                <Image
                  width={800}
                  height={800}
                  src="/images/hero/gbp-setup-guide-table.png"
                  alt="GBP Setup Guide"
                  unoptimized
                  className="w-full object-cover rounded-t-lg"
                />
                <a
                  data-v-6fa6a74a=""
                  href="https://lin.ee/dIMYuwu"
                  className="mx-auto justify-center my-4"
                >
                  <Image
                    src="https://qr-official.line.me/gs/M_534dvpmo_GW.png?oat__id=3226879&oat_content=qr"
                    className="w-[180px] min-w-[180px] rounded-lg"
                    alt="QR"
                    width={180}
                    height={180}
                  />
                </a>
              </div>
              <Join>一緒に勉強する</Join>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  )
}

export default CTA
