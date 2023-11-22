"use client"
import { useState, useEffect } from "react"
import SectionHeader from "@/components/Common/SectionHeader"
import { storage } from "@/lib/firebase/app"
import { ref, getDownloadURL } from "firebase/storage"
import { CTA } from "@/components/CTA"

const metadata = {
  title: "About",
  description: "わたしたちの自己紹介です"
}

export default function Page() {
  const [imageURL, setImageURL] = useState("")
  const weAre = ref(storage, "/videos/who-we-are-alizza-ideal.mp4")
  const routine01URL = "/images/features/makise-daily-routine-01-720p.mp4"
  const routine02URL = "/images/features/makise-daily-routine-02-720p.mp4"
  const routine03URL = "/images/features/makise-daily-routine-03-720p.mp4"
  useEffect(() => {
    if (weAre) {
      getDownloadURL(weAre).then((u) => {
        setImageURL(u)
      })
    }
  }, [weAre])
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: `WHO WE ARE`,
              subtitle: (
                <div className="text-center">Alizza Ideal の自己紹介</div>
              ),
              description: (
                <>
                  <p>
                    Alizza
                    Idealは、つつみきくおと、アリザ・Ｈ・つつみが２人で運営しています。
                  </p>
                  <p>きくおは実務担当。</p>
                  <p>アリザはきくおの応援担当です。</p>
                </>
              )
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="mx-auto md:w-2/3">
          <div className="mx-auto">
            <h3>わたしたちが目指すもの</h3>
            <p>わたしたちは、</p>
            <ul className="font-bold">
              <li>
                最先端で人気のマーケティング手法を学んだり、実践している暇のない、
              </li>
              <li>目の前のお客様へのサービスに集中されている、</li>
              <li>地域の小型店舗に向けて、</li>
            </ul>
            <p>
              マーケティング情報の提供と、マーケティング実務の代行をしています。
            </p>
            <p>
              特にマーケティング情報は、日本ではすでに手垢のついた、誰でも知っている情報ばかり提供しているわけではありません。
              マーケティングの本場、アメリカのWebサイトやビデオ講座、ウェビナー、メール講座、ニュースレターなどから仕入れています。
              それらの中から、日本でも利用できるもの、できるように加工したものを厳選して提供しています。
            </p>
            <p>
              あなたは、SNS・Googleマップ・
              Google広告・ホームページ・ランディングページ（LP）を、
              もっともっと活用して、売上を上げたいと思いませんか？
            </p>
            <h4>ひとつのやり方だけ得意なサービス会社は数多い</h4>
            <p>
              多くのサービス会社では、
              ネットを使ったマーケティング・ソリューションを提供しているものの、
              それぞれ単体のサービスとしてしか提供していません。
            </p>
            <p>
              しかし、Google広告、ホームページ、ランディングページ、SNS、Googleマップは、
              単体では機能しなかったり、組み合わせないと効果が薄いものなんです。
            </p>
            <p>
              しかも、多くのサービス会社では、
              新しい技術に対応できるスタッフが足りていません。
            </p>
            <p>
              そのため、数少ない有能な若いスタッフは、
              予算の大きなクライアントの専任になってしまいます。
            </p>
            <p>
              中小企業のクライアントには、新人や技術力の足りていないスタッフを、
              練習のために任せているのが現実です。
            </p>
            <p>
              なぜなら、ほとんどのサービス会社の管理職は、技術的な指導をすることができないからです。
              よっぽどの大企業でないかぎりクライアントの金で、クライアントを実験台にするしかないのです。
            </p>
            <h4>わたしたちには、30年以上の経験があります。</h4>
            <p>
              しかしわたしたちは、現場の最前線で新しい技術を適用してきた実績があります。
            </p>
            <p>
              そして、それぞれのソリューションを組み合わせて、
              トータルで効果を最大限に発揮させ、
              あなたの利益につなげるソリューションを提供しています。
            </p>
            <h4>
              費用を節約しようとして、時間ばかりが過ぎていっていませんか？
            </h4>
            <p>
              特にわたしたちは、予算に限りのある、こんな方にソリューションを提供しています。
            </p>
            <ul className="font-bold">
              <li>自分でやろうとしても時間がない</li>
              <li>やってみたけど、よくわからなくて先に進めない</li>
              <li>貴重な時間は、お客さんのために使いたいと思っている</li>
            </ul>
            <h4>わたしたちを試してみて下さい</h4>
            <p>
              もしあなたが、そういったことで困っているのなら、
              わたしたちはあなたに進むべき方向をお伝えし、
              一歩前に進むお手伝いをすることができます。
            </p>
            <p>
              目的地がわかって、進むべき方角が決まれば、
              あなたのビジネスは目標に向かってどんどんステップアップしてくことができます。
            </p>
            <div className="px-6 my-10"></div>
            <h4 className="text-center">
              Alizza Idealの紹介動画をご覧ください
            </h4>
            <p>わたしが自前で制作した、わたしたちの紹介動画をご覧ください。</p>
            <div className="max-w-[480px] md:w-1/3 mx-auto">
              <video
                width="1080"
                height="1920"
                src={imageURL}
                alt="We are Alizza Ideal"
                controls
                disablePictureInPicture={true}
                muted={false}
                autoPlay={false}
                loop={false}
                playsInline={true}
                className="mx-auto object-cover"
              />
            </div>
            <p>
              このようなコンテンツを、期間も費用も最小限にして、あなたにもご提供することができます。
            </p>
            <h3>クライアント様のお客様から評判の制作事例</h3>
            <p>
              店舗のブランディングのために制作した動画の制作事例をご覧いただけます。
            </p>
            <p>
              公開してすぐ、４人の方から「あれ、いいね」とお褒めいただいたそうです。
            </p>
            <p>
              このような、裏側ものはテレビの緊急病棟２４時のように、
              大勢の注目を集めます。
              それに、飾らない人柄を映せば信頼が得られます。
            </p>
            <p>
              飾って気取った憧れられる映像もいいですが、
              そういった虚勢を張った映像は、なんとか商法の構成員におまかせしましょう。
            </p>
            <h4>水戸市城東町　まきせ鍼灸整骨院さまの動画制作事例</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              <video
                width={340}
                height={240}
                src={routine01URL}
                alt="Daily routine"
                controls
                disablePictureInPicture={true}
                muted={false}
                autoPlay={false}
                loop={false}
                playsInline={true}
                className="object-cover"
              />
              <video
                width={340}
                height={240}
                src={routine02URL}
                alt="Daily routine"
                controls
                disablePictureInPicture={true}
                muted={false}
                autoPlay={false}
                loop={false}
                playsInline={true}
                className="object-cover"
              />
              <video
                width={340}
                height={240}
                src={routine03URL}
                alt="Daily routine"
                controls
                disablePictureInPicture={true}
                muted={false}
                autoPlay={false}
                loop={false}
                playsInline={true}
                className="object-cover"
              />
            </div>

            <h4>これらの動画を制作した背景と目的</h4>
            <div>
              <p>
                整骨院を始めとする治療院は、大都市圏もさることながら、人口の少ない水戸市のような地方都市でも多くの治療院がひしめき合っています。
              </p>
              <p>
                それだけに、どのようにして患者さんに選んでもらえるかは重要です。
              </p>
              <p>
                どのようにして他の治療院と差別化するか、独自性を出すかは、どの治療院でも悩みの種です。
              </p>
              <p>
                多くの治療院では、技術力、特別な技、最新設備・機械を独自性として押し出しています。
              </p>
              <p>
                しかし、それらには課題があるのも事実です。たとえば、技術力や特別な技に頼ってしまうと、
                そのスタッフがいなくなったらおしまいです。院長だけが身につけているとなると、
                院長自身が休みなく働かなければならなくなります。
              </p>
              <p>
                機械設備の場合は、そもそも資金が必要です。しかし、その機械がいいとなると、
                他の治療院がスグに真似してしまいます。
              </p>
            </div>
            <h4>最も安上がりで、最も真似されにくい独自性があります</h4>
            <div>
              <p>
                それは、院長やスタッフ自身の経験と考え方、そして何より人柄です。
              </p>
              <p>
                そこで今回は、院長先生の実直な人柄を映像に記録して配信することにしました。
              </p>
              <p>
                １０００の言葉を重ねても、一枚の写真、一本の動画の説得力にはかないません。
              </p>
            </div>
            <h4>
              選ばれる治療院は、一番腕がいい治療院というわけではありません
            </h4>
            <div>
              <p>
                技術力を証明しようと施術中の映像を配信しても、それを見てすごい治療技術だと理解できるのは、同業の治療院ばかりです。
              </p>
              <p>
                治療を受けるのは、治療の専門家ではありません。そして、そんな人たちから選ばれなければなりません。
              </p>
            </div>
            <h4>
              選ばれる治療院は、選ぶ人が気にかけていることを一番わかりやすく伝えている治療院です
            </h4>
            <div>
              <p>仕事柄、多くの治療院のホームページを調査・研究しています。</p>
              <p>
                そして、ほとんどの治療院が同じようなメッセージを書いていることに気づきました。曰く、
              </p>
              <ul>
                <li>わたしなら、あなたの痛みを根本治療してあげます。</li>
                <li>××法を使うから治せるんです。すごいでしょ？</li>
                <li>
                  こんな痛みも、あんな痛みも、急な痛みも、慢性の痛みも、体の痛いやつぁおれんとこへ来い。
                  あなたの痛いところを見たわけじゃないけど、とにかく治します。
                </li>
              </ul>
              <p>
                そして、トップページにはこだわりのラーメン屋の頑固オヤジのような得意げな写真・・・
              </p>
              <p>
                もちろん、そういったホームページは、制作会社の言われるがままに作られてしまったホームページです。
              </p>
              <p>
                何もホームページを制作したデザイナーをこきおろそうというのではありません。
              </p>
              <p>
                ホームページ制作を依頼する治療院の先生も、ホームページを制作するデザイナーも、それぞれがやるべきことを一生懸命しています。
              </p>
              <p>
                ただ、それぞれが自分の仕事に集中したことで、何かが置き去りにされているのもまた事実です。
              </p>
            </div>
            <h4>
              自分の腕に惚れるのではなく、患者さんに惚れ抜いて、置き去りにしないで下さい
            </h4>
            <div>
              <p>自分の腕に自身のあるのはいいことです。</p>
              <p>
                でも、そればかり主張しては自慢話をホームページに書いて、全世界に触れ回っているのと同じになってしまいます。
              </p>
              <p>自分の腕に惚れてしまっては、自惚れになりかねません。</p>
              <p>
                患者さんの痛みや、痛みから生まれる不便さや不安をどうすれば解消してあげられるのか。
                まるで恋に落ちているかのように片時も忘れないくらい考えて、ホームページは作って下さい。
              </p>
              <p>
                その暁には、沢山の患者さんから絶大な信頼を得られることでしょう。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
