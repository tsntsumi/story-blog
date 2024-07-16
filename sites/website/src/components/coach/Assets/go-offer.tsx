"use client"
import Link from "@/components/Assets/link"

const HREF: string = "/monthly-success"

export default function GoOffer({ className }: { className?: string }) {
  return (
    <Link
      href={HREF}
      className={`py-1 px-4 w-fit mx-auto text-md md:text-sm bg-ai-yellow border-2 border-amber-900 bg-gradient-to-b from-amber-200 to-amber-400 rounded-full hover:border-amber-700 ${className}`}
    >
      集客事例集プレゼント
    </Link>
  )
}
