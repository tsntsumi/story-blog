"use client"
import Link from "next/link"
import { useState } from "react"
import type { Dispatch, FormEvent, ChangeEventHandler } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Spinner from "@/components/Spinner"

type SubmitState = "ready" | "busy" | "error" | "done"

export default function Confirmation() {
  const searchParams = useSearchParams()
  const name: string = searchParams.get("name") || ""
  const email: string = searchParams.get("email") || ""
  const course: string = searchParams.get("course") || ""
  return (
    <>
      <section id="confirmation" className="w-4/5 md:w-3/5 mt-8 mx-auto">
        <h1 className="text-3xl font-bold tracking-tight text-accent-700 sm:text-5xl">
          <div className="text-3xl block my-4">
            {name} <code>&lt;{email}&gt;</code> さん
          </div>
          無料セミナーのお申し込み、ありがとうございます
        </h1>
        <p className="mt-6">
          参加特典として月刊集客成功事例集（電子版最新号）を、セミナー時にお渡しします。
        </p>
        <p className="mt-6 text-xl text-gray-800 font-medium">
          予約状況と予定を確認し、出来るだけ早く e-mail
          にてご返信いたします。しばらくお待ち下さい⏰
        </p>
        <h2 className="font-bold text-2xl sm:text-4xl my-4">
          事前アンケートのお願い
        </h2>
        <div className="xl:mx-16 my-8">
          無料セミナーの前に、
          <Link href="#survey" className="underline text-primary">
            事前アンケートへの登録
          </Link>
          ⬇をお願いします。
        </div>
        <h2 className="font-bold text-2xl sm:text-4xl my-4">
          予約確定までの流れ
        </h2>
        <dl className="xl:mx-16 my-8">
          <dt className="my-4 text-lg font-bold">1. 予約状況と予定の確認</dt>
          <dd>
            <p>
              これより、入れ違いで予約がダブルブッキングになっていたり、
              緊急の予定が入っていてお申し込みを受けられないといったことがないことを確認します。
            </p>
            <p>
              確認は、作業の合間に行いますので、回答が遅くなる場合がございます。
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
              メール本文に、Alizza Ideal
              のGoogleカレンダーのリンクがございます。
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
              別の日時でごスケジュールしていただけると幸いです。
            </p>
            <p>よろしくお願いいたします。</p>
          </dd>
        </dl>
        <p>それでは、あなたの成功を願ってます。</p>
        <h2 id="survey" className="font-bold text-2xl sm:text-4xl my-8">
          事前アンケートにご登録ください
        </h2>
        <Survey name={name} email={email} course={course} />
      </section>
    </>
  )
}

function Survey({
  name,
  email,
  course,
}: {
  name: string
  email: string
  course: string
}) {
  const [submitting, setSubmitting] = useState<SubmitState>("ready")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [spaces, setSpaces] = useState({
    business: false,
    career: false,
    sales: false,
    marketing: false,
    leadership: false,
    life: false,
    other: false,
  })
  const router = useRouter()

  const setError = (error: string) => {
    setSubmitting("error")
    setErrorMessage(error)
  }

  const handleSpaceChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.type != "checkbox") {
      return
    }
    setSpaces({
      ...spaces,
      [e.target.name]: e.target.checked,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting("busy")
    const checkedSpaces = Object.entries(spaces)
      .filter(([k, v]) => v)
      .map(([k, v]) => k)
      .join()

    const data = new FormData(e.currentTarget)
    const fo = Object.fromEntries(data)
    fo.spaces = checkedSpaces
    const body = JSON.stringify(fo)
    fetch(`/api/survey`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
      .then(async (data) => {
        const json = await data.json()
        setSubmitting("done")
        if (!json.success) {
          setError(json.error)
          return
        }
        router.replace("https://www.alizza-ideal.com")
      })
      .catch((e) => {
        setError(e)
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      {submitting === "error" && (
        <div className="bg-red-50 text-red-600 p-2 text-sm">
          お申し込み受付中にエラーが発生しました。時間をおいてもう一度お試しください。(
          {errorMessage})
        </div>
      )}
      <div className="my-4 w-[90%] mx-auto">
        <h3 className="text-2xl font-bold my-4">
          フォームに必要事項をすべて入力してご登録ください。
        </h3>
        <input
          type="text"
          name="name"
          required={true}
          placeholder="お名前"
          defaultValue={`${name}`}
          className="rounded-lg w-full p-2 my-2 py-0 max-h-[2.8rem] min-h-[2.8rem] border-[1px] border-black"
        />
        <input
          type="email"
          name="email"
          required={true}
          placeholder="Emailアドレス"
          defaultValue={`${email}`}
          className="rounded-lg w-full p-2 my-2 py-0 max-h-[2.8rem] min-h-[2.8rem] border-[1px] border-black"
        />
        <input
          type="tel"
          name="phone"
          required={true}
          placeholder="連絡先電話番号"
          className="rounded-lg w-full p-2 my-2 py-0 max-h-[2.8rem] min-h-[2.8rem] border-[1px] border-black"
        />
        <div className="mt-8 mb-0">
          <label htmlFor="wahts-your-status">
            今のあなたに最も当てはまる項目はどれですか？
          </label>
          <ul className="list-none mt-2">
            <li>
              <label>
                <input
                  type="radio"
                  name="occupation"
                  required={true}
                  value="I'm new to coaching"
                />{" "}
                わたしは、起業したばかりです
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="occupation"
                  required={true}
                  value="want to do full-time"
                />{" "}
                わたしは、副業をしています。将来起業したいと思ってます。
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="occupation"
                  required={true}
                  value="struggling to grow"
                />{" "}
                私はすでにビジネスをしています。しかし、伸び悩んでいます。
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  required={true}
                  name="occupation"
                  value="looking for content"
                />{" "}
                私はすでにビジネスをしています。独自商品を探しています。
              </label>
            </li>
          </ul>
        </div>

        <div className="mt-8 mb-0">
          <label htmlFor="whats-your-area">
            あなたはどんな分野で起業しましたか？またはするつもりですか？（複数回答可）
          </label>

          <ul id="whats-your-space" className="list-none mt-2">
            <li>
              <label>
                <input
                  type="checkbox"
                  name="business"
                  onChange={handleSpaceChange}
                />{" "}
                経営・運営
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="career"
                  onChange={handleSpaceChange}
                />{" "}
                キャリア
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="sales"
                  onChange={handleSpaceChange}
                />{" "}
                営業
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="marketing"
                  onChange={handleSpaceChange}
                />{" "}
                集客
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="leadership"
                  onChange={handleSpaceChange}
                />{" "}
                リーダーシップ
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="life"
                  onChange={handleSpaceChange}
                />{" "}
                生活
              </label>
            </li>
            <li>
              <label>
                <input
                  type="checkbox"
                  name="other"
                  onChange={handleSpaceChange}
                />{" "}
                その他
              </label>
            </li>
          </ul>
        </div>

        <div className="mt-8 mb-0">
          <label htmlFor="whats-your-problem">
            あなたのビジネスを進めるにあたっての課題はなんですか？
          </label>
          <textarea
            id="whats-your-problem"
            name="problem"
            maxLength={200}
            placeholder="あなたの課題"
            required={true}
            className="rounded-lg w-full my-2 p-2 h-20 max-h-20 min-h-20 border-[1px] border-black"
          />
        </div>

        <div className="mt-8 mb-0">
          <label htmlFor="whats-your-earnings">
            あなたの現在の売上げを教えてください
          </label>

          <select
            id="whats-your-earnings"
            name="earning"
            required={true}
            className="rounded-lg w-full p-2 my-2 border-[1px] border-black">
            <option value="">--選択してください--</option>
            <option value="5万円以下">5万円以下</option>
            <option value="30万円以下">6万円〜30万円</option>
            <option value="60万円以下">31万円〜60万円</option>
            <option value="90万円以下">61万円〜90万円</option>
            <option value="150万円以下">91万円〜150万円</option>
            <option value="151万円以上">151万円以上</option>
          </select>
        </div>
        <input type="hidden" name="course" value={course} />

        <button
          type="submit"
          className="my-8 w-fit p-4 px-8 flex items-center justify-center rounded-full text-xs md:text-sm p-0 duration-300 ease-in-out text-darkgold bg-gold hover:bg-blackho hover:text-gold mx-auto font-bold">
          {submitting === "busy" ? (
            <div className="inline flex flex-nowrap items-center justify-center">
              受付中...
              <Spinner className="ml-2 text-white" />
            </div>
          ) : submitting === "done" ? (
            <>受け付け完了しました</>
          ) : (
            <>
              <div className="whitespace-nowrap">アンケートを送信</div>
            </>
          )}
        </button>
      </div>
    </form>
  )
}
