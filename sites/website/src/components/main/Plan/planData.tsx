export type Plan = {
  id: number
  title: string
  image: string
  description: string // Markdown
}

export const planData = [
  {
    id: 1,
    title: "Alizza Ideal のコーチング・スクールに入校する",
    image: "gs://story-made.appspot.com/images/hero/plan-1.svg",
    description: `\
入校すると、オンライン動画講座、限定ライブ講座、ホームページ管理ページにアクセスできます。`
  },
  {
    id: 2,
    title: "オンライン動画・ライブ講座で学習する",
    image: "gs://story-made.appspot.com/images/hero/plan-2.svg",
    description: `\
オンライン動画講座やライブ講座で、マインドセット、ビジネス、マーケティング教習をうけて下さい。

しかし、すべての教習を修了するまで待つ必要はありません。

講座で学んだことを使って、すぐに集客を始めましょう。

時間を大幅に節約しながら、コーチング・ビジネスの成長を加速することができます。`
  },
  {
    id: 3,
    title: "あなたのコーチング・ビジネスの成長を見守る",
    image: "gs://story-made.appspot.com/images/hero/plan-3.svg",
    description: `\
成果実証済みの計画を実行し、あなたの専門知識とスキルと経験を使って、
多くの人のお役に立ち、みんなに貢献していってください。

みんなの生活を理想の状態に変化させる、有意義で収益性の高い、充実した時間を体験してください。`
  }
]

export default planData
