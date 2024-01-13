"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Subscribe from "@/components/Common/Subscribe"
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
                  <div>ほとんどの人が、お客に気づかれていない</div>
                </>
              ),
              description: (
                <div className="w-full text-adjustment">
                  <p>
                    ほとんどの集客できていない人は、お客に気づかれていません。
                    価値と魅力がズバッと一発でわかるキャッチコピーがないからです。
                  </p>
                  <p>
                    一撃で価値が伝わらないキャッチコピーが、こんな問題を引き起こします。
                  </p>
                  <ul className="list-outside pl-6">
                    <li>
                      あなたの商品の素晴らしさどころか、
                      それが何なのかさえ伝わらない
                    </li>
                    <li>
                      あなたの商品が、競合他社のものとどう違うのか伝わらない
                    </li>
                    <li>
                      似たような商品が溢れているのに、なぜあなたのを買うべきか伝わらない
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
                ほとんどの商品は、良さが
                <span className="marker-blue">届いていない</span>
              </h2>
              <p>
                インターネットでは、年間３千億テラバイトのデータが流れています。
                ３千億テラバイトは、３千億ギガバイトの１０００倍です。
              </p>
              <p>
                インターネットに接続している人は、誰もが情報の大波にもまれています。
              </p>
              <p>
                そんな中で、いくら商品を宣伝したとて、 気が付かれなかったり、
                興味を惹かれなかったり、
                説明が複雑ですぐ判ってもらえなかったらどうなることでしょうか。
              </p>
              <h3>良さが伝わる前に、存在自体に気がつかれない</h3>
              <p>
                あなたの商品の良さが伝わる前に、データの大海原に沈んでしまい、
                浮かび上がることはありません。
              </p>
              <p>だから、みんな悩んでいます。</p>
              <p>あなただけが例外ではありません。</p>
              <p>
                つまり、あなたの商品が売れないのは、
                魅力が伝わっていないからではありません。
              </p>
              <p>興味を持たれていないから、でもありません。</p>
              <p>その前に見向きもされていないんです。</p>
              <p>だから、もし集客に悩んでいるなら</p>
              <h3 className="text-2xl">
                みんなに気が付かれる
                <span className="marker-blue">キャッチコピー</span>が必要です
              </h3>
              <p>
                みんなの注意を引いた上で、
                興味をそそらせ、欲しがらせ、記憶に残す必要があるんです。
              </p>
              <p>
                集客の錬金術では、その悩みを３つのテンプレートで解決します。
              </p>
              <div className="mt-6 w-fit mx-auto">
                <Subscribe />
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
                あなたの商品は
                <span className="marker-amber">わかりにくく</span>
                なってはいませんか？
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
                私の商品のよさは、一言では言い表せません。
                じっくりと時間をかけて説明する必要があるんです。
              </blockquote>
              <p>
                よい商品を持っているのに売れない人ほど、そのように言っています。
              </p>
              <p>
                しかし、一撃であなたの商品が何なのか理解できて、
                一発でその魅力的が伝わるキャチコピーを作れるとしたらどうでしょう？
              </p>
              <p>
                お客が、いつの間にかあなたの前からいなくなって、
                ライバル会社に行ってしまった、なんてことはなくなります。
              </p>
              <p>伝わらないメッセージは、知らせていないのと同じです。</p>
              <p>知られなければ、この世にないのと同じです。</p>
              <h3>お客はインターネットの大海でアップアップしている</h3>
              <p>
                大量の情報の大海原に飲み込まれている人たちは、
                シュパシュパと情報をスクロールして流し読みするだけです。
              </p>
              <p>そして、目に止まったコンテンツだけを読むんです。</p>
              <p>
                0.1秒で内容を読むかどうか判断し、読み始めて4秒以内には
                その先を読むかどうか決定します。
              </p>
              <h3>あなたの説明を読む義務はない</h3>
              <p>
                読み続けてもらうためには、あなたの商品は一体何なのか、
                どんな役立つものなのか、使ったらどんな素敵なことが起こるのか、
                一瞬で伝わらなければ読み続けてくれません。
              </p>
              <p>
                現代社会においては、タイパが最も優先されます。
                <strong>タイ</strong>ム・<strong>パ</strong>フォーマンスとは、
                使った時間でどれだけの利益を得られるかのことです。
              </p>
              <p>
                顔を見たこともないあなたのメッセージを、
                貴重な時間をかけてまで理解しようとする人はいません。
              </p>
              <h3>注目させるだけなら簡単です</h3>
              <p>
                迷惑系ユーチューバーや、怪しいネット広告のように、
                サムネやタイトルで釣ればいいんです。
              </p>
              <p>エロい画像や射幸心を煽る言葉を並べればいいんです。</p>
              <p>
                でも、それであなたのビジネスは、その先無事ですみますか？
                悪い噂が立ったら、日本を脱出して東南アジアに移住しますか？
              </p>

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
                注目を集めるだけじゃない、掛け値なしの魅力が伝わる
                <span className="marker-blue">キャッチコピー</span>
              </h3>
              <p>
                お客からの信用を大切にして、長いお付き合いをする関係を創りたいなら、
                掛け値なしの商品の価値をわかりやすく伝えるべきです。
              </p>
              <p>
                そうすれば、商品を際限なく値下げし続けることなく、
                商品の価値と等価交換することができるようになります。
              </p>
              <p>
                正当な評価と、正当な報酬を獲得することが出来るんです。
                そして、まっとうに得られる利益が残ります。
              </p>
              <div className="mt-6 w-fit mx-auto">
                <Subscribe />
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
