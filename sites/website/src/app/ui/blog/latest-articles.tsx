import Link from "next/link"
import type BlogEntry from "@/lib/types/blog"
import Media from "@/components/Assets/media"
import { NameFromKey } from "@/lib/categories"
import { fetchLatestArticles } from "@/app/lib/blog"
import { Table } from "@/app/ui/blog/table"
import { clsx } from "clsx"

export function Article({ article }: { article: BlogEntry }) {
  return (
    <div className="grid grid-cols-1 bg-white p-2 drop-shadow rounded-lg">
      <Link href={`/blog/${article.category}/${article.slug}`}>
        <div className="w-full">
          <Media
            src={article.hero}
            alt={article.title}
            width={341}
            height={192}
            className="rounded-lg object-cover aspect-video"
          />
        </div>
      </Link>
      <Link href={`/blog/${article.category}/${article.slug}`}>
        <div className="min-w-0 mt-1">
          <div className="truncate text-xs font-semibold md:text-base">
            {article.title}
          </div>
          <div className="trancate text-xs text-center font-light">
            {article.date}
          </div>
          <div className="trancate text-xs text-center font-light">
            {"| "}
            {NameFromKey(article.category)}
            {" |"}
          </div>
        </div>
      </Link>
    </div>
  )
}

export async function Articles({ children }: { children?: React.ChildNode }) {
  return (
    <div className="flex grow flex-col justify-between rounded-xl bg-gray-100 p-2">
      <div className="grid grid-cols-3 gap-2 p-2">{children}</div>
    </div>
  )
}

export default async function LatestArticles({
  category
}: {
  category?: string
}) {
  const articles = await fetchLatestArticles(category)
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className="mb-4 text-xl md:text-2xl">記事一覧</h2>
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
    </div>
  )
}
