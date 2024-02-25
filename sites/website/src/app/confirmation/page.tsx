import Image from "next/image"
import UseClientComponent from "@/components/common/useclientcomponent"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "ご予約受付のご説明 - まきせ鍼灸整骨院",
  description: `ご予約確定までの流れを説明します`
}

export default function Page() {
  return (
    <UseClientComponent>
      <div className="px-8 py-8 sm:py-16 mx-auto max-w-2xl">
        <div className="w-1/3 p-0 pl-2 pb-2 float-right">
          <Image
            src="/images/user/makise-welcome.jpg"
            alt="まきせ院長"
            width="720"
            height="480"
            className="object-cover"
          />
        </div>
        <h1 className="text-3xl font-bold text-accent-700 sm:text-5xl">
          ご予約のお申し込み、ありがとうございます。
        </h1>
        <p className="my-6 text-xl text-gray-800 font-medium">
          予定を確認し、出来るだけ早くご返信いたします。しばらくお待ち下さい。
        </p>
        <h2 className="my-4">予約確定までの流れ</h2>
        <dl>
          <dt className="my-4 text-lg font-bold">1. 予約状況と予定の確認</dt>
          <dd>
            <p>
              この予約カレンダー以外からの予約が重複していてダブルブッキングになっていたり、
              緊急の予定が入っていてお申し込みを受けられないといったことがないことを確認します。
            </p>
            <p>
              確認は、施術の合間に行いますので、回答が遅くなる場合がございます。
            </p>
            <p>
              おまたせして申し訳ありませんが、ご理解の程をお願いいたします。
            </p>
          </dd>
          <dt className="my-4 text-lg font-bold">2. ご予約を確定した場合</dt>
          <dd>
            <p>予約できたことをメールにてお知らせいたします。</p>
            <p>
              「<strong>招待：＜ご予約のコース名＞</strong>
              」というタイトルでご送付いたします。
            </p>
            <p>
              メール本文に、まきせのGoogleカレンダーのリンクがございます。
              こちらからご予約内容を確認していただくことができます。
            </p>
            <p>
              Googleカレンダーのアカウントをお持ちでない場合でもご覧いただけます。
            </p>
            <p>
              ご予約日が近づきますと、お手元に通知が届くようになっています。
              ご予約日時の備忘としてお使い下さい。
            </p>
          </dd>
          <dt className="my-4 text-lg font-bold">3. ご予約できない場合</dt>
          <dd>
            <p>
              ほとんどありえませんが、もし万が一すでに予約、
              または予定が入っていて予約を受けられない場合、
              その旨のメールをお送りいたします。
            </p>
            <p>
              「<strong>Re: ご予約のお申し込みについて</strong>
              」というタイトルでお送りいたします。
            </p>
            <p>
              その際には、大変お手数をおかけしますが、もう一度
              別の日時でご予約をしていただけると幸いです。
            </p>
            <p>よろしくお願いいたします。</p>
          </dd>
        </dl>
        <h3 className="my-4 font-bold">
          それでは、お体をお大事になさって下さい
        </h3>
        <p>あなたが毎日笑顔で楽しく暮らせるようになることを願ってます。</p>
        <Image
          src="/images/user/makise-signature.png"
          width="945"
          height="291"
          alt="まきせ院長サイン"
          className="object-cover w-1/2 ml-auto"
        />
      </div>
    </UseClientComponent>
  )
}
