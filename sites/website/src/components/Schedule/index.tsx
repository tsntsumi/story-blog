"use client"
import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import ScheduleACall from "@/components/common/acceptoffer"
import Spinner from "@/components/common/spinner"

export default function Schedule() {
  const [submitting, setSubmitting] = useState<SubmitState>("ready")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const router = useRouter()

  const setError = (error: string) => {
    setSubmitting("error")
    setErrorMessage(error)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting("busy")
    const data = new FormData(e.currentTarget)
    const fo = Object.fromEntries(data)
    const body = JSON.stringify(fo)
    console.debug(`form obj`, body)
    const { email, title, url } = fo
    fetch(`/schdule-a-call`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(async (data) => {
        const json = await data.json()
        setSubmitting("done")
        if (json.success) {
          const query = encodeURI(`name=${fo.name}&email=${fo.email}`)
          router.push(`/schedule-a-call-confirm?${query}`)
          setSubmitting("ready")
          return
        }
        setError(json.error)
      })
      .catch((e) => {
        setError(e)
      })
  }

  return (
    <section id="schedule-a-call" className="pt-24 mt-0">
      <div className="mx-auto md:w-3/4 max-w-c-1315 px-4 md:px-8 xl:px-0">
        <h1 className="text-xl text-center mx-auto">無料相談を予約する</h1>
      </div>
      <form onSubmit={handleSubmit}>
        {submitting === "error" && (
          <div className="bg-red-50 text-red-600 p-2 text-sm">
            お申し込み受付中にエラーが発生しました。時間をおいてもう一度お試しください。(
            {errorMessage})
          </div>
        )}
        <div className="my-4 w-[90%] mx-auto">
          <p>
            あなたにとって Alizza Ideal
            の個人起業家ビジネス・ドライビング・スクールが合っているか判断するのをお手伝いします。
          </p>
          <p>事前アンケートフォームに必要事項をすべてお書きください。</p>
          <input
            type="text"
            name="name"
            required={true}
            placeholder="お名前"
            className="rounded-lg w-full my-2 py-0 max-h-[2.8rem] min-h-[2.8rem]"
          />
          <input
            type="email"
            name="email"
            required={true}
            placeholder="Emailアドレス"
            className="rounded-lg w-full my-2 py-0 max-h-[2.8rem] min-h-[2.8rem]"
          />
          <input
            type="tel"
            name="phone"
            required={true}
            placeholder="連絡先電話番号"
            className="rounded-lg w-full my-2 py-0 max-h-[2.8rem] min-h-[2.8rem]"
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
                  私は起業しています。しかし、伸び悩んでいます。
                </label>
              </li>
              <li>
                <label>
                  <input type="radio" required={true} name="occupation" />{" "}
                  私は起業しています。サービスコンテンツを探しています。
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
                  <input type="checkbox" name="space" value="business" />{" "}
                  経営・運営
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="space" value="career" /> キャリア
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="space" value="sales" /> 営業
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="space" value="marketing" /> 集客
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="space" value="leadership" />{" "}
                  リーダーシップ
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="space" value="life" /> 生活
                </label>
              </li>
              <li>
                <label>
                  <input type="checkbox" name="space" value="other" /> その他
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
              maxLength="200"
              placeholder="あなたの課題"
              required={true}
              className="rounded-lg w-full my-2 py-0 h-20 max-h-20 min-h-20"
            />
          </div>

          <div className="mt-8 mb-0">
            <label htmlFor="whats-your-earnings">
              あなたの起業後の１ヶ月の平均売上げを教えてください
            </label>

            <select
              id="whats-your-earnings"
              name="earning"
              required={true}
              className="block w-full mt-2 rounded-t-lg"
            >
              <option value="">--選択してください--</option>
              <option value="5万円以下">5万円以下</option>
              <option value="30万円以下">6万円〜30万円</option>
              <option value="60万円以下">31万円〜60万円</option>
              <option value="90万円以下">61万円〜90万円</option>
              <option value="150万円以下">91万円〜150万円</option>
              <option value="151万円以上">151万円以上</option>
            </select>
          </div>

          <button
            type="submit"
            className="my-8 w-2/5 w-fit max-h-[2.8rem] min-h-[2.8rem] px-3 flex items-center justify-center rounded-full text-xs md:text-sm p-0 duration-300 ease-in-out text-darkgold bg-gold hover:bg-blackho hover:text-gold mx-auto font-bold"
          >
            {submitting === "busy" ? (
              <div className="inline flex flex-nowrap items-center justify-center">
                お申し込み受付中...
                <Spinner className="ml-2 text-white" />
              </div>
            ) : submitting === "done" ? (
              <>受け付け完了しました</>
            ) : (
              <>
                <div className="whitespace-nowrap">相談の予約を申し込む</div>
              </>
            )}
          </button>
        </div>
      </form>
    </section>
  )
}
