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
        <title>キャッチコピーの錬金術で資産を増やす - Alizza Ideal</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content={`
多くの個人ビジネスには、「売れる」キャッチコピーがありません。
ほとんどの経営塾、集客コンサルタントは、お客を集めるところまでしか教えてくれません。
集客はできてもセールスに苦戦し、個人起業家はお金を失い続けています。

アリザ・アイデアルでは、あなたの商品をお客に欲しがらせる
キャッチコピーを作る秘訣をお伝えしています。

欲しがっている人だけを集客すれば、
セールスで売り込みをしなくても自然と売れていきます。
          `}
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
