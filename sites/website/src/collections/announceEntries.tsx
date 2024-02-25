import {
  buildCollection,
  buildProperty,
  buildEnumValues,
  buildEntityCallbacks
} from "firecms"
import { AnnounceEntryPreview } from "@/collections/announceEntryPreview"
import { AnnounceEntry } from "@/lib/types/announce"
import CategoriesMap from "./categories.json"

export const categoryEnumeration = buildEnumValues(CategoriesMap)

const defaultSlug = () => {
  const n = Date.now()
  const u = new Date(n)
  const z = u.getTimezoneOffset() * 60 * 1000
  const d = new Date(n - z).toISOString()?.replace(/:/g, "")
  return d
}

export const announceCollection = buildCollection<AnnounceEntry>({
  name: "Announce entries",
  path: "announces",
  group: "Main",
  views: [
    {
      path: "preview",
      name: "Preview",
      Builder: AnnounceEntryPreview
    }
  ],
  properties: {
    title: {
      name: "タイトル",
      validation: { required: true },
      dataType: "string"
    },
    slug: {
      name: "slug",
      dataType: "string",
      readOnly: true,
      defaultValue: defaultSlug()
    },
    author: {
      name: "作者",
      validation: { required: true },
      dataType: "string"
    },
    tags: {
      name: "タグリスト",
      dataType: "array",
      of: {
        name: "タグ",
        dataType: "string"
      }
    },
    content: {
      name: "内容",
      description: "お知らせの内容。テキストと画像をいくつか",
      validation: { required: true },
      dataType: "array",
      columnWidth: 400,
      oneOf: {
        typeField: "type", // you can ommit these `typeField` and `valueField` props to use the defaults
        valueField: "value",
        properties: {
          text: {
            dataType: "string",
            name: "本文",
            markdown: true
          },
          images: buildProperty({
            name: "画像・写真",
            dataType: "array",
            of: buildProperty({
              dataType: "string",
              storage: {
                mediaType: "image",
                storagePath: "/images",
                acceptedFiles: ["image/*"],
                metadata: {
                  cacheControl: "max-age=1000000"
                }
              }
            }),
            description:
              "複数の画像・写真のファイルを一度に選択してアップロードできます"
          }),
          videos: buildProperty({
            name: "動画",
            dataType: "array",
            of: buildProperty({
              dataType: "string",
              storage: {
                mediaType: "video",
                storagePath: "/videos",
                acceptedFiles: ["video/*"],
                metadata: {
                  cacheControl: "max-age=1000000"
                }
              }
            }),
            description:
              "複数の動画ファイルを一度に選択肢てアップロードできます"
          })
        }
      }
    },
    category: ({ values }) => ({
      name: "カテゴリー",
      validation: { required: true },
      dataType: "string",
      columnWidth: 140,
      enumValues: categoryEnumeration,
      defaults: "holiday"
    }),
    status: ({ values }) => ({
      name: "状態",
      validation: { required: true },
      dataType: "string",
      columnWidth: 140,
      enumValues: {
        published: {
          id: "published",
          label: "公開",
          disabled: !values.slug
        },
        draft: "下書き"
      },
      defaultValue: "draft"
    }),
    createdat: {
      name: "作成日",
      dataType: "date",
      autoValue: "on_create"
    }
  }
})

export default announceCollection
