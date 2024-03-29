"use client"
import { motion } from "framer-motion"

type TransitionProp = {
  duration: number
  delay: number
}

export default function SlideIn({
  children,
  className = "animate_left",
  transition = { duration: 1.0, delay: 0.5 }
}: {
  children: React.ReactNode
  className: string
  transition?: TransitionProp | undefined
}): React.ReactNode {
  const mh = className.match(/\banimate_(left|right)\b/)
  const mv = className.match(/\banimate_(top|bottom)\b/)
  const cls = !mh && !mv ? className + " animate_left" : className
  const x = 20 * (!mh ? 0 : mh[0] === "animate_left" ? -1 : 1)
  const y = 20 * (!mv ? 0 : mv[0] === "animate_top" ? -1 : 1)
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: x,
            y: y
          },

          visible: {
            opacity: 1,
            x: 0,
            y: 0
          }
        }}
        initial="hidden"
        whileInView="visible"
        transition={transition}
        viewport={{ once: true }}
        className={cls}
      >
        {children}
      </motion.div>
    </>
  )
}
