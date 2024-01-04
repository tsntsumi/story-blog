import { buildCollection, buildProperty, buildEnumValues } from "firecms"

export const categoryMap = {
  "google-maps": "Googleマップ",
  "google-ads": "Google広告",
  "marketing": "マーケティング",
  "mindset": "ビジネスマインド",
  "story": "ストーリー・パワー"
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
