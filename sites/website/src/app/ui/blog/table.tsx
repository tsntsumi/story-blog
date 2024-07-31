import Image from "next/image"
import { fetchFilteredArticles } from "@/app/lib/blog"
import { Articles, Article } from "@/app/ui/blog/latest-articles"
import { clsx } from "clsx"

export default async function Table({
  query,
  currentPage,
  category
}: {
  query: string
  currentPage: number
  category?: string
}) {
  const articles = await fetchFilteredArticles(query, currentPage, category)

  return (
    <Articles>
      {articles?.map((a, i) => {
        return (
          <div
            key={`article-${i + 1}`}
            className={clsx("flex flex-row items-center justify-between")}
          >
            <Article article={a} />
          </div>
        )
      })}
    </Articles>
  )
}
