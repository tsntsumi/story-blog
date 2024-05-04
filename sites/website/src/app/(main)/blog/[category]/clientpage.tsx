"use client"
import BlogListings from "@/components/Blog/Listings"
import Categories, { type Category } from "@/lib/collections/categories"

export type Props = {
  params: {
    category: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

// List all blog items
export default function Page({ params, searchParams }: Props) {
  const category: Category = Categories.find((c) => c.key === params.category)
  return <BlogListings category={category} />
}
