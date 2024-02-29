import Link from "next/link"
import React from "react"

export default function AcceptOffer({
  offer,
  children = "今すぐ受取る"
}: {
  offer: string
  children: React.ReactChild
}): React.ReactNode {
  const onSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-nowrap gap-4 my-4">
        <input
          type="email"
          name="email"
          placeholder="Emailアドレス"
          className="rounded-lg w-3/5 md:w-4/5 py-[0.25em]"
        />
        <input type="hidden" name="category" value="casestudy" />
        <button className="my-4 w-2/5 md:w-1/5 py-4 px-3 rounded-full whitespace-nowrap text-xs p-0 duration-300 ease-in-out text-btndarkgold bg-btngold hover:bg-blackho hover:text-btngold dark:bg-btngold dark:hover:bg-blackho">
          {children}
        </button>
      </div>
    </form>
  )
}
