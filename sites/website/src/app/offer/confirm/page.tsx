import type { Metadata } from "next"
import Link from "next/link"
import { store } from "@/lib/firebase/app"
import { doc, getDoc } from "firebase/firestore"
import type { OwnerData } from "@/lib/types"

export const metadata: Metadata = {
  title: "お役立ち情報のご購読お申し込みありがとうございます",
  description: `お役立ち情報のお申し込みのお礼と、お受け取り方法の説明`
}

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page(props: Props) {
  const { title, url, email } = props.searchParams
  const ss = await getDoc(doc(store, "users/owner"))
  const owner: OwnerData = ss.data() as OwnerData
  owner.id = ss.id
  const offer = (url && `${title}のダウンロード`) || "お役立ち情報のご購読"
  return (
    <div className="py-8 sm:py-16 mx-auto max-w-2xl">
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
      <p className="my-6 text-xl text-gray-800 font-medium">
        {(url && "ダウンロード用のリンク") || "ご挨拶の"} メールを、
        ご入力いただいたメールアドレス &lt;{email}&gt; に、お送りいたしました。
      </p>
      <p>１分程度であなたのメールボックスに到着いたします。ご確認下さい。</p>
      <p className="mt-6 text-xl text-gray-800 font-medium">
        見つからない場合は、迷惑メールフォルダに振り分けられている可能性があります。
        迷惑メールフォルダをご確認下さい。
      </p>
      <p className="mt-6 text-xl text-gray-800 font-medium">
        迷惑メールフォルダにも見つからない場合は、もう一度お申し込みいただくか、
        下記メールアドレスまで、お気軽にお申し込み下さい。
      </p>
      <div className="mt-6 font-mono text-center">
        <a href={`mailto://${owner.email}`}>
          {owner.name}
          <span className="text-primary underline">&lt;{owner.email}&gt;</span>
        </a>
      </div>
      <p className="mt-6 text-xl text-gray-800 font-medium">
        お手数をおかけしますが、確認のほどよろしくおねがいいたします。
      </p>
      <hr />
      <p></p>
    </div>
  )
}
