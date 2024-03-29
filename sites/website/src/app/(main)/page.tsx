import type { Metadata } from "next"
import Hero from "@/components/Hero"
import Problem from "@/components/Problem"
import Solution from "@/components/Solution"
import Plan from "@/components/Plan"
import Encourage from "@/components/Encourage"
import Despair from "@/components/Despair"
import Magnet from "@/components/Magnet"

export const metadata: Metadata = {
  title: {
    absolute:
      "ALIZZA IDEAL ENCOURAGE SOLO-PRENEURs / 個人起業家を応援するアリザ・アイデアルの公式サイト"
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
