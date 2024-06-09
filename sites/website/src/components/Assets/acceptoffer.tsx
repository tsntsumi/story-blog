"use client"
import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import React, { FormEvent } from "react"
import Spinner from "@/components/Assets/spinner"

// ready -- ready for input, busy -- wait for submitting, error -- something went wrong
type SubmitState = "ready" | "busy" | "error" | "done"

export default function AcceptOffer({
  offer,
  children = "今すぐ受取る"
}: {
  offer: { title: string; url: string; category?: string; image?: string }
  children: React.ReactChild
}): React.ReactNode {
  const [submitting, setSubmitting] = useState<SubmitState>("ready")
  const [errorMessage, setErrorMessage] = useState<string>("")
  const [emailAddress, setEmailAddress] = useState<string>("")
  const router = useRouter()

  const setError = (error: string) => {
    setSubmitting("error")
    setErrorMessage(error)
  }

  const handleEmail = (e: FormEvent<HTMLInputElement>) => {
    setSubmitting("ready")
    setErrorMessage("")
    setEmailAddress(e.currentTarget.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!emailAddress) {
      setError("Emailアドレスを入力して下さい")
      setSubmitting("error")
      return
    }
    if (submitting === "error") {
      return
    }
    setSubmitting("busy")
    const data = new FormData(e.currentTarget)
    const fo = Object.fromEntries(data)
    const body = JSON.stringify(fo)
    // console.debug(`form obj`, body)
    const { email, title, url } = fo
    fetch(`/offer/accept`, {
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
          const query = encodeURI(
            `title=${title}&url=${json.url}&email=${email}&image=${offer.image}`
          )
          router.push(`/offer/confirm?${query}`)
          setSubmitting("ready")
          return
        }
        setError(`お申し込み受付中にエラーが発生しました。時間をおいてもう一度お試しください。（
${json.error}）`)
      })
      .catch((e) => {
        setError(
          `お申し込み受付中にエラーが発生しました。時間をおいてもう一度お試しください。（${e}）`
        )
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      {submitting === "error" && (
        <div className="bg-red-50 text-red-600 p-2 text-sm">{errorMessage}</div>
      )}
      <div className="flex flex-wrap md:flex-nowrap items-center justify-around md:gap-4 md:my-4">
        <input type="hidden" name="title" value={offer.title} />
        <input type="hidden" name="url" value={offer.url} />
        <input type="hidden" name="category" value={offer.category} />
        <input type="hidden" name="image" value={offer.image} />
        <input
          type="email"
          name="email"
          placeholder="Emailアドレス"
          className="border-2 bg-sky-100 rounded-lg w-full py-0 px-2 max-h-[2.8rem] min-h-[2.8rem]"
          onChange={handleEmail}
        />
        <button
          type="submit"
          className="my-4 w-2/5 w-full md:w-fit max-h-[2.8rem] min-h-[2.8rem] px-3 flex items-center justify-center rounded-full text-md md:text-sm p-0 duration-300 ease-in-out text-ai-gold bg-gradient-to-b from-amber-200 to-amber-400 hover:bg-blackho hover:text-gold border-2 border-amber-900 hover:border-amber-700"
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
  )
}
