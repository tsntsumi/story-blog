import Image from "next/image"
import { LEAD_TIME, OFFER_DAYS } from "@/config"

export default function Template() {
  return (
    <div className="pt-8 sm:pt-16 pb-4 sm:pb-12">
      <h1 className="mb-4 text-xl font-bold tracking-tight text-accent-800 md:text-4xl">
        <div className="text-xl">
          <span className="text-base">meet</span> Alizza Ideal
        </div>
        リモート相談会・体験会をスケジュール
      </h1>
      <div className="border-double border-[3px] my-4 rounded-xl flex flex-nowrap">
        <div className="w-3/4 p-2 flex flex-col items-between justify-start">
          <p className="mt-2 text-sm text-gray-800 font-medium">
            １週間後から４週間先までスケジュールしていただけます。
          </p>
          <p className="mt-2 sm:mt-6 text-sm text-gray-800 font-medium">
            日付を選ぶとスケジュール可能な時間がカレンダーの下に表示されます。
            Google ミートでのリモート相談会・体験会になります。
            あなたとお話するのを楽しみにしています。
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
            <strong>Biz D/S 入校相談</strong>：Alizza Ideal の Alizza Ideal
            の個人起業家ビジネス・ドライビング・スクール入校相談では、
            当スクールが、あなたの目的にかなっているかどうか、判断するお手伝いをします。
            <p>
              あなたが理想のゴールに、安全・快適・最速でビジネスをドライブしていけるのか、
              あなたの現在の悩みや問題をお聞きしながらご相談にお答えします。
            </p>
          </li>
          <li>
            <strong>単価アップ体験会</strong>
            ：あなたの現在のメニュー単価を、掛け値なしの高単価にする方法を学び、
            一緒に高単価メニューを作ります。
            <p>
              一緒に作ったメニューでプレゼンすることで、
              ３日以内に結果が出るメニューを目指します。
              いまなら期間限定無料で体験できます。
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}
