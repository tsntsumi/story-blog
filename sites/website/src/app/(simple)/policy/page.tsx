import React from "react"
import type { Metadata } from "next"
import ClientPage from "./clientpage"

export const metadata: Metadata = {
  title: "Privacy policy -- Alizza Ideal",
  description: `
お客さまの個人情報を保護するための弊社のプライバシーポリシーを説明します。

弊社のサービスもしくは商品を購入した場合、
または弊社の物品の無料進呈等キャンペーンに応募した場合には、
プライバシーポリシーに同意したものとみなされます。
`
}

export default function Page() {
  return <ClientPage />
}
