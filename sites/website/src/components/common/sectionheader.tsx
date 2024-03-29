"use client"
import React from "react"
import { motion } from "framer-motion"

type HeaderInfo = {
  title: string
  subtitle: string | React.JSX.Element
  description: string | React.JSX.Element
}

const SectionHeader = ({ headerInfo }: { headerInfo: HeaderInfo }) => {
  const { title, subtitle, description } = headerInfo

  return (
    <>
      {/* <!-- Section Title Start --> */}
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20
          },

          visible: {
            opacity: 1,
            y: 0
          }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top mx-auto text-center"
      >
        {title && (
          <div className="py-2 mb-6 inline-block rounded-full bg-zumthor px-4.5 dark:border dark:border-strokedark dark:bg-blacksection">
            <span className="text-sectiontitle font-medium text-black dark:text-white">
              {title}
            </span>
          </div>
        )}
        {subtitle && (
          <h1 className="mx-auto mb-4 text-3xl text-justify font-bold text-black dark:text-white md:w-fit xl:w-2/3 xl:text-sectiontitle3">
            <>{subtitle}</>
          </h1>
        )}
        {description && (
          <div className="mx-auto md:w-4/5 lg:w-3/5 xl:w-[46%] text-justify">
            <>{description}</>
          </div>
        )}
      </motion.div>
      {/* <!-- Section Title End --> */}
    </>
  )
}

export default SectionHeader
