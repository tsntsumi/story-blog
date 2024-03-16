import { buildCollection, buildProperty, buildEnumValues } from "firecms"

export type Category = {
  key: string
  name: string
  description: string
}

export const Categories: Category[] = [
  {
    key: "google-maps",
    name: "Googleマップ（MEO）",
    description: `\
地域密着店舗ビジネスなら必須のGoogleビジネスプロフィール(GBP) を使った MEO 対策。\
単に見つかるだけでなく、ライバルを出し抜いて選ばれたいなら是非ご覧ください。`
  },
  {
    key: "google-ads",
    name: "Google広告",
    description: `\
積極的に売上を伸ばしたい個人ビジネスオーナーのリーズナブルな Google 広告対策。\
おおくの広告代理店は、月10万円程度のクライアントには真剣に運用してくれません。\
Google広告の使い方の秘訣や、Google広告とHP・LPを連携してビジネスを成長させたいなら是非読んでください。`
  },
  {
    key: "seo",
    name: "検索エンジン（SEO）",
    description: `\
少資本の個人ビジネスオーナーが、ホームページから集客したいと思ったらコレを読んでください。\
SEO対策にかける予算がないときに役立つ情報を紹介しています。`
  },
  {
    key: "marketing",
    name: "知られる力",
    description: `\
個人起業家にとって、人に知られなければ存在しないのと同じです。\
人に知られ、ビジネスを成長させたいなら是非ご覧ください。`
  },
  {
    key: "mindset",
    name: "個人起業家精神",
    description: `\
個人で起業した人や、起業を目指して副業を始めた人が、何をしていいか迷ったら読んでください。\
個人起業家(ソロプレナー|Solo-preneur)が成功するために意識すべきマインドセットを紹介しています。`
  }
]

export function CategoryFromKey(key: string): Category {
  return Categories.find((c) => c.key === key)
}

const categoryMap = {
  "google-maps": Categories.find((c) => c.key == "google-maps")?.name,
  "google-ads": Categories.find((c) => c.key == "google-ads")?.name,
  "marketing": Categories.find((c) => c.key == "marketing")?.name,
  "mindset": Categories.find((c) => c.key == "mindset")?.name,
  "seo": Categories.find((c) => c.key == "seo")?.name
}

export const categoryEnumeration = buildEnumValues(categoryMap)

export const categoryCollection = buildCollection({
  path: "categories",
  customId: categoryEnumeration,
  name: "カテゴリー",
  singularName: "Categories",
  properties: {
    name: buildProperty({
      name: "Title",
      validation: { required: true },
      dataType: "string"
    }),
    selectable: buildProperty({
      name: "Selectable",
      description: "Is this category selectable",
      dataType: "boolean"
    })
  }
})

export default Categories
