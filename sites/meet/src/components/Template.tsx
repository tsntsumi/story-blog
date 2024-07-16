import Image from "next/image"
import { LEAD_TIME, OFFER_DAYS } from "@/config"

export default function Template() {
  return (
    <div className="pt-8 sm:pt-16 pb-4 sm:pb-12">
      <h1 className="mb-4 text-xl font-bold tracking-tight text-accent-800 md:text-4xl">
        <div className="text-xl">
          <span className="text-base">meet</span> Alizza Ideal
        </div>
        無料ビジネス・カウンセリング
      </h1>
      <div className="border-double border-[3px] my-4 rounded-xl flex flex-nowrap">
        <div className="w-3/4 p-2 flex flex-col items-between justify-start">
          <p className="mt-2 text-sm text-gray-800 font-medium">
            １週間後から４週間先までのご都合のよい日時をお選びください。
          </p>
          <p className="mt-2 sm:mt-6 text-sm text-gray-800 font-medium">
            日付を選ぶとスケジュール可能な時間がカレンダーの下に表示されます。
            Google ミートを使ったオンラインミーティングでの開催になります。
          </p>
          <p className="mt-2 sm:mt-6 text-sm text-gray-800 font-medium">
            あなたとお話しするのを楽しみにしています。
          </p>
        </div>
        <div className="w-1/3">
          <Image
            src="/images/avatar.png"
            alt="Avatar Image"
            width="92"
            height="92"
            className="w-full object-cover rounded-r-xl"
          />
        </div>
      </div>
    </div>
  )
}
