"use client"
import NextLink from "next/link"
import Link from "@/components/Assets/link"
import Media from "@/components/Assets/media"

type ClientProps = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function ClientPage(props: ClientProps) {
  const { title, name, email, ownername, owneremail } = props.searchParams
  return (
    <div className="py-8 sm:py-16 mx-auto max-w-2xl text-justify">
      <h1 className="mx-4 text-3xl font-bold tracking-tight text-ai-blue sm:text-5xl">
        {title} のお申し込みについて
      </h1>
      <div className="mx-8 mt-6 text-xl text-gray-800 font-medium">
        <p>
          {name} さん、
          {title} のお申し込みありがとうございます。
        </p>
        <p className="my-6 text-xl text-gray-800 font-medium">
          このページと同じご挨拶を、ご入力いただいたメールアドレス &lt;{email}
          &gt; にも、お送りいたしました。
        </p>
        <p>カウンセリングの日時は、次のリンクからお選びください。</p>
        <div className="my-4">
          <div className="font-mono text-xs text-center">
            - &gt;8 --- &gt;8 --- &gt;8 --- &gt;8 ---- &gt;8 --- &gt;8 --- &gt;8
            -
          </div>
          <div className="my-2 text-blue-500 underline text-center">
            <a href="https://meet.alizza-ideal.com">カウンセリング日時を選択</a>
          </div>
          <div className="font-mono text-xs text-center">
            - &gt;8 --- &gt;8 --- &gt;8 --- &gt;8 ---- &gt;8 --- &gt;8 --- &gt;8
            -
          </div>
        </div>
        <p>それでは、あなたにお会いするのを楽しみにしています。</p>
      </div>
      <div className="mx-8 mt-6 text-gray-600">
        <p>メールは、１分程度であなたのメールボックスに到着いたします。</p>
        <p>
          届いていない場合は、迷惑メールフォルダに振り分けられている可能性があります。
          迷惑メールフォルダをご確認下さい。
        </p>
        <p>
          今後のご連絡は、メールをメインに利用いたしますので、
          届いているかご確認ください。
        </p>
        <p>
          迷惑メールフォルダにも見つからない場合は、もう一度お申し込みいただくか、
          下記メールアドレスまで、お気軽にお申し込み下さい。
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
    </div>
  )
}
