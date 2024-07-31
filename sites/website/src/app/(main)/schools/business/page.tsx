import type { Metadata } from "next"
import Hero from "@/components/business/Hero"
import Problem from "@/components/business/Problem"
import Solution from "@/components/business/Solution"
import Plan from "@/components/business/Plan"
import Encourage from "@/components/business/Encourage"
import Despair from "@/components/business/Despair"
import Magnet from "@/components/business/Assets/Magnet"
import Header from "@/components/Assets/Header"
import menu from "@/components/business/Assets/Menu"

export const metadata: Metadata = {
  title: {
    absolute:
      "アリザ・アイデアルは、コーチ、コンサル、セラピストの成功を応援します"
  },
  description: `\
あなたが理想のクライアントと出会い、貢献し、感謝される方法を発信しています。
★あなたは、理想のクライアントに出会ってますか？★
Alizza Idealのコーチング・ビジネス・アカデミーでは、
人のお役に立とうとするコーチが、
求めている人々に見つかり、
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
    <>
      <Header menu={menu} />
      <div className="m-4 pt-12 md:pt-16 md:w-4/5 mx-auto">
        <Hero />
        <Problem />
        <Solution />
        <Plan />
        <Despair />
        <Encourage />
        <Magnet />
      </div>
    </>
  )
}
