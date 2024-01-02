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
                  <div>集客できないのは</div>
                  <div>お客に無視されているから</div>
                </>
              ),
              description: (
                <div className="w-full text-adjustment">
                  <p>
                    なぜなら、大部分の人はズバッと一発一撃でわかる明解なメッセージを発信していないからです。
                  </p>
                  <p>
                    明解でない、複雑なメッセージが、こんな問題の根源になっています。
                  </p>
                  <ul className="list-outside pl-6">
                    <li>
                      お客があなたの商品・サービスの素晴らしさどころか、
                      内容さえ理解してくれない
                    </li>
                    <li>
                      あなたの商品・サービスが、競合他社と比べてどう違うか、
                      どんなにいいものなのか伝わらない
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
                <span className="marker-blue">見られていない</span>
                から
              </h2>
              <p>
                インターネットでは、年間３千億テラバイトのデータが流れています。
              </p>
              <p>
                インターネットに接続している人は、誰もが情報の嵐にさらされているのです。
              </p>
              <p>
                そんな中で、いくらメッセージを発信しても、それが目を惹きつけられなかったり、読むのに時間がかかったり、複雑で直感的に理解できなかったら、データの大海原の中で埋もれてしまうというわけです。
              </p>
              <p>だから、みんなが集客に悩んでいるのです。</p>
              <p>
                つまり、あなたのサービスの魅力が伝わっていないどころか、読まれていないどころか、その前に見向きもされていません。
              </p>
              <p>だから、もし集客に悩んでいるなら</p>
              <h3 className="text-2xl">
                あなたに必要なのは、みんなの目に止まり一撃で伝わる魅力を言語化した
                刺さる<span className="marker-blue">キャッチコピー</span>です
              </h3>
              <p>
                集客の錬金術では、その悩みを３つのテンプレートでシナリオで解決します。
              </p>
              <div className="mt-6">
                <Join>
                  <div className="grid grid-cols-1 justify-center">
                    <div className="text-sm mx-auto">集客の錬金術って何？</div>
                    <div>知るためのスケジュールをおさえる</div>
                  </div>
                </Join>
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
                あなたのメッセージは
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
              <blockquote className="px-18 text-justify">
                私の商品のよさは、一言では言い表せません。詳しくじっくりと説明する必要があるんです。
              </blockquote>
              <p>よい商品を持っている人ほど、そのように言っています。</p>
              <p>
                しかし、ズバン！と一撃であなたの商品が何なのか、
                バシ！っと一発でどんなに魅力的なのかわからなければ、
                詳細な説明を読む前に、お客はあなたの競合の商品に流れていってしまいます。
              </p>
              <p>伝わらないメッセージは、知らせていないのと同じです。</p>
              <p>商品が知られなければ、ないのと同じです。</p>
              <h3>
                なぜなら、膨大な情報がインターネットを埋め尽くしているから
              </h3>
              <p>
                メッセージを読む人は、シュパシュパと投稿をスクロールして流し読み、
                目に止まったコンテンツだけを読むんです。
              </p>
              <p>あなたもそんなふうに読んでいるのでは？</p>
              <p>スクロールを止めるかどうかは、0.1秒で判断されるといいます。</p>
              <p>
                そして読み始めたとしても、4秒以内に先を読むかどうかを決めています。
                メッセージがシンプルで明確で理解しやすくなければ、
                肝心の説明まで読み進めることはありません。
              </p>
              <p>
                お客は、会ったこともないあなたのメッセージを、
                貴重な時間をかけて読解しなければならない義務はないのです。
              </p>
              <p>だからこそ、複雑で詳細な説明に入る前に、まず</p>

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
                みんなの目に止まり、魅力が鬼伝わる言語化をした
                <span className="marker-blue">キャッチコピー</span>が必要です
              </h3>
              <p>
                まずお客に、メッセージを読みたいと思わせ、
                それから徐々に詳しい説明をすればよいのです。
              </p>
              <p>
                親しくもないのに、いきなり長い話をしようとしても、避けられてしまいます。
                まるで、買うまで帰らせてくれない、怪しい勧誘のように思われてしまいます。
              </p>
              <div className="mt-6">
                <Join>
                  <div className="grid grid-cols-1 justify-center">
                    <div className="text-sm mx-auto">集客の錬金術って何？</div>
                    <div>知るためのスケジュールをおさえる</div>
                  </div>
                </Join>
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
