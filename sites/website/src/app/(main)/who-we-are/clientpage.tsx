"use client"
import { Image, Video } from "@/components/common/media"
import SlideIn from "@/components/common/slidein"
import Subscribe from "@/components/common/subscribe"
import Link from "next/link"

const WEAREPATH = "videos/who-we-are-alizza-ideal.mp4"
const SCHEDULE_TO_CALL: string = "https://meet.alizza-ideal.com"

export default function Page() {
  return (
    <section className="pt-0 m-0">
      <div className="mx-auto max-w-c-1315 p-0 m-0 px-4 md:px-8 xl:px-16">
        <div className="columns-1 md:columns-2 xl:columns-3 text-justify gap-8 xl:gap-16">
          <h1>
            「なぜ？」こそが、顧客を惹き寄せて離さない
            <ruby>
              永久磁石<rp>(</rp>
              <rt>U S P</rt>
              <rp>)</rp>
            </ruby>
            になる
          </h1>

          <SlideIn className="animate_top">
            <p>
              わたしはその信念を元に、クライアント自身が気づいていない、
              行動する動機と情熱と意欲を生み出した「なぜ？」を引き出し、
              言語化するチカラと、それを魅力的なストーリーとして表現する術の
              ２つを３０年以上に渡って磨き続けてきました。
            </p>
            <p>
              なぜ、歴史上の偉大なリーダーが大衆を動かしてこれたのか？
              それは彼らが「なぜ？」を伝えて来たからです。
            </p>
            <p className="ml-8 indent-0 font-bold">
              スティーブ・ジョブズ、キング牧師、 ガンジー、・・・
            </p>
            <p>
              偉大なリーダーだったから大衆を動かせたのではありません。
              「なぜ？」を語った人がリーダーとして認識されたのです。
            </p>
            <p>
              ある研究では、ジョブズの最初の iPhone のプレゼンと、
              キング牧師の有名な「I have a dream」のフレーズが生まれた
              スピーチ、2つのストーリーラインは、 ほぼ一致していました。
            </p>
            <p>そしてもちろん、彼らは「なぜ？」を語っていました。</p>
            <p>二人のストーリーが多くの人々を動かしたのは、歴史的事実です。</p>
            <p>
              あなたも、ストーリーであなたの「なぜ」を語って、
              多くの人を動かしてみたいと思いませんか？
            </p>
            <h2>どうして「なぜ？」と「ストーリー」が重要なのか</h2>
            <p>
              原始時代、食料を調達するために、
              選ばれた人々が遠くへ獲物を探しに行きました。
            </p>
            <p>
              そして、探索から戻ってきた人は、どこに危険があるから避けるべきなのか、
              どちらに行けば獲物がいるから進むべきなのか、
              自分の経験から「なぜ」を「ストーリー」で語ったのです。
            </p>
            <p>
              そのストーリーを聞いた人々は、彼の言いたいことをすぐに理解し、
              彼の指示に従いました。
            </p>
            <p>
              これが、「なぜ？」を「ストーリー」で語る者をリーダーとして認識する、
              人類の遺伝子にプログラムされた仕組みなのです。
            </p>
            <h2>ストーリーは、子供にも「なぜ」が伝わる</h2>
            <p>
              子供が物語を聞きたがるのもその遺伝子のプログラム、
              生き残りのアルゴリズムのせいです。
              同じ話を何度も何度も聞きたがるのも、遺伝子がそうさせているのです。
            </p>
            <p>
              話に興味を持ち、繰り返し聞きたがるのは、
              内容をすぐに理解できて、その内容が重要だと認識できたからです。
            </p>
            <p>
              ということは、商品のよさを長々と説明して要点を得られなくなったり、
              サービスの特徴やスペックの一覧表を見せて細かすぎて伝わらなかったりするより、
              ストーリーを語るほうが、人は興味を持って聞き、内容をより深く理解します。
            </p>
            <p>
              つまり、「なぜ？」＋「ストーリー」＝最高のセールストーク、なのです。
            </p>
            <h2>「なぜ」を言語化し「ストーリー」で語り始めよう</h2>
            <p>
              もしあなたが、「なぜ？」を「ストーリー」に載せて伝え始めれば、
              多くの人を、行動に、購買に、予約にと、駆り立てることができます。
            </p>
            <p>
              もしあなたが、あなたの商品・サービスに情熱を注ぎ込んできたなら……。
              もしあなたに、誰にも負けない情熱があるのなら……。
              そこには、あなたにしか語れないストーリーがあるはずです。
            </p>
            <p>そこには、あなたを行動に駆り立てた「なぜ？」があります。</p>
            <p>
              そして、そのストーリーは、たくさんの人からの共感を生み出し、
              「あなたから買いたい」「あなただからこそお願いしたい」というお客さんを、
              惹き寄せて離さない永久磁石になりえます。
            </p>
            <p>
              それは、あなただけのUSPになります。あなたのブランドを構築できます。
            </p>
            <p>
              あなただけのストーリーを、一度私に聞かせてください。
              きっと私が磨き続けてきた、ストーリーライティングの技術が、
              あなたの力になるはずです。
            </p>
          </SlideIn>
        </div>
        <div className="my-4 mx-auto">
          <Link href={SCHEDULE_TO_CALL}>
            <Subscribe className="text-lg md:text-sm py-3 px-6 mx-auto">
              無料診断をスケジュール
            </Subscribe>
          </Link>
        </div>
        <h2 className="my-8">私のストーリーはこちら</h2>
        <SlideIn className="animate_bottom">
          <div className="text-xs text-right text-gray-400">
            タップするとBGMのミュート解除ボタンが現れます。
          </div>
          <div className="w-fit mx-auto md:w-2/5">
            <Video
              src="gs://story-made.appspot.com/videos/how-to-find-work-in-passionated-720p.mp4"
              controls
              muted
              autoPlay
              loop={true}
              controlsList="nodownload"
              playsInline={true}
              preload="auto"
            />
          </div>
        </SlideIn>
        <div className="my-4 mx-auto">
          <Link href={SCHEDULE_TO_CALL}>
            <Subscribe className="text-lg md:text-sm py-3 px-6 mx-auto">
              無料相談会をスケジュール
            </Subscribe>
          </Link>
        </div>
      </div>
    </section>
  )
}
