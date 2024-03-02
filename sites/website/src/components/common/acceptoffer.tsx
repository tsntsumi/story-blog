"use client"
import { useState, useEffect, useMemo } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import React from "react"
import Spinner from "@/components/common/spinner"

// ready -- ready for input, busy -- wait for submitting, error -- something went wrong
type SubmitState = "ready" | "busy" | "error"

export default function AcceptOffer({
  offer,
  children = "今すぐ受取る"
}: {
  offer: { title: string; url: string }
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
    const body = JSON.stringify(Object.fromEntries(data))
    fetch(`/offer/accept`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: body
    })
      .then(async (data) => {
        const json = await data.json()
        if (json.success) {
          console.debug("/offer/accept success")
          router.push("/offer/confirm")
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
      <div className="flex flex-nowrap gap-4 my-4">
        <input
          type="email"
          name="email"
          placeholder="Emailアドレス"
          className="rounded-lg w-3/5 md:w-4/5 py-0"
        />
        <input type="hidden" name="category" value="casestudy" />
        <input type="hidden" name="title" value={offer.title} />
        <input type="hidden" name="url" value={offer.url} />
        <button
          type="submit"
          className="my-4 w-2/5 md:w-1/5 py-4 px-3 rounded-full whitespace-nowrap text-xs md:text-sm p-0 duration-300 ease-in-out text-btndarkgold bg-btngold hover:bg-blackho hover:text-btngold dark:bg-btngold dark:hover:bg-blackho"
        >
          {submitting === "busy" ? (
            <div className="inline flex flex-nowrap items-center justify-center">
              お申し込み受付中...
              <Spinner className="ml-2" />
            </div>
          ) : (
            <>{children}</>
          )}
        </button>
      </div>
    </form>
  )
}
