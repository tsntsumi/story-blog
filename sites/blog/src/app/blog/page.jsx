"use client"
import BlogListings from "@/components/Blogs/Listings"
import { useSearchParams } from "next/navigation"
import { categoryMap } from "@/collections/categories"

// List all blog items
export default async function Page() {
  const { category, tag } = useSearchParams()
  const status = "published"
  const categories = Object.keys(categoryMap)
  const defaultCategory = "marketing"
  const categoryName = categoryMap[category || defaultCategory]

  return (
    <BlogListings
      headerInfo={{
        title: `${categoryName}ブログ一覧`,
        subtitle: `ストーリー・${categoryName}・ブログ`,
        description: <></>
      }}
      searchParams={{
        status,
        category: category || defaultCategory,
        tag
      }}
    />
  )
}
