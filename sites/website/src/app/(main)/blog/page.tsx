import type { Metadata } from "next"
import { Suspense } from "react"
import NextLink from "next/link"
import Categories from "@/lib/categories"
import Pagination from "@/app/ui/pagination"
import Search from "@/app/ui/blog/search"
import Table from "@/app/ui/blog/table"
import CategorySelector from "@/app/ui/blog/category"
import LatestArticles from "@/app/ui/blog/latest-articles"
import fetchLatestArticles, { fetchArticlesPages } from "@/app/lib/blog"
import { ArticlesSkeleton, LatestArticlesSkeleton } from "@/app/ui/skeletons"

export const metadata: Metadata = {
  title: "アイデアル・ブログ｜カテゴリー一覧",
  description: `
今の職場では能力を発揮できない、過小評価されて収入が限られてるとお悩みですか？
いま、クライアントからの尊敬と報酬を受け取れ、
経済的にも、時間的にも自由になれるコーチングビジネスを始める方が増えてます。

あなたを問題児、トラブルメーカーとしか評価しない上司たちに支配された会社を飛び出し、
より多くのクライアントに貢献し成功者を生み出し続けるコーチング起業
成功の秘密のステップとマインドセットを探しているならここにあります。`,
  robots: {
    index: true
  }
}

// List all blog items
export default async function Page({
  searchParams
}: {
  searchParams?: { query?: string; page?: string }
}) {
  const query = searchParams?.query || ""
  const currentPage = Number(searchParams?.page) || 1
  const totalPages = await fetchArticlesPages(query)

  return (
    <section className="mt-14 mx-4">
      <h1 className="mb-9 text-base text-center text-itemtitle2 font-medium text-black">
        <span className="text-gold-dark text-4xl">アイデアル・ブログ</span>
      </h1>
      <h2 className="whitespace-nowrap text-xs my-1">カテゴリー一覧</h2>
      <CategorySelector />
      <div className="mt-4 flex flex-wrap items-center justify-between gap-2 my-4 md:m-8">
        <Suspense fallback={<LatestArticlesSkeleton />}>
          <Table query={query} currentPage={currentPage} />
        </Suspense>
        <div className="mt-5 flex w-full justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </div>
    </section>
  )
}
