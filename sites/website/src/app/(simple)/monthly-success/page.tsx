import React from "react"
import type { Metadata } from "next"
import Header from "@/components/main/Assets/Header"
import Magnet from "@/components/main/Assets/Magnet"
import menu from "@/components/main/Assets/Menu"

export const metadata: Metadata = {
  title: "限定プレゼント：月刊・集客成功事例」最新号",
  description: `アリザ・アイデアル公式Webサイトをご覧いただいた方への限定プレゼントです。
毎月発行している「月刊・集客成功事例」最新号の電子書籍版を無料でプレゼントします。
あなたのライバルが思いもよらない奇想天外な集客アイデアをまねして、
ライバルを出し抜いてください。
  `
}

const Page = () => {
  return (
    <>
      <Header menu={menu} />
      <div className="m-4 pt-10 md:w-md md:max-w-md min-w-[320px] mx-auto">
        <Magnet />
      </div>
    </>
  )
}

export default Page
