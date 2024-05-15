"use client"
import Hero from "@/components/land/map/Hero"
import Problem from "@/components/land/map/Problem"
import Solution from "@/components/land/map/Solution"
import Plan from "@/components/land/map/Plan"
import Encourage from "@/components/land/map/Encourage"

export default function ClientPage() {
  return (
    <div>
      <Hero />
      <Problem />
      <Solution />
      <Plan />
      <Encourage />
    </div>
  )
}
