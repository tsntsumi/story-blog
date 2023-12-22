import { LEAD_TIME, OFFER_DAYS } from "@/config"

export default function Template() {
  const hours = Math.floor(LEAD_TIME / 60)
  const minutes = LEAD_TIME - hours * 60
  return (
    <div className="pt-8 sm:pt-16 pb-4 sm:pb-16">
      <h1 className="text-3xl font-bold tracking-tight text-accent-800 sm:text-5xl">
        Alizza Ideal - <span className="text-xl">無料相談スケジュール</span>
      </h1>
      <p className="mt-2 sm:mt-6 text-sm text-gray-800 font-medium">
        説明時間を選んでから日付を選ぶと予約可能な時間がカレンダーの下に表示されます。
      </p>
    </div>
  )
}
