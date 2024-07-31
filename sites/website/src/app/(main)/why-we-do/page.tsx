import { Metadata } from "next"
import { Image, Video } from "@/components/Assets/media"
import ClientPage from "./clientpage"
import Schedule from "@/components/coach/Assets/scheduletocall"

export const metadata: Metadata = {
  title: "創業者：つつみきくおの理念 | アリザ・アイデアル",
  description: `
  `
}

export default function Page() {
  return <ClientPage />
}
