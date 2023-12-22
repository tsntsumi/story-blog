"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Join from "@/components/Join"
import SectionHeader from "@/components/Common/SectionHeader"

const Problem = () => {
  return (
    <>
      {/* <!-- ===== Problem One Start ===== --> */}
      <section id="problem" className="home">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <SectionHeader
            headerInfo={{
              title: "なぜ集まらないのか",
              subtitle: (
                <>
                  <div>みんな問題を抱えてます</div>
                  <div>私たちの誰もがお客に無視されているのです</div>
                </>
              ),
              description: (
                <div className="w-full text-adjustment">
                  <p>
                    なぜなら、大部分の経営者は、ズバッと一発一撃でわかる明解なメッセージを発信していないせいです。
                  </p>
                  <p>
                    明解でない、複雑なメッセージが、次の問題を全部引き起こしています
                  </p>
                  <ul className="list-outside pl-6">
                    <li>お客があなたの説明を明確に理解してくれない</li>
                    <li>
                      あなたの商品・サービスがどんなに競合他社と違うか説明できない
                    </li>
                    <li>
                      なぜ競合他社からではなく、あなたから買うべきか説明できない
                    </li>
                  </ul>
                </div>
              )
            }}
          />
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
              className="animate_left relative mx-auto hidden aspect-[720/404] md:block md:w-1/2"
            >
              <Image
                src="/images/about/reading.jpg"
                alt="Your message may not have been read."
                className="dark:hidden rounded-lg"
                fill
              />
              <Image
                src="/images/about/reading-light.jpg"
                alt="Your message may not have been read."
                className="hidden dark:block rounded-lg"
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
                あなたの良さが伝わらないのは、
                <span className="marker-blue">読まれていない</span>
                から
              </h2>
              <p>
                インターネットでは、年間３千億テラバイトのデータが流れています。
              </p>
              <p>
                インターネットに接続している人は、誰もが情報の嵐にさらされているのです。
              </p>
              <p>
                そんな中で、いくらメッセージを発信してもデータの大海原の中で埋もれてしまっているというわけです。
              </p>
              <p>だから、みんなが集客に悩んでいるのです。</p>
              <p>
                つまり、あなたのサービスの魅力が伝わっていないどころか、読まれていないどころか、その前に見向きもされていません。
              </p>
              <p>だから、もし集客に悩んでいるなら</p>
              <h3 className="text-2xl">
                あなたには、みんなの目に止まり一撃で伝わる魅力を言語化した
                <span className="marker-blue">キャッチコピー</span>が必要です
              </h3>
              <p>
                キャッチコピーの錬金術では、その悩みを２つのテンプレートと１つのシナリオで解決します
              </p>
              <p>内容を知るためにスケジュールを確保して下さい。</p>
              <div className="mt-6">
                <Join>サービス説明をスケジュール</Join>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Problem One End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section className="">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex flex-wrap items-center gap-8 lg:gap-32.5">
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
              className="animate_left w-full md:w-2/5"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                あなたのメッセージは、必要以上に
                <span className="marker-amber">複雑</span>
                になっていませんか？
              </h2>
              <div className="w-fit mx-auto">
                <Image
                  src="/images/about/complex-book.jpg"
                  alt="Your message is complex and confusing to your customers."
                  className="block md:hidden rounded-lg my-4"
                  width="720"
                  height="404"
                />
              </div>
              <blockquote className="px-18">
                私の商品のよさは、一言では言い表せません。詳しくじっくりと説明する必要があるんです。
              </blockquote>
              <p>よい商品を持っている人ほど、そのように言っています。</p>
              <p>
                しかし、一撃であなたの商品が何なのか、一発でどんなに魅力的なのかわからなければ、
                詳細な説明を読む前に、あなたの競合の商品を見に行ってしまいます。
              </p>
              <h3>
                なぜなら、多くの情報がインターネットを埋め尽くしているからです
              </h3>
              <p>
                メッセージを読む人は、シュパシュパと投稿をスクロールして流し読み、
                目に止まったコンテンツだけを読むんです。
              </p>
              <p>あなたもそうではありませんか？</p>
              <p>スクロールを止めるかどうかは、0.1秒で判断されるといいます。</p>
              <p>
                そして読み始めても、8秒以内に読み続けるかどうかを決めています。
                メッセージがシンプルで明確でなければ、読み進めることはありません。
              </p>
              <p>
                あったこともないあなたの言いたいことを、読解しなければならない
                義務はないのです。国語のテストではないのですから。
              </p>
              <p>だから、複雑で詳細な説明に入る前に、まず</p>

              <div className="w-fit mx-auto">
                <Image
                  src="/images/solutions/shupashupa.gif"
                  alt="shupa shupa scroll"
                  width="642"
                  height="361"
                  className="block md:hidden mx-auto rounded-lg"
                />
              </div>

              <h3 className="text-2xl">
                みんなの目に止まり一撃で伝わる魅力を言語化した
                <span className="marker-blue">キャッチコピー</span>が必要です
              </h3>
              <p>
                まずお客に、説明を読みたいと思わせ、それから詳しい説明をすればよいのです。
              </p>
              <p>
                親しくもないのに、いきなり長い話をしようとしても、避けられてしまいます。
                街角での怪しい勧誘のように思われてしまうんです。
              </p>
              <p>
                キャッチコピーの錬金術は、２つのテンプレートと１つのシナリオで、みんなの目を惹きつけ、一撃で伝わる魅力を言語化し、段階を踏んで買う気にさせます。
              </p>
              <p className="mt-12">
                内容を知るためにスケジュールを確保してください
              </p>
              <div className="mt-6">
                <Join>サービス説明をスケジュール</Join>
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
              className="animate_right relative mx-auto aspect-[16/9] md:w-2/5"
            >
              <div className="hidden md:block flex flex-col gap-4 m-0 p-0 items-center justify-between">
                <Image
                  src="/images/about/complex-book.jpg"
                  alt="Your message is complex and confusing to your customers."
                  className="block dark:hidden rounded-lg my-4"
                  width="720"
                  height="404"
                />
                <Image
                  src="/images/about/complex.jpg"
                  alt="Your message is complex and confusing to your customers."
                  className="hidden md:dark:block rounded-lg my-4"
                  width="720"
                  height="404"
                />
                <Image
                  src="/images/solutions/shupashupa.gif"
                  alt="shupa shupa scroll"
                  width="642"
                  height="361"
                  className="hidden md:block rounded-lg my-4"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}
    </>
  )
}

export default Problem
