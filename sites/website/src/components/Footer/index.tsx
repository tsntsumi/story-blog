"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import menuData from "@/components/Header/menuData"
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
              Quick Links
            </h4>
            <div className="flex flex-wrap items-start justify-between text-sm ">
              <ul>
                <li key="home">
                  <a
                    href="/"
                    className="mb-3 inline-block text-primary underline"
                  >
                    Home
                  </a>
                </li>
                <li key="announces">
                  <a
                    href="/announces"
                    className="mb-3 inline-block text-primary underline"
                  >
                    まきせからのお知らせ
                  </a>
                </li>
                <li key="giftset">
                  <a
                    href="/giftset"
                    className="mb-3 inline-block hover:text-primary"
                  >
                    <div className="text-xs max-w-[12rem]">
                      あなたの大切な人に感謝と健康を
                      <span className="block">贈ってみませんか？</span>
                    </div>
                    <span className="text-primary underline">
                      整体セットギフト券🎁
                    </span>
                  </a>
                </li>
              </ul>
              <div className="flex flex-col mx-0">
                <div className="flex flex-nowrap items-start justify-between gap-12">
                  <ul>
                    <li className="whitespace-nowrap">受付：8時〜20時</li>
                    <li className="whitespace-nowrap">
                      休診：日曜&amp;水曜午後
                    </li>
                    <li className="text-xs">
                      ご予約は、20時から開始の施術まで承っております。
                    </li>
                  </ul>
                  {/* Address */}
                  <ul>
                    <li>
                      <div className="block whitespace-nowrap">
                        住所：水戸市城東３丁目
                      </div>
                    </li>
                    <li>
                      <div className="block">
                        <span className="whitespace-nowrap">
                          城東ロイヤルハイツ
                        </span>
                        <span className="whitespace-nowrap">103</span>
                      </div>
                    </li>
                  </ul>
                  {/* Adderss End */}
                </div>
              </div>
            </div>
            <ul className="flex flex-wrap items-center gap-2 items-center justify-between">
              {menuData?.map((menuItem, key) => (
                <li key={key}>
                  <a
                    href={`${menuItem.path}`}
                    className={
                      pathUrl === menuItem.path
                        ? "text-primary hover:text-primary"
                        : "hover:text-primary"
                    }
                  >
                    <span className="whitespace-nowrap">{menuItem.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* <!-- Footer Top End --> */}
        </div>
        {/* <!-- Footer Bottom --> */}
        <div className="flex flex-wrap items-center justify-between gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
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
