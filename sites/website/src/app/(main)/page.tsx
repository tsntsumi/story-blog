import type { Metadata } from "next"
import Hero from "@/components/main/Hero"
import Problem from "@/components/main/Problem"
import Solution from "@/components/main/Solution"
import Plan from "@/components/main/Plan"
import Encourage from "@/components/main/Encourage"
import Despair from "@/components/main/Despair"
import Magnet from "@/components/main/Assets/Magnet"

export const metadata: Metadata = {
  title: {
    absolute: "ALIZZA IDEALは、コーチ、コンサル、セラピストの出会いを応援します"
  },
  description: `\
あなたが理想のクライアントと出会う方法をお教えしています。
コーチング・サービスは、すでに市場が飽和しています。
★あなたは、クライアントに出会ってますか？★
Alizza Idealのコーチング・ビジネス教習センターでは、
素晴らしいサービスを持つコーチが、
求めている人々から見つかり、
選ばれるための技術を学ぶことができます。`,
  applicationName: "www.alizza-ideal.com",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Kikuo", url: "https://www.alizza-ideal.com" }],
  creator: "Kikuo Tsutsumi",
  publisher: "Alizza Ideal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}

export default function Page() {
  return (
    <div>
      <Hero />
      <Problem />
      <Solution />
      <Plan />
      <Despair />
      <Encourage />
      <Magnet />
    </div>
  )
}
