import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import ToasterContext from "@/app/context/ToastContext"
import ScrollToTop from "@/components/Assets/ScrollToTop"
import { Suspense } from "react"
import GoogleTag from "@/lib/googleTag"
import Header from "@/components/Assets/Header"
import Footer from "@/components/Assets/Footer/Bottom"
import type { Metadata } from "next"

export const metadata: Metadata = {
  metadataBase: new URL(`https://www.alizza-ideal.com`),
  title: {
    template: "%s | アリザ・アイデアル公式",
    default: "アリザ・アイデアル公式"
  },
  alternates: {
    canonical: "./"
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
        <AppRouterCacheProvider>
          <ToasterContext />
          <div className="m-4 pt-12 md:pt-16">{children}</div>
          <ScrollToTop />
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
