import ToasterContext from "@/app/context/ToastContext"
import ScrollToTop from "@/components/ScrollToTop"
import { Suspense } from "react"
import GoogleTag from "@/lib/googleTag"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | ALIZZA IDEAL 公式サイト",
    default: "ALIZZA IDEAL 公式"
  },
  description: `\
コーチ、ヒーラー、セラピスト、サロンオーナーとして他人に貢献しようと\
起業・開業・副業を始める人が増えています。\
しかし、だれもが自分を必要としているクライアントに出会えるわけではありません。\
Alizza Idealでは、あなたがクライアントに出会う導線を確保するための\
トレーニングコースを提供しています。\
あなたがこのトレーニングを受ければ、理想のクライアント(YOUR IDEALs)に出会い、\
彼らの目標達成に貢献することが簡単になります。\
そして、あなた自身も自分のゴールを達成し、充実した毎日を送ることになるのです。`,
  applicationName: "www.alizza-ideal.com",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Kikuo", url: "https://www.alizza-ideal.com" }],
  creator: "Kikuo Tsutsumi",
  publisher: "Alizza Ideal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}

import "./globals.css"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <html lang="ja" suppressHydrationWarning>
      <Suspense fallback={<></>}>
        <GoogleTag />
      </Suspense>
      <body className={`dark:bg-black ${inter.className}`}>
        <Header />
        <ToasterContext />
        <div className="m-4 pt-12 md:pt-16">{children}</div>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
