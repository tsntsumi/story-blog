"use client"
import React, { useState, useEffect } from "react"
import Link from "@/components/common/link"
import Image from "next/image"
import { retrieveDocumentsSnapshot } from "@/lib/firebase/firestore.js"
import SlideIn from "@/components/common/slidein"
import Spinner from "@/components/common/spinner"
import AraticleItem from "./Item"
import AcceptOffer from "@/components/common/acceptoffer"
import Magnet from "@/components/Magnet"
import type { Category } from "@/lib/collections/categories"
import type { BlogEntry } from "@/lib/types/blog"

export type Props = {
  category: Category
}

const Heading = ({ category }: { category: Category }) => {
  return (
    <h1 className="text-center font-medium">
      <span className="text-darkgold">
        見つかる！
        <span className="text-gold">
          {category.name || category.key.toUpperCase()}
        </span>{" "}
        ブログ
      </span>
      ｜記事一覧
    </h1>
  )
}

export default function Listings({ category }: Props) {
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
        <div className="flex flex-nowrap items-center justify-center w-full">
          Loading... <Spinner />
        </div>
      </>
    )
  }
  return (
    <section id="blog-listings" className="md:w-3/4 xl:w-2/3 mx-auto">
      <Heading category={category} />
      {!collection && (
        <div className="flex flex-nowrap w-1/4 items-center justify-center mx-auto">
          Loading...
          <Spinner />
        </div>
      )}
      <SlideIn className="animate_right">
        <p className="mb-4">{category.description}</p>
      </SlideIn>
      <div className="flex flex-wrap w-full justify-start">
        {collection.map((c, key) => (
          <div key={key} className="w-1/2 md:w-1/4 text-justify p-2">
            <AraticleItem document={c} />
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
