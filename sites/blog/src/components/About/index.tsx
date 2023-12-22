"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Join from "../Join"

const About = () => {
  return (
    <>
      {/* <!-- ===== About Start ===== --> */}
      <section className="home">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/content.svg"
                alt="Why clear, concise messaging matters to you"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/landingpage.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                ホームページを
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  ランディングページ
                </span>
                として立ち上げる
              </h2>
              <p>
                ランディングページはあなたのビジネスの顔です。
                単にビジネスのイメージを広めるだけのホームページとは違って、
                あなたが解決する問題を伝え、あなたの製品をソリューションとして位置づけ、
                見込み客を獲得し、成約してコンバージョンします
              </p>
              <Join>一緒に始めましょう</Join>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section className="home">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              className="animate_left md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                見込み客を獲得するための
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  コンテンツ
                </span>
                を作る
              </h2>
              <p>
                どうやって見込み客を獲得すればいいのでしょうか？それには、あなたのビジネスの対象となる人たちが欲しがり、ダウンロードしたくなるコンテンツを作成して下さい。
              </p>
              <Join>一緒に始めましょう</Join>
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
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/content.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/content.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}

      {/* <!-- ===== About Three Start ===== --> */}
      <section className="home">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="/images/about/nurturing.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="/images/about/nurturing.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                メッセージを通じて
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  関係を育む
                </span>
              </h2>
              <p>
                あなたの見込み客の殆どは、すぐには注文をしません。
                魅力的で楽しく、希望に満ちた無料の価値のあるメッセージを提供し、
                見込み客と連絡を取り続けましょう。
              </p>

              <Join>一緒に始めましょう</Join>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Three End ===== --> */}

      {/* <!-- ===== About Foure Start ===== --> */}
      <section className="home">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5">
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
              className="animate_left md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  お客さんに商品を推す
                </span>
                メッセージを作る
              </h2>
              <p>商品を推すと言っても、強く売り込む必要はありません。</p>
              <p>
                価値ある情報を届けて見込み客からの信頼が高まったら、商品を推すタイミングです。
              </p>
              <p>
                見込み客が、あなたの商品が抱えている問題を解決できると理解できていれば、
                ひとりでに財布のひもをゆるめ、注文せずにはいられなくなります。
              </p>
              <Join>一緒に始めましょう</Join>
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
              className="animate_right relative mx-auto hidden aspect-[588/526.5] md:block md:w-1/2"
            >
              <Image
                src="./images/about/closing.svg"
                alt="About"
                className="dark:hidden"
                fill
              />
              <Image
                src="./images/about/closing.svg"
                alt="About"
                className="hidden dark:block"
                fill
              />
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Foure End ===== --> */}
    </>
  )
}

export default About
