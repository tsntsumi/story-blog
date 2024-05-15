"use client"
import { usePathname, useSearchParams } from "next/navigation"
import Script from "next/script"
import { useEffect } from "react"

const MEASUREMENTID = "G-CPKV85YL1P" // process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID
const TAGMANAGERID = process.env.NEXT_PUBLIC_STORYMADE_GOOGLE_TAGMANAGER_ID // "GTM-MVXMNLF"
/*
 * const GOOGLETAGID = process.env.NEXT_PUBLIC_GOOGLE_TAGID
 * const ANALYTICSID = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICSID
 * const CONVERSIONID = process.env.NEXT_PUBLIC_GOOGLEADS_CONVERSIONID
 * const CONVERSIONLABEL = process.env.NEXT_PUBLIC_GOOGLEADS_CONVERSIONLABEL
 * const BOOKINGBYPHONE = process.env.NEXT_PUBLIC_GOOGLEADS_BOOKING_BY_PHONE */

export const pageview = (path: string) => {
  window.gtag("config", MEASUREMENTID, {
    page_path: path
  })
}

export const gtag_report_conversion = (url) => {
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url
    }
  }
  /* window.gtag("event", "conversion", {
   *   "send_to": `AW-${CONVERSIONID}/${CONVERSIONLABEL}`,
   *   "event_callback": callback
   * }) */
  return false
}

export const gtag_report_phonebooking = (url) => {
  var callback = function () {
    if (typeof url != "undefined") {
      window.location = url
    }
  }
  /* window.gtag("event", "conversion", {
   *   "send_to": `AW-${CONVERSIONID}/${BOOKINGBYPHONE}`,
   *   "event_callback": callback
   * }) */
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
        strategy="lazyOnload"
      ></Script>
      {/*<!-- Google tag (gtag.js) -->*/}
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

export function GoogleTagmanager() {
  return (
    <>
      <Script id="google-tagmanager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
          var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer',"${TAGMANAGERID}")
          `}
      </Script>
    </>
  )
}
