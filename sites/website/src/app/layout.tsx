import { Inter } from "next/font/google"
import { Suspense } from "react"
import Script from "next/script"
import GoogleTag from "@/lib/googleTag"
import Lines from "@/components/Lines"
import ToasterContext from "@/app/context/ToastContext"
import ScrollToTop from "@/components/ScrollToTop"
import type { Metadata } from "next"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    template: "%s | Alizza Ideal",
    default: "Alizza Ideal",
    absolute: "Alizza Ideal 公式 Web サイト"
  },
  authors: [{ name: "TSUTSUMI Kikuo", url: "https://www.alizza-ideal.com" }],
  creator: "TSUTSUMI Kikuo",
  publisher: "Alizza Ideal",
  description: `
これから在宅で、コンサル、コーチング、セラピスト、トレーナーとして起業・副業を始める個人に向けて、
これまで経験してきた、ネットで見つかる・選ばれるための施策とアイデアを提供します。
❖もしあなたが、クライアント獲得に悩んでいるなら❖もっとクライアントを増やして成長して行きたいなら、
是非内容を確認してください。
  `
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <html lang="ja" suppressHydrationWarning>
      <Script src="https://polyfill.io/v3/polyfill.min.js?features=default"></Script>
      <Suspense fallback={<div></div>}>
        <GoogleTag />
      </Suspense>
      <body className={`dark:bg-black ${inter.className}`}>
        <Lines />
        <div>{children}</div>
        <ToasterContext />
        <ScrollToTop />
      </body>
    </html>
  )
}
