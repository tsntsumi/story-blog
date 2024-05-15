import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter"
import ToasterContext from "@/app/context/ToastContext"
import ScrollToTop from "@/components/Assets/ScrollToTop"
import { Suspense } from "react"
import GoogleTag from "@/lib/googleTag"
import FacebookPixelEvents from "@/lib/pixel-events"
import Footer from "@/components/Assets/Footer/Bottom"
import type { Metadata } from "next"

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
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js.hs-scripts.com/39978246.js"
        ></script>
        <FacebookPixelEvents />
      </Suspense>
      <body className={`dark:bg-black ${inter.className}`}>
        <AppRouterCacheProvider>
          <ToasterContext />
          <div className="m-0 p-0 md:w-4/5 mx-auto">{children}</div>
          <ScrollToTop />
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
