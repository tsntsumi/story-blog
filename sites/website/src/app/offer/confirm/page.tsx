import type { Metadata } from "next"
import { store } from "@/lib/firebase/app"
import { doc, getDoc } from "firebase/firestore"
import type { OwnerData } from "@/lib/types"

export const metadata: Metadata = {
  title: "お役立ち情報のご購読お申し込みありがとうございます",
  description: `お役立ち情報のお申し込みのお礼と、お受け取り方法の説明`
}

export default async function Page() {
  const ss = await getDoc(doc(store, "users/owner"))
  const owner: OwnerData = ss.data() as OwnerData
  owner.id = ss.id

  return (
    <div className="py-8 sm:py-16 mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight text-accent-700 sm:text-5xl">
        お役立ち情報のご購読お申し込みについて
      </h1>
      <p className="mt-6 text-xl text-gray-800 font-medium">
        お役立ち情報ご購読の申し込み、ありがとうございます。
      </p>
      <p className="my-6 text-xl text-gray-800 font-medium">
        ご入力いただいたメールアドレスに、確認用メールをお送りいたしました。
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
          {owner.name}{" "}
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
