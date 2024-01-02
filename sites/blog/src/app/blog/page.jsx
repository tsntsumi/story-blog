"use client"
import BlogListings from "@/components/Blogs/Listings"
import { useSearchParams } from "next/navigation"
import { categoryMap } from "@/collections/categories"

// List all blog items
export default async function Page() {
  const { category, tag } = useSearchParams()
  const status = "published"
  const categories = Object.keys(categoryMap)

  return (
    <BlogListings
      headerInfo={{
        title: "ブログ一覧",
        subtitle: "ストーリー・セールス・ブログ",
        description: <></>
      }}
      searchParams={{
        status,
        category,
        tag,
        totalPages,
        currentPage
      }}
    />
  )
}
