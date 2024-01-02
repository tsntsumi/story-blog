"use client"
import type { Dispatch, FormEvent } from "react"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { storage } from "@/lib/firebase/app"
import { ref, getDownloadURL } from "firebase/storage"

import Spinner from "@/components/Common/Spinner"

require("firebase-functions/logger/compat")

const SET_STATE: string = "SET_STATE"

type RequestState = "open" | "busy" | "error" | "closed"

export default function RequestForm({ offerName }) {
  const [requestState, setRequestState] = useState<RequestState>("busy")
  const [offerUrl, setOfferUrl] = useState("")
  const router = useRouter()

  useEffect(() => {
    if (!offerUrl && offerName) {
      const offerRef = ref(storage, `offers/${offerName}`)
      getDownloadURL(offerRef).then((url) => setOfferUrl(url))
    }
  }, [offerName, offerUrl])

  return (
    <form
      className="mt-3 sm:mt-0 sm:ml-4"
      onSubmit={(event) => {
        handleSubmit(event, setRequestState, router)
      }}
    >
      <div className="flex flex-col space-y-4">
        <div className="isolate -space-y-px rounded-md shadow-sm">
          <div className="relative rounded-t-none px-3 pt-2.5 pb-1.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-accent-600">
            <label
              htmlFor="email"
              className="block text-xs font-medium text-gray-900"
            >
              Ｅメールアドレス
            </label>
            <input
              aria-label="Email"
              required
              aria-required
              type="email"
              name="email"
              id="email"
              className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="メールアドレス"
            />
          </div>
        </div>
      </div>
      <input type="hidden" name="offerName" value={offerName} />
      <input type="hidden" name="offerUrl" value={offerUrl} />
      {requestState === "error" && (
        <div className="bg-red-50 text-red-600">
          リクエストの受付け時にエラーがありました。時間をおいてもう一度お試し下さい。
        </div>
      )}
      <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
        <button
          type="submit"
          disabled={requestState === "busy"}
          className="inline-flex w-full justify-center rounded-md bg-red-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 sm:ml-3 sm:w-auto disabled:opacity-50"
        >
          {requestState === "busy" ? (
            <>
              準備しています ... <Spinner className="ml-2" />
            </>
          ) : (
            <>プレゼントを手に入れる</>
          )}
        </button>
        <button
          type="button"
          className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={() => {
            setRequestState("open")
          }}
        >
          キャンセル
        </button>
      </div>
    </form>
  )
}

/**
 *
 * Handles form submissions by intercepting the native event,
 * passing params to the `/book` endpoint, and redirecting
 * upon success (or showing a failure message).
 *
 */
function handleSubmit(
  event: FormEvent<HTMLFormElement>,
  setRequestState: any,
  router: any // AppRouterInstance
) {
  event.preventDefault()

  setRequestState("busy")
  fetch(`/request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget)))
  })
    .then(async (data) => {
      const json = await data.json()
      if (json.success) {
        setRequestState("closed")
        router.push("/confirmation")
      } else {
        setRequestState("error")
      }
    })
    .catch(() => {
      setRequestState("error")
    })
}
