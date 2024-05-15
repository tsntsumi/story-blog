export type Plan = {
  id: number
  title: string
  image: string
  description: string // Markdown
}

export const planData = [
  {
    id: 1,
    title: "ネット集客のこれまでとこれから",
    image:
      "gs://story-made.appspot.com/images/land/map/nextgen-net-marketing.svg",
    description: ``
  },
  {
    id: 2,
    title: "クチコミサイトが全滅する時代の集客方法",
    image:
      "gs://story-made.appspot.com/images/land/map/review-sites-wiped-out.svg",
    description: ``
  },
  {
    id: 3,
    title: "検索上位に表示される方法",
    image: "gs://story-made.appspot.com/images/land/map/search-rank-rising.svg",
    description: ``
  },
  {
    id: 4,
    title: "お客さんが見たがる５つの写真",
    image: "gs://story-made.appspot.com/images/land/map/popular-photos.svg",
    description: ``
  },
  {
    id: 5,
    title: "低評価でも評価される返信テク",
    image:
      "gs://story-made.appspot.com/images/land/map/low-rated-but-appreciated-reply.svg",
    description: ``
  },
  {
    id: 6,
    title: "クチコミを集める３つの仕掛け",
    image: "gs://story-made.appspot.com/images/land/map/review-more.svg",
    description: ``
  }
]

export default planData
