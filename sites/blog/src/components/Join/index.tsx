"use client"
import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import Link from "next/link"

const Join = ({ children }) => {
  return (
    <>
      {/* <!-- ===== Join Start ===== --> */}
      <section
        id="join"
        className="home px-4 pb-6 md:px-8 lg:py-10 xl:py-10 2xl:px-0"
      >
        <div className="mx-auto">
          <div className="flex flex-wrap gap-5 items-center justify-center">
            <Link
              href="https://meet.alizza-ideal.com"
              className="flex rounded-full bg-black px-7.5 py-2 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
            >
              {children}
            </Link>
          </div>
        </div>
      </section>
      {/* <!-- ===== Join End ===== --> */}
    </>
  )
}

export default Join
