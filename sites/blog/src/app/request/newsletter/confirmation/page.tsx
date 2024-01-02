import { OWNER_EMAIL, OWNER_NAME } from "@/config"

export default function Confirmation() {
  return (
    <div className="py-8 sm:py-16 mx-auto max-w-2xl">
      <h1 className="text-3xl font-bold tracking-tight text-accent-700 sm:text-5xl">
        ニュースレター購読のお申し込み、ありがとうございます。
      </h1>
      <p className="mt-6 text-xl text-gray-800 font-medium">
        お申し込みありがとうございます。
      </p>
      <p className="mt-6 text-xl text-gray-800 font-medium">
        ご登録いただいたメールアドレスに、確認用メールをお送りいたしました。
        私の自己紹介ビデオのリンクもお送りしましたので、よろしければご覧ください。
      </p>
      <p>１分程度であなたのメールボックスに到着いたしますのでご確認下さい。</p>
      <p className="mt-6 text-xl text-gray-800 font-medium">
        見つからない場合は、迷惑メールフォルダに振り分けられている可能性があります。
        迷惑メールフォルダをご確認下さい。
      </p>
      <p className="mt-6 text-xl text-gray-800 font-medium">
        迷惑メールフォルダにも見つからない場合は、もう一度お申し込みいただくか、
        下記メールアドレスまで、直接お申し込み下さい。
      </p>
      <div className="font-mono">
        <a href={`mailto://${OWNER_EMAIL}`}>
          {OWNER_NAME} &lt;{OWNER_EMAIL}&gt;
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
