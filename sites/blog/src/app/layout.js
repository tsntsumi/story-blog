"use client"
import { Suspense } from "react"
import Script from "next/script"
import Head from "next/head"
import Lines from "@/components/Lines"
import ScrollToTop from "@/components/ScrollToTop"
import { ThemeProvider } from "next-themes"
import { StateProvider } from "@/context/AvailabilityContext"
import GoogleTag from "@/lib/googleTag"

import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

import ToasterContext from "@/app/context/ToastContext"

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <Head>
        <title>Alizza Ideal | 公式ウェブサイト</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content={`
Alizza Ideal は、地域密着でがんばっている、
あなたのためのマーケティング・エージェンシーです。

あなたのビジネスの状況と予算にピッタリとあわせてカスタマイズした、
オーダーメイドのマーケティング施策を提供します。

とくに、あなたが商品の魅力を言語化できないで悩んでいるなら、
お客の注目を集め、魅了し、惹き寄せるキャッチコピーをつくり、
買いたくさせる仕組みをオンライン上に構築します。`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Script src="https://polyfill.io/v3/polyfill.min.js?features=default"></Script>
      <Suspense ballback={<></>}>
        <GoogleTag />
      </Suspense>
      <body className={`dark:bg-black ${inter.className}`}>
        {/*<!-- Google Tag Manager (noscript) -->*/}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVJKG8B5"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        {/*<!-- End Google Tag Manager (noscript) -->*/}
        <ThemeProvider
          enableSystem={false}
          attribute="class"
          defaultTheme="light"
        >
          <StateProvider values={{}}>
            <Lines />
            <ToasterContext />
            {children}
            <ScrollToTop />
          </StateProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
