import type { Metadata } from "next"
import { Suspense } from "react"
import Link from "@/components/Assets/link"
import Categories, {
  CategoryFromKey,
  NameFromKey,
  DescriptionFromKey
} from "@/lib/categories"
import type Category from "@/lib/types/category"
import CategorySelector from "@/app/ui/blog/category"
import Pagination from "@/app/ui/pagination"
import Table from "@/app/ui/blog/table"
import LatestArticles from "@/app/ui/blog/latest-articles"
import { fetchArticlesPages } from "@/app/lib/blog"
import { ArticlesSkeleton, LatestArticlesSkeleton } from "@/app/ui/skeletons"

export type Props = {
  params: {
    category: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export function generateMetadata({ params, searchParams }: Props): Metadata {
  const key = params.category
  const category: Category = CategoryFromKey(key)

  if (!category) {
    return {
      title: `404: Category ${key} not found`,
      description: `Category ${key} not found`
    }
  }

  const name: string = NameFromKey(key) || key
  const desc: string =
    DescriptionFromKey(key) || `${name}カテゴリーのブログ記事の一覧です`

  return {
    title: `アイデアル・${name?.toUpperCase()}ブログ記事一覧`,
    description: desc
  }
}

export default async function Page({
  params,
  searchParams
}: {
  params?: {
    category: string
  }
  searchParams?: {
    query?: string
    page?: string
  }
}) {
  const query = searchParams?.query || ""
  const key = params?.category
  const category = CategoryFromKey(key)
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await fetchArticlesPages(query, key)

  return (
    <section className="mt-14 mx-4">
      <h1 className="text-lg">
        <Link href="/blog" go="back" className="text-lg inline-block">
          アイデアル・ブログ
        </Link>{" "}
        <span className="text-lg font-thin">/ {category.name}</span>
      </h1>
      <h2 className="whitespace-nowrap text-xs my-1">カテゴリー一覧</h2>
      <CategorySelector />
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 my-4 md:m-8">
        <Suspense fallback={<LatestArticlesSkeleton />}>
          <Table query={query} currentPage={currentPage} category={key} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </section>
  )
}
