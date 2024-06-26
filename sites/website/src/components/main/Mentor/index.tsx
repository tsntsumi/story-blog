"use client"
import { Image, Video } from "@/components/Assets/media"
import NextImage from "next/image"
import NextLink from "next/link"
import Link from "@/components/Assets/link"
import { UpperArrow, RightArrow } from "@/components/Assets/link"
import { useState } from "react"
import AcceptOffer from "@/components/Assets/acceptoffer"
import Subscribe from "@/components/main/Assets/join"
import SlideIn from "@/components/Assets/slidein"
import GoOffer from "@/components/main/Assets/go-offer"

export default function Mentor() {
  const workshopIsVisible: boolean = false
  const workshopVisiblity: string = workshopIsVisible ? "" : "hidden"
  const columnWidth: string = workshopIsVisible ? "md:w-2/5" : "md:w-full"
  return (
    <>
      <section id="first-view" className="overflow-hidden mb-8">
        <div className="w-full mx-auto py-8 border-y-8 border-ai-yellow">
          <h2 className="mx-4">メンターに出会う</h2>
          <div className="mx-4 text-justify">
            <div className="w-1/2 pl-4 pb-4 float-right">
              <Image
                src="gs://story-made.appspot.com/images/hero/avatar.png"
                alt="Avatar"
                width="384"
                height="384"
                className="object-cover rounded-xl"
              />
            </div>
            <p>
              Alizza Ideal
              の創設者・堤紀久夫は、多くの起業家や経営者がセールに苦手意識があることに気づきました。
              そこで、セールスの抵抗をなくす「ストーリー・セールス・フレームワーク」を
              学べるようにしました。
              それが、「ストーリー・セールス完全習得講座」です。
            </p>
            <p className="text-xs md:text-sm ml-4">
              ストーリー・セールス・フレームワークは、すでに米国で実績のある、
              ドナルド・ミラー氏の「
              <NextLink
                href="https://amzn.to/3RcULh3"
                className="underline text-sky-500"
              >
                Building a StoryBrand
              </NextLink>
              」と、 ラッセル・ブランソン氏の「
              <NextLink
                href="https://amzn.to/3VqHX92"
                className="underline text-sky-500"
              >
                Expert Secrets
              </NextLink>
              」、および「
              <NextLink
                href="https://amzn.to/3wRgyUB"
                className="underline text-sky-500"
              >
                Dotcom Secrets
              </NextLink>
              」を 組み合わせて、日本向けに改良したものです。
            </p>
            <h3>わたしも、セールスをするのに抵抗がありました</h3>
            <p>
              堤は、個人事業主として、事業を継続させるためには、セールスがいかに重要で、
              どんなにストレスが多いものなのか身を持って知っています。
              また、セールスで失敗した経験も何度となくあります。
            </p>
            <p>
              しかし、お客さまをストーリーの主人公にし、
              お客さまの人生におけるメンターになるということを学んでから、
              セールスにおけるストレスがなくなり、
              セールスがずっと楽になりました。
            </p>
            <div className="bg-ai-blue rounded-xl p-2 my-4 text-white">
              <p>
                そこで、わたしの経験を同じ思いをしている人たちとシェアしようと思いました。
              </p>
              <p>
                そして作ったのが、あなたがセールスについて思い込んでいることを完全に書き換える
                「『お客さまが主人公』のストーリー・セールス完全習得講座」です。
              </p>
            </div>
            <p>
              お客さまの生活を、より良くする商品をお持ちですか？
              あなたの商品は、お客さまの人生をもっとよくできると確信しているますか？
              だったら、セールスに不安を感じる必要はありません。
            </p>
            <p>
              「『お客さまが主人公』のストーリー・セールス・フレームワーク」は、
              商品の機能や品質を自慢したり、内容を盛ったりすることはありません。
              お客さまを、抱えている問題が解決されるストーリーへと、
              招き入れることに重点をおいています。
            </p>
            <p>
              「『お客さまが主人公』のストーリー・セールス・フレームワーク」を
              マスターすると、お客さまとどのようにコミュニケーションをとり、
              どうやって信頼関係を築き、
              どんなに多くの成約が決まるのか理解できるようになります。
            </p>
          </div>
          <div className="mx-12 text-sm border-4 border-ai-gold rounded-lg p-4 bg-blue-50 text-ai-gold">
            LINE公式アカウントでは、ストーリー・セールス・フレームワークの紹介や、
            セールスや集客の役に立つ情報をお伝えしています。
            ぜひ、お友達になってください。
          </div>
          <Subscribe>お友だちになる</Subscribe>
          <div className="mx-12 mb-4 border-4 border-ai-gold rounded-lg p-4 bg-blue-50 text-ai-gold text-sm">
            この公式サイトでは、集客の役に立つ成功事例集をプレゼントしています。
            セールスする見込み客がなかなか集らないなら、ぜひダウンロードして読んでみてください。
          </div>
          <GoOffer />
        </div>
      </section>
    </>
  )
}
