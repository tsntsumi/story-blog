import type { Metadata } from "next"
import Hero from "@/components/main/Hero"
import Problem from "@/components/main/Problem"
import Solution from "@/components/main/Solution"
import Plan from "@/components/main/Plan"
import Encourage from "@/components/main/Encourage"
import Despair from "@/components/main/Despair"
import Magnet from "@/components/main/Assets/Magnet"
import Mentor from "@/components/main/Mentor"
import Header from "@/components/main/Assets/Header"
import menu from "@/components/main/Assets/Menu"

export const metadata: Metadata = {
  title: {
    absolute:
      "日本初上陸！お客さまが主人公のハリウッド式ストーリー・セールス・フレームワーク：ALIZZA IDEAL"
  },
  description: `\
ALIZZA IDEALでは、売り手・買い手ともにストレスフリーなセールスのための
ストーリー・セールス・フレームワークを提供します。
このフレームワークでは、お客さまの生活をより良くするストーリーを構築し、
その世界にお客さまを主人公として招き入れます。
`,
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
      <div className="m-4 pt-10 md:w-md md:max-w-md min-w-[320px] mx-auto">
        <Hero />
        <Problem />
        <Solution />
        <Mentor />
        <Plan />
        <Despair />
        <Encourage />
      </div>
    </>
  )
}
