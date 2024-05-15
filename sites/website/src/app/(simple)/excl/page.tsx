import React from "react"
import type { Metadata } from "next"
import ClientPage from "./clientpage"

export const metadata: Metadata = {
  title: "Webサイト限定プレゼント -- Alizza Ideal",
  description:
    "この、Alizza Ideal の公式Webサイトをご覧いただいた方への限定プレゼントです"
}

const Page = () => {
  return (
    <>
      <ClientPage />
    </>
  )
}

export default Page
