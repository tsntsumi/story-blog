export type Solution = {
  id: number
  title: string
  image: string
  description: string // markdown
}

export const solutionData: Solution[] = [
  {
    id: 1,
    title: "１年間の専属ビジネス成長教習",
    image: "gs://story-made.appspot.com/images/hero/virtual-driving.gif",
    description: `\
ビジネスでコンマが２つある６桁以上の収益を上げることに重点をおいた
<ruby>教習<rp>(</rp><rt>トレーニング</rt><rp>)</rp><ruby>を受けてください。

あなたの現状と目標とにカスタマイズされたアドバイスと、
月に２回のリモート面談で順調にドライブし、ゴールに向けて安定した進捗を保ちます。`
  },
  {
    id: 3,
    title: "個人起業家ビジネス・マインド教習",
    image: "gs://story-made.appspot.com/images/hero/newbie-driver.gif",
    description: `
あなたのビジネスから大きな果実を収穫するためには、
果実や木の枝ばかり手入れをしても多くを得られません。

実の成る木がしっかりと大地に根をおろしていなければ、
強風に襲われたときに、根本から倒れてしまいます。

たとえ風が吹かなくても、根っこが腐っていたら果実を収穫することはできません。

強風に耐えられるマインドセットの教習をします。`
  },
  {
    id: 4,
    title: "個人起業家ビジネス・ドライビング教習",
    image: "gs://story-made.appspot.com/images/hero/start-driving.gif",
    description: `\
現代のビジネスは、単なる物々交換を行っていたころと比べて、大きく様変わりしています。

1950年代に、マーケティングという概念が定義された頃から数えると、
マーケティング自体はすでに第４世代に突入しています。

現代のビジネス形態を知らずに起業してしまうことは、無免許で渋滞した大通りに乗り込むようなものです。

ビジネス・ドライビング教習では、
マーケティング、セールス、商品企画・製作、経営、リーダーシップなど、
ビジネスのあらゆる側面で教習をします。`
  },
  {
    id: 2,
    title: "カスタマイズ済みオールインワン・ホームページを１年間無料で利用可能",
    image: "gs://story-made.appspot.com/images/hero/future-car.gif",
    description: `\
ビジネス・ドライビング・スクールに入校すると、
専属のセールスライターが作成した、セットアップ済みの集客導線を備え、自動Ｅメール配信機能、
見込み客獲得の仕組みを備えた１年間のホームページ・サブスクリプションを無料で入手できます。

このホームページは、時間と労力を大幅に節約できるように設計されており、
乗り出し当初からマーケティング活動を最適化できます。`
  }
]
