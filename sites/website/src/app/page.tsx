import type { Metadata } from "next"
import Hero from "@/components/Hero"
import Problem from "@/components/Problem"

export const metadata: Metadata = {
  title: {
    absolute: "個人起業家を応援する / ENCOURAGE SOLO-PRENEURs -- ALIZZA IDEAL"
  }
}

export default function Page() {
  return (
    <div>
      <Hero />
      <Problem />
    </div>
  )
}
