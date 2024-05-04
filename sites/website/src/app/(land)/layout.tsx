import ToasterContext from "@/app/context/ToastContext"
import ScrollToTop from "@/components/ScrollToTop"
import { Suspense } from "react"
import GoogleTag from "@/lib/googleTag"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    template: "%s | ALIZZA IDEAL",
    default: "ALIZZA IDEAL PRESENTS"
  },
  description: `\
`,
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

import "@/app/globals.css"
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
