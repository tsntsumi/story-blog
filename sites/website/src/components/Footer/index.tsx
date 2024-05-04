"use client"
import { motion } from "framer-motion"
import { Image } from "@/components/common/media"
import NextLink from "next/link"
import Link from "@/components/common/link"
import CategoryListings from "@/components/Blog/CategoryListings"
import Latests from "@/components/Blog/Latests"
import { type Category, Categories } from "@/lib/collections/categories"
import Subscribe from "@/components/common/subscribe"
import Bottom from "@/components/Footer/Bottom"

import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import {
  SoloPreneur,
  個人起業家,
  DrivingSchool
} from "@/components/common/logos"

const Footer = () => {
  const pathUrl = usePathname()
  const [dropdownToggler, setDropdownToggler] = useState(false)
  const [stickyMenu, setStickyMenu] = useState(false)

  const elipsis = (text: string, count: number): string =>
    text?.slice(0, count) + (text?.length > count ? "..." : "")

  return (
    <>
      <footer className="mt-0 pt-0 border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
        <div
          id="footer"
          className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 mb-8"
        >
          {/* <!-- Footer Top --> */}
          <div>
            <p className="indent-0 my-4 text-itemtitle2 text-xs font-medium text-black dark:text-white">
              あなたのコーチング・ビジネスを、高収益の仕組み化をほどこし、収入を安定させ、
              余裕のある日々を過ごしながら、
              理想のゴールへむかってビジネスを運転し成長させる Alizza Ideal's
              Coaching School
            </p>
            <div className="flex flex-wrap items-start justify-between ">
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
                      <div key={c.key} className="w-1/2 md:w-1/4 text-justify">
                        <div className="border-2 border-slate-200 rounded-lg m-2 p-0 h-[6rem] min-h-[6rem] max-h-[6rem] ovreflow-hidden">
                          <div className="flex flex-nowrap items-center text-xs h-[4rem] max-h-[2.8rem] min-h-[2.8rem] border-b-2 bg-gold">
                            <Link
                              href={`/blog/${c.key}`}
                              className="hover:text-primary text-darkgold mx-2"
                            >
                              {c.name}
                            </Link>
                          </div>
                          <div className="px-2 text-xs h-[9rem] min-h-[9em] max-h-[9em] overflow-hidden items-start">
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
          <div className="w-full my-4 text-center">
            <Image
              src="gs://story-made.appspot.com/images/hero/CoachingToolbox_Toolbox_land.png"
              alt="Coaching School - コーチング・ビジネス教習所"
              width={1024}
              height={768}
              className="object-cover rounded-lg mx-auto my-4"
            />
            <NextLink href="https://meet.alizza-ideal.com">
              <Subscribe className="text-lg md:text-sm py-3 px-6 mx-auto">
                無料相談会をスケジュール
              </Subscribe>
            </NextLink>
          </div>
          {/* <!-- Footer Top End --> */}
        </div>
        <Bottom />
      </footer>
    </>
  )
}

export default Footer
