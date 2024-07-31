"use client"
import NextLink from "next/link"
import Link from "@/components/Assets/link"
import { Categories } from "@/lib/categories"
import type Category from "@/lib/types/category"

export default function CategoryListings() {
  return (
    <>
      <div className="flex flex-wrap w-full justify-start">
        {Categories.map((c, i) => (
          <div key={c.key} className="w-1/2 md:w-1/4 text-justify">
            <div className="border-2 border-gold-white rounded-lg m-2 p-0">
              <NextLink
                href={`/blog/${c.key}`}
                className="mb-3 block hover:text-primary gap-0"
              >
                <h2 className="h-[2.4rem] min-h-[2.2rem] max-h-[2.2rem] text-ellipsis overflow-hidden m-0 rounded-t-lg p-2 text-sm font-bold bg-gold">
                  {c.name}
                </h2>
                <div className="min-h-[5.2rem] h-[5.2rem] max-h-[5.2rem] text-ellipsis overflow-hidden m-0 p-2 text-sm font-light text-slate-500">
                  {c.description}
                </div>
              </NextLink>
              <div className="px-2 text-right text-xs">
                <Link href={`/blog/${c.key}`}>記事一覧</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}
