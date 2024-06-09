"use client"
import Link from "@/components/Assets/link"

const HREF: string = "https://meet.alizza-ideal.com"

export default function ScheduleToCall({ className }: { className?: string }) {
  return (
    <Link
      href={HREF}
      className={`py-1 px-4 w-fit mx-auto bg-ai-yellow border-2 border-amber-900 bg-gradient-to-b from-amber-200 to-amber-400 rounded-full hover:border-amber-700 ${className}`}
    >
      無料個別セミナーを要求
    </Link>
  )
}
