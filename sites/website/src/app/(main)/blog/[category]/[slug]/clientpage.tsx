"use client"
import React, { useState, useEffect } from "react"
import Article from "@/components/Blog/Article"
import { store, storage } from "@/lib/firebase/app"
import { retrieveDocumentsSnapshot } from "@/lib/firebase/firestore"
import type { BlogEntry } from "@/lib/types/blog"
import Spinner from "@/components/common/spinner"

export type Props = {
  params: {
    category: string
    slug: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params, searchParams }: Props) {
  const [blogs, setBlogs] = useState<BlogEntry[]>()
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (!params) {
      return
    }
    const unsubscribe = retrieveDocumentsSnapshot(
      "blogs",
      (data) => {
        setBlogs(data)
        setLoading(false)
      },
      {
        status: "published",
        slug: params.slug,
        limit: 1
      }
    )
    return () => {
      if (unsubscribe && typeof unsubscribe === "function") {
        unsubscribe()
      }
    }
  }, [params])

  if (loading) {
    return (
      <>
        Loading {params.slug}... <Spinner className="w-[32px] ml-2" />
      </>
    )
  }
  if (!blogs) {
    return <>no content</>
  }
  const blog: BlogEntry = blogs.at(0)
  return (
    <>
      <Article article={blog} />
    </>
  )
}
