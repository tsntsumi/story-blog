import React, { useRef, useEffect } from "react"
import Image from "next/image"
import { Outline } from "@/types/outline"
import { motion } from "framer-motion"

const OutlineItem = ({ outline }: { outline: Outline }) => {
  const { image, href, name, content, imageLight, id } = outline

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
        className="animate_top z-40 max-w-full relative block min-h-18 w-1/3 max-w-[256px] xl:p-12.5 mx-auto"
      >
        <div>
          <div className="relative flex h-32 w-32 mb-8 items-center justify-center rounded-[4px] bg-transparent mx-auto">
            {image && (
              <Image
                className="block dark:hidden"
                src={image}
                alt={name}
                fill
              />
            )}
            {imageLight && (
              <Image
                className="hidden dark:block"
                src={imageLight}
                alt={name}
                fill
              />
            )}
          </div>
          {content && <div>{content}</div>}
        </div>
      </motion.a>
    </>
  )
}

export default OutlineItem
