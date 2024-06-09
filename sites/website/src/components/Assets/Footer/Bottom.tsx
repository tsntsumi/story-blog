"use client"
import { motion } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function Bottom() {
  const pathUrl = usePathname()
  const [dropdownToggler, setDropdownToggler] = useState(false)
  const [stickyMenu, setStickyMenu] = useState(false)

  const elipsis = (text: string, count: number): string =>
    text?.slice(0, count) + (text?.length > count ? "..." : "")

  return (
    <>
      <div
        id="footer-bottom"
        className="mx-auto max-w-c-1390 p-1 pb-4 md:px-4 2xl:px-8 bg-formal-light border-t-2 border-t-formal-accent"
      >
        {/* <!-- Footer Bottom --> */}
        <div className="flex flex-wrap items-center justify-start text-[8pt]">
          <ul className="flex flex-wrap items-start justify-end">
            <li className="px-2">
              <Link href="/policy" className="hover:text-primary">
                個人情報保護方針
              </Link>
            </li>
            <li className="px-2">
              <Link href="/legal" className="hover:text-primary">
                特定商取引法
              </Link>
            </li>
          </ul>
          <div className="px-2 leading-tight text-[7pt]">
            Copyright &copy; 2024 Alizza Ideal. All rights reserved.
            私達は起業する勇気と副業する覚悟を応援します
          </div>
        </div>
      </div>
    </>
  )
}
