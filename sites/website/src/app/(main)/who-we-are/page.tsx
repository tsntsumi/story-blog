import { Metadata } from "next"
import ClientPage from "./clientpage"

export const metadata: Metadata = {
  title: "わたしたちアリザ・アイデアルとは？",
  description: `\
わたしたちアリザ・アイデアルが、なぜこの事業を運営しているのか、\
どのようやって事業を行っているのか、それによってあなたがどんな価値を受け取れるか説明します。`
}

export default function Page() {
  return (
    <>
      <ClientPage />
    </>
  )
}
