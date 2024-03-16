import Link from "next/link"
import Subscribe from "@/components/common/subscribe"

const SoloPreneur = () => (
  <ruby>
    個人起業家
    <rp>(</rp>
    <rt>ソロプレナー</rt>
    <rp>)</rp>
  </ruby>
)
const 個人起業家 = () => <SoloPreneur />

export default function Encourage() {
  return (
    <>
      <section id="encourage" className="pt-24">
        <div className="mx-auto md:w-3/4 max-w-c-1315 px-4 md:px-8 xl:px-0">
          <h1>
            ほとんどの
            <個人起業家 />
            は、収益性の高いビジネスの構築方法を知らないだけでなく、
            自分のスキルに自信を持っていません
          </h1>
          <div className="columns-3 text-justify gap-8">
            <p>
              あなたがここまで読み進めてくれたということは、あなたはおそらく、自分の専門知識を使って
              コーチやコンサルタントとして起業することを考えたことがあるはずです。
              しかし、それに挑戦する自信と勇気がないに違いありません。
            </p>
            <p>
              なぜでしょうか？それは、今この時点では、リスクが高すぎると感じるからです。
            </p>
            <p>
              ですが、今の仕事を続けていけば、給与が上がらないのに物価は上がっていき、
              将来、仕事がAIに取って代わられるかもしれない不安を抱え続けなければなりません。
            </p>
            <p>
              現在世界中で、あらゆる分野の何人もの専門家が仕事をやめ、
              コーチ、コンサルタントとして起業しています。
              そして我々は、そのような個人起業家が、コンマが２つある６桁以上のビジネスへと
              成長させるための支援をしています。
            </p>
            <p>
              ビジネス・ドライビング・スクールに入校して、収益性の高い個人起業家のビジネスを
              構築する８つのステップを学んでください。
            </p>
            <p>
              動画によるオンデマンドのビジネス教習、マインドセット教習、
              マーケティング教習も受けることができます。
            </p>
            <p>
              ビジネス・ドライビング・スクールでは、テンプレートやホームページの設計図など、
              個人起業家ビジネスの構築と成長に必要なものを全て提供します。
            </p>
            <p>
              コンバージョン率の高い個人起業家専用の公式ホームページを構築できます。
            </p>
          </div>
          <div className="my-8 mx-auto">
            <Link href="https://meet.alizza-ideal.com">
              <Subscribe className="text-xs md:text-sm py-4 px-6">
                相談を予約
              </Subscribe>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
