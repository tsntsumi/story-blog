import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"

const Offer = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section id="cta" className="home">
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-7.5 py-12.5 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-12.5 xl:px-17.5 xl:py-16">
          <div className="flex flex-wrap gap-8 lg:flex-nowrap md:items-center md:justify-between md:gap-0">
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
              className="animate_left lg:w-1/2"
            >
              無料Webサイト・テンプレートをダウンロードして
              <h2 className="mb-4 w-11/12 text-3xl text-justify font-bold text-black dark:text-white xl:text-sectiontitle4">
                LP型ホームページを作ろう
              </h2>
              <p>
                たくさんメッセージを書いているのに、
                なかなか分かってもらえないホームページ、
                伝わらないから注文の入らないホームページを見直しましょう。
              </p>
              <p>
                シンプル明解なメッセージで、見込み客と注文を獲得できるLP型のホームページをつくりませんか？
              </p>
              <p>
                Alizza
                Idealの「ストーリーライター」LINE公式アカウントでお友だちになって、
                無料のWebサイト・テンプレートをダウンロードして下さい。
                LP型のホームページが簡単に構築できます。
              </p>
              <div>
                <a
                  data-v-6fa6a74a=""
                  href="https://lin.ee/dIMYuwu"
                  className="p-4"
                >
                  <Image
                    data-v-6fa6a74a=""
                    src="/images/icon/line-add-friend-ja.png"
                    width="92"
                    height="32"
                    alt="友だちになる"
                    className="max-h-10 mx-auto"
                  />
                </a>
              </div>
            </motion.div>
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
              className="animate_right lg:w-[45%]"
            >
              <div className="flex flex-wrap md:flex-nowrap items-center justify-center md:justify-end xl:justify-between">
                <Image
                  width={800}
                  height={800}
                  src="/images/shape/offer-01-small.png"
                  alt="Story Website Template"
                  className="mx-auto w-[300px]"
                />
                <div className="inline w-fit mx-auto">
                  <a
                    data-v-6fa6a74a=""
                    href="https://lin.ee/dIMYuwu"
                    className="p-4"
                  >
                    <Image
                      alt="line qr"
                      src="https://qr-official.line.me/gs/M_259nufef_GW.png?oat__id=3206600&oat_content=qr"
                      className="mx-auto w-[180px] min-w-[180px]"
                      width={180}
                      height={180}
                    />
                    <Image
                      data-v-6fa6a74a=""
                      src="/images/icon/line-add-friend-ja.png"
                      alt="友だちになる"
                      className="m-4 mx-auto w-2/3"
                      width="92"
                      height="32"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  )
}

export default Offer
