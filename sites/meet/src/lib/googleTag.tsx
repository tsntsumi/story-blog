"use client"

import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { useEffect } from "react"

const MEASUREMENTID = "G-KMFVZXTWRY"

export const pageview = (path: string) => {
  window.gtag("config", MEASUREMENTID, {
    page_path: path,
  })
}

export const gtag_report_conversion = (url: any) => {
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url
    }
  }
  window.gtag("event", "conversion", {
    send_to: "AW-11001150539/8o0pCPjc_fsYEMv44P0o",
    event_callback: callback,
  })
  return false
}

export default function GoogleTag() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    const url = pathname + searchParams.toString()
    pageview(url)
  }, [pathname, searchParams])

  return (
    <>
      <Script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENTID}`}
        strategy="lazyOnload"></Script>
      <Script id="google-tags" strategy="afterInteractive">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){ dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', "${MEASUREMENTID}");
            `}
      </Script>
    </>
  )
}
