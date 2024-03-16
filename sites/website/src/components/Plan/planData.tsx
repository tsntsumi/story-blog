export type Plan = {
  id: number
  title: string
  image: string
  description: string // Markdown
}

export const planData = [
  {
    id: 1,
    title: "ビジネス・ドライビング・スクールに入校する",
    image: "gs://story-made.appspot.com/images/hero/plan-1.svg",
    description: `\
入校するとすぐに、全てのオンデマンド教習コース、限定ライブウェビナー、ホームページ管理ソフトにアクセスできます。`
  },
  {
    id: 2,
    title: "オンライン・ビジネス教習を受ける",
    image: "gs://story-made.appspot.com/images/hero/plan-2.svg",
    description: `\
マインドセット教習、ビジネス・ドライビング教習を受けてください。

同時に、あなたのビジネスを始めて行きましょう。
教習を全て完了させる必要はありません。

時間を大幅に節約しながら、ビジネスの成長を加速することができます。`
  },
  {
    id: 3,
    title: "個人起業家ビジネスの成長を見守る",
    image: "gs://story-made.appspot.com/images/hero/plan-3.svg",
    description: `\
成果実証済みの計画を実行し、あなたの専門知識とスキルと経験を使ってみんなのお役に立つよう貢献してください。

人の生活を実際に変化させる有意義で収益性の高い仕事で、充実感を体験してください。`
  }
]

export default planData
