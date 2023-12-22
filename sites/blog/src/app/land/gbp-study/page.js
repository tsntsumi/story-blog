import Image from "next/image"

import Hero from "./Hero"
import Solution from "./Solutions"
import CTA from "./CTA"

export const metadata = {
  title: "GBP勉強会へのお誘い -- Alizza Ideal (OFFICIAL PAGE)",
  description: "Googleビジネスプロフィール勉強会のお誘いページです"
  // other metadata
}

export default function Page() {
  return (
    <main>
      <Hero />
      <Solution />
      <CTA />
    </main>
  )
}
