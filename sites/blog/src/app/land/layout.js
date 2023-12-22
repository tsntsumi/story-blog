"use client"
import Footer from "./Footer"
import { ThemeProvider } from "next-themes"

import { Inter } from "next/font/google"
import "@/app/globals.css"

const inter = Inter({ subsets: ["latin"] })

import ToasterContext from "@/app/context/ToastContext"

export default function LandingPageLayout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}
