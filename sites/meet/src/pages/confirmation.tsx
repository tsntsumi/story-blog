import Link from "next/link"

export default function Confirmation() {
  return (
    <div className="flex flex-col items-between justify-between h-full w-full">
      <div className="p-8 sm:py-16 mx-auto md:max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-accent-700 sm:text-5xl">
          面談の申し込み、ありがとうございます。
        </h1>
        <p className="mt-6 text-xl text-gray-800 font-medium">
          予定を確認し、出来るだけ早く e-mail
          にてご返信いたします。しばらくお待ち下さい⏰
        </p>
      </div>
      <div className="rounded-full bg-red-200 text-red-800 border-2 border-red-800 w-max-[10em] w-min-[10em] mx-auto px-4 text-sm">
        <Link href="/" replace={true} scroll={false}>
          HOME
        </Link>
      </div>
    </div>
  )
}
