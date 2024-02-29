"use client"
import React from "react"
import Image from "next/image"
import SlideIn from "@/components/common/slidein"

const Problem = () => {
  return (
    <>
      <section id="problem" className="pt-20 lg:pt-25 xl:pt-30">
        <SlideIn className="animate_left">
          <div className="md:columns-2 xl:columns-3 md:mx-auto">
            <h1>あなたは、こんな停滞感がありませんか？</h1>
            <ul className="ml-8 list-outside list-image-[url(/images/icon/list-style-check.png)]">
              <li>
                色々学んでいるのに思うような成果が得られなくて焦りを感じる
              </li>
              <li>
                これまでうまく行ってたやり方がうまく行かなくなって限界を感じてる
              </li>
              <li>集客できているのに、なぜ成約できないのかわからない</li>
              <li>
                クライアントにもっと幸せになって欲しい一心で技術を磨いているけど、理想のクライアントが見つからない
              </li>
              <li>
                家族の反対を押し切って起業したけど、最近家族との会話がなくなってきて、後悔し始めている
              </li>
              <li>
                起業するしか道がなかったから、準備する時間がなくて、いま何をすればいいかわからない
              </li>
              <li>
                いくつもの起業塾、経営塾に参加したけど、自分だけうまくいっていないと感じる
              </li>
            </ul>
            <p>
              もしあなたが、そのように感じていているけど、どうしても最初に目指したゴールへたどり着きたいと覚悟を決めているなら・・・。
            </p>
            <p>
              もしあなたが、心からクライアントに貢献して幸せになって欲しいと考えているなら・・・。
            </p>
            <p>あなたは正しい場所にたどり着きました。・・・なぜか？</p>
            <p>説明させてください。</p>
          </div>
        </SlideIn>
      </section>
    </>
  )
}

export default Problem
