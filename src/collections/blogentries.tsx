import { buildCollection, buildProperty } from "firecms"
import { BlogEntryPreview } from "./blogentrypreview"
import { BlogEntry } from "@/types/blog"
import { categoryEnumeration } from "@/collections/categories"

export const blogCollection = buildCollection<BlogEntry>({
  name: "Blog entries",
  path: "blog",
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
      dataType: "string"
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
      description: "ブログの内容。テキストと画像の配列",
      validation: { required: true },
      dataType: "array",
      columnWidth: 400,
      oneOf: {
        typeField: "type", // you can ommit these `typeField` and `valueField` props to use the defaults
        valueField: "value",
        properties: {
          images: buildProperty({
            name: "Images",
            dataType: "array",
            of: buildProperty({
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
            description:
              "This fields allows uploading multiple images at once and reordering"
          }),
          text: {
            dataType: "string",
            name: "Text",
            markdown: true
          }
        }
      }
    },
    category: ({ values }) => ({
      name: "Category",
      validation: { required: true },
      dataType: "string",
      columnWidth: 140,
      enumValues: categoryEnumeration,
      defaults: "growth"
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
      name: "Created on",
      dataType: "date",
      autoValue: "on_create"
    }
  }
})

export default blogCollection
