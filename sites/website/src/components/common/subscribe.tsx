"use client"
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
      className={`flex mx-auto w-fit rounded-full whitespace-nowrap text-xs py-2 px-3 duration-300 ease-in-out font-bold text-darkgold bg-gold hover:bg-blackho hover:text-gold hover:scale-110 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
