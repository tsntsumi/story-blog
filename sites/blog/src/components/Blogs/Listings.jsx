"use client"
import { React, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { slug } from "github-slugger"
import Link from "next/link"
import Image from "next/image"
import { retrieveBlogsSnapshot } from "@/lib/firebase/firestore.js"
import SectionHeader from "@/components/Common/SectionHeader"
import BlogItem from "./Item"
import Spinner from "@/components/Common/Spinner"
import Subscribe from "@/components/Common/Subscribe"
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
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState(searchParams)
  const category = searchParams.category || pathname.split("/categories/")[1]

  useEffect(() => {
    const unsubscribe = retrieveBlogsSnapshot((data) => {
      setBlogs(data.sort((a, b) => b.createdat - a.createdat))
      setLoading(false)
    }, filters)
    return () => {
      if (unsubscribe && typeof unsubscribe === "function") {
        unsubscribe()
      }
    }
  }, [filters, setBlogs, setLoading])
  if (loading) {
    return (
      <div className="items-center w-fit h-fit mx-auto my-auto mt-24">
        Loading... <Spinner className="ml-2" />
      </div>
    )
  }
  const CategoryList = () =>
    Categories.map((c) => (
      <div key={c} className="my-3">
        {category === slug(c) ? (
          <h3 className="inline py-2 px-1 uppercase text-xs font-bold text-primary-500">
            {categoryMap[c]}
          </h3>
        ) : (
          <Link
            href={`/blog/${c}`}
            className="py-2 px-1 uppercase text-xs font-medium text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500"
          >
            {categoryMap[c]}
          </Link>
        )}
      </div>
    ))

  return (
    <section id="blog-list" className="py-20 lg:py-25">
      <div className="ml-[180px] px-4">
        <div className="animate_top">
          <SectionHeader headerInfo={headerInfo} />
        </div>
      </div>

      <div className="flex sm:space-x-24">
        <div className="mt-18 hidden max-h-screen h-full sm:flex flex-wrap bg-gray-50 dark:bg-gray-900/70 shadow-md pt-5 dark:shadow-gray-800/40 rounded min-w-[180px] max-w-[180px] overflow-auto">
          <div className="py-4 px-4 md:px-6">
            <CategoryList />
          </div>
        </div>
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
            {blogs?.map((blog) => (
              <BlogItem key={blog.id} blog={blog} category={category} />
            ))}
          </div>
        </div>
      </div>
      <div className="ml-[180px] mt-6 px-4 md:px-8 xl:px-25">
        <div className="w-fit mx-auto">
          <p>
            このブログでは、あなたのビジネスがネットを使ってみんなに知られるためのテクニックを発信しています。
          </p>
          <p>
            よろしければ、新しいブログ記事を追加したときにメールでお知らせします。
          </p>
          <p>いかがですか？</p>
          <Subscribe />
        </div>
      </div>
      <div className="ml-[180px]">
        <div className="mx-8 md:mx-25 mt-8 md:mt-12 flex flex-nowrap block justify-around items-center  bg-gray-50 dark:bg-gray-900/70 shadow-md dark:shadow-gray-800/40 rounded">
          <CategoryList />
        </div>
      </div>
    </section>
  )
}
