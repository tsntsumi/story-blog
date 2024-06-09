import {
  buildCollection,
  buildProperty,
  buildEntityCallbacks,
  buildEnumValues
} from "firecms"

import { NewsletterEntryPreview } from "./newsletterentrypreview"
import { NewsletterEntry } from "@/lib/types/newsletter"

const newsletterCallbacks = buildEntityCallbacks({
  onPreSave: ({
    collection,
    path,
    entityId,
    values,
    previousValues,
    status
  }) => {
    // return the updated values
    values.seqno =
      values.seqno ||
      Math.floor((Date.now() - Date.parse("2024-01-01")) / 1000) * 10000
    return values
  }
})

export const newsletterCollection = buildCollection<NewsletterEntry>({
  name: "Newsletter entries",
  path: "newsletters",
  group: "Main",
  views: [
    {
      path: "preview",
      name: "Preview",
      Builder: NewsletterEntryPreview
    }
  ],
  properties: {
    title: {
      name: "Title",
      validation: { required: true },
      dataType: "string"
    },
    seqno: {
      name: "Sequence No",
      validation: { required: true },
      dataType: "number"
    },
    author: {
      name: "Author",
      validation: { required: true },
      dataType: "string",
      defaultValue: "TSUTSUMI Kikuo"
    },
    tags: {
      name: "Tags",
      dataType: "array",
      of: {
        name: "Tag",
        dataType: "string"
      }
    },
    content: {
      name: "Content",
      description:
        "ニュースレターの内容。テキストの配列と画像の配列、動画の配列",
      validation: { required: true },
      dataType: "array",
      columnWidth: 400,
      oneOf: {
        typeField: "type", // you can ommit these `typeField` and `valueField` props to use the defaults
        valueField: "value",
        properties: {
          text: {
            dataType: "string",
            name: "Text",
            markdown: true
          },
          images: buildProperty({
            name: "Images",
            dataType: "array",
            of: buildProperty({
              dataType: "string",
              storage: {
                mediaType: "image",
                storagePath: "/images/newsletter",
                acceptedFiles: ["image/*"],
                metadata: {
                  cacheControl: "max-age=1000000"
                }
              }
            }),
            description:
              "This fields allows uploading multiple images at once and reordering"
          }),
          videos: buildProperty({
            name: "Videos",
            dataType: "array",
            of: buildProperty({
              dataType: "string",
              storage: {
                mediaType: "video",
                storagePath: "/videos/newsletter",
                acceptedFiles: ["video/*"],
                metadata: {
                  cacheControl: "max-age=1000000"
                }
              }
            }),
            description:
              "This fields allows uploading multiple images at once and reordering"
          })
        }
      }
    },
    status: ({ values }) => ({
      name: "Status",
      validation: { required: true },
      dataType: "string",
      columnWidth: 140,
      enumValues: {
        published: {
          id: "published",
          label: "Published",
          disabled: !values.title
        },
        draft: "Draft"
      },
      defaultValue: "draft"
    }),
    createdat: {
      name: "Created on",
      dataType: "date",
      autoValue: "on_create"
    }
  },
  callbacks: newsletterCallbacks
})

export default newsletterCollection
