import React from "react"
import { Feature } from "@/lib/types/feature"
import Image from "next/image"
import { motion } from "framer-motion"

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { image, title, width, height, description } = feature

  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -10
          },

          visible: {
            opacity: 1,
            y: 0
          }
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="animate_top z-40 rounded-lg border border-white bg-white p-0 shadow-solid-3 transition-all hover:shadow-solid-4 dark:border-strokedark dark:bg-blacksection dark:hover:bg-hoverdark"
      >
        <div className="relative flex min-h-64 w-full items-center justify-center bg-transparent">
          <Image
            src={image}
            width={width}
            height={height}
            alt="title"
            className="w-full object-cover rounded-t-lg"
          />
        </div>
        <div className="p-7.5 xl:p-12.5">
          <h4 className="mb-5 mt-7.5 text-xl font-semibold text-black dark:text-white xl:text-itemtitle">
            {title}
          </h4>
          <div className="text-justify">
            <>{description}</>
          </div>
        </div>
      </motion.div>
    </>
  )
}

export default SingleFeature
