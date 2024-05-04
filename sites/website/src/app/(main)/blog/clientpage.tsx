"use client"
import CategoryListings from "@/components/Blog/CategoryListings"
import AcceptOffer from "@/components/common/acceptoffer"
import Link from "@/components/common/link"
import Image from "next/image"
import SlideIn from "@/components/common/slidein"
import { type Category, Categories } from "@/lib/collections/categories"

// List all blog items
export default function Page() {
  const direction = (nth) => (nth % 2 === 0 ? "animate_right" : "animate_left")
  return (
    <>
      {/* <Header /> */}
      <section className="md:w-3/4 xl:w-2/3 mx-auto">
        <h1 className="mb-9 text-base text-center text-itemtitle2 font-medium text-black">
          <span className="text-darkgold text-4xl">見つかるブログ</span>｜
          <span className="whitespace-nowrap">カテゴリー一覧</span>
        </h1>

        <CategoryListings />
      </section>
      {/* <Footer /> */}
    </>
  )
}
