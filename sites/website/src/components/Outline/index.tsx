import React from "react"
import SingleOutline from "./SingleOutline"
import outlineData from "./outlineData"

export default function Outline() {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className="border border-x-0 border-y-stroke bg-orange-500 py-1 md:py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="h-full flex items-center justify-around gap-1 md:gap-7.5 xl:gap-29">
            {outlineData?.map((e, key) => (
              <SingleOutline brand={e} key={key} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  )
}
