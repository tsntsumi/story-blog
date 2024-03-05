"use client"
import React from "react"
import Link from "next/link"
import { useEffect, useState } from "react"
import type { Menu } from "@/lib/types/menu"

const Disclosure = (): React.ReactNode => (
  <span>
    <svg
      className="h-3 w-3 cursor-pointer fill-waterloo group-hover:fill-primary"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
    </svg>
  </span>
)

export default function Navigation({
  menu
}: {
  menu: Menu[]
}): React.ReactNode {
  const [dropped, setDropped] = useState(false)

  const SubmenuItems = ({ menu }: { menu: Menu[] }): React.ReactChild => {
    const transClass = dropped ? "flex" : "hidden"
    const onClick = () => {
      setDropped(false)
    }
    return (
      <>
        <div
          className={`absolute top-8 z-30 w-[250px] flex flex-col py-4 bg-darkgold text-gold rounded-md ${transClass}`}
        >
          {menu.map((m) => {
            const { id, title, path } = m
            return (
              <Link
                href={path || "#"}
                key={id}
                className="hover:bg-zinc-300 hover:text-zinc-500 px-4 py-1"
                onClick={onClick}
              >
                {title}
              </Link>
            )
          })}
        </div>
      </>
    )
  }

  const Submenu = ({ menu }: { menu: Menu }): React.ReactNode => {
    const onClick = () => {
      setDropped(!dropped)
    }
    const { title, submenu } = menu
    return (
      <div className="relative">
        <button
          onClick={onClick}
          className="flex flex-nowrap gap-2 items-center m-0 p-0 hover:text-primary hover:underline"
        >
          {title}
          <Disclosure />
        </button>
        <SubmenuItems menu={submenu} />
      </div>
    )
  }

  const MenuItem = ({ item }: { item: Menu }): React.ReactNode => {
    const { title, path, submenu } = item

    if (submenu) {
      return <Submenu menu={item} />
    }
    return (
      <Link
        className="flex m-0 p-0 h-[1.2em] items-center hover:text-primary hove:underline"
        href={path || "#"}
      >
        {title}
      </Link>
    )
  }

  /*
   * NAVIGATION ::= MENU...
   * MENU ::=
   */

  return (
    <div
      className={`flex flex-nowrap w-full gap-4 z-50 items-center justify-around m-0 p-0`}
    >
      {menu.map((m) => (
        <MenuItem key={m.id} item={m} />
      ))}
    </div>
  )
}
