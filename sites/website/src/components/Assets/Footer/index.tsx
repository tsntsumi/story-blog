"use client"
import { motion } from "framer-motion"
import { Image } from "@/components/Assets/media"
import NextLink from "next/link"
import Link from "@/components/Assets/link"
import CategoryListings from "@/components/Assets/Blog/CategoryListings"
import Latests from "@/components/Assets/Blog/Latests"
import { Categories } from "@/lib/categories"
import type Category from "@/lib/types/category"
import Bottom from "@/components/Assets/Footer/Bottom"
import GoOffer from "@/components/main/Assets/go-offer"

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
          <div className="w-full px-8 pb-1 mb-4 text-xs font-medium text-ai-blue bg-ai-yellow">
            お客さまが主人公です。 あなたは……、
            主人公を導くヨーダやガンダルフのようなコーチであり魔法使いです。
          </div>
          <div className="text-sm px-4  md:px-8 2xl:px-10">
            <div className="flex flex-wrap items-start justify-between mb-8">
              <ul className="list-disc ml-8">
                <li key="home" className="my-2">
                  <Link href="/" go="back">
                    ホームへ戻る
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/who-we-are" go="detail">
                    <ruby>
                      Alizza Ideal<rp>(</rp>
                      <rt>アリザ愛である</rt>
                      <rp>)</rp>
                    </ruby>
                    とは
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/why-we-do" go="detail">
                    Alizza Ideal の理念とは
                  </Link>
                </li>
                <li className="my-2">
                  <Link href="/pricing" go="detail">
                    サービスと料金
                  </Link>
                </li>
                <li>
                  <div className="my-2">ブログカテゴリー</div>
                  <div className="flex flex-wrap w-full justify-start">
                    {Categories.map((c, i) => (
                      <div key={c.key} className="w-1/2 md:w-1/4 text-justify">
                        <div className="border-2 border-slate-200 rounded-lg m-2 p-0 h-[4.6rem] min-h-[4.6rem] max-h-[4.6rem] ovreflow-hidden">
                          <div className="flex flex-nowrap items-center text-xs h-[3rem] max-h-[2.2rem] min-h-[2.2rem] border-b-2 bg-gold">
                            <Link
                              href={`/blog/${c.key}`}
                              className="hover:text-primary text-gold-dark mx-2"
                            >
                              {c.name}
                            </Link>
                          </div>
                          <div className="p-2 text-xs h-[1.6rem] min-h-[1.6rem] max-h-[1.6rem] overflow-hidden items-start">
                            {elipsis(c.description, 31)}
                          </div>
                        </div>
                      </div>
                    ))}
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
