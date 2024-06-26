"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { retrieveDocumentsSnapshot } from "@/lib/firebase/firestore.js"
import SlideIn from "@/components/Assets/slidein"
import ArticleItem from "./Item"
import type Category from "@/lib/types/category"
import type { BlogEntry } from "@/lib/types/blog"
import Spinner from "@/components/Assets/spinner"

export type Props = {
  latests: number
}

export default function Latests({ latests }: Props) {
  const [collection, setCollection] = useState<BlogEntry[]>([])
  const [loading, setLoding] = useState<boolean>(true)

  useEffect(() => {
    if (!latests) {
      return
    }
    const unsubscribe = retrieveDocumentsSnapshot(
      "blogs",
      (data) => {
        const newests = data.slice(0, latests)
        setCollection(newests)
        setLoding(false)
      },
      { status: "published" }
    )
    return () => {
      if (unsubscribe && typeof unsubscribe === "function") {
        unsubscribe()
      }
    }
  }, [latests])
  if (loading) {
    return (
      <div className="flex flex-nowrap gap-8 p-0 items-center justify-start">
        Loading...
        <Spinner />
      </div>
    )
  }
  return (
    <div className="flex flex-wrap p-0 mb-6 justify-start">
      {collection.map((c, key) => (
        <div key={key} className="w-1/2 sm:w-1/4">
          <div className="m-2 text-xs">
            <ArticleItem document={c} />
          </div>
        </div>
      ))}
    </div>
  )
}
