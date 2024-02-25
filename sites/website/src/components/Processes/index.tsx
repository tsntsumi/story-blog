"use client"
import React from "react"
import processesData from "./processesData"
import SingleProcess from "./SingleProcess"
import SectionHeader from "../common/sectionheader"

const Process = () => {
  return (
    <>
      {/* <!-- ===== Processes Start ===== --> */}
      <section id="processes" className="pt-25">
        <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "まきせに来てからの流れ",
              subtitle: "こんな流れで、施術させていただきます",
              description: ``
            }}
          />
          {/* <!-- Section Title End --> */}

          <div className="mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5">
            {/* <!-- Processes item Start --> */}

            {processesData.map((process, key) => (
              <SingleProcess process={process} key={key} />
            ))}
            {/* <!-- Processes item End --> */}
          </div>
        </div>
      </section>

      {/* <!-- ===== Processes End ===== --> */}
    </>
  )
}

export default Process
