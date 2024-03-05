import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideIn from "@/components/common/slidein"
import AcceptOffer from "@/components/common/acceptoffer"
import { motion } from "framer-motion"

const Magnet = () => {
  return (
    <>
      {/* <!-- ===== Magnet Start ===== --> */}
      <section
        id="lead-magnet"
        className="overflow-hidden pt-24 px-4 md:px-8 2xl:px-0"
      >
        <div className="flex flex-nowrap my-4 gap-4 text-justify block">
          <div className="w-1/2 md:w-3/4">
            <SlideIn className="animate_left">
              <h3 className="mt-0 pt-0">
                集客導線を確保して成約に成功した事例集を無料進呈
              </h3>
              <div className="md:columns-2 gap-8">
                <p className="indent-0">もしあなたが</p>
                <p>まだ、理想のクライアントに出会っていないなら、</p>
                <p>もっとたくさんのクライアントに貢献したいなら、</p>
                <p>より多くの貢献を通じてあなた自身も成長したいなら、</p>
                <p>そして、ご自身のビジネスも成長させていきたいなら、</p>
                <p>
                  あなたにピッタリあった集客の導線を確保してください。
                  より多くのクライアント候補、見込み客に出会うことができるようになります。
                </p>
                <p>
                  多くの人が集まれば、その中に真にあなたからのアドバイスを
                  求めている人がいるはずです。あなたの知識とスキルを探している人たちです。
                </p>
                <p>
                  そして困難な状況にある人であればあるほど、 あなたの
                  <b>専門知識</b>だけでなく、
                  <b>教科書</b>に乗っているような一般常識ではなく、
                  あなたがこれまでやってきた経験、 困難を乗り越えてきた特別な
                  <b>知恵</b>を渇望しています。
                </p>
                <p>
                  今すぐ、集客導線を確保して成約に成功した事例集を
                  無料でダウンロードして、あなたの理想のクライアントを見つけられる確信を得てください。
                </p>
                <p>
                  自信のなさに怯えないでください。
                  自信がないから行動できないと言い訳していいのは、中学生までです。
                </p>
                <p>
                  起業したからには、自信がなくても確信があれば十分です。確信があれば覚悟を決められます。
                </p>
              </div>
              <div className="my-4 w-full hidden md:block">
                <AcceptOffer
                  offer={{
                    title: "集客導線確保成功事例集",
                    url: "",
                    category: `導線確保成功事例集`
                  }}
                >
                  今すぐダウンロードする
                </AcceptOffer>
              </div>
            </SlideIn>
          </div>
          <div className="w-1/2 md:w-1/4 md:p-8">
            <SlideIn className="animate_right">
              <Image
                src="/images/hero/offer-ebook.png"
                alt="集客導線確保成功事例集 2024年03月号"
                width={596}
                height={842}
                className="object-cover w-full"
              />
            </SlideIn>
          </div>
        </div>
        <div className="my-4 w-full block md:hidden">
          <AcceptOffer
            offer={{
              title: "funnel-succeeded-magazin-2024-03",
              url: "gs://story-made.appspot.com/videos/how-to-find-work-in-passionated-720p.mp4"
            }}
          >
            今すぐダウンロードする
          </AcceptOffer>
        </div>
      </section>
      {/* <!-- ===== Magnet End ===== --> */}
    </>
  )
}

export default Magnet
