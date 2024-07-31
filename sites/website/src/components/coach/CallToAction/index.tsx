"use client"
import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import React, { FormEvent } from "react"
import Spinner from "@/components/Assets/spinner"

/**
 * State for submitting
 * ready -- ready for input
 * busy -- wait for submitting
 * error -- something went wrong
 * done -- accepted to submit
 */
type SubmitState = "ready" | "busy" | "error" | "done"

export default function CallToAction({
  children = <>請求する</>
}: {
  children?: React.ReactChild | undefined
}): React.ReactNode {
  const [submitting, setSubmitting] = useState<SubmitState>("ready")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [types, setTypes] = useState<string[]>(["ビジネス・コーチ"])
  const router = useRouter()

  const setError = (error: string) => {
    setSubmitting("error")
    setErrorMessage(error)
  }

  const handleCoachingType = (e: FormEvent<HTMLInputElement>) => {
    setSubmitting("ready")
    setErrorMessage("")
    if (e.currentTarget.checked) {
      const added = types
      added.push(e.currentTarget.value)
      setTypes(added)
    } else {
      const removed = types.filter((t) => {
        return t !== e.currentTarget.value
      })
      setTypes(removed)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting("ready")
    const data = new FormData(e.currentTarget)
    const entries = Object.fromEntries(data)
    const body = JSON.stringify(entries)
    const { title, email, name } = entries
    entries.coachingtypes = types.join(",")
    if (!entries.coachingtypes) {
      setError("コーチのタイプを選択して下さい")
      setSubmitting("error")
      return
    }
    const blockings = [
      "hiroto@gmail.com",
      "hiroto.h.makise@gmail.com",
      "t@gmail.com",
      "h.makise@docomo.ne.jp",
      "makise@gmail.com"
    ]
    const isBlocked = !!blockings.find((m) => m === email)
    if (isBlocked) {
      setError("あなたはブロックされています")
      setSubmitting("error")
      return
    }
    if (submitting === "error") {
      return
    }
    setSubmitting("busy")
    fetch(`/counselling/request`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(async (data) => {
        const accepted = await data.json()
        setSubmitting("done")
        if (accepted.success) {
          const owneremail = encodeURIComponent(accepted.owneremail)
          const query = encodeURI(
            `title=${title}&name=${name}&email=${email}&ownername=${accepted.ownername}`
          )
          router.push(`/counselling/confirm?${query}&owneremail=${owneremail}`)
          setSubmitting("ready")
          return
        }
        setError(
          `お申し込み受付中にエラーが発生しました。時間をおいてもう一度お試しください。（${accepted.error}）`
        )
      })
      .catch((e) => {
        setError(
          `お申し込み受付中にエラーが発生しました。時間をおいてもう一度お試しください。（${e}）`
        )
      })
  }

  const inputClasses = "form-input rounded-lg bg-gray-50 w-full min-w-96"

  return (
    <section id="call-to-action" className="p-0 m-0 mb-10">
      <div className="p-4 mb-8 mx-4 rounded-3xl bg-gray-100 text-ai-blue">
        <h2>無料カウンセリングを請求する</h2>
        <p>
          フォームに記入して、無料カウンセリングを請求してください。
          アイデアル・コーチングが適しているかどうか
          あなたが判断するお手伝いをいたします。
        </p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap items-center justify-around gap-2 md:gap-4 md:my-4 p-4 bg-white rounded-3xl">
            <input
              type="hidden"
              name="title"
              value="コーチング・ビジネス・カウンセリング"
            />
            <input
              type="hidden"
              name="meet"
              value="https://reserv.alizza-ideal.com"
            />
            <input
              type="hidden"
              name="category"
              value="アイデアル・コーチング"
            />
            <input type="hidden" name="coachingtypes" value={types.join(",")} />
            <input
              type="text"
              name="name"
              placeholder="お名前 [必須]"
              className={inputClasses}
              required={true}
            />
            <input
              type="email"
              name="email"
              placeholder="Emailアドレス [必須]"
              className={inputClasses}
              required={true}
            />
            <input
              type="tel"
              name="phone"
              placeholder="お電話番号 [必須]"
              className={inputClasses}
              required={true}
            />
            <h3>あなたのコーチングビジネスについて教えてください</h3>
            <div className="w-full ml-6 -indent-6 min-w-96">
              <div className="text-sm">[必須]</div>
              <div className="w-full">
                <input
                  type="radio"
                  name="coachinglevel"
                  id="コーチング初心者"
                  value="コーチング初心者"
                  className="form-radio mr-2"
                  required={true}
                  defaultChecked={true}
                />
                <label htmlFor="コーチング初心者">
                  わたしはコーチング初心者です
                </label>
              </div>
              <div className="w-full">
                <input
                  type="radio"
                  name="coachinglevel"
                  id="コーチングで副業"
                  value="コーチングで副業"
                  className="form-radio mr-2"
                  defaultChecked={false}
                />
                <label htmlFor="コーチングで副業">
                  わたしは副業でコーチングをしていますが、これからコーチングで起業したいと思っています。
                </label>
              </div>
              <div className="w-full">
                <input
                  type="radio"
                  name="coachinglevel"
                  id="ビジネスに課題あり"
                  value="ビジネスに課題あり"
                  className="form-radio mr-2"
                  defaultChecked={false}
                />
                <label htmlFor="ビジネスに課題あり">
                  わたしはコーチング・ビジネスをしていますが、苦労しています
                </label>
              </div>
              <div className="w-full">
                <input
                  type="radio"
                  name="coachinglevel"
                  id="コンテンツを探している"
                  value="コンテンツを探している"
                  className="form-radio mr-2"
                  defaultChecked={false}
                />
                <label htmlFor="コンテンツを探している">
                  わたしはコーチングビジネスをしていますが、コンテンツを探しています
                </label>
              </div>
            </div>
            <h3>
              あなたはどのようなタイプのコーチングに重点をおいてますか？
              または重点的に取り組みたいですか？
            </h3>
            <div className="w-full ml-6 -indent-6 min-w-96">
              <div className="text-sm">[必須] 複数選択可</div>
              <div className="w-full">
                <input
                  type="checkbox"
                  id="ビジネス・コーチ"
                  name="ビジネス・コーチ"
                  value="ビジネス・コーチ"
                  className="form-checkbox mr-2"
                  defaultChecked={true}
                  onChange={handleCoachingType}
                />
                <label htmlFor="ビジネス・コーチ">ビジネス・コーチ</label>
              </div>
              <div className="w-full">
                <input
                  type="checkbox"
                  id="キャリア・コーチ"
                  name="キャリア・コーチ"
                  value="キャリア・コーチ"
                  className="form-checkbox mr-2"
                  onChange={handleCoachingType}
                  defaultChecked={false}
                />
                <label htmlFor="キャリア・コーチ">キャリア・コーチ</label>
              </div>
              <div className="w-full">
                <input
                  type="checkbox"
                  id="集客・コーチ"
                  name="集客・コーチ"
                  value="集客・コーチ"
                  className="form-checkbox mr-2"
                  onChange={handleCoachingType}
                  defaultChecked={false}
                />
                <label htmlFor="集客・コーチ">集客・コーチ</label>
              </div>
              <div className="w-full">
                <input
                  type="checkbox"
                  id="セールス・コーチ"
                  name="セールス・コーチ"
                  value="セールス・コーチ"
                  className="form-checkbox mr-2"
                  onChange={handleCoachingType}
                  defaultChecked={false}
                />
                <label htmlFor="セールス・コーチ">セールス・コーチ</label>
              </div>
              <div className="w-full">
                <input
                  type="checkbox"
                  id="ライフ・コーチ"
                  name="ライフ・コーチ"
                  value="ライフ・コーチ"
                  className="form-checkbox mr-2"
                  onChange={handleCoachingType}
                  defaultChecked={false}
                />
                <label htmlFor="ライフ・コーチ">ライフ・コーチ</label>
              </div>
              <div className="w-full">
                <input
                  type="checkbox"
                  id="その他のコーチ"
                  name="その他のコーチ"
                  value="その他のコーチ"
                  className="form-checkbox mr-2"
                  onChange={handleCoachingType}
                  defaultChecked={false}
                />
                <label htmlFor="その他のコーチ">その他のコーチ</label>
              </div>
            </div>
            <h3>あなたの課題を教えてください</h3>
            <div className="w-full min-w-96">
              <p>
                コーチとしての最大の課題はなんですか？
                あるいはこれからコーチを目指している中での最大の課題はなんですか？
              </p>
              <div className="text-sm">[必須]</div>
              <div className="w-full">
                <textarea
                  id="coachingproblem"
                  name="coachingproblem"
                  rows={5}
                  cols={33}
                  placeholder="わたしの課題は……"
                  className="form-textarea w-full rounded-lg"
                  required={true}
                  maxLength={1000}
                ></textarea>
              </div>
            </div>
            <div className="w-full">
              <div>現在コーチとしていくら稼いでますか？</div>
              <div className="text-sm">[必須]</div>
              <select
                name="income"
                id="income"
                required={true}
                className="form-select w-full rounded-lg"
              >
                <option value="" className="text-center">
                  -- お選びください --
                </option>
                <option value="200,000">月20万円以下</option>
                <option value="500,000">月50万円以下</option>
                <option value="999,999">月100万円未満</option>
                <option value="1,000,000">月100万円以上</option>
              </select>
            </div>
            {submitting === "error" && (
              <div className="my-4">
                エラー：
                <span className="bg-red-50 text-red-600 p-2 text-sm">
                  {errorMessage}
                </span>
              </div>
            )}
            <button
              type="submit"
              className={`py-1 px-4 max-w-5/6 mx-12 my-8 mb-4 bg-ai-yellow border-2 border-amber-900 bg-gradient-to-b from-amber-200 to-amber-400 rounded-full hover:border-amber-700`}
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
                  <div className="whitespace-nowrap">{children}</div>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
