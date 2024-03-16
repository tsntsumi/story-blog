"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import NextLink from "next/link"
import Link from "@/components/common/link"
import CategoryListings from "@/components/Blog/CategoryListings"
import Latests from "@/components/Blog/Latests"
import { type Category, Categories } from "@/lib/collections/categories"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

const SoloPreneur = () => (
  <ruby>
    個人起業家
    <rp>(</rp>
    <rt>ソロプレナー</rt>
    <rp>)</rp>
  </ruby>
)

const Footer = () => {
  const pathUrl = usePathname()
  const [dropdownToggler, setDropdownToggler] = useState(false)
  const [stickyMenu, setStickyMenu] = useState(false)

  const elipsis = (text: string, count: number): string =>
    text?.slice(0, count) + (text?.length > count ? "..." : "")

  return (
    <>
      <footer className="mt-8 border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div
          id="footer"
          className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 mb-8"
        >
          {/* <!-- Footer Top --> */}
          <div>
            <p className="my-4 text-itemtitle2 text-xs font-medium text-black dark:text-white">
              コーチ・コンサルタントの
              <SoloPreneur />
              がビジネスを運転し成長させていくためのトレーニング・コース
            </p>
            <div className="flex flex-wrap items-start justify-between text-sm ">
              <ul className="list-disc ml-8">
                <li key="home" className="my-2">
                  <Link href="/" go="back">
                    Home
                  </Link>
                </li>
                <li className="my-2">
                  <div className="my-2">ブログ新着リスト</div>
                  <div>
                    <Latests latests={4} />
                  </div>
                </li>
                <li>
                  <div className="my-2">ブログカテゴリーリスト</div>
                  <div className="flex flex-wrap w-full justify-start">
                    {Categories.map((c, i) => (
                      <div key={c.key} className="w-1/4 text-justify">
                        <div className="border-2 border-slate-200 rounded-lg m-2 p-0 h-[6rem] min-h-[6rem] max-h-[6rem] ovreflow-hidden">
                          <div className="flex flex-nowrap items-center h-[4rem] max-h-[2.8rem] min-h-[2.8rem] border-b-2 bg-gold">
                            <Link
                              href={`/blog/${c.key}`}
                              className="hover:text-primary text-darkgold mx-2"
                            >
                              {c.name}
                            </Link>
                          </div>
                          <div className="overflow-hidden h-[6rem] max-h-[6rem] min-h-[6rem] p-2">
                            {elipsis(c.description, 24)}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* <!-- Footer Top End --> */}
        </div>
        {/* <!-- Footer Bottom --> */}
        <div className="flex flex-wrap items-center mx-4 gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row justify-between lg:gap-0">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20
              },

              visible: {
                opacity: 1,
                y: 0
              }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top"
          >
            <ul className="flex items-center gap-8">
              <li>
                <Image
                  width={110}
                  height={80}
                  src="/images/logo/logo-light.svg"
                  alt="Logo"
                  className="dark:hidden"
                />
                <Image
                  width={110}
                  height={80}
                  src="/images/logo/logo-dark.svg"
                  alt="Logo"
                  className="hidden dark:block"
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
          </motion.div>

          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20
              },

              visible: {
                opacity: 1,
                y: 0
              }
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top text-xs"
          >
            <p>
              &copy; {2023} Alizza Ideal. All rights reserved. We encourage you
              to meet your ideals, and achieving and fullfilling.
            </p>
          </motion.div>
        </div>
        {/* <!-- Footer Bottom --> */}
      </footer>
    </>
  )
}

export default Footer
