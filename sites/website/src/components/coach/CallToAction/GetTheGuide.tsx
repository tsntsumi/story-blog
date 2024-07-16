"use client"
import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import Link from "@/components/Assets/link"
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

const LABEL = "ガイドブックを請求"
const GUIDEURL =
  "gs://story-made.appspot.com/offers/コーチングサービス適正価格設定ガイドブック.pdf"
const GUIDETITLE = "コーチング・サービス適正価格設定ガイドブック"
const GUIDECATEGORY = "アイデアル・コーチング"

export function CallToTheGuide({ className }: { className?: string }) {
  return (
    <Link
      href={"/pricing-guide/#call-to-the-guide"}
      className={`py-1 px-4 w-fit mx-auto bg-ai-yellow border-2 border-amber-900 bg-gradient-to-b from-amber-200 to-amber-400 rounded-full hover:border-amber-700 ${className}`}
    >
      {LABEL}
    </Link>
  )
}

export default function GetTheGuide(): React.ReactNode {
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
    // console.debug(`form obj`, body)
    const { title, email, name } = entries
    entries.coachingtypes = types.join(",")
    if (!entries.coachingtypes) {
      setError("コーチのタイプを選択して下さい")
      setSubmitting("error")
      return
    }
    if (submitting === "error") {
      return
    }
    setSubmitting("busy")
    fetch(`/pricing-guide/request`, {
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
          const url = accepted.data.url
          const query = encodeURI(
            `title=${title}&url=${url}&name=${name}&email=${email}&ownername=${accepted.ownername}`
          )
          // console.debug("query", query)
          router.push(
            `/pricing-guide/confirm?${query}&owneremail=${owneremail}`
          )
          setSubmitting("ready")
          return
        }
        setError(`お申し込み受付中にエラーが発生しました。時間をおいてもう一度お試しください。（
${accepted.error}）`)
      })
      .catch((e) => {
        setError(
          `お申し込み受付中にエラーが発生しました。時間をおいてもう一度お試しください。（${e}）`
        )
      })
  }

  const textClasses = "form-input rounded-lg bg-gray-50 w-full"

  return (
    <section id="call-to-the-guide" className="p-0 pt-12 m-0 mb-10">
      <div className="px-4 py-2 mb-8 mx-4 rounded-3xl bg-gray-100 text-ai-blue">
        <h2 className="">無料ガイドブックを請求</h2>
        <p>フォームに記入して、無料ガイドブックをご請求ください！</p>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-wrap md:flex-nowrap items-center justify-around gap-2 md:gap-4 my-4 p-4 bg-white rounded-3xl">
            <input type="hidden" name="title" value={GUIDETITLE} />
            <input type="hidden" name="url" value={GUIDEURL} />
            <input type="hidden" name="category" value={GUIDECATEGORY} />
            <input type="hidden" name="coachingtypes" value={types.join(",")} />
            <input
              type="text"
              name="name"
              placeholder="お名前 [必須]"
              className={textClasses}
              required={true}
            />
            <input
              type="email"
              name="email"
              placeholder="Emailアドレス [必須]"
              className={textClasses}
              required={true}
            />
            <input type="hidden" name="phone" value="" />
            <h3>
              あなたはどのようなタイプのコーチングに重点をおいてますか？
              または重点的に取り組みたいですか？
            </h3>
            <div className="w-full ml-6 -indent-6">
              <div className="text-sm">[必須] 複数選択可</div>
              <div className="w-full">
                <input
                  type="checkbox"
                  id="ビジネス・コーチ"
                  name="coachingtypes;ビジネス・コーチ"
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
                  name="coachingtypes;キャリア・コーチ"
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
                  name="coachingtypes;集客・コーチ"
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
                  name="coachingtypes;セールス・コーチ"
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
                  name="coachingtypes;ライフ・コーチ"
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
                  name="coachingtypes;その他のコーチ"
                  value="その他のコーチ"
                  className="form-checkbox mr-2"
                  onChange={handleCoachingType}
                  defaultChecked={false}
                />
                <label htmlFor="その他のコーチ">その他のコーチ</label>
              </div>
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
              className={`py-1 px-4 max-w-5/6 mx-12 bg-ai-yellow border-2 border-amber-900 bg-gradient-to-b from-amber-200 to-amber-400 rounded-full hover:border-amber-700`}
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
                  <div className="whitespace-nowrap">{LABEL}</div>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
