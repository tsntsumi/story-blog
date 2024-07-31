import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import ToasterContext from "@/app/context/ToastContext"
import ScrollToTop from "@/components/Assets/ScrollToTop"
import { Suspense } from "react"
import type { Metadata } from "next"
import GoogleTag, { GoogleTagmanager } from "@/lib/googleTag"
import FacebookPixelEvents from "@/lib/pixel-events"
import Header from "@/components/main/Assets/Header"
import menu from "@/components/main/Assets/Menu"
import Footer from "@/components/coach/Assets/Footer"

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

const TAGID = process.env.NEXT_PUBLIC_STORYMADE_GOOGLE_TAGMANAGER_ID
const MEASUREMENTID = process.env.NEXT_PUBLIC_STORYMADE_GOOGLE_MEASUREMENT_ID

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}): React.ReactNode {
  return (
    <html lang="ja" suppressHydrationWarning>
      <Suspense fallback={<></>}>
        <GoogleTag />
        {/* <GoogleTagmanager /> */}
        {/* <FacebookPixelEvents /> */}
      </Suspense>
      <body className={`${inter.className} antialiased`}>
        <AppRouterCacheProvider>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${MEASUREMENTID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            ></iframe>
          </noscript>
          <ToasterContext />
          <Header menu={menu} />
          {children}
          <ScrollToTop />
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
