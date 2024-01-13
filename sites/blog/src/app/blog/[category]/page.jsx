"use client"
import BlogListings from "@/components/Blogs/Listings"
import { Categories } from "@/collections/categories"

// List all blog items
export default function CategoryPage({ params }) {
  const status = "published"
  const { category } = params
  const displayName = Categories[category].name
  const description = Categories[category].description
  const tag = ""

  return (
    <BlogListings
      headerInfo={{
        title: `投稿一覧`,
        subtitle: <div className="text-center">{displayName} ・ブログ</div>,
        description: <>{description}</>
      }}
      searchParams={{
        status,
        category,
        tag
      }}
    />
  )
}
