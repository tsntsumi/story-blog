"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import AcceptOffer from "@/components/common/acceptoffer"
import Subscribe from "@/components/common/subscribe"
import { gtag_report_conversion } from "@/lib/googleTag"
import SlideIn from "@/components/common/slidein"

const SCHEDULE_TO_CALL: string = "https://meet.alizza-ideal.com"

const Hero = () => {
  return (
    <>
      <section id="first-view" className="overflow-hidden">
        <div className="flex flex-col w-full m-0 p-0 bg-sky-950">
          <h1 className="h4 text-sm md:text-2xl text-justify font-medium rounded-full p-4 mt-2 text-btngold">
            コーチ・ヒーラー・治療家・セラピストが、より多くの人に貢献するための集客の仕組み
          </h1>
          <Image
            src="/images/hero/jumping.jpg"
            width={1366}
            height={382}
            alt="Jumping happy kids"
            className="w-full object-fill hidden md:block"
          />
          <Image
            src="/images/hero/jumping-6kids.jpg"
            width={1168}
            height={382}
            alt="Jumping happy kids"
            className="w-full object-fill hidden"
          />
          <Image
            src="/images/hero/jumping-5kids.jpg"
            width={923}
            height={382}
            alt="Jumping happy kids"
            className="w-full object-fill block md:hidden"
          />
          <h2 className="flex flex-wrap items-center justify-center mb-5 mx-4 text-lg md:text-2xl font-bold text-btngold">
            <div className="text-base">この困難な時代に、</div>
            <div className="inline-block text-base">他人の役に立とうとする</div>
            <div className="inline-block text-base">
              あなたの素晴らしいサービスが、
            </div>
            <div className="inline-block text-base">
              悩めるクライアントに見つけられ、
            </div>
            <div className="inline-block text-base">選ばれ続ける</div>
            <div className="inline flex flex-wrap w-full items-center justify-center">
              <span>ネット集客　</span>
              <span className="text-5xl">導線確保</span>
              <span>　の仕組み</span>
            </div>
            <div className="inline whitespace-nowrap">限定公開中</div>
          </h2>
        </div>
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
                    title: "funnel-succeeded-magazin-2024-03",
                    url: "gs://story-made.appspot.com/videos/how-to-find-work-in-passionated-720p.mp4"
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
        <div className="my-4">
          <Subscribe
            onClick={() => gtag_report_conversion(SCHEDULE_TO_CALL)}
            className="text-xs md:text-sm py-4 px-6"
          >
            <Link href={SCHEDULE_TO_CALL}>無料相談を予約する</Link>
          </Subscribe>
        </div>
      </section>
    </>
  )
}

export default Hero
