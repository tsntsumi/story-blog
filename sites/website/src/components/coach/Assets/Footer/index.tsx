"use client"
import { motion } from "framer-motion"
import { Image } from "@/components/Assets/media"
import NextLink from "next/link"
import Link from "@/components/Assets/link"
import CategoryListings from "@/components/Assets/Blog/CategoryListings"
import { ListLatest } from "@/components/Assets/Blog/Latests"
import { Categories } from "@/lib/categories"
import type Category from "@/lib/types/category"
import Bottom from "@/components/Assets/Footer/Bottom"
import GoOffer from "@/components/coach/Assets/go-offer"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const Footer = () => {
  const pathUrl = usePathname()
  const [dropdownToggler, setDropdownToggler] = useState(false)
  const [stickyMenu, setStickyMenu] = useState(false)

  const elipsis = (text: string, count: number): string =>
    text?.slice(0, count) + (text?.length > count ? "..." : "")

  return (
    <>
      <footer className="mt-0 pt-0 border-t-2 border-gold-dark border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div
          id="footer"
          className="border-t-8 border-ai-yellow mx-auto max-w-c-1390 pb-8 "
        >
          <hr />
          <div className="text-xs px-4  md:px-8 2xl:px-10">
            <div className="flex flex-wrap items-start justify-between mb-8">
              <ul className="list-disc mx-8 w-full">
                <li key="home" className="my-2 text-xs">
                  <Link href="/" go="back">
                    ホームへ戻る
                  </Link>
                </li>
                <li className="my-2 text-xs">
                  <Link href="/who-we-are" go="detail">
                    <ruby>
                      Alizza Ideal<rp>(</rp>
                      <rt>アリザ愛である</rt>
                      <rp>)</rp>
                    </ruby>
                    とは
                  </Link>
                </li>
                <li className="my-2 text-xs">
                  <Link href="/why-we-do" go="detail">
                    アリザ・アイデアルの理念とは
                  </Link>
                </li>
                <li className="my-2 text-xs">
                  <Link href="/pricing" go="detail">
                    サービスと料金
                  </Link>
                </li>
                <li className="text-xs">
                  <div className="my-2">
                    <Link href="/blog">アイデアル・ブログ</Link>
                  </div>
                </li>
              </ul>
            </div>
            <GoOffer />
          </div>
        </div>
        <Bottom />
      </footer>
    </>
  )
}

export default Footer
