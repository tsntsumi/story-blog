import { Menu } from "@/types/menu"

const menuData: Menu[] = [
  {
    id: 1,
    title: "ホーム",
    newTab: false,
    attributes: "",
    path: "/"
  },
  {
    id: 2,
    title: "詳しく",
    newTab: false,
    attributes: "hidden md:block",
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
    title: "ブログ",
    newTab: false,
    attributes: "",
    submenu: [
      {
        id: 3.2,
        title: "Googleマップ",
        newTab: false,
        path: "/blog/google-maps"
      },
      {
        id: 3.3,
        title: "Google広告",
        newTab: false,
        path: "/blog/google-ads"
      },
      {
        id: 3.4,
        title: "マーケティング",
        newTab: false,
        path: "/blog/marketing"
      },
      {
        id: 3.1,
        title: "ビジネスマインド",
        newTab: false,
        path: "/blog/mindset"
      },
      {
        id: 3.5,
        title: "ストーリー・パワー",
        newTab: false,
        path: "/blog/story"
      }
    ]
  },
  {
    id: 3,
    title: "私たちは誰？",
    newTab: false,
    attributes: "",
    path: "/who-we-are"
  }
]

export default menuData
