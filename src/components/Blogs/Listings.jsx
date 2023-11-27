"use client"
import { React, useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { retrieveBlogsSnapshot } from "@/lib/firebase/firestore.js"
import SectionHeader from "@/components/Common/SectionHeader"
import BlogItem from "./Item"

//console.debug = (...msg) => {
/* do nothing */
//}

export default function BlogListings({ headerInfo, searchParams }) {
  const router = useRouter()
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
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader headerInfo={headerInfo} />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {blogs?.map((blog) => (
            <BlogItem key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  )
}
