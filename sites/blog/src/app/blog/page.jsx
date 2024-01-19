"use client"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Subscribe from "@/components/Common/Subscribe"
import { Categories } from "@/collections/categories"
import Head from "next/head"

// List all blog items
export default function Page() {
  const description = `Alizza Ideal では、ネット上で「知られる」をテーマにしたブログを発信しています。`
  return (
    <>
      <Head>
        <title>ブログ・カテゴリー: Alizza Ideal</title>
        <meta name="description" content={description} key="desc" />
      </Head>
      <div className="py-20 lg:pt-35 md:w-2/3 xl:w-1/2 mx-auto">
        <div className="flex w-full flex-col gap-8 md:flex-row md:justify-between md:gap-0">
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
            className="animate_top md:w-1/2"
          >
            <h4 className="mb-9 text-itemtitle2 font-medium text-black dark:text-white">
              Blog Categories
            </h4>

            <ul>
              {Object.entries(Categories).map(([key, c]) => (
                <li>
                  <Link
                    href={`/blog/${key}`}
                    className="mb-3 inline-block hover:text-primary"
                  >
                    <span className="text-base font-bold">{c.name}</span> <br />
                    <span className="text-sm font-light text-slate-500">
                      {c.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </>
  )
}
