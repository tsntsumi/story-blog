"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Join from "@/components/common/join"

const About = () => {
  return (
    <>
      {/* <!-- ===== About One Start ===== --> */}
      <section
        id="about"
        className="overflow-hidden pt-24 pb-6 lg:pb-10 xl:pb-16"
      >
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5 flex-wrap md:flex-nowrap">
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
              className="animate_left relative mx-auto height-auto aspect-[16/9] block w-full md:w-1/2"
            >
              <Image
                src="/images/user/makise-self-intro.jpg"
                alt="self introduce"
                className="dark:hidden"
                width={720}
                height={404}
              />
              <Image
                src="/images/user/makise-self-intro.jpg"
                alt="self introduce"
                className="hidden dark:block"
                width={720}
                height={404}
              />
              <div className="text-center mt-2 text-sm">
                院長近影(2023年11月)　まきせ鍼灸整骨院受付にて
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
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_right md:w-1/2"
            >
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark">
                  自己紹介
                </span>
              </h2>
              <p>
                まきせ鍼灸整骨院、院長の牧瀬洋人です。当院は、私１人で運営・施術しています。
              </p>
              <p>
                出身は、生まれも育ちも鹿児島県種子島、ロケットや火縄銃で有名な島です。
              </p>
              <p>
                水戸市で開業するにあたっては、初めての土地でもあり、まわりから心配され、反対されたこともありました。
              </p>
              <p>
                しかし、今では、多くの患者さんからの信頼を得て、今日までやってこれています。
              </p>

              <h3>治療に対して何度も壁にぶつかってきました……</h3>
              <p>わたしは、整骨院の専門学校を卒業後、整形外科で入職。</p>
              <p>
                厚生労働省認可の教員資格と、３つの国家資格を取得し、
                縁もあって専門学校の講師も同時にするという二足のわらじを履くようになりました。
              </p>
              <h4>根本改善してあげたい</h4>
              <p>
                しかし、数年間施術をしていくうちに、施術後は改善するが、
                数日するとまた症状が戻るといった事が多々あったのです。
              </p>
              <p>それもあって、治療に対して何度も壁にぶつかりました。</p>
              <p>
                そこで全身をみる東洋医学の学校に通いはじめました。
                はり、きゅう師の国家資格も得ました。
              </p>
              <p>
                ですが、それでも補うことのできないことを、数多く経験しました。
              </p>
              <p>
                そこで、休日になると、いいと言われる講習会には、いくつも、いくつも
                参加したんです。
              </p>
              <p>
                なぜ、そこまでして根本改善にこだわったかというと、
                そうすることが、柔道選手時代にお世話になった整骨院の先生への
                恩返しだと思っているからです。
              </p>
              <h4>遂に、再現性の高い手法に出会えた</h4>
              <p>
                そんな折、たまたま行った講習会で、
                ゆがみ取りSPATの創始者の医師・鹿島田忠史先生と出会いました。
              </p>
              <p>
                SPATは、８０年の伝統のある『操体法』を元にした、
                バキバキさせない、優しい、安全な整体です。
                そもそも、『操体法』自体も、
                ８０年前に、数ある民間療法から学んで体系的に整理した療法です。
              </p>
              <p>
                SPATの効果は素晴らしく、今ではまきせ鍼灸整骨院のメインの施術となり、
                皆さんに感謝して頂いています。
              </p>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About One End ===== --> */}

      {/* <!-- ===== About Two Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5 flex-wrap md:flex-nowrap">
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
                柔道を引退した後、
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  第２の人生に
                </span>
                整骨院を選んだわけ
              </h2>
              <p>
                小、中、高、実業団と、27歳までオリンピックを目指し、柔道一筋でやってきました。
              </p>
              <p>
                そして、柔道を引退した際、今後の仕事、人生について考えに考えました。
              </p>
              <p>スポーツに携わりたいという強い気持ちもありました。。。</p>
              <p className="mt-8">
                最終的には、幼いころから整骨院にお世話になってたこともあり、整骨院の専門学校に入学する決断をしたんです。
              </p>
              <p>
                実は、柔道にのめり込んでいた時代には、ケガに悩まされ、２回手術も経験しました。
              </p>
              <p className="font-bold my-8">もう柔道をやめよう。。。</p>
              <p>何度も何度も思いました。。。</p>
              <p>
                でも、整骨院などでケアしてもらいながら、なんとか柔道を続けることができたのです。
              </p>
              <p>
                整骨院の専門学校に入学しようと決断したのは、
                選手時代にお世話になった整骨院の先生などの影響です。
              </p>
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
              className="animate_right relative mx-auto h-auto aspect-[588/526.5] block w-full md:w-1/2"
            >
              <Image
                src="./images/user/makise-judo.jpg"
                alt="近くの中学で子どもたちと練習"
                className="dark:hidden"
                width={720}
                height={480}
              />
              <Image
                src="./images/user/makise-judo.jpg"
                alt="近くの中学で子どもたちと練習"
                className="hidden dark:block"
                width={720}
                height={480}
              />
              <div className="text-center mt-2">
                院長近影：近くの中学で子どもたちと練習（2023年11月撮影）
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Two End ===== --> */}

      {/* <!-- ===== About Three Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5 flex-wrap md:flex-nowrap">
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
              className="animate_left relative mx-auto items-center justify-center block w-full"
            >
              <Image
                src="/images/about/makise-flat.jpg"
                alt="MAKISE Hiroto Incho"
                className="dark:hidden mx-auto object-cover"
                width={720}
                height={404}
              />
              <Image
                src="/images/about/makise-flat.jpg"
                alt="MAKISE Hiroto Incho"
                className="hidden dark:block mx-auto object-cover"
                width={720}
                height={404}
              />
              <div className="md:mx-16"></div>
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
                こんな施術を目指してます
              </h2>
              <div>
                <p>
                  わたしは、あなたの痛みの部分だけをみて施術して、
                  そのときだけ痛みを取り除けばいいとは考えていません。
                </p>
                <p>そうでははなく、全身を観て原因を探り施術をします。</p>
                <p>
                  整骨院の専門学校を卒業後、整形外科で入職して以来、
                  ずっとそのことばかり考えて、その方法を学んできました。。。
                </p>
                <h3>根本改善にこだわるのは</h3>
                <p>
                  痛みを根本からなくした上で、
                  患者様が家族で旅行に行く、子どもたちと遊ぶ、友だちと趣味を楽しむ、
                  といったことをできるようになっていただきたいと考えてきました。
                  そして実際に、多くの患者様にそうなっていただいています。
                </p>
                <p>
                  また、自分がやりたいことだけでなく、生活のため、家族のため、会社のため、
                  地域のためにやらなければならないことができなくなると、
                  大きなストレスになります。
                </p>
                <h3>大事なのは技術だけじゃない</h3>
                <p>
                  そんな改善方法に大事なのは、患者様と話し合うことです。
                  どんなことに悩んでいるのか、どんなことが出来るようになりたいのか、
                  しっかりとお話をお聞きします。
                </p>
                <p>
                  そして、こちらからもどのような施術をするのか、説明をしっかりして、
                  患者様に納得していただいて施術を行います。
                </p>
                <h3>
                  あなたの痛みを改善するのは、わたしではなく、あなたです。
                </h3>
                <p>
                  言わば、わたしがあなたの体を改善するのではなく、
                  あなた自身が主体となって改善を進めていくということです。
                </p>
                <p>
                  そういった意味で、あなたのニーズに合わせて施術をカスタマイズします。
                  あなたの症状にピッタリあったオーダーメイドの施術を提供いたします。
                </p>
                <p>
                  それによって、痛みを取るだけでなく、あなたの生活の質が向上し、
                  健康で幸せになってもらうことを願っています。
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Three End ===== --> */}

      {/* <!-- ===== About Foure Start ===== --> */}
      <section className="overflow-hidden pb-8 lg:pb-10 xl:pb-12">
        <div className="mx-auto max-w-c-1235 overflow-hidden px-4 md:px-8 2xl:px-0">
          <div className="flex items-center gap-8 lg:gap-32.5 flex-wrap md:flex-nowrap">
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
                医師も
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  当院を推薦
                </span>
                してくれています
              </h2>
              <p className="border-l-4 border-r-4 px-12 text-sm border-blue-800 ">
                【ソフト整体SPATⓇ】の創始者である医師の　鹿島田
                忠史先生　から推薦していただきました。
              </p>
              <div>
                <p>
                  私が考案した全身の「ソフト整体SPAT」の講習会に牧瀬洋人先生が参加されたのは、2010年5月のことです。
                </p>
                <p>
                  それ以来先生は熱心にソフト整体PATに取り組まれ、骨盤、胸椎、頸椎の認定試験を優秀な成績で合格されて全身の骨格矯正をマスターされました。
                </p>
                <h3>
                  牧瀬先生は技術のみならず原理も理解され、臨床に応用されてます
                </h3>
                <p>
                  牧瀬先生はゆがみ取りSPATの技術のみならず、その理論的裏づけである操体法の思想「操体原理」に対しても大変深い理解をお持ちで、臨床にもしっかり応用されています。
                </p>
                <p>
                  操体原理は、私の恩師橋本敬三医師が創案した
                  <strong>「気持ちよかったは、体によい」</strong>
                  という大変シンプルな原理ですが、治療や生活習慣改善の指針として非常に応用範囲が広いものです。
                </p>
                <h4>気持ちよく、安全に歪みを矯正されています</h4>
                <p>
                  操体原理を基盤として開発した骨格矯正法「ソフト整体SPAT」は、動きの分析で正確な歪み診断をおこないますので、
                  <strong>非常に安全</strong>な歪み矯正ができる手技療法です。
                </p>
                <p>
                  専門家向けDVDと関連書籍は累計約6500部販売され、医師を含め全国の臨床家の治療に取り入れられています。
                </p>

                <h3>痛みをとった上、日常生活もより快適に</h3>
                <p>
                  先生は、全身歪みの元となる骨盤･胸椎･頸椎の歪みを取って痛みを取るのみならず、柔軟性も高め、日常生活を快適に過ごせるようにされています。
                </p>
                <p className="my-2">
                  牧瀬先生は、長年にわたり医療専門学校で講師ならびに付属整骨院の院長を務め、高い施術技法のみならず広く深い医学知識、優れた診断能力をお持ちです。一般的な治療で改善が困難な症状でも劇的な効果を多く示されてきました。
                </p>
                <h3>自信を持って推薦します</h3>
                <p>
                  見かけはちょっとがっしりしていますが、笑顔が素敵でお人柄も非常に優しい方です。
                  私が自信を持って推薦いたします。
                </p>

                <p className="indent-0 w-full text-right">
                  2019年4月20日　鹿島田 忠史
                </p>
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
              className="animate_right relative mx-auto h-auto aspect-[588/526.5] block w-full md:w-1/2"
            >
              <Image
                src="/images/about/dr-kashimada.jpg"
                alt="Dr. Kashimada"
                className="dark:hidden mx-auto"
                width={142}
                height={184}
              />
              <Image
                src="/images/about/dr-kashimada.jpg"
                alt="Dr. Kashimada"
                className="hidden dark:block mx-auto"
                width={142}
                height={184}
              />
              <div className="flex flex-wrap items-center justify-center">
                <span>SPAT UNION CLUB会長</span>･<span>誠快醫院院長</span>{" "}
                <span>鹿島田 忠史 医師</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== About Foure End ===== --> */}

      {/* <!-- ===== About Five Start ===== --> */}
      <section className="overflow-hidden pb-20 lg:pb-25 xl:pb-30">
        <div className="mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
            牧瀬洋人院長の経歴と資格
          </h2>
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
            className="animate_left relative mx-auto items-center justify-center block w-full"
          >
            <div className="flex flex-wrap items-start justify-between">
              <div>
                <h3>経歴</h3>
                <ul>
                  <li>日本柔道整復専門学校 柔道整復科卒業</li>
                  <li>日本健康医療専門学校 鍼灸科卒業</li>
                </ul>
              </div>
              <div>
                <h3>職歴</h3>
                <ul>
                  <li>東京都内整形外科 勤務</li>
                  <li>埼玉県内接骨院 勤務</li>
                  <li>中央医療学園専門学校附属整骨院 元院長</li>
                </ul>
              </div>
              <div>
                <h3>講師歴</h3>
                <ul>
                  <li>大東医学技術専門学校 元講師</li>
                  <li>中央医療学園専門学校 元講師</li>
                  <li>大宮医療専門学院 元非常勤講師</li>
                </ul>
              </div>
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
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_right relative mx-auto items-center block w-full"
          >
            <div className="flex flex-wrap items-start justify-between">
              <div>
                <h3>保有資格</h3>
                <p>
                  自己紹介でもお話しましたが、国家資格のはり師、きゅう師、それと民間資格のSPATの資格は、
                  施術後は改善するが、数日するとまた症状が戻るといった事が多々あったことから、
                  根本治療をめざめざして取得したものです。
                </p>

                <h3>国家資格</h3>
                <ul>
                  <li>
                    柔道整復師(国家資格）
                    <Image
                      src="/images/about/judo-seihukushi-lisence.png"
                      width="512"
                      height="363"
                      alt="柔道整復師免許証（国家資格）"
                      className="object-cover mx-auto w-1/2 max-w-[512px]"
                    />
                  </li>
                  <li>
                    はり師（国家資格）
                    <Image
                      src="/images/about/harishi-lisence.png"
                      width="512"
                      height="363"
                      alt="はり師免許証（国家資格）"
                      className="object-cover mx-auto w-1/2 max-w-[512px]"
                    />
                  </li>
                  <li>
                    きゅう師（国家資格）
                    <Image
                      src="/images/about/kyushi-lisence.png"
                      width="512"
                      height="363"
                      alt="きゅう師免許証（国家資格）"
                      className="object-cover mx-auto w-1/2 max-w-[512px]"
                    />
                  </li>
                </ul>
              </div>
              <div>
                <h3>資格</h3>
                <ul>
                  <li>柔道五段</li>
                  <li>柔道整復師専科教員免許</li>
                  <li>
                    SPATマスターセラピスト
                    <Image
                      src="/images/about/spat-master-certificate.png"
                      width="363"
                      height="512"
                      alt="SPATマスターセラビスト認定証"
                      className="object-cover mx-auto w-1/2 max-w-[512px]"
                    />
                  </li>
                  <li>
                    認定SPAT指導講師
                    <Image
                      src="/images/about/spat-trainer-certificate.png"
                      width="363"
                      height="512"
                      alt="認定SPAT指導講師認定証"
                      className="object-cover mx-auto w-1/2 max-w-[512px]"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== About Five End ===== --> */}
    </>
  )
}

export default About
