"use client"
import BlogListings from "@/components/Blogs/Listings"
import { categoryMap } from "@/collections/categories"

// List all blog items
export default function Page() {
  const status = "published"
  const category = "marketing"
  const categories = Object.keys(categoryMap)
  const categoryName = categoryMap[category]
  const tag = ""

  return (
    <BlogListings
      headerInfo={{
        title: `ブログ一覧`,
        subtitle: `${categoryName}・ブログ`,
        description: <></>
      }}
      searchParams={{
        status,
        category,
        tag
      }}
    />
  )
}
