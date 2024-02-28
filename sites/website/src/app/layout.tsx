import type { Metadata } from "next"
import "./globals.css"

// const inter = Inter({ subsets: ["latin"] })
export const metadata: Metadata = {
  title: {
    default: "Alizza ",
    template: "%s | まきせ鍼灸整骨院"
  },
  authors: [{ name: "TSUTSUMI Kikuo", url: "https://www.alizza-ideal.com" }],
  creator: "TSUTSUMI Kikuo",
  publisher: "Alizza Ideal",
  description: `慢性のしびれ・痛みで毎日が辛い・・・、
そんな医師もお手上げのしびれ・痛みをたった数回で改善できて再発しないとしたら？
ずっと改善されず、もう諦めているなら一度だけわたしを信じて詳細を確認してください。
  `
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`dark:bg-black`}>
        <div>{children}</div>
      </body>
    </html>
  )
}
