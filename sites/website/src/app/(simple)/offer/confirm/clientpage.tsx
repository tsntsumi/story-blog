"use client"
import NextLink from "next/link"
import Link from "@/components/Assets/link"
import Media from "@/components/Assets/media"

type ClientProps = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ClientPage(props: ClientProps) {
  const { title, url, email, image, ownername, owneremail } = props.searchParams
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
            <NextLink href={`${url}`} className="text-primary underline">
              ダウンロード
            </NextLink>
            してください。
          </li>
        </ul>
      )}
      <p>
        Alizza Ideal の月刊・集客成功事例集は、
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
        <div className="my-6 font-mono flex flex-nowrap mx-autox underline">
          <Link href={`mailto://${owneremail}`}>
            {ownername}{" "}
            <span className="text-primary underline">&lt;{owneremail}&gt;</span>
          </Link>
        </div>
        <p>お手数をおかけしますが、確認のほどよろしくおねがいいたします。</p>
      </div>
    </div>
  )
}
