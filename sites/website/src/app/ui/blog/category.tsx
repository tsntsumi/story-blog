import type Category from "@/lib/types/category"
import Categories from "@/lib/categories"
import NextLink from "next/link"

export default function CategorySelector() {
  return (
    <div className="flex items-center justify-between gap-2 my-0">
      [
      {Categories.map((c, i) => (
        <>
          {i > 0 && <div>|</div>}
          <div key={`category-${i}`} className="p-1 my-0 mx-1">
            <NextLink
              href={`/blog/${c.key}`}
              className="text-xs text-blue-700 underline"
            >
              {c.name}
            </NextLink>
          </div>
        </>
      ))}
      ]
    </div>
  )
}
