"use client"
import Image from "next/image"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Outline from "@/components/Outline"
import Problem from "@/components/Problem"
import Solutions from "@/components/Solutions"
import Plan from "@/components/Plan"
import About from "@/components/About"
import CTA from "@/components/CTA"
import FAQ from "@/components/FAQ"
import LatestBlogs from "@/components/Blogs/Latests"

import firebaseConfig from "@/firebase-config"

export default function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Outline />
      <Problem />
      <Solutions />
      <Plan />
      <FAQ />
      <Footer />
    </>
  )
}
