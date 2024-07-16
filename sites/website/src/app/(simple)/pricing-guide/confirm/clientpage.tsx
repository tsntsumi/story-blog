"use client"
import NextLink from "next/link"
import Link from "@/components/Assets/link"
import Media from "@/components/Assets/media"

type ClientProps = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ClientPage(props: ClientProps) {
  const { title, url, name, email, ownername, owneremail } = props.searchParams
  return (
    <div className="mt-0 mx-auto max-w-2xl text-justify">
      <h1 className="mx-4 text-3xl font-bold tracking-tight text-ai-blue sm:text-5xl">
        {title} のお申し込みについて
      </h1>
      <div className="mx-8 mt-6 text-xl text-gray-800 font-medium">
        <p>
          {name} さん、 この度は {title} のお申し込みありがとうございます。
        </p>
        <p className="my-6 text-xl text-gray-800 font-medium">
          このページと同じご挨拶とダウンロード方法を、ご入力いただいたメールアドレス
          <span className="font-mono"> &lt;{email}&gt; </span>
          にも、お送りいたしました。ご確認ください。
        </p>
        <p>
          ご請求いただいた「{title}」は、
          次のリンクからダウンロードしてください。
        </p>
        <div className="my-4 mx-4">
          <div className="font-mono text-xs text-justify">
            --- &gt;8 --- &gt;8 --- &gt;8 --- &gt;8 ---- &gt;8 --- &gt;8 ---
            &gt;8 --- &gt;8 ---
          </div>
          <div className="my-4 text-blue-500 underline text-justify">
            <NextLink href={`${url}`} className="text-primary underline">
              {title}
            </NextLink>
          </div>
          <div className="font-mono text-xs text-justify">
            --- &gt;8 --- &gt;8 --- &gt;8 --- &gt;8 ---- &gt;8 --- &gt;8 ---
            &gt;8 --- &gt;8 ---
          </div>
        </div>
      </div>
      <div className="mx-8 mt-6 text-gray-600">
        <div className="text-sm mb-4 ml-4">
          <p className="mb-2">
            メールは、１分程度であなたのメールボックスに到着いたします。
          </p>
          <p className="mb-2">
            届いていない場合は、迷惑メールフォルダに振り分けられている可能性があります。
            迷惑メールフォルダをご確認下さい。
          </p>
          <p className="mb-2">
            今後、
            関連情報や、更新情報、そのた有益な情報や、お徳な情報などをメールにてお送りいたします。
            お見逃しのないように、ぜひ届いているかどうか、今すぐご確認ください。
          </p>
          <p className="mb-2">
            迷惑メールフォルダにも見つからない場合は、もう一度お申し込みいただくか、
            下記メールアドレスまで、お気軽に連絡ください。
          </p>
          <div className="my-6 flex flex-nowrap mx-autox underline">
            <Link href={`mailto://${owneremail}`}>
              メール：
              <span className="text-blue-500 font-mono underline">
                &lt;{owneremail}&gt;
              </span>
            </Link>
          </div>
          <p>お手数をおかけしますが、確認のほどよろしくおねがいいたします。</p>
        </div>
        <p>それでは、あなたの成功を願っています。</p>
        <p className="text-right font-serif">つつみきくお</p>
      </div>
    </div>
  )
}
