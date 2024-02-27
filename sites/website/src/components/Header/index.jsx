"use client"
import Image from "next/image"
import Link from "next/link"
import Script from "next/script"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import Navigation from "@/components/common/navigation"

import ThemeToggler from "./ThemeToggler"
import menuData from "@/lib/collections/menuData"

const Logo = () => {
  return (
    <div className="w-1/5 md:1/4">
      <a href="/">
        <Image
          src="/images/logo/logo-dark.svg"
          alt="logo"
          width={256}
          height={64}
          className="hidden dark:block"
        />
        <Image
          src="/images/logo/logo-light.svg"
          alt="logo"
          width={256}
          height={64}
          className="block dark:hidden"
        />
      </a>
    </div>
  )
}

const Header = () => {
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
        className={`fixed left-0 top-0 z-99999 w-full py-2 ${
          stickyMenu
            ? "bg-white !py-4 shadow transition duration-100 dark:bg-black"
            : ""
        }`}
      >
        <div className="relative mx-auto max-c-1390 items-center justify-around px-4 md:px-8 xl:flex 2xl:px-0">
          <div
            className={`flex w-full items-center justify-around gap-4 text-sm mx-4`}
          >
            <Logo />
            <Navigation menu={menuData} />
            <div className="flex flex-nowrap gap-2 items-start">
              <ThemeToggler />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

// w-full delay-300

export default Header
