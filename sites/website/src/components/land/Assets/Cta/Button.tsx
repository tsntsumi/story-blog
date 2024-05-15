"use client"
import React from "react"
import Link from "next/link"

export default function Button({
  children = "今すぐ席を確保する"
}: {
  className?: string
  children: React.ReactChild
}): React.ReactNode {
  return (
    <div className="rounded-full mt-2 w-fit p-2 text-xs text-black border-2 border-red-800 bg-orange-500 mx-auto">
      {children}
    </div>
  )
}
