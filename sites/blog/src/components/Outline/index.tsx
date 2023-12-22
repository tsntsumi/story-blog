"use client"
import React from "react"
import Image from "next/image"
import OutlineItem from "./OutlineItem"
import outlineData from "./outlineData"

const Outline = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section
        id="outline"
        className="home border border-x-0 border-y-stroke bg-alabaster dark:border-y-strokedark dark:bg-black"
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="h-full flex items-start justify-center gap-2 xl:gap-29">
            {outlineData?.map((outline, key) => (
              <OutlineItem outline={outline} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  )
}

export default Outline
