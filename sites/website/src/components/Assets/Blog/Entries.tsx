"use client"
import React, { useState, useEffect } from "react"
import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "@/components/Assets/link"
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
  entries: BlogEntry[]
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

export default function Entries({ category, entries }: Props) {
  if (!entries?.length) {
    return notFound()
  }
  return (
    <section id="blogs" className="mx-auto">
      <Heading category={category} />
      <SlideIn className="animate_right">
        <p className="mb-4 w-9/10 md:w-8/10 mx-auto">{category?.description}</p>
      </SlideIn>
      <div className="flex flex-wrap w-full md:w-9/10 mx-auto justify-start">
        {entries.map((e, key) => (
          <div key={key} className="w-1/2 md:w-1/4 text-justify p-2">
            <ArticleItem document={e} />
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
