"use client"
import Link from "@/components/Assets/link"

//const HREF: string = "https://cal.alizza-ideal.com"
const HREF: string = "/#call-to-action"

export default function ScheduleToCall({ className }: { className?: string }) {
  return (
    <Link
      href={HREF}
      className={`py-1 px-4 w-fit mx-auto bg-ai-yellow border-2 border-amber-900 bg-gradient-to-b from-amber-200 to-amber-400 rounded-full hover:border-amber-700 ${className}`}
    >
      無料カウンセリングを請求
    </Link>
  )
}
