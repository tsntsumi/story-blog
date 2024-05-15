import Image from "next/image"
import { LEAD_TIME, OFFER_DAYS } from "@/config"

export default function Template() {
  return (
    <div className="pt-8 sm:pt-16 pb-4 sm:pb-12">
      <h1 className="mb-4 text-xl font-bold tracking-tight text-accent-800 md:text-4xl">
        <div className="text-xl">
          <span className="text-base">meet</span> Alizza Ideal
        </div>
        無料相談会をスケジュール
      </h1>
      <div className="border-double border-[3px] my-4 rounded-xl flex flex-nowrap">
        <div className="w-3/4 p-2 flex flex-col items-between justify-start">
          <p className="mt-2 text-sm text-gray-800 font-medium">
            １週間後から４週間先までスケジュールしていただけます。
          </p>
          <p className="mt-2 sm:mt-6 text-sm text-gray-800 font-medium">
            日付を選ぶとスケジュール可能な時間がカレンダーの下に表示されます。
            Google ミートでの相談会になります。
          </p>
          <p className="mt-2 sm:mt-6 text-sm text-gray-800 font-medium">
            あなたとお話するのを楽しみにしています。
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
      <div className="ml-4 text-sm columns-2 gap-8">
        <ul className="list-disc">
          <li>
            <strong>Alizza Ideal 無料相談会とは</strong>：
            あなたのビジネスの状況をお聞きし、課題を発見します。
            <p>
              相談会の結果、お手伝いできることがあれば、
              ご提案させていただく場合もあります。
            </p>
            <p>
              無理に参加を勧めることはありません。
              安心して無料相談会をスケジュールしてください。
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
