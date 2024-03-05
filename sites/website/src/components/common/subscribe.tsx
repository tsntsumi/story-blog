import Link from "next/link"
import React from "react"

export default function Subscribe({
  className = "justify-center",
  children = "お知らせを受取る",
  onClick = () => false
}: {
  className?: string
  children: React.ReactChild
  onClick?: () => boolean
}): React.ReactNode {
  return (
    <button
      className="flex mx-auto w-fit rounded-full whitespace-nowrap text-xs p-0 duration-300 ease-in-out text-darkgold bg-gold hover:bg-blackho hover:text-gold"
      onClick={onClick}
    >
      <span className={`py-2 px-3 rounded-full ${className}`}>{children}</span>
    </button>
  )
}
