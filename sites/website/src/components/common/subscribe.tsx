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
      className={`flex flex-wrap items-center rounded-full text-xs px-3 font-bold text-darkgold bg-gold hover:bg-blackho hover:text-gold hover:scale-110 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
