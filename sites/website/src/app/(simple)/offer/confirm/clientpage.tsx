"use client"
import Link from "next/link"
import { store } from "@/lib/firebase/app"
import { doc, getDoc } from "firebase/firestore"
import type { OwnerData } from "@/lib/types"
import Media from "@/components/Assets/media"

type ClientProps = {
  owner: OwnerData
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ClientPage(props: ClientProps) {
  const { title, url, email, image } = props.searchParams
  const { owner } = props
  const offer = (url && `${title}のダウンロード`) || "限定プレゼント"
  return (
    <div className="py-8 sm:py-16 mx-auto max-w-2xl text-justify">
      <h1 className="text-3xl font-bold tracking-tight text-accent-700 sm:text-5xl">
        {offer} お申し込みについて
      </h1>
      <p className="mt-6 text-xl text-gray-800 font-medium">
        {`${email} さん、`}
        {offer} お申し込みありがとうございます。
      </p>
      {url && (
        <ul className="style-none my-8 text-lg">
          <li>
            {title}はこちらから
            <Link href={`${url}`} className="text-primary underline">
              ダウンロード
            </Link>
            してください。
          </li>
        </ul>
      )}
      <p>
        Alizza Ideal の月刊集客アイデア・成功事例集は、
        定期購読のお申し込みも受け付けています。
        読んでみて気に入りましたらお申し込みください。
      </p>
      <p className="my-6 text-xl text-gray-800 font-medium">
        {(url && "ダウンロード用のリンク") || "ご挨拶の"} は、
        ご入力いただいたメールアドレス &lt;{email}&gt;
        にも、お送りいたしました。
      </p>
      <div className="my-2">
        <p>１分程度であなたのメールボックスに到着いたします。ご確認下さい。</p>
        <p>
          見つからない場合は、迷惑メールフォルダに振り分けられている可能性があります。
          迷惑メールフォルダをご確認下さい。
        </p>
        <p>
          迷惑メールフォルダにも見つからない場合は、もう一度お申し込みいただくか、
          下記メールアドレスまで、お気軽にお申し込み下さい。
        </p>
        <div className="my-6 font-mono flex flex-nowrap mx-autox">
          <a href={`mailto://${owner.email}`}>
            {owner.name}{" "}
            <span className="text-primary underline">
              &lt;{owner.email}&gt;
            </span>
          </a>
        </div>
        <p>お手数をおかけしますが、確認のほどよろしくおねがいいたします。</p>
      </div>
      <div className="m-0 p-0 w-full my-4">
        <Media
          src={image}
          alt={title}
          className="rounded-t-lg object-cover"
          width={1024}
          height={768}
        />
      </div>
    </div>
  )
}
