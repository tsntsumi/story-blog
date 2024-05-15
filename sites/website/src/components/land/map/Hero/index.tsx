"use client"
import { Image, Video } from "@/components/Assets/media"
import Link from "next/link"
import SlideIn from "@/components/Assets/slidein"
import Schedule from "@/components/land/map/Assets/Schedule"
import CtaButton from "@/components/land/Assets/Cta/Button"

const Hero = () => {
  return (
    <>
      <section id="first-view" className="overflow-hidden m-0 p-0">
        <div className="p-1 px-4 text-xs font-bold text-gold bg-formal-base">
          地方のお店に今知ってほしい・・・。
          食べログ、ぐるなび、ホットペッパーに掲載しても集客できないとお悩みなら・・・
        </div>
        <div className="relative w-full pb-4">
          <div className="w-full border-t-formal-accent border-t-2">
            <Image
              src="gs://story-made.appspot.com/images/land/map/map-shukyaku-fv_port.png"
              alt="Googleマップ集客完全攻略術　オンライン講座　LP"
              width="1024"
              height="1447"
              priority={true}
              className="object-cover w-full h-full"
            />
            <div className="absolute left-0 bottom-0 text-[8pt] leading-tight">
              <Schedule />
              <div className="text-xs ml-4 text-black">
                <span className="text-sm font-bold">参加費</span>
                <span>
                  ： <span className="text-base font-bold">10,000</span>
                </span>
                <span className="text-[7pt]">円(＋税)</span>
              </div>
            </div>
          </div>
        </div>
        <SlideIn className="animate_bottom">
          <div className="pb-4">
            <CtaButton>
              <Link href="/map/menu">今すぐ席を確保する</Link>
            </CtaButton>
          </div>
        </SlideIn>
      </section>
    </>
  )
}

export default Hero
