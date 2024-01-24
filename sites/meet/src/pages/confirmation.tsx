import { useRouter } from "next/router"

export default function Confirmation() {
  const { query } = useRouter()

  if (!query || typeof query.name !== "string") {
    return
  }

  const name = !query.name || `${query.name}さん、`

  return (
    <div className="py-8 sm:py-16 mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight text-accent-700 sm:text-5xl">
        {name}ご予約のお申し込み、ありがとうございます。
      </h1>
      <p className="mt-6 text-xl text-gray-800 font-medium">
        予定を確認し、出来るだけ早くご返信いたします。しばらくお待ち下さい。
      </p>
    </div>
  )
}
