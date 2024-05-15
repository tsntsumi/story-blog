import type { Metadata } from "next"
import ClientPage from "./clientpage"

export const metadata: Metadata = {
  title: {
    absolute: "新時代の、Googleマップ集客オンライン講座 | ALIZZA IDEAL"
  },
  description: `
食べログ、ぐるなび、ホットペッパーに掲載しても集客できなくなったとお悩みなら・・・。
この方法ならお金を「１円」も使わずに、
お客さんを２倍、３倍、５倍にできるかもしれません・・・。

あなたも、全く新しいGoogleマップ集客を勉強してみませんか？
  `
}

export default function Page() {
  return <ClientPage />
}
