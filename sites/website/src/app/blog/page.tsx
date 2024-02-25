import Header from "@/components/Header"
import Footer from "@/components/Footer"
import Categories from "@/lib/collections/categories"
import CategoryListings from "@/components/blog/CategoryListings"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "お知らせ",
  description: `まきせ鍼灸整骨院からの最新情報を掲載するページです。翌月の休日予定や、みなさまにとってお役に立つ情報を掲載します。ぜひ確認してください。`
}

// List all announce items
export default function Page() {
  return (
    <>
      <Header />
      <CategoryListings />
      <Footer />
    </>
  )
}
