import { buildCollection, buildProperty, buildEnumValues } from "firecms"

export const Categories = {
  "google-maps": {
    key: "google-maps",
    name: "Googleマップ（MEO）",
    description: `
Googleビジネスプロフィールを使った MEO で、Googleマップに登録したあなたのお店の売り上げにつながる情報を投稿しています。
`
  },
  "google-ads": {
    key: "google-ads",
    name: "Google広告",
    description: `
Google広告の使い方の秘訣や、Google広告とホームページ(HP)・ランディングページ(LP)を効率よく効果的に連携させるテクニックを投稿しています
`
  },
  "seo": {
    key: "seo",
    name: "検索エンジン（SEO）",
    description: `
地域密着の少資本の店舗ビジネスが、自分でホームページを改善して集客を成功させるためのテクニックを投稿しています。
`
  },
  "marketing": {
    key: "marketing",
    name: "知られる力",
    description: `
個人起業家にとって、多くの人に知られ、ビジネスを成長させ続けるワザを紹介しています
`
  },
  "mindset": {
    key: "mindset",
    name: "副業マインド",
    description: `
Side Hustle (副業)を始めるにあたって参考になる考え方や見方を紹介しています。
`
  }
}

const categoryMap = {
  "google-maps": Categories["google-maps"].name,
  "google-ads": Categories["google-ads"].name,
  "marketing": Categories["marketing"].name,
  "mindset": Categories["mindset"].name,
  "seo": Categories["seo"].name
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
