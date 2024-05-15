"use client"
import BlogListings from "@/components/Assets/Blog/Listings"
import Categories, { CategoryFromKey } from "@/lib/categories"
import type Category from "@/lib/types/category"

export type Props = {
  params: {
    category: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

// List all blog items
export default function ClientPage({ params, searchParams }: Props) {
  const category: Category = CategoryFromKey(params.category)

  return <BlogListings category={category} />
}
