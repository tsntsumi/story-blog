import { useRouter } from "next/router"

export default function Booked() {
  const { query } = useRouter()

  if (!query || typeof query.url !== "string") {
    return
  }
  if (!query || typeof query.name !== "string") {
    return
  }
  return (
    <div className="py-8 sm:py-16 mx-auto max-w-xl">
      <h1 className="text-3xl font-bold tracking-tight text-accent-700">
        予約の申し込みを確定しました。
      </h1>
      <p className="mt-6 text-xl text-gray-800 font-medium">
        予定は、Googleカレンダーに追加されました。
      </p>
      <p className="mt-6 text-xl text-gray-800 font-medium">
        ご予約いただいた{query.name}
        さんには、自動的に招待メールが送信されます。
      </p>
      <p className="mt-6 text-xl text-gray-800 font-medium">
        <a
          href={"https://www.google.com/calendar/event?eid=" + query.url}
          target="_blank"
          rel="noreferrer"
          className="text-blue-700 underline">
          Googleカレンダーで確認する
        </a>
      </p>
    </div>
  )
}
