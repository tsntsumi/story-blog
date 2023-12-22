"use client"
import Script from "next/script"
import Head from "next/head"
import Lines from "@/components/Lines"
import ScrollToTop from "@/components/ScrollToTop"
import { ThemeProvider } from "next-themes"
import { StateProvider } from "@/context/AvailabilityContext"

import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

import ToasterContext from "@/app/context/ToastContext"

export default function RootLayout({ children }) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <Head>
        {/*<!-- Google Tag Manager -->*/}
        <Script
          id="google-tag-manager"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TVJKG8B5');
            `
          }}
        ></Script>
        {/*<!-- End Google Tag Manager -->*/}
        <title>Alizza Ideal | 公式ウェブサイト</title>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <meta
          name="description"
          content="売上を伸ばしたい店舗ビジネスオーナーが、商品・サービスを輝かせるキャッチコピーの錬金術をマスターし、惹きつける輝く商品で集客することで、繁盛店になる方法を提供します"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-CPKV85YL1P"
      ></Script>
      <Script id="google-tags">
        {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'G-CPKV85YL1P');
        `}
      </Script>
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
