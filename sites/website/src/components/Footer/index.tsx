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

const Footer = () => {
  const pathUrl = usePathname()
  const [dropdownToggler, setDropdownToggler] = useState(false)
  const [stickyMenu, setStickyMenu] = useState(false)

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
              <ruby>
                理想のクライアント<rp>(</rp>
                <rt>Y O U R{"   "}I D E A L s</rt>
                <rp>)</rp>
              </ruby>
              に出会う導線を確保し、問題解決・悩み解消・障害克服・目標達成を経て、日々充実の連鎖を作る
            </p>
            <div className="flex flex-wrap items-start justify-between text-sm ">
              <ul className="list-disc ml-8">
                <li key="home">
                  <a
                    href="/"
                    className="mb-3 inline-block text-primary underline"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <div>ブログ新着リスト</div>
                  <div>
                    <Latests latests={4} />
                  </div>
                </li>
                <li>
                  <div>ブログカテゴリーリスト</div>
                  <div className="flex flex-wrap gap-2 p-0 items-center justify-start">
                    {Categories.map((c, i) => (
                      <div
                        key={c.key}
                        className="w-[30%] min-w-[6rem] border-2 border-t-0 border-l-0 border-grey-500 rounded-b-lg"
                      >
                        <NextLink
                          href={`/blog/${c.key}`}
                          className="mb-3 block hover:text-primary gap-0"
                        >
                          <div className="p-2 pb-0 text-sm font-bold text-darkgold underline">
                            {c.name}
                          </div>
                        </NextLink>
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
