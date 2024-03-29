import React from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import {
  BookWithLineTalk,
  BookWithCalendar,
  BookWithPhoneCall
} from "@/components/common/book"

const Response = () => {
  return (
    <>
      {/* <!-- ===== CTA Start ===== --> */}
      <section
        id="call-to-action"
        className="overflow-hidden px-0 py-0 md:px-0 lg:py-25 xl:py-30 2xl:px-0"
      >
        <div className="mx-auto max-w-c-1390 rounded-lg bg-gradient-to-t from-[#F8F9FF] to-[#DEE7FF] px-0 py-0 dark:bg-blacksection dark:bg-gradient-to-t dark:from-transparent dark:to-transparent dark:stroke-strokedark md:px-0 xl:px-0 xl:py-0">
          <div className="flex flex-wrap gap-8 lg:flex-nowrap md:items-center md:justify-between md:gap-0">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: -20
                },

                visible: {
                  opacity: 1,
                  x: 0
                }
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_left w-full"
            >
              <div className="w-full relative">
                <Image
                  src="/images/features/makise-call-to-action.svg"
                  alt="予約して、まきせの整体を試してみる"
                  width="720"
                  height="512"
                  className="object-cover w-full"
                />
                <div className="absolute bottom-0 right-0 px-0 md:px-18 py-1 w-5/6">
                  <div className="flex flex-rows flex-nowrap justify-around items-center p-0 m-0">
                    <BookWithCalendar />
                    <BookWithPhoneCall />
                    <BookWithLineTalk />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <!-- ===== CTA End ===== --> */}
    </>
  )
}

export default Response
