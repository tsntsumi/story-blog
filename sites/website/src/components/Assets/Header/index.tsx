"use client"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Navigation from "./navigation"
import type { Menu } from "@/lib/types/menu"

const Logo = () => {
  return (
    <div className="p-0 m-0">
      <a href="/">
        <Image
          src="/images/logo/logo-square.svg"
          alt="logo"
          width={64}
          height={64}
          className="block object-fill"
        />
      </a>
    </div>
  )
}

const Header = ({ menu }: { menu: Menu[] }) => {
  const [stickyMenu, setStickyMenu] = useState(false)

  // Sticky menu
  const handleStickyMenu = () => {
    if (window.scrollY >= 80) {
      setStickyMenu(true)
    } else {
      setStickyMenu(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleStickyMenu)
  })

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-99999 w-full py-0 ${
          stickyMenu
            ? "bg-white shadow transition duration-100 dark:bg-black"
            : ""
        }`}
      >
        <div className="relative flex flex-nowarp w-full items-center justify-around gap-2 px-0 py-1 md:px-8">
          <Logo />
          <Navigation menu={menu} />
        </div>
      </header>
    </>
  )
}

// w-full delay-300

export default Header
