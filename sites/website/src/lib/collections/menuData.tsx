import { Menu } from "@/lib/types/menu"
import { Categories } from "@/lib/collections/categories"
import Subscribe from "@/components/common/subscribe"
import Image from "next/image"
import {
  gtag_report_conversion,
  gtag_report_phonebooking
} from "@/lib/googleTag"

const SUBSCRIBE_NEWSLETTER: string = "/request/newsletter?category=general"
const SCHEDULE_TO_CALL: string = "https://meet.alizza-ideal.com"

const menuData: Menu[] = [
  {
    id: 20,
    title: "ブログ",
    newTab: false,
    submenu: Categories.map((c, i) => {
      const { key, name, description } = c
      return {
        id: i,
        title: <>{name}</>,
        newTab: false,
        path: `/blog/${key}`
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
      <Subscribe onClick={() => gtag_report_conversion(SCHEDULE_TO_CALL)}>
        無料相談を予約
      </Subscribe>
    ),
    newTab: false,
    path: SCHEDULE_TO_CALL
  }
]

export default menuData
