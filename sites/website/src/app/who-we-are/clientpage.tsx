"use client"
import { Image, Video } from "@/components/common/media"
import SlideIn from "@/components/common/slidein"
import Subscribe from "@/components/common/subscribe"
import Link from "next/link"

const WEAREPATH = "videos/who-we-are-alizza-ideal.mp4"

export default function Page() {
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        <h1>
          <div className="text-lg font-sans">| WHO WE ARE, AND WHY? |</div>
          <div>わたしたちって誰？何でこんなことしてるの？</div>
        </h1>
        <div className="columns-1 md:columns-2 xl:columns-3 text-justify gap-8 xl:gap-16">
          <h2>
            「なぜ？」こそが、顧客を惹き寄せて離さない
            <ruby>
              永久磁石<rp>(</rp>
              <rt>U S P</rt>
              <rp>)</rp>
            </ruby>
            になる
          </h2>

          <SlideIn className="animate_top">
            <p>
              わたしはその信念を元に、クライアント自身は気づいていない、
              行動する動機と情熱と意欲を生み出す「なぜ？」を引き出し、
              言語化するチカラと、それを魅力的なストーリーとして表現する術の
              ２つを３０年以上に渡って磨き続けてきました。
            </p>
            <p>
              歴史上、偉大なリーダーが大衆を動かしてこれたのか？
              それは「なぜ？」を伝えて来たからです。
            </p>
            <p className="ml-8 indent-0 font-bold">
              スティーブ・ジョブズ、キング牧師、 ガンジー、・・・
            </p>
            <p>
              偉大なリーダーだったから大衆を動かせたのではありません。
              「なぜ？」を語った人がリーダーとして認識されたのです。
            </p>
            <p>
              原始時代、食料を調達するために、
              選ばれた人々が遠くへ獲物を探しに行きました。
            </p>
            <p>
              そして、探索から戻ってきた人は、どこに危険があって、
              どちらに行けば獲物がいるか、自分が経験したストーリーを語り、
              なぜ、その道を進むべきかを伝えたのです。
            </p>
            <p>そして他の人々は、彼の指示に従いました。</p>
            <p>
              これが、「なぜ？」をストーリーで語る者をリーダーとして認識させる、
              人類の遺伝子にプログラムされたシステムなのです。
            </p>
            <p>
              子供が物語を聞きたがるのもそのプログラムのせいです。
              同じ話でも、何度も何度も聞きたがるのも、遺伝子がそうさせているのです。
            </p>
            <p>
              商品の内容の説明を説明したり、サービスの特徴やスペックの一覧表をみせるより、
              ストーリーを語るほうが、人は興味を持って聞き、内容をより深く理解します。
            </p>
            <p>
              つまり、「なぜ？」＋ストーリテリング＝最高のセールストーク、なのです。
            </p>
            <p>
              もし、あなたが「なぜ？」を「ストーリー」に載せて伝え始めれば、
              多くの人を行動に、購買に、予約にと、駆り立てることができます。
            </p>
            <p>
              もしあなたが、あなたの商品・サービスに情熱を注ぎ込んできたなら、
              誰にも負けない情熱を持っているのなら、
              そこにはあなたにしか語れないストーリーが必ずあります。
            </p>
            <p>そこにはあなたを行動に駆り立てる「なぜ？」があります。</p>
            <p>
              そして、そのストーリーは、必ずたくさんの共感を生み出し、
              「あなたから買いたい」「あなたが創るものだからこそ買いたい」と
              言うお客さんをたくさん惹き寄せて離さない永久磁石になります。
            </p>
            <p>
              あなただけのストーリーを、一度私に聞かせてください。
              きっと私が磨き続けてきた、ストーリーライティングの技術が、
              あなたの力になるはずです。
            </p>
          </SlideIn>
        </div>
        <div className="my-8">
          <Link href="https://meet.alizza-ideal.com">
            <Subscribe>相談を予約</Subscribe>
          </Link>
        </div>
        <div>
          <h2>私のストーリーはこちら</h2>
          <SlideIn className="animate_bottom">
            <div className="w-fit mx-auto md:w-2/5">
              <Video
                src="gs://story-made.appspot.com/videos/how-to-find-work-in-passionated-720p.mp4"
                controls
                muted
                autoplay
                controlslist="nodownload"
                playsinline="true"
                preload="auto"
              />
            </div>
          </SlideIn>
        </div>
      </div>
    </section>
  )
}
