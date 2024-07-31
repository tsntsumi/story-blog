import type { Metadata } from "next"
import Hero from "@/components/coach/Hero"
import Problem from "@/components/coach/Problem"
import Solution from "@/components/coach/Solution"
import Plan from "@/components/coach/Plan"
import Encourage from "@/components/coach/Encourage"
import Despair from "@/components/coach/Despair"
import Magnet from "@/components/coach/Assets/Magnet"
import CallToAction from "@/components/coach/CallToAction"

export const metadata: Metadata = {
  title: {
    absolute:
      "【今すぐ始める】会社員のコーチング起業を成功に導く：アリザ・アイデアルのアイデアル・コーチング起業アカデミー"
  },
  description: `\
これまで現場の前線で経験を積んできた方、限定。
あなたを煙たがる管理者に支配された会社を飛び出し、
コーチングでの起業を成功させる秘訣を大公開。
  `,
  applicationName: "www.alizza-ideal.com",
  referrer: "origin-when-cross-origin",
  keywords: ["Next.js", "React", "JavaScript"],
  authors: [{ name: "Kikuo", url: "https://www.alizza-ideal.com" }],
  creator: "堤紀久夫（つつみきくお）",
  publisher: "アリザ・アイデアル",
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
}

export default function Page() {
  return (
    <>
      <div className="m-4 pt-10 md:w-md md:max-w-md min-w-[320px] mx-auto">
        <Hero />
        <Problem />
        <Solution />
        <Plan />
        <Despair />
        <Encourage />
        <Magnet />
        <CallToAction>無料カウンセリングを請求する</CallToAction>
      </div>
    </>
  )
}
