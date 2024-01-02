"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import FAQItem from "./FAQItem"
import faqData from "./faqData"
import Join from "@/components/Join"

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState(1)

  const handleFaqToggle = (id: number) => {
    activeFaq === id ? setActiveFaq(0) : setActiveFaq(id)
  }

  return (
    <>
      {/* <!-- ===== FAQ Start ===== --> */}
      <section id="faq" className="home">
        <div className="relative mx-auto max-w-c-1235 px-4 md:px-8 xl:px-0">
          <div className="absolute -bottom-16 -z-1 h-full w-full">
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
            />
            <Image
              fill
              src="/images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="hidden dark:block"
            />
          </div>
          <div className="flex flex-wrap gap-8 md:flex-nowrap md:items-center xl:gap-32.5">
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
              className="animate_left md:w-2/5 lg:w-1/2"
            >
              <span className="font-medium uppercase text-black dark:text-white">
                わたしたちへのFAQ
              </span>
              <h2 className="relative mb-6 text-3xl font-bold text-black dark:text-white xl:text-hero">
                <ruby>
                  繰り返し<rp>(</rp>
                  <rt>Frequently</rt>
                  <rp>)</rp>
                </ruby>
                <ruby>
                  聞かれる<rp>(</rp>
                  <rt>Asked</rt>
                  <rp>)</rp>
                </ruby>
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg2 dark:before:bg-titlebgdark">
                  <ruby>
                    質問<rp>(</rp>
                    <rt>Question</rt>
                    <rp>)</rp>
                  </ruby>
                </span>
              </h2>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  x: 20
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
              className="animate_right md:w-3/5 lg:w-1/2"
            >
              <div className="rounded-lg bg-white shadow-solid-8 dark:border dark:border-strokedark dark:bg-blacksection">
                {faqData?.map((faq, key) => (
                  <FAQItem
                    key={key}
                    faqData={{ ...faq, activeFaq, handleFaqToggle }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
        <div className="mt-6">
          <Join>
            <div className="grid grid-cols-1 justify-center">
              <div className="text-sm mx-auto">集客の錬金術って何？</div>
              <div>知るためのスケジュールをおさえる</div>
            </div>
          </Join>
        </div>
      </section>
      {/* <!-- ===== FAQ End ===== --> */}
    </>
  )
}

export default FAQ