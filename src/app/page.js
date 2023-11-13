import Image from "next/image"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Brands from "@/components/Brands"
import Feature from "@/components/Features"
import About from "@/components/About"
import CTA from "@/components/CTA"
import LatestBlogs from "@/components/Blogs/Latests"

import firebaseConfig from "@/firebase-config"

export default async function Page() {
  return (
    <>
      <Header />
      <Hero />
      <Brands />
      <Feature />
      <About />
      <CTA />
      <LatestBlogs />
      <Footer />
    </>
  )
}
