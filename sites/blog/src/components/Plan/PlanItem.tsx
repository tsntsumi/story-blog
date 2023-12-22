import React, { useRef, useEffect } from "react"
import Image from "next/image"
import { Plan } from "@/types/plan"
import { motion } from "framer-motion"

const PlanItem = ({ item }: { item: Plan }) => {
  const { image, href, name, content, imageLight, id } = item

  return (
    <>
      <motion.a
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
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        className="animate_left max-w-full w-full"
      >
        <div className="grid grid-cols-4 gap-4 mb-4 md:mx-24 xl:mx-36">
          <div className="rounded-l-xl border-2 p-2 text-right text-xl md:text-5xl">
            {name && <>{name}</>}
          </div>
          <div className="rounded-r-xl border-2 col-span-3 p-2 w-full">
            {content && <>{content}</>}
          </div>
        </div>
      </motion.a>
    </>
  )
}

export default PlanItem
