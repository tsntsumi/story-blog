"use client"
import Link from "@/components/Assets/link"

const HREF: string = "/pricing-guide"

export default function GoOffer({ className }: { className?: string }) {
  return (
    <>
      <div>
        <div className="mb-4 ml-8 mr-2 border-4 border-ai-gold rounded-lg p-4 bg-blue-50 text-ai-gold text-sm">
          この公式サイトでは、あなたのコーチングの価値を、
          盛らずに・下げずに適正な価格を設定するためのガイドブックをプレゼントしています。
          ぜひ、受け取ってください。
          <Link
            href={HREF}
            className={`mt-4 py-1 px-4 w-fit mx-auto text-md md:text-sm bg-ai-yellow border-2 border-amber-900 bg-gradient-to-b from-amber-200 to-amber-400 rounded-full hover:border-amber-700 ${className}`}
          >
            ガイドブックを請求
          </Link>
        </div>
      </div>
    </>
  )
}
