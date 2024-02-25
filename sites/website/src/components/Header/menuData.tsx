import { Menu } from "@/lib/types/menu"
import { Categories } from "@/lib/collections/categories"
import Image from "next/image"
import { gtag_report_conversion } from "@/lib/googleTag"
import { gtag_report_phonebooking } from "@/lib/googleTag"

const menuData: Menu[] = [
  {
    id: 10,
    title: (
      <div className="flex text-xs rounded-full mx-auto bg-black px-3 whitespace-nowrap py-2 text-white duration-300 ease-in-out hover:bg-amber-500 dark:bg-btndark dark:hover:bg-blackho">
        最新情報を購読
      </div>
    ),
    newTab: false,
    path: "/request/newsletter?category=general"
  },
  {
    id: 20,
    title: "ブログ",
    newTab: false,
    submenu: Object.entries(Categories).map(
      ([k, c], i) =>
        ({
          id: `${k}-${i}`,
          title: <>{c.name}</>,
          newTab: false,
          path: `/blog/${k}`
        } as Menu)
    ) as Menu[]
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
      <div className="flex text-xs rounded-full mx-auto bg-black px-3 whitespace-nowrap py-2 text-white duration-300 ease-in-out hover:bg-amber-500 dark:bg-btndark dark:hover:bg-blackho">
        無料相談を予約
      </div>
    ),
    newTab: false,
    path: "https://meet.alizza-ideal.com"
  }
]

export default menuData
