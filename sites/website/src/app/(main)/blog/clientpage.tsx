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
        <SlideIn className="animate_top mx-12 text-sm text-justify">
          <p className="my-2">
            更新情報をEmailでご連絡しています。ブログが更新されたときの他にも、
            役に立つ情報をお届けします。
          </p>
          <p className="my-2">
            単にお徳なだけでなく、ネットであなたが見つかる・選ばれるために
            すぐに使えて役に立つ情報をお届けしています。
          </p>
          <p className="my-2">ぜひご購読ください</p>
          <AcceptOffer
            offer={{
              title: "カテゴリー一覧",
              url: `/blog`,
              category: "お役立ち情報ご購読"
            }}
          >
            お役立ち情報を購読する
          </AcceptOffer>
          <div className="text-right">
            <Link href={`/`} go="back">
              Home
            </Link>
          </div>
        </SlideIn>
      </section>
      {/* <Footer /> */}
    </>
  )
}
