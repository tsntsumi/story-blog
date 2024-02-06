import { Menu } from "@/types/menu"
import { Categories } from "@/collections/categories"

const menuData: Menu[] = [
  {
    id: 2,
    title: "最新情報を購読",
    newTab: false,
    attributes:
      "flex text-xs rounded-full mx-auto bg-black px-3 whitespace-nowrap py-2 text-white duration-300 ease-in-out hover:bg-amber-500 dark:bg-btndark dark:hover:bg-blackho",
    path: "/request/newsletter?category=alchemy"
  },
  {
    id: 3,
    title: "詳しく",
    newTab: false,
    attributes: "hidden md:block",
    submenu: [
      {
        id: 3.1,
        title: "キャッチコピーの錬金術とは？",
        newTab: false,
        path: "/#outline"
      },
      {
        id: 3.2,
        title: "なぜあなたは集客できないのか？",
        newTab: false,
        path: "/#problem"
      },
      {
        id: 3.3,
        title: "どうすればあなたは集客できるのか？",
        newTab: false,
        path: "/#solutions"
      },
      {
        id: 3.4,
        title: "あなたはどう集客すればいいのか？",
        newTab: false,
        path: "/#plan"
      },
      {
        id: 3.5,
        title: "なぜあなたは集客できるようになるのか？",
        newTab: false,
        path: "/#faq"
      }
    ]
  },
  {
    id: 4,
    title: "ブログ",
    newTab: false,
    attributes: "",
    submenu: [
      {
        id: 4.2,
        title: Categories["google-maps"].name,
        newTab: false,
        path: "/blog/google-maps"
      },
      {
        id: 4.3,
        title: Categories["google-ads"].name,
        newTab: false,
        path: "/blog/google-ads"
      },
      {
        id: 4.4,
        title: Categories["marketing"].name,
        newTab: false,
        path: "/blog/marketing"
      },
      {
        id: 4.1,
        title: Categories["mindset"].name,
        newTab: false,
        path: "/blog/mindset"
      },
      {
        id: 4.5,
        title: Categories["seo"].name,
        newTab: false,
        path: "/blog/seo"
      }
    ]
  },
  {
    id: 5,
    title: "私たちは誰？",
    newTab: false,
    attributes: "",
    path: "/who-we-are"
  }
]

export default menuData
