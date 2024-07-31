import { type Menu } from "@/lib/types/menu"
import { Categories } from "@/lib/categories"
import type Category from "@/lib/types/category"
import Subscribe from "@/components/Assets/subscribe"
import Image from "next/image"
import Link from "next/link"

const SCHEDULE_TO_CALL: string = "https://cal.alizza-ideal.com"

const menuData: Menu[] = [
  {
    id: 20,
    title: "ブログ",
    newTab: false,
    submenu: Categories.map((c: Category, i: number) => {
      return {
        id: i,
        title: <>{c.name}</>,
        newTab: false,
        path: `/blog/${c.key}`
      } as Menu
    })
  },
  {
    id: 30,
    title: "私たちは誰？",
    newTab: false,
    path: "/who-we-are"
  },
  {
    id: 40,
    title: (
      <div className="traking-tighter font-black text-gold-dark underline underline-offset-2 decoration-from-4">
        限定ギフト
      </div>
    ),
    newTab: false,
    path: "/excl"
  },
  {
    id: 100,
    title: (
      <div
        className={`flex flex-wrap items-center rounded-full whitespace-pre leading-none text-[7pt] py-1 px-2 font-bold text-gold-dark bg-gold hover:bg-blackho hover:text-gold hover:scale-110`}
      >
        無料相談会を
        <br />
        スケジュール
      </div>
    ),
    newTab: false,
    path: SCHEDULE_TO_CALL
  }
]

export default menuData
