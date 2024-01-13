"use client"
import { React, useState, useEffect } from "react"
import { useRouter, usePathname } from "next/navigation"
import { slug } from "github-slugger"
import Link from "next/link"
import Image from "next/image"
import { retrieveBlogsSnapshot } from "@/lib/firebase/firestore.js"
import SectionHeader from "@/components/Common/SectionHeader"
import BlogItem from "./Item"
import Subscribe from "@/components/Common/Subscribe"
import Loading from "@/components/Common/Loading"
import { Categories } from "@/collections/categories"
import CategoryMenu from "@/components/Blogs/CategoryMenu"

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
      if (data.length) {
        setBlogs(data.sort((a, b) => b.createdat - a.createdat))
      } else {
        setBlogs([
          {
            title: "",
            hero: "",
            summary: "",
            slug: "",
            author: "",
            tags: [],
            content: {
              type: "text",
              value: ""
            },
            category: category,
            status: "published"
          },
          {
            title: "ただいま執筆中です……",
            hero: "images/alizza-overlap.gif",
            summary: "期待してお待ちください",
            slug: "",
            author: "",
            tags: [],
            content: {
              type: "text",
              value: "ただ今、執筆中です。このカテゴリーに興味はありますか？"
            },
            category: category,
            status: "published"
          }
        ])
      }
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
      <div className="mt-24 w-fit mx-auto">
        <Loading />
      </div>
    )
  }

  return (
    <section id="blog-list" className="py-20 lg:py-25">
      <div className="ml-0 md:ml-[180px] px-4">
        <div className="animate_top">
          <SectionHeader headerInfo={headerInfo} />
        </div>
      </div>

      <div className="md:hidden mx-1 md:mx-25 mt-8 md:mt-12 flex flex-wrap block justify-around items-center  bg-gray-50 dark:bg-gray-900/70 shadow-md dark:shadow-gray-800/40 rounded">
        <CategoryMenu category={category} />
      </div>

      <div className="flex sm:space-x-24">
        <div className="mt-18 hidden max-h-screen h-full sm:flex flex-wrap bg-gray-50 dark:bg-gray-900/70 shadow-md pt-5 dark:shadow-gray-800/40 rounded min-w-[230px] max-w-[230px] overflow-auto">
          <div className="py-4 px-1 md:px-6">
            <CategoryMenu category={category} />
          </div>
        </div>
        <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
          <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {blogs?.map((blog) => (
              <BlogItem key={blog.id} blog={blog} category={category} />
            ))}
          </div>
        </div>
      </div>
      <div className="ml-0 md:ml-[180px] mt-6 px-4 md:px-8 xl:px-25">
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
      <div className="ml-0 md:ml-[180px]">
        <div className="mx-1 md:mx-25 mt-8 md:mt-12 flex flex-wrap block justify-around items-center  bg-gray-50 dark:bg-gray-900/70 shadow-md dark:shadow-gray-800/40 rounded">
          <CategoryMenu category={category} />
        </div>
      </div>
    </section>
  )
}
