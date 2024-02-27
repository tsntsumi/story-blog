import { buildCollection, buildProperty, buildEnumValues } from "firecms"

export const Categories = [
  {
    key: "google-maps",
    name: "Googleマップ（MEO）",
    description: `
Googleビジネスプロフィールを使った MEO で、Googleマップに登録したあなたのお店の売り上げにつながる情報を投稿しています
`
  },
  {
    key: "google-ads",
    name: "Google広告",
    description: `
Google広告の使い方の秘訣や、Google広告とホームページ(HP)・ランディングページ(LP)を効率よく効果的に連携させるテクニックを投稿しています
`
  },
  {
    key: "seo",
    name: "検索エンジン（SEO）",
    description: `
地域密着の少資本の店舗ビジネスが、自分でホームページを改善して集客を成功させるためのテクニックを投稿しています
`
  },
  {
    key: "marketing",
    name: "知られる力",
    description: `
個人起業家にとって、多くの人に知られ、ビジネスを成長させ続けるワザを紹介しています
`
  },
  {
    key: "mindset",
    name: "ネットで収益",
    description: (
      <>
        <ruby>
          個人で起業・副業を始める<rp>(</rp>
          <rt>ソロプレナーになる</rt>
          <rp>)</rp>
        </ruby>
        にあたって参考になる考え方や、ネットからの収益化のアイデアを紹介しています
        （アフィリエイトやポイ活ではありません）
      </>
    )
  }
]

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

export default categoryCollection
