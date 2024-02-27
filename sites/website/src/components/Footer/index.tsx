"use client"
import { motion } from "framer-motion"
import Image from "next/image"

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
            <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
              Shortcut
            </h4>
            <div className="flex flex-wrap items-start justify-between text-sm ">
              <ul className="list-disc">
                <li key="home">
                  <a
                    href="/"
                    className="mb-3 inline-block text-primary underline"
                  >
                    Home
                  </a>
                </li>
                <li>ブログ新着リスト</li>
                <li>ブログカテゴリーリスト</li>
                <ul className="list-disc ml-4">
                  <li>Googleマップ（MEO）</li>
                  <li>Google広告</li>
                  <li>検索エンジン（SEO）</li>
                  <li>知られる力</li>
                  <li>ネットで収益</li>
                </ul>
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
              &copy; {2023} Makise Shinkyu Seikotsu-in & Alizza Ideal. All
              rights reserved
            </p>
          </motion.div>
        </div>
        {/* <!-- Footer Bottom --> */}
      </footer>
    </>
  )
}

export default Footer
