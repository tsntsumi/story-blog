import React from "react"
import Image from "@/components/common/media"
import Link from "next/link"
import SlideIn from "@/components/common/slidein"
import AcceptOffer from "@/components/common/acceptoffer"
import { motion } from "framer-motion"

const Magnet = () => {
  const offerimage =
    "gs://story-made.appspot.com/images/alizzas-sales-funnel-newsletter.gif"
  return (
    <>
      {/* <!-- ===== Magnet Start ===== --> */}
      <section
        id="lead-magnet"
        className="overflow-hidden px-4 md:px-8 2xl:px-0"
      >
        <div className="flex flex-nowrap my-4 gap-4 text-justify block">
          <div className="w-1/2 md:w-3/4">
            <SlideIn className="animate_top">
              <h3 className="mt-0 pt-12 pb-8">
                集客成功事例集（導線を確保するアイデア集）
              </h3>
            </SlideIn>
            <SlideIn className="animate_left">
              <div className="xl:columns-2 gap-8">
                <h4>導線を確保して、集客に成功した10件の事例集を確認しよう</h4>
                <p>あなたは、成功する集客のアイデアをいくつ知ってますか？</p>
                <p>
                  導線を確保して、集客に成功した成功事例集を入手して集客アイデアを知ってください。
                  あなたの知らない、理想のクライアントに出会うチャンスを増やす方法を学べます。
                </p>
              </div>
              <div className="my-4 w-full hidden md:block">
                <AcceptOffer
                  offer={{
                    title: "集客導線確保成功事例集",
                    url: offerimage,
                    category: `導線確保成功事例集`
                  }}
                >
                  今すぐ読む
                </AcceptOffer>
              </div>
            </SlideIn>
          </div>
          <div className="w-1/2 xl:w-1/3 md:p-8 mt-8">
            <SlideIn className="animate_right">
              <Image
                src={offerimage}
                alt="集客導線確保成功事例集"
                width={596}
                height={842}
                className="object-cover w-full rounded-xl"
              />
            </SlideIn>
          </div>
        </div>
        <div className="mx-auto"></div>
      </section>
      {/* <!-- ===== Magnet End ===== --> */}
    </>
  )
}

export default Magnet
