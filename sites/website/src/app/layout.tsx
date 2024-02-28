import ToasterContext from "@/app/context/ToastContext"
import ScrollToTop from "@/components/ScrollToTop"
import { Suspense } from "react"
import GoogleTag from "@/lib/googleTag"

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
      <Suspense ballback={<></>}>
        <GoogleTag />
      </Suspense>
      <body className={`dark:bg-black ${inter.className}`}>
        <ToasterContext />
        <div>{children}</div>
        <ScrollToTop />
      </body>
    </html>
  )
}
