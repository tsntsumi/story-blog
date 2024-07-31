"use client"
import React, { useState, useEffect } from "react"
import Link from "@/components/Assets/link"
import Image from "next/image"
import { retrieveDocumentsSnapshot } from "@/lib/firebase/firestore.js"
import SlideIn from "@/components/Assets/slidein"
import Spinner from "@/components/Assets/spinner"
import ArticleItem from "./Item"
import AcceptOffer from "@/components/Assets/acceptoffer"
import Magnet from "@/components/main/Assets/Magnet"
import type Category from "@/lib/types/category"
import type { BlogEntry } from "@/lib/types/blog"

export type Props = {
  category: Category
  // entries: BlogEntry[]
}

const Heading = ({ category }: { category: Category }) => {
  return (
    <h1 className="text-center font-medium">
      <span className="text-gold-dark">
        アイデアル｜
        <span className="text-gold">
          {category?.name || category?.key.toUpperCase()}
        </span>
        ブログ
      </span>
      ｜<span className="whitespace-nowrap">記事一覧</span>
    </h1>
  )
}

export function Listings({ category }: Props) {
  const [collection, setCollection] = useState<BlogEntry[]>([])
  const [loading, setLoding] = useState<boolean>(true)

  useEffect(() => {
    if (!category) {
      return
    }
    const unsubscribe = retrieveDocumentsSnapshot(
      "blogs",
      (data) => {
        setCollection(data)
        setLoding(false)
      },
      { status: "published", category: category.key }
    )
    return () => {
      if (unsubscribe && typeof unsubscribe === "function") {
        unsubscribe()
      }
    }
  }, [category])
  if (loading) {
    return (
      <>
        <Heading category={category} />
        <p className="mb-4 w-9/10 md:w-8/10 mx-auto">{category?.description}</p>
        <div className="flex flex-nowrap items-center justify-center w-full">
          Loading... <Spinner />
        </div>
      </>
    )
  }
  return (
    <section id="blogs" className="mx-auto">
      <Heading category={category} />
      <SlideIn className="animate_right">
        <p className="mb-4 w-9/10 md:w-8/10 mx-auto">{category?.description}</p>
      </SlideIn>
      <div className="flex flex-wrap w-full md:w-9/10 mx-auto justify-start">
        {collection?.length === 0 && (
          <p>読み込み中です...。しばらくお待ち下さい。</p>
        )}
        {collection.map((c, key) => (
          <div key={key} className="w-1/2 md:w-1/4 text-justify p-2">
            <ArticleItem document={c} />
          </div>
        ))}
      </div>
      <SlideIn className="animate_bottom mx-8 my-4 text-xs text-justify">
        <div className="text-right">
          <Link href={`/blog`} go="back">
            戻る
          </Link>
        </div>
      </SlideIn>
    </section>
  )
}
