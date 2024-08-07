import {
  buildCollection,
  buildProperty,
  buildEntityCallbacks,
  buildEnumValues
} from "firecms"
import { BlogEntryPreview } from "./blogentrypreview"
import { BlogEntry } from "@/lib/types/blog"
import Categories from "@/lib/categories"

const categoryMap = Object.fromEntries(
  Categories.map((c, i) => [c.key, c.name])
)

const categoryEnumeration = buildEnumValues(categoryMap)

const blogCallbacks = buildEntityCallbacks({
  onPreSave: ({
    collection,
    path,
    entityId,
    values,
    previousValues,
    status
  }) => {
    values.slug = values.slug?.trim()
    return values
  }
})

export const blogCollection = buildCollection<BlogEntry>({
  name: "Blog entries",
  path: "blogs",
  group: "Main",
  views: [
    {
      path: "preview",
      name: "Preview",
      Builder: BlogEntryPreview
    }
  ],
  properties: {
    title: {
      name: "Title",
      validation: { required: true },
      dataType: "string"
    },
    slug: {
      name: "slug",
      validation: { required: true },
      dataType: "string"
    },
    rating: {
      name: "Rating",
      validation: { required: false },
      dataType: "number"
    },
    hero: buildProperty({
      name: "Hero Image",
      dataType: "string",
      storage: {
        mediaType: "image",
        storagePath: "images",
        acceptedFiles: ["image/*"],
        metadata: {
          cacheControl: "max-age=1000000"
        }
      }
    }),
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
    summary: {
      name: "Summary",
      validation: { required: true },
      dataType: "string",
      columnWidth: 400,
      markdown: true
    },
    content: {
      name: "Content",
      description: "ブログの内容。テキストの配列と画像の配列、動画の配列",
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
                storagePath: "/images",
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
                storagePath: "/videos",
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
    category: ({ values }) => ({
      name: "Category",
      validation: { required: true },
      dataType: "string",
      columnWidth: 140,
      enumValues: categoryEnumeration,
      defaults: "marketing"
    }),
    status: ({ values }) => ({
      name: "Status",
      validation: { required: true },
      dataType: "string",
      columnWidth: 140,
      enumValues: {
        published: {
          id: "published",
          label: "Published",
          disabled: !values.hero
        },
        draft: "Draft"
      },
      defaultValue: "draft"
    }),
    createdat: {
      name: "Created at",
      dataType: "date",
      autoValue: "on_create"
    }
  },
  callbacks: blogCallbacks
})

export default blogCollection
