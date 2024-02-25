import React from "react"
import Image from "next/image"
import Script from "next/script"
import { motion } from "framer-motion"

const Magnet = () => {
  return (
    <>
      {/* <!-- ===== Magnet Start ===== --> */}
      <section
        id="lead-magnet"
        className="overflow-hidden pt-24 px-4 md:px-8 2xl:px-0"
      >
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
              <h2 className="mb-4 w-11/12 text-3xl text-justify font-bold text-black dark:text-white xl:text-sectiontitle4">
                LINEでお友だちになると、ご予約するときに便利です。
              </h2>
              <p>そして、今なら</p>
              <h3 className="mb-4 w-11/12 text-3xl text-justify font-bold text-black dark:text-white xl:text-sectiontitle4">
                まきせのストレッチブック
              </h3>
              <p className="indent-0">PDFをダウンロードしていただけます。</p>
              <p>
                お仕事中の空いた時間にストレッチして、
                体の歪みを予防し、仕事のパフォーマンスを取り戻して下さい。
              </p>
              <div className="text-center mt-12 mx-auto">
                <a
                  data-v-6fa6a74a=""
                  href="https://lin.ee/COpvvk1"
                  className="p-4"
                >
                  まきせ鍼灸整骨院のLINE公式アカウント「まきせの健康ライフ」
                  <Image
                    data-v-6fa6a74a=""
                    src="/images/icon/line-add-friend-ja.png"
                    width="92"
                    height="32"
                    alt="友だちになる"
                    className="max-h-10 mx-auto inline-block"
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
                  width={600}
                  height={600}
                  src="/images/shape/makise-offer-pdf.png"
                  alt="まきせのストレッチブック"
                  className="mx-auto w-[300px]"
                />
                <div className="inline w-fit mx-auto">
                  <a
                    data-v-6fa6a74a=""
                    href="https://lin.ee/COpvvk1"
                    className="p-4"
                    onClick={() =>
                      gtag_report_conversion("https://lin.ee/COpvvk1")
                    }
                  >
                    <Image
                      alt="line qr"
                      src="/images/shape/S_gainfriends_2dbarcodes_GW.png"
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
      {/* <!-- ===== Magnet End ===== --> */}
    </>
  )
}

export default Magnet
