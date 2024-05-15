import type { Metadata } from "next"
import ClientPage from "./clientpage"

export const metadata: Metadata = {
  title: "エラー: 404",
  description: "指定されたページが見つかりませんでした"
  // other metadata
}

export default function NotFound() {
  return <ClientPage />
}
