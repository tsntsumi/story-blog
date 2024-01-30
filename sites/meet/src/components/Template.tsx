import Image from "next/image"

export default function Template() {
  return (
    <div className="pt-8 sm:pt-16 pb-4 sm:pb-12">
      <h1 className="text-2xl font-bold tracking-tight text-accent-800 sm:text-5xl">
        Alizza Ideal スケジュール <span className="text-xl">カレンダー</span>
      </h1>
      <div className="w-1/4 flex items-center justify-center float-right">
        <Image
          src="/images/avatar.png"
          alt="Avatar Image"
          width="92"
          height="92"
          className="w-full object-cover"
        />
      </div>
      <p className="mt-2 sm:mt-6 text-sm text-gray-800 font-medium">
        １週間後から４週間先までスケジュールできます。
      </p>
      <p className="mt-2 sm:mt-6 text-sm text-gray-800 font-medium">
        日付を選ぶとスケジュール可能な時間がカレンダーの下に表示されます。
        <br />
        スケジュールはどうぞお気軽に。あなたとお話するのを楽しみにしています。
      </p>
    </div>
  )
}
