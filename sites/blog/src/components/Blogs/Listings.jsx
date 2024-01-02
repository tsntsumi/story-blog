"use client"
import { React, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { slug } from "github-slugger"
import Link from "next/link"
import Image from "next/image"
import { retrieveBlogsSnapshot } from "@/lib/firebase/firestore.js"
import SectionHeader from "@/components/Common/SectionHeader"
import BlogItem from "./Item"
import { categoryMap } from "@/collections/categories"

const Categories = Object.keys(categoryMap)

//console.debug = (...msg) => {
/* do nothing */
//}

export default function BlogListings({ headerInfo, searchParams }) {
  const router = useRouter()
  const pathname = usePathname()
  const basePth = pathname.split("/")[1]
  const [blogs, setBlogs] = useState([])
  const [filters, setFilters] = useState(searchParams)

  useEffect(() => {
    const unsubscribe = retrieveBlogsSnapshot((data) => {
      setBlogs(data)
    }, filters)
    return () => {
      if (unsubscribe && typeof unsubscribe === "function") {
        unsubscribe()
      }
    }
  }, [filters, setBlogs])
  if (!blogs) {
    return (
      <div className="items-center w-fit h-fit mx-auto my-auto">Loading...</div>
    )
  }
  return (
    <section id="blog-list" className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader headerInfo={headerInfo} />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="flex sm:space-x-24">
        <div className="hidden max-h-screen h-full sm:flex flex-wrap bg-gray-50 dark:bg-gray-900/70 shadow-md pt-5 dark:shadow-gray-800/40 rounded min-w-[280px] max-w-[280px] overflow-auto">
          <div className="py-4 px-6">
            <ul className="list-none">
              {Categories.map((category) => {
                return (
                  <li key={category} className="my-3">
                    {pathname.split("/categories/")[1] === slug(category) ? (
                      <h3 className="inline py-2 px-3 uppercase text-sm font-bold text-primary-500">
                        {categoryMap[category]}
                      </h3>
                    ) : (
                      <Link
                        href={`/categories/${slug(category)}`}
                        className="py-2 px-3 uppercase text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500"
                      >
                        {categoryMap[category]}
                      </Link>
                    )}
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {blogs?.map((blog) => (
              <BlogItem key={blog.id} blog={blog} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
