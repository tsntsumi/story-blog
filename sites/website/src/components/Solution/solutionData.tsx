export type Solution = {
  id: number
  title: string
  image: string
  description: string // markdown
}

export const solutionData: Solution[] = [
  {
    id: 1,
    title: "１年間の理想のゴールへドライブするためのビジネス教習",
    image: "gs://story-made.appspot.com/images/hero/virtual-driving.gif",
    description: `\
ビジネスでコンマが２つ現れる収益を上げることに重点をおいた教習を定期的に受けてください。

DRIVE to IDEAL ビジネス教習では、セールス、商品企画・製作、経営、リーダーシップなど、
ビジネスのあらゆる側面の教習を提供します。

あなたの現状と目標とにカスタマイズされたアドバイスと、
月に２回のリモート面談で順調に理想のゴールに向けてのドライブしているか確認できます。`
  },
  {
    id: 3,
    title: "ビジネスを安定してドライブするためのマインドセット教習",
    image: "gs://story-made.appspot.com/images/hero/newbie-driver.gif",
    description: `
あなたのビジネスから大きな果実を収穫するためには、
果実や木の枝ばかり手入れをしても多くを得られません。

大きな実の成る木は、しっかりと大地に根をおろしていなければ、
強風に襲われたときに、根本から倒れてしまいます。

たとえ強風でなくても、根っこが腐っていたら果実を収穫することはできません。

あなたが強風に耐えられるように DRIVE to IDEAL マインドセット教習があります。`
  },
  {
    id: 4,
    title: "集客を安定して行うためのマーケティング教習",
    image: "gs://story-made.appspot.com/images/hero/start-driving.gif",
    description: `\
1950年代に、マーケティングという概念が定義された頃から数えると、
2020年にはすでに第４世代に突入しています。

あなたのマーケティングの知識は、1950年代のままではありませんか？

現代のビジネス形態、マーケティング技法を知らずに起業してしまうことは、
無免許で何車線もある大通りに乗り込むようなものです。

DRIVE to IDEAL マーケティング教習では、マーケティングの基礎から学び、
いろいろな分野の日本でのマーケティング成功事例を知ることができます。`
  },
  {
    id: 2,
    title: "カスタマイズ済みオールインワン・ホームページを１年間無料で利用可能",
    image: "gs://story-made.appspot.com/images/hero/future-car.gif",
    description: `\
DRIVE to IDEAL campus に入校すると、
専属のセールスライターが作成した、セットアップ済みの集客導線でデザインされたホームページと、
自動Ｅメール配信機能、見込み客獲得の仕組みのオールインワンセットの
１年間サブスクリプションを無料で入手できます。

このホームページは、時間と労力を大幅に節約できるように設計されており、
ビジネス乗り出し当初から集客活動を最適化できます。`
  }
]
