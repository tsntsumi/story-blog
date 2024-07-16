import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import ToasterContext from "@/app/context/ToastContext"
import ScrollToTop from "@/components/Assets/ScrollToTop"
import { Suspense } from "react"
import type { Metadata } from "next"
import GoogleTag from "@/lib/googleTag"
import Header from "@/components/coach/Assets/Header"
import Footer from "@/components/Assets/Footer/Bottom"
import menu from "@/components/main/Assets/Menu"

export const metadata: Metadata = {
  title: {
    template: "%s | ALIZZA IDEAL 公式サイト",
    default: "ALIZZA IDEAL 公式"
  }
}

import "@/app/globals.css"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

export default function Layout({
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
        <AppRouterCacheProvider>
          <Header menu={menu} />
          <ToasterContext />
          <div className="m-4 pt-12 md:pt-16 md:w-4/5 mx-auto">{children}</div>
          <ScrollToTop />
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
