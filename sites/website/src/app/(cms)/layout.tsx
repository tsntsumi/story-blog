import ToasterContext from "@/app/context/ToastContext"
import ScrollToTop from "@/components/ScrollToTop"
import { Suspense } from "react"
import GoogleTag from "@/lib/googleTag"
import Header from "@/components/Header"
import Footer from "@/components/Footer/Bottom"
import type { Metadata } from "next"

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
        <ToasterContext />
        <div className="m-4 pt-12 md:pt-16">{children}</div>
        <ScrollToTop />
        <Footer />
      </body>
    </html>
  )
}
