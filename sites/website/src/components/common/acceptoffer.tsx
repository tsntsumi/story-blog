"use client"
import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import React, { FormEvent } from "react"
import Spinner from "@/components/common/spinner"

// ready -- ready for input, busy -- wait for submitting, error -- something went wrong
type SubmitState = "ready" | "busy" | "error" | "done"

export default function AcceptOffer({
  offer,
  children = "今すぐ受取る"
}: {
  offer: { title: string; url: string; category?: string }
  children: React.ReactChild
}): React.ReactNode {
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
            `title=${title}&url=${json.url}&email=${email}`
          )
          router.push(`/offer/confirm?${query}`)
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
    <form onSubmit={handleSubmit}>
      {submitting === "error" && (
        <div className="bg-red-50 text-red-600 p-2 text-sm">
          お申し込み受付中にエラーが発生しました。時間をおいてもう一度お試しください。(
          {errorMessage})
        </div>
      )}
      <div className="flex flex-nowrap items-center justify-around gap-4 my-4">
        <input type="hidden" name="title" value={offer.title} />
        <input type="hidden" name="url" value={offer.url} />
        <input type="hidden" name="category" value={offer.category} />
        <input
          type="email"
          name="email"
          placeholder="Emailアドレス"
          className="rounded-lg w-3/5 md:w-4/5 py-0 max-h-[2.8rem] min-h-[2.8rem]"
        />
        <button
          type="submit"
          className="my-4 w-2/5 w-fit max-h-[2.8rem] min-h-[2.8rem] px-3 flex items-center justify-center rounded-full text-xs md:text-sm p-0 duration-300 ease-in-out text-darkgold bg-gold hover:bg-blackho hover:text-gold"
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
