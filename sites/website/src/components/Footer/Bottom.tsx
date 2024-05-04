"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import NextLink from "next/link"
import Link from "@/components/common/link"
import CategoryListings from "@/components/Blog/CategoryListings"
import Latests from "@/components/Blog/Latests"
import { type Category, Categories } from "@/lib/collections/categories"
import SlideIn from "@/components/common/slidein"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import {
  SoloPreneur,
  個人起業家,
  DrivingSchool
} from "@/components/common/logos"

export default function Bottom() {
  const pathUrl = usePathname()
  const [dropdownToggler, setDropdownToggler] = useState(false)
  const [stickyMenu, setStickyMenu] = useState(false)

  const elipsis = (text: string, count: number): string =>
    text?.slice(0, count) + (text?.length > count ? "..." : "")

  return (
    <>
      <div id="footer-bottom" className="mx-auto max-w-c-1390 px-0">
        {/* <!-- Footer Bottom --> */}
        <div className="flex flex-wrap items-center mx-4 gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row justify-between lg:gap-0">
          <SlideIn className="animate_top">
            <ul className="flex items-center gap-8">
              <li>
                <Image
                  width={110}
                  height={80}
                  src="/images/logo/logo-dark.svg"
                  alt="Logo"
                  className="object-none"
                />
              </li>
              <li>
                <a href="/policy" className="hover:text-primary text-[9pt]">
                  個人情報保護方針
                </a>
              </li>
              <li>
                <a href="/legal" className="hover:text-primary text-[9pt]">
                  特定商取引法
                </a>
              </li>
            </ul>
          </SlideIn>
          <SlideIn className="animate_right text-xs text-grey-300">
            <div>
              &copy; 2024 Alizza Ideal. All rights reserved.
              私達は起業する勇気と副業する覚悟を応援します
            </div>
          </SlideIn>
        </div>
      </div>
    </>
  )
}
