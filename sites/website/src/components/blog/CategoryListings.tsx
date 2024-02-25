"use client"
import { Categories } from "@/lib/collections/categories"
import type { Category } from "@/lib/types/blog"

export default function CategoryListings() {
  return (
    <>
      <div>カテゴリー一覧</div>
      {Categories.map((c, i) => {
        const { key, name, description } = c
        return (
          <div key={key}>
            <h3>{name}</h3>
            <p>{description}</p>
          </div>
        )
      })}
    </>
  )
}
