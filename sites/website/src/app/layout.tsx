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
      <body className={`dark:bg-black ${inter.className}`}>
        <div>{children}</div>
      </body>
    </html>
  )
}
