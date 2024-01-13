import Link from "next/link"
import { Categories } from "@/collections/categories"

export default function CategoryMenu(category) {
  return (
    <>
      {Object.entries(Categories).map(([c, v]) => (
        <Link
          href={`/blog/${c}`}
          className="block whitespace-nowrap py-2 px-3 uppercase text-xs md:text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500"
        >
          <span className={`${category === c && "font-black"}`}>{v.name}</span>
        </Link>
      ))}
    </>
  )
}
