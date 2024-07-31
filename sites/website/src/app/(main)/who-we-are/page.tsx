import { Metadata } from "next"
import { Image, Video } from "@/components/Assets/media"
import ClientPage from "./clientpage"
import Schedule from "@/components/coach/Assets/scheduletocall"

export const metadata: Metadata = {
  title: "創業者：つつみきくおのプロフィール | アリザ・アイデアル",
  description: `
会社員がコーチングで独立・起業を実現するための５つのステップ。
うつ病経験者ならではの視点から、不安や葛藤といったメンタル面でのサポートも行います。`
}

export default function Page() {
  return <ClientPage />
}
