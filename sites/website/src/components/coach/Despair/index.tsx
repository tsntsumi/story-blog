import Link from "next/link"
import { Image, Video } from "@/components/Assets/media"
import SlideIn from "@/components/Assets/slidein"
import Schedule from "@/components/coach/Assets/scheduletocall"

export default function Despair() {
  return (
    <>
      <section id="despair" className="p-0 m-0 mb-10">
        <div className="py-8 bg-black text-white">
          <div className="mx-8 mb-8 text-justify">
            <h2 className="text-white">
              ほとんどのコーチは、クライアントを指導するのは得意です。
              しかし、クライアントを集客し、契約し、十分な報酬も受け取れる
              コーチング・ビジネスの構築は苦手です
            </h2>
          </div>
          <SlideIn className="animate_top">
            <div className="h2 text-xl text-justify sm:text-3xl mx-4 sm:mx-10 mb-8 px-6 sm:px-10 py-4 rounded-full border-8 border-ai-yellow bg-ai-blue text-ai-yellow">
              『アイデアル・コーチング』ビジネス・アカデミーに参加すると、
              あなたが思い描いていたとおりのコーチングビジネスを構築できます
            </div>
          </SlideIn>
          <div className="mx-8 mb-8 text-justify">
            <p>
              『アイデアル・コーチング』ビジネス・アカデミーに参加すると、
              ８つのステップで、コーチング・ビジネスの構築を始めることができます。
              と同時に、構築から成功までの支援も受けることができます。
            </p>
            <p>
              毎月の少人数グループ・コーチングにも参加できます。
              同じ志をもつ仲間たちのいるコーチ・コミュニティーにも参加できます。
            </p>
            <p>ビデオ講座は、好きな時に好きな場所で視聴することができます。</p>
            <p>
              そして、クライアントに成果を出させるための資料、
              集客するためのWebサイトワイヤーフレームなど、
              コーチング・ビジネスの構築と成長に必要な、
              すべてのものが用意されています。
            </p>
          </div>
          <div className="mt-8">
            <div className="text-center text-sm">
              あなたのコーチング起業の課題を発見する
            </div>
            <Schedule />
          </div>
        </div>
      </section>
    </>
  )
}
