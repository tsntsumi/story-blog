"use client"
import NextLink from "next/link"
import Link from "@/components/common/link"
import { type Category, Categories } from "@/lib/collections/categories"

export default function CategoryListings() {
  return (
    <>
      <div className="flex flex-wrap gap-8 p-0 justify-start">
        {Categories.map((c, i) => (
          <div
            key={c.key}
            className="w-[30%] border-2 border-t-0 border-grey-500 rounded-b-lg"
          >
            <NextLink
              href={`/blog/${c.key}`}
              className="mb-3 block hover:text-primary gap-0"
            >
              <h2 className="min-h-[2.5rem] m-0 rounded-t-lg p-4 text-lg font-bold bg-gold">
                {c.name}
              </h2>
              <div className="min-h-[8rem] h-[8rem] overflow-hidden m-0 p-4 text-sm font-light text-slate-500">
                {c.description}
              </div>
            </NextLink>
            <div className="px-2">
              <Link href={`/blog/${c.key}`}>記事一覧</Link>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
