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
  const d = "animate_left" // default direction
  const c = className || d // default className
  const cls = (c.indexOf("animate_") < 0 && d) || c // actual className
  const x = cls.indexOf("animate_left") >= 0 ? -20 : 20
  return (
    <>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            x: x
          },

          visible: {
            opacity: 1,
            x: 0
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
