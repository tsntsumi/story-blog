import { buildCollection, buildProperty, buildEnumValues } from "firecms"

export const categoryMap = {
  "mindset": "マインドセット",
  "google-maps": "Googleマップ",
  "marketing": "マーケティング",
  "story": "ストーリー"
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
