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
      "【今すぐ始める】コーチングのスモールビジネスを成功に導く：アリザ・アイデアル《理想のクライアントに出会える集客サポート》"
  },
  description: `\
50代を目前にしている現場の最前線で経験を積んできた方だけに限定公開。
単なる業者扱いされず、尊敬と報酬を払われるコーチングビジネス構築。
あなたを煙たがる管理者に支配された会社を飛び出し、
より多くのクライアントに貢献し成功者を生み出し続ける
コーチング起業成功の秘密の手順をお探しなら、
あなたは正しい場所を見つけました。ぜひご覧ください。
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
