import { Inter } from "next/font/google"

import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body className={`dark:bg-black ${inter.className}`}>
        <div>ボディー</div>
      </body>
    </html>
  )
}
