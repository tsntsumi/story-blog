import { Metadata } from "next"
import { Image, Video } from "@/components/Assets/media"
import SlideIn from "@/components/Assets/slidein"
import Subscribe from "@/components/Assets/subscribe"
import Link from "next/link"

export const metadata: Metadata = {
  title: "わたしたちアリザ・アイデアルとは？",
  description: `\
わたしたちアリザ・アイデアルが、なぜこの事業を運営しているのか、\
どのようやって事業を行っているのか、それによってあなたがどんな価値を受け取れるか説明します。`
}

const WEAREPATH = "videos/who-we-are-alizza-ideal.mp4"
const SCHEDULE_TO_CALL: string = "https://meet.alizza-ideal.com"

const Recomend = () => (
  <>
    <p>
      起業したいあなた、副業を考えてるあなたや、
      ビジネスをしているけど何かもやもやしているなら、
      あなたのビジネスについてお話してみませんか？
    </p>
    <p>
      自分の悩みを他人に話すだけでも、心に引っかかるものがなにか、
      ひらめくこともありますよ。
    </p>
    <p>とくに、近しい人には逆に話ができないとお悩みの方におすすめです。</p>
  </>
)

export default function Page() {
  return (
    <section className="pt-0 m-0">
      <div className="m-4 pt-10 md:w-md md:max-w-md min-w-[320px] mx-auto">
        <div className="mx-auto max-w-c-1315 p-0 m-0 px-4 md:px-8 xl:px-16">
          <div className="columns-1 md:columns-2 xl:columns-3 text-justify gap-8 xl:gap-16">
            <h1>
              「なぜ？」こそが、顧客を惹き寄せて離さない
              永久磁石のようなUSPになる
            </h1>

            <div className="max-w-[120px] float-right ml-2 mb-2">
              <Image
                src="gs://story-made.appspot.com/images/hero/avatar.png"
                alt="Avatar Image"
                width="1200"
                height="1200"
                className="w-full object-cover rounded-full"
              />
            </div>

            <SlideIn className="animate_top">
              <p>
                わたしはその信念を元に、クライアント自身が気づいていない、
                行動する動機と情熱と意欲を生み出した「なぜ？」を引き出し、
                言語化するチカラと、それを魅力的なストーリーとして表現する
                <ruby>
                  術<rp>(</rp>
                  <rt>すべ</rt>
                  <rp>)</rp>
                </ruby>
                の ２つを学生時代から４０年以上に渡って磨き続けてきました。
              </p>
              <p>
                なぜ、歴史上名を残すリーダーが大衆を動かしてこれたのか？
                それは彼らが「なぜ？」を伝えて来たからです。
              </p>
              <p className="ml-8 indent-0 font-bold">
                スティーブ・ジョブズ、キング牧師、 ガンジー、・・・
              </p>
              <p>
                優秀なリーダーだったから大衆を動かせたのではありません。
                「なぜ？」を語った人がリーダーとして認識されたのです。
              </p>
              <p>
                ある研究では、ジョブズの初代 iPhone のプレゼンと、
                キング牧師の有名な「I have a dream」の
                スピーチ、この2つのストーリーラインは、 ほぼ一致していました。
              </p>
              <p>そしてもちろん、二人は「なぜ？」を語っています。</p>
              <p>そのストーリーで、多くの人たちが行動に駆り立てられました。</p>
              <p>
                あなたもストーリーで「なぜ」を語れば、
                多くの人を行動させられます。
              </p>
              <h2>どうして「なぜ？」と「ストーリー」が重要なのか</h2>
              <p>
                原始時代、食料を調達するために、
                男たちは安全な集落から離れて、獲物を探しに行きました。
              </p>
              <p>
                そして、探索から戻ってきた人は、「なぜ」を「ストーリー」で語ったのです。
              </p>
              <p>
                そこへ行くべきではない、なぜならこんな危険なめにあった。
                そっちへ行こう、なぜならこうやって獲物を見つけたから。
              </p>
              <p>
                そのストーリーを聞いた人々は、彼の意見と理由をすぐに理解し、
                彼の従いました。
              </p>
              <p>
                これが、「なぜ？」を「ストーリー」で語る者をリーダーとして
                認識する、 遺伝子にプログラムされた仕組みです。
              </p>
              <h2>ストーリーなら、簡単に伝わる</h2>
              <p>
                ということは、ストーリーで語れば、 要領を得ない説明にならずに、
                お客さんに嫌がられたりすることがなくなります。
              </p>
              <p>
                要するに、サービスの特徴や品質の良さを説明するよりも、
                ストーリーで語ったほうが、興味を持って聞きいてもらえ、
                商品の良さをよく理解してくれるようになります。
              </p>
              <p>
                つまり、「なぜ？」＋「ストーリー」＝「最高のプレゼンテーション」、
                なのです。
              </p>
              <h2>「なぜ」を言語化し「ストーリー」で語り始めよう</h2>
              <p>
                もしあなたが、「なぜ？」を「ストーリー」で伝えれば、
                多くの人を行動に、選択に、購入に、予約にへと駆り立てることができます。
              </p>
              <p>
                もしあなたが、商品・サービスに情熱を注ぎ込んできたなら……。
                もしあなたに、誰にも負けない熱意があるなら……。
                そこには、あなたにしか語れないストーリーがあります。
              </p>
              <p>そこには、あなたの情熱に火をつけた「なぜ？」があります。</p>
              <p>
                そして、たくさんの人からの共感を生み出します。
                「あなたから買いたい」「あなただからこそお願いしたい」。
                そんなお客さんを惹き寄せて離さない、永久磁石になるのです。
              </p>
              <p>
                それはすなわち、あなたの強みになり、あなただけのUSPになります。
                ゆくゆくは、あなたのブランドを構築できます。
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
                無料ビジネス・カウンセリングを予約する
              </Subscribe>
            </Link>
            <div className="text-sm mx-12 mt-4 px-4 border-x-2 border-ai-blue">
              <Recomend />
            </div>
          </div>
          <h2 className="my-8">私のプロフィール</h2>
          <SlideIn className="animate_bottom">
            <div>
              <p>
                私の名前は「堤　紀久夫」です。Alizza Ideal
                を、わたしの妻のアリザ・H・堤と、義理の妹のAlthea G. Habla
                と３人で運営しています。
              </p>
              <p>
                これまで、クライアントのGoogleマップを見直して、
                ３ヶ月で100,000アクセスされるようにしたり、
              </p>
              <p>
                サポートしたクライアントさんの月商を、
                ２ヶ月ほどで６０万円から２０万円アップの８０万円にしたりとか、
                してきました。
              </p>
              <p>
                その他、サポートしたクライアントさんは、
                飲食店、雑貨店、治療院、ネイルサロン、スナックなど
                多岐にわたっています。
              </p>
            </div>
          </SlideIn>
          <SlideIn className="animate_top">
            <div>
              <p>
                そのもそも私は、神奈川県にある産業能率大学の経営情報学部を卒業し、
                経営学士と、第一種情報処理技術者の資格をとりました。
                大学のゼミでの専攻は人工知能です。
              </p>
              <p>
                就職してからは、横浜市の日立システム開発研究所で
                ２年間人工知能システムを開発し、
              </p>
              <p>
                その後は、日立市の工場に戻って約３０年間、
                大小様々なお客さまの問題を解決するコンピューターシステムを開発してきました。
                東京電力さまの研究所の試作システムや、
                アルパインさまのカーナビゲーションシステムのコアシステム、
                日立製作所さまの新型デスクトップPCへのWindows OSとLinux
                OSの移植、
                日立ハイテクノロジーズさまの電子顕微鏡コントロールソフトなどです。
                それ以外にも、人工知能システム、インターネット関連 など、
                チームリーダーとして担当してきました。
              </p>
              <p>
                簡単にまとめると、パソコンとネットに強いだけでなく、
                人間が考える仕組みにも強いプログラマです。
              </p>
              <p>
                その反面、イラスト制作、写真撮影、動画編集、映画撮影、舞台での演技、
                脚本執筆が趣味です。
              </p>
              <p>
                現在は、それらの趣味を活かしてセルフブランディング用の
                個人起業家応援コンテンツを制作し、
                InstagramやTikTokなどに日々投稿しています。
              </p>
            </div>
          </SlideIn>
          <p>
            私の信条は、お客さんはなぜ買うのか、
            どうすれば買いたくなるのかを考察、発見し広めることです。
          </p>
          <div className="my-4 mx-auto">
            <Link href={SCHEDULE_TO_CALL}>
              <Subscribe className="text-lg md:text-sm py-3 px-6 mx-auto">
                無料ビジネス・カウンセリングを予約する
              </Subscribe>
            </Link>
            <div className="text-sm mx-12 mt-4 px-4 border-x-2 border-ai-blue">
              <Recomend />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
/* export default function Page() {
 *   return (
 *     <>
 *     <ClientPage />
 *     </>
 *   )
 * } */
