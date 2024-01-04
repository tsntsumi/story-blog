"use client"
import BlogListings from "@/components/Blogs/Listings"
import { categoryMap } from "@/collections/categories"

// List all blog items
export default function CategoryPage({ params }) {
  const status = "published"
  const { category } = params
  const categories = Object.keys(categoryMap)
  const displayName = categoryMap[category]
  const tag = ""

  return (
    <BlogListings
      headerInfo={{
        title: `ブログ一覧`,
        subtitle: <div className="text-center">{displayName} ・ブログ</div>,
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
