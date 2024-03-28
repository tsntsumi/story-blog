export type Plan = {
  id: number
  title: string
  image: string
  description: string // Markdown
}

export const planData = [
  {
    id: 1,
    title: "DRIVE to IDEAL ビジネス・ドライビング・スクールに入校する",
    image: "gs://story-made.appspot.com/images/hero/plan-1.svg",
    description: `\
入校するとすぐに、全てのオンデマンド教習コース、限定ライブウェビナー、ホームページ管理ソフトにアクセスできます。`
  },
  {
    id: 2,
    title: "オンライン・ビジネス教習を受ける",
    image: "gs://story-made.appspot.com/images/hero/plan-2.svg",
    description: `\
オンライン動画で、マインドセット、ビジネス、マーケティングの教習を受けてください。

何を待っているのですか？
全ての教習を受ける前に、すぐに集客を始めましょう。

時間を大幅に節約しながら、ビジネスの成長を加速することができます。`
  },
  {
    id: 3,
    title: "あなたのビジネスの成長を見守る",
    image: "gs://story-made.appspot.com/images/hero/plan-3.svg",
    description: `\
成果実証済みの計画を実行し、あなたの専門知識とスキルと経験を使って、
みんなのお役に立たつように、貢献していってください。

みんなの生活を実際に変化させる、有意義で収益性の高い、充実した時間を体験してください。`
  }
]

export default planData
