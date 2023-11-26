"use client"
import React from "react"
import Image from "next/image"
import SectionHeader from "@/components/Common/SectionHeader"
import Join from "../Join"
import Link from "next/link"

const Feature = () => {
  return (
    <>
      {/* <!-- ===== Features Start ===== --> */}
      <section id="features" className="py-4 mx-2 md:mx-12 xl:mx-24">
        <div className="mx-2">
          <h2 className="mx-6 my-12 text-center text-bold text-base md:text-3xl">
            <div className="my-2">
              なぜ、資金ゼロ、知識ゼロ、HPすら持っていない店舗オーナーが
            </div>
            <div className="my-2">
              Google検索１位を実現し、圧倒的な集客を実現できたのか？
            </div>
            <div className="my-4">理由は３つあります。</div>
          </h2>
          <div className="mx-2 md:mx-12 mb-12 flex flex-nowrap gap-2 md:gap-10 items-stretch justify-between">
            <div className="bg-slate-300 text-black text-lg text-justify rounded-xl w-1/3 p-2 md:p-4">
              <h3 className="mb-2 text-sm md:text-xl text-center">理由１</h3>
              <h4 className="my-2 text-sm md:text-xl">
                １位表示されると段違いにクリック率が高くなるから
              </h4>
              <ul className="list-none p-0 mx-0 md:px-1 md:mx-1 my-2 text-xs md:text-xl text-center">
                <li className="mb-0 text-xs md:text-xl">１位…21.12%</li>
                <li className="mb-0 text-xs md:text-xl">２位…10.65%</li>
                <li className="mb-0 text-xs md:text-xl">３位… 7.57%</li>
              </ul>
              <div className="text-[9px] leading-[10px] md:text-xl">
                (Internet Marketing Ninjas社)
              </div>
              <ul className="px-1 mx-0 my-2 text-sm md:text-xl list-none text-center">
                <li className=" text-xs md:text-xl">１位と２位の差は約２倍</li>
                <li className=" text-xs md:text-xl">１位と３位の差は約３倍</li>
              </ul>
              <div className=" text-xs md:text-xl">
                このクリック率の違いがそのまま集客力の違いに現れます
              </div>
            </div>
            <div className="bg-slate-300 text-black text-justify text-xs md:text-xl text-center rounded-xl w-1/3 p-2 md:p-4">
              <h3 className="mb-2 text-sm md:text-xl text-center">理由２</h3>
              <h4 className="my-2 text-sm md:text-xl">
                Googleが今最も注力しているツールを導入しているから
              </h4>
              <p>
                Googleは、検索ユーザーに対してより価値のある情報を
                提供することに全力を尽くしています。
              </p>
              <p>
                そのため、ビジネスオーナーがより良い情報をより
                簡単に発信できるツールを無償で提供しています。
              </p>
              <p>
                そのGoogleが推奨するツールを利用するので、成果が出るのは当然といえます。
              </p>
            </div>
            <div className="bg-slate-300 text-black text-lg text-center rounded-xl w-1/3 p-2 md:p-4">
              <h3 className="mb-2 text-sm md:text-xl">理由３</h3>
              <h4 className="text-justify my-2 text-sm md:text-xl">
                ツールの使い方を正しく理解し、
                <span className="md:whitespace-nowrap"> そのとおりに</span>
                実践しているから
              </h4>
              <div className="text-justify text-xs md:text-xl">
                <p>
                  どんなに優れた道具であっても、正しい利用法を理解しなければ、よい成果を出すことはできません。
                </p>
                <p>
                  でも、正しい方法を知り、そのとおりに実践すれば、
                  ほぼ確実に成果を出すことができます。しかも、その方法は驚くほど簡単です。
                </p>
                <p>１日たった２，３分の作業でOKです。</p>
              </div>
            </div>
          </div>

          {/* <!-- Section Title Start --> */}
          <SectionHeader
            headerInfo={{
              title: "その秘訣は？",
              subtitle: (
                <div className="text-center md:mx-2 text-xl md:text-3xl">
                  <div> でも、どうやってやるの？</div>
                  <div>その方法はこのまま続きをご覧ください</div>
                </div>
              ),
              description: (
                <div className="w-fit mx-auto my-10">
                  <div className="relative">
                    <div className="bg-slate-200 rounded-full p-2 px-6 mb-4 w-fit">
                      <div className="text-sm md:text-xl text-bold">
                        地域密着でがんばる
                      </div>
                      <div className="text-sm md:text-xl text-bold">
                        店舗オーナーのための集客勉強会
                      </div>
                    </div>
                    <div className="flex flex-col rounded-full bg-orange-600 text-white text-lg md:text-3xl font-bold w-fit items-center justify-center w-[4.5rem] h-[4.5rem] md:w-[8rem] md:h-[8rem] absolute top-[0rem] md:top-[-2rem] right-[0rem]">
                      <div>参加費</div>
                      <div>無料</div>
                    </div>
                  </div>
                  <h1 className="mb-5 md:pr-16 text-xl md:text-3xl font-bold text-black dark:text-white xl:text-hero ">
                    あなたのお店をGoogle１位表示にして
                    <br />
                    <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                      新規客を大量に
                    </span>
                    集める方法
                  </h1>
                </div>
              )
            }}
          />
          <div className="md:w-1/2 mx-2 md:mx-auto text-justify">
            <h2 className="text-lg md:text-2xl">驚きの実績公開</h2>
            <ul className="list-outside my-1 bg-orange-100 rounded-xl p-4 px-8">
              <li className="text-sm md:text-xl">
                <div className="font-bold">
                  導入後１ヶ月で５０件のアクセス！
                </div>
                <div>２件の電話問い合わせ（印鑑・印章店）</div>
              </li>
              <li className="text-sm md:text-xl">
                <div className="font-bold">
                  導入３ヶ月ほどで毎週１件の電話問い合わせ！！
                </div>
                <div>産業用中古機器販売：１取引あたり単価数百万〜数千万円</div>
              </li>
              <li className="text-sm md:text-xl">
                <div className="font-bold">
                  導入後２１日間で３１回のアクセス！
                </div>
                <div>２件の問い合わせ（食品小売店）</div>
              </li>
            </ul>
          </div>

          <div className="w-full mt-4 md:w-[46em] mx-auto">
            <h3 className="my-12 mb-4">
              この勉強会であなたが得られる
              <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                ３つのメリット
              </span>
            </h3>
            <div className="flex flex-nowrap gap-1 items-center justify-between">
              <div className="flex flex-col rounded-full bg-orange-600 text-white text-xs md:text-xl font-bold w-fit items-center justify-center w-[7rem] h-[7rem] md:w-[14rem] md:h-[14rem] ">
                <div>1. コストゼロで</div>
                <div>受講日当日に</div>
                <div>施策を導入できる</div>
              </div>
              <div className="flex flex-col rounded-full bg-orange-600 text-white text-xs md:text-xl font-bold w-fit items-center justify-center  w-[7rem] h-[7rem] md:w-[14rem] md:h-[14rem]">
                <div>2. 割引なしで</div>
                <div>安定的に</div>
                <div>新規客が集まる</div>
              </div>
              <div className="flex flex-col rounded-full bg-orange-600 text-white text-xs md:text-xl font-bold w-fit items-center justify-center  w-[7rem] h-[7rem] md:w-[14rem] md:h-[14rem] ">
                <div>3. 高い確率で</div>
                <div>リピートに繋がる</div>
                <div>優良顧客が集まる</div>
              </div>
            </div>
            <h3 className="text-sm md:text-xl p-4 bg-slate-200 rounded-full mt-12">
              Q. なぜ、コストゼロ・業者不要なのにこんな成果が出るの？
            </h3>
            <p className="text-sm md:text-base">
              A. はい！理由は以下の３つ！！
            </p>
            <ul className="my-2">
              <li className="text-sm md:text-base">
                ネット業界最大手の起業が完全無償で提供しているサービスだから
              </li>
              <li className="text-sm md:text-base">
                その大手が研究した検索ユーザーの行動心理に基づいた手法だから
              </li>
              <li className="text-sm md:text-base">
                なのにマニアック過ぎて同じネット業界ですらほぼ知られていないから
              </li>
            </ul>
            <h3 className="text-sm md:text-xl p-4 bg-slate-200 rounded-full">
              Q. 導入することでのデメリットはありますか？
            </h3>
            <p className="text-sm md:text-base">
              A.
              はい！多くの事業者が知らないことが成功要因の１つなのに、あまりに導入が簡単すぎてライバルも参入しやすく、後発組になると効果が鈍ります！！
            </p>
            <h3 className="text-sm md:text-xl p-4 bg-slate-200 rounded-full">
              Q. どうして、そんな情報を無料で公開するんですか？
            </h3>
            <p className="text-sm md:text-base">
              A.
              はい！私の利便性のためです😁！より良いお店や会社が検索上位に表示されないと、地元の水戸市に住む私としては非常に不便だからです！！
            </p>
            <div>
              <Image
                src="/images/user/avatar.png"
                width={90}
                height={90}
                alt="avatar"
                className="float-right ml-4"
              />
              <h3>講師</h3>
              <div>堤紀久夫</div>
              <div>
                元インターネット関係のプログラマ。
                <Link
                  href="https://instagram.com/alizza.ideal"
                  className="underline text-blue-600"
                >
                  Instagram
                </Link>
                などで、Googleマップとホームページを
                組み合わせたネット集客の情報を発信しています。
              </div>
              <div>（Alizza Ideal 代表)</div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ===== Features End ===== --> */}
    </>
  )
}

export default Feature
