"use client"
import React, { useState, useEffect } from "react"
import Link from "@/components/common/link"
import Image from "next/image"
import { retrieveDocumentsSnapshot } from "@/lib/firebase/firestore.js"
import SlideIn from "@/components/common/slidein"
import Spinner from "@/components/common/spinner"
import AraticleItem from "./Item"
import AcceptOffer from "@/components/common/acceptoffer"
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
        <div className="flex flex-nowrap items-center justify-center">
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
      <SlideIn className="animate_left">
        <div className="flex flex-wrap gap-8 xl:gap-4 p-0 justify-start">
          {collection.map((c, key) => (
            <div key={key} className="w-[46%] xl:w-[31%]">
              <AraticleItem document={c} />
            </div>
          ))}
        </div>
      </SlideIn>
      <SlideIn className="animate_bottom mx-12 my-4 text-sm text-justify">
        <p className="my-2">
          更新情報をEmailでご連絡しています。ブログが更新されたときの他にも、
          役に立つ情報をお届けします。
        </p>
        <p className="my-2">
          単にお徳なだけでなく、あなたがネットで見つかる・選ばれるために
          すぐに使えて役に立つ情報をお届けしています。
        </p>
        <p className="my-2">ぜひご購読ください</p>
        <AcceptOffer
          offer={{
            title: category.name,
            url: `/blog/${category.key}`,
            category: "お役立ち情報ご購読"
          }}
        >
          お役立ち情報を購読する
        </AcceptOffer>
        <div className="text-right">
          <Link href={`/blog`} go="back">
            戻る
          </Link>
        </div>
      </SlideIn>
    </section>
  )
}
