import { Menu } from "@/types/menu"

const menuData: Menu[] = [
  {
    id: 1,
    title: "ホーム",
    newTab: false,
    path: "/"
  },
  {
    id: 2,
    title: "詳しく",
    newTab: false,
    submenu: [
      {
        id: 2.1,
        title: "キャッチコピーの錬金術とは？",
        newTab: false,
        path: "/#outline"
      },
      {
        id: 2.2,
        title: "なぜあなたは集客できないのか？",
        newTab: false,
        path: "/#problem"
      },
      {
        id: 2.3,
        title: "どうすればあなたは集客できるのか？",
        newTab: false,
        path: "/#solutions"
      },
      {
        id: 2.4,
        title: "あなたはどう集客すればいいのか？",
        newTab: false,
        path: "/#plan"
      },
      {
        id: 2.5,
        title: "なぜあなたは集客できるようになるのか？",
        newTab: false,
        path: "/#faq"
      }
    ]
  },
  {
    id: 3,
    title: "Blog",
    newTab: false,
    path: "/blog"
  },
  {
    id: 3,
    title: "私たちは誰？",
    newTab: false,
    path: "/who-we-are"
  }
]

export default menuData
