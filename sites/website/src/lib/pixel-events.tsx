"use client"

import React, { useEffect, useState } from "react"
import { usePathname, useSearchParams } from "next/navigation"

const FACEBOOK_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID

export default function FacebookPixelEvents(): React.ReactNode {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    import("react-facebook-pixel")
      .then((x) => x.default)
      .then((ReactPixel) => {
        ReactPixel.init(FACEBOOK_PIXEL_ID)
        ReactPixel.pageView()
      })
  }, [pathname, searchParams])

  return null
}
