"use client"
import React from "react"
import Schedule from "@/components/coach/Assets/scheduletocall"

export default function Solution() {
  return (
    <>
      <section id="solution" className="p-0 m-0 mb-4">
        <div className="my-10 max-w-c-1315 text-justify py-0">
          <div className="bg-gray-100 text-ai-blue rounded-3xl p-4 mx-4">
            <h2 className="p-4 text-justify bg-ai-yellow text-ai-blue rounded-3xl border-4 border-ai-blue">
              成長し続けるコーチング・ビジネスを構築する方法とは？
            </h2>
            <div className="mx-0">
              <p className="w-full">
                あなたは、豊富な経験と専門知識と、それを活かす知恵を持っています。
                しかし、どうすればそれらを使って成長し続け、
                しかも利益が残るコーチングビジネスを構築すればいいのでしょうか？
              </p>
              <p className="w-full mt-8">
                アリザ・アイデアルでは、あなたが目標とするビジネスを構築する方法を学べる
                アイデアル・コーチング・ビジネス・アカデミーを開催しています。
              </p>
            </div>
          </div>
          <div className="p-4 mx-2">
            <h2>
              アイデアル・コーチング・ビジネス・アカデミーが提供するのは
              <div className="p-4">
                あなたがコーチング起業で成功するために必要なもの全てです
              </div>
            </h2>
            <div className="mt-4 mb-8">
              <div className="text-center text-sm">
                あなたのコーチング起業の課題を発見する
              </div>
              <Schedule />
            </div>
            <div className="p-4 bg-slate-100 text-black text-justify rounded-3xl">
              <h3 className="ml-4 -indent-4">1. 本来のマーケティング</h3>
              <p>
                まず、もともとのマーケティングを学んでください。
                あなたは理想のクライアントと出会えるようになります。
              </p>
              <p>
                理想のクライアントとは、あなたが本来コーチングしたいと想像していたクライアントです。
              </p>
              <p>
                アリザ・アイデアルがお伝えするマーケティングは、
                自分の利益だけ最大化することを目標としません。
                あくまでもクライアントの人生が変わるほどの、最大の成果を目指します。
              </p>
              <p>
                あなたからコーチングを受けたクライアントは、
                大きな価値を受け取れるようになります。
                あなたのクライアントは、あなたが授ける知恵のことを大好きになります。
              </p>
            </div>
            <div className="p-4 mt-8 bg-gray-100 text-black text-justify rounded-3xl">
              <h3 className="ml-4 -indent-4">
                2. 起業前後のメンタルサポートと家族・パートナーへの理解促進支援
              </h3>
              <p>
                起業後の孤独感、不安感、葛藤などのメンタルケア。
                特に起業に伴う収入減や時間的な制約など、家族・パートナーへの影響を理解してもらうためのサポート。
              </p>
            </div>
            <div className="p-4 mt-8 bg-gray-100 text-black text-justify rounded-3xl">
              <h3 className="ml-6 -indent-6">
                3.
                コーチング・ビジネスの仕組みと自動化を行う、CRMソフトを１年間無料で提供
              </h3>
              <p>
                コーチング・ビジネスの仕組みと自動化の機能を備えた、定評のある企業の
                CRMの一年間分のサブスクリプションを、アリザ・アイデアルがあなたに代わって支払います。
                あなた向けにカスタマイズしてありますので、時間と労力が大幅に節約でき、
                コーチングに集中できます。
              </p>
              <p>
                コーチング・ビジネスを行うあなた向けにカスタマイズしたこのCRMソフトの使い方や、
                トラブルのサポートも、アリザ・アイデアルが窓口になって行います。
                安心してご利用いただけます。
              </p>
            </div>
            <div className="p-4 mt-8 bg-gray-100 text-black text-justify rounded-3xl">
              <h3 className="ml-6 -indent-6">4. コーチたちのコミュニティー</h3>
              <p>
                同じ志を持つ、他のコーチたちとの親交を深め、楽しく交流できる、
                非公開の『アイデアル・コーチング』コミュニティーにアクセスできます。
              </p>
              <p>
                コーチング・ビジネスを１人で構築していく不安はなくなります。
              </p>
            </div>
            <div className="p-4 mt-8 bg-gray-100 text-black text-justify rounded-3xl">
              <h3 className="ml-6 -indent-6">5. 年に一度の海外旅行ご招待</h3>
              <p>
                コーチたちのコミュニティーで有志を募り、私たちが移住しているフィリピン共和国にご招待。
                私たちが直接、現地の人達しかしらないような場所へいざない、
                安心・安全に楽しんでいただきます。
              </p>
              <p>（日本の法律の制限から、現地集合現地解散になります。）</p>
            </div>
            <div className="mt-4 mb-2">
              <div className="text-center text-sm">
                あなたのコーチング起業の課題を発見する
              </div>
              <Schedule />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
