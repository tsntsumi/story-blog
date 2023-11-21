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
      <section className="overflow-hidden px-4 py-8 md:px-8 ">
        <div className="overfulow-hidden grid md:grid-cols-2 gap-4 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-4 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5">
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
              <h2 className="my-4 w-11/12 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle4">
                一緒にGoogleビジネスプロフィールを勉強しよう
              </h2>
              <p>
                Googleビジネスプロフィールを、適当に設定してしまうと、あなたのお店が見つけにくくなってしまいます。
              </p>
              <p>
                つまり、新しいお客さんと出会えるチャンスがなくなってしまうんです。
              </p>
              <p>
                LINEで「Googleマップ集客情報室」(@534dvpmo)のお友だちになって、
                「Googleビジネスプロフィール：ビジネス情報設定ガイド」をダンロードしてください。
                そして、一緒に勉強しましょう。
              </p>
              <p>
                参加費は、１２月４日までなら、私の誕生日記念ということで、通常3,000円のところ０円です。
              </p>
              <p className="text-xs m-4">
                勉強会の最後に、ご希望の方にだけ、
                次回に予定しているビジネスプロフィール運用ガイド勉強会のご案内があります。
              </p>
              <Join>一緒に勉強する</Join>
            </motion.div>
          </div>
          <div>
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
              <div className="grid grid-rows-2 items-center justify-center">
                <Image
                  width={800}
                  height={800}
                  src="/images/hero/gbp-setup-guide-table.png"
                  alt="GBP Setup Guide"
                  unoptimized
                  className="h-[300px] w-[300px] object-cover rounded-lg"
                />
                <a
                  data-v-6fa6a74a=""
                  href="https://lin.ee/dIMYuwu"
                  className="mx-auto justify-center"
                >
                  <Image
                    src="https://qr-official.line.me/gs/M_534dvpmo_GW.png?oat__id=3226879&oat_content=qr"
                    className="w-[180px] min-w-[180px]"
                    alt="QR"
                    width={180}
                    height={180}
                  />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  )
}

export default CTA
