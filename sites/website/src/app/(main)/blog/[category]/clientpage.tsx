"use client"
import BlogListings from "@/components/Blog/Listings"
import Categories, {
  type Category,
  CategoryFromKey
} from "@/lib/collections/categories"

export type Props = {
  params: {
    category: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

// List all blog items
export default function Page({ params, searchParams }: Props) {
  return <BlogListings category={CategoryFromKey(params.category)} />
}
