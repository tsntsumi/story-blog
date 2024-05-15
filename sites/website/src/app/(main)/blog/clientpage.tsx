"use client"
import CategoryListings from "@/components/Assets/Blog/CategoryListings"
import AcceptOffer from "@/components/Assets/acceptoffer"
import Link from "@/components/Assets/link"
import Image from "next/image"
import SlideIn from "@/components/Assets/slidein"
import { Categories } from "@/lib/categories"
import type Category from "@/lib/types/category"

// List all blog items
export default function ClientPage() {
  const direction = (nth) => (nth % 2 === 0 ? "animate_right" : "animate_left")
  return (
    <>
      <section className="w-full">
        <h1 className="mb-9 text-base text-center text-itemtitle2 font-medium text-black">
          <span className="text-gold-dark text-4xl">見つかるブログ</span>｜
          <span className="whitespace-nowrap">カテゴリー一覧</span>
        </h1>

        <CategoryListings />
      </section>
      {/* <Footer /> */}
    </>
  )
}
