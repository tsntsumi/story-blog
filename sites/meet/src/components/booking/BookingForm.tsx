import { Dialog } from "@headlessui/react"
// import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context"
import { useRouter } from "next/navigation"
import type { Dispatch, FormEvent } from "react"
import {
  OWNER_LOCALE,
  OWNER_TIMEZONE,
  DURATION_TO_NAME,
  DEFAULT_DURATION,
} from "@/config"

import Modal from "../Modal"
import Spinner from "../Spinner"
import type { ActionType } from "@/context/AvailabilityContext"
import { useProvider } from "@/context/AvailabilityContext"
import { formatLocalDate, formatLocalTime } from "@/lib/availability/helpers"

require("firebase-functions/logger/compat")

const locations = [
  {
    name: "ご来社",
    value: "visit",
  },
  {
    name: "Google Meet (リモート会議)",
    value: "meet",
  },
  /* {
   *   name: "お電話",
   *   value: "phone",
   * }, */
]

export default function BookingForm() {
  const {
    state: { modal, selectedTime, timeZone, duration },
    dispatch,
  } = useProvider()
  const router = useRouter()

  if (!selectedTime || !timeZone) {
    return <></>
  }

  const dateString = formatLocalDate(selectedTime.start, { timeZone })
  const startString = formatLocalTime(selectedTime.start, { timeZone })
  const endString = formatLocalTime(selectedTime.end, {
    timeZone,
    /* timeZoneName: "shortGeneric", */
  })
  const duration_name = DURATION_TO_NAME(duration || DEFAULT_DURATION)

  return (
    <Modal
      open={modal !== "closed"}
      setOpen={(open) => {
        dispatch({ type: "SET_MODAL", payload: open ? "open" : "closed" })
      }}>
      <form
        className="mt-3 sm:mt-0 sm:ml-4"
        onSubmit={(event) => {
          handleSubmit(event, dispatch, router)
        }}>
        <Dialog.Title
          as="h3"
          className="text-base font-semibold leading-6 text-gray-900">
          ご予約内容
        </Dialog.Title>

        <input
          type="hidden"
          name="start"
          value={selectedTime.start.toISOString()}
        />
        <input
          type="hidden"
          name="end"
          value={selectedTime.end.toISOString()}
        />
        <input type="hidden" name="duration" value={duration} />
        <input type="hidden" name="timeZone" value={timeZone} />

        <div className="border-l-4 border-l-accent-200 bg-accent-50/30 p-3 mt-3 mb-4 rounded-md">
          <p className="text-sm md:text-base font-semibold text-accent-800">
            {dateString}
          </p>
          <p className="text-xs md:text-sm">
            {startString} - {endString} : {duration_name} / {duration}分
          </p>
        </div>

        <div className="flex flex-col space-y-4">
          <div className="isolate -space-y-px rounded-md shadow-sm">
            <div className="relative rounded-md rounded-b-none px-3 pt-2.5 pb-1.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-accent-600">
              <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-900">
                お名前
              </label>
              <input
                aria-label="Name"
                type="text"
                autoCapitalize="words"
                autoComplete="name"
                required
                aria-required
                name="name"
                id="name"
                className="block w-full border-0 p-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="おなまえ／ニックネーム"
              />
            </div>
            <div className="relative rounded-t-none px-3 pt-2.5 pb-1.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-accent-600">
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-900">
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
            <div className="relative rounded-md rounded-t-none px-3 pt-2.5 pb-1.5 ring-1 ring-inset ring-gray-300 focus-within:z-10 focus-within:ring-2 focus-within:ring-accent-600">
              <label
                htmlFor="text"
                className="block text-xs font-medium text-gray-900">
                メッセージ
              </label>
              <textarea
                className="w-full block text-xs font-medium text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                aria-label="Text"
                name="messageText"
                id="messageText"
                placeholder="お伝えしたいことがあれば、ご記入下さい。"
              />
            </div>
          </div>
          <div className="block">
            <p className="text-sm font-medium">お打ち合わせ方法</p>
            <fieldset className="mt-2">
              <div className="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-4">
                {locations.map((location) => (
                  <div key={location.value} className="flex items-center">
                    <input
                      id={location.value}
                      aria-label={location.name}
                      name="location"
                      type="radio"
                      value={location.value}
                      defaultChecked={location.value === locations[0].value}
                      className="h-4 w-4 border-gray-300 text-accent-600 focus:ring-accent-600"
                    />
                    <label
                      htmlFor={location.value}
                      className="ml-1.5 block text-sm leading-6 text-gray-800">
                      {location.name}
                    </label>
                  </div>
                ))}
              </div>
            </fieldset>
          </div>
        </div>
        {modal === "error" && (
          <div className="bg-red-50 text-red-600">
            リクエストにエラーがありました。時間をおいてもう一度お試し下さい。
          </div>
        )}
        <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
          <button
            type="submit"
            disabled={modal === "busy"}
            className="inline-flex w-full justify-center rounded-md bg-red-800 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 sm:ml-3 sm:w-auto disabled:opacity-50">
            {modal === "busy" ? (
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
              dispatch({ type: "SET_MODAL", payload: "closed" })
            }}>
            キャンセル
          </button>
        </div>
      </form>
    </Modal>
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
  dispatch: Dispatch<ActionType>,
  router: any // AppRouterInstance
) {
  event.preventDefault()

  dispatch({ type: "SET_MODAL", payload: "busy" })
  fetch(`/api/request`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(Object.fromEntries(new FormData(event.currentTarget))),
  })
    .then(async (data) => {
      const json = await data.json()
      if (json.success) {
        router.push("/confirmation")
      } else {
        dispatch({ type: "SET_MODAL", payload: "error" })
      }
    })
    .catch(() => {
      dispatch({ type: "SET_MODAL", payload: "error" })
    })
}
