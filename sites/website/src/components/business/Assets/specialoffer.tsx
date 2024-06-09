"use client"
import Subscribe from "@/components/Assets/subscribe"
import Link from "next/link"
import { Image, Video } from "@/components/Assets/media"

export default function SpecialOffer(): React.ReactNode {
  return (
    <div>
      <div className="md:columns-2 gap-8 mt-8">
        <div className="mt-0 mb-4 w-full">
          <Image
            src="gs://story-made.appspot.com/images/hero/CoachingToolbox_Althea_Workshop_land.png"
            alt="高収益コンテンツ制作無料ワークショップ＋７２時間集客チャレンジ"
            width={576}
            height={1024}
            className="object-cover mx-auto rounded-lg"
          />
        </div>
        <h2 className="text-xl">このワークショップでは</h2>
        <p>
          高収益を期待できるあなたのオリジナルなコンテンツを制作します。
          しかし、せっかくいいコンテンツを作ったとて、
          集客してクライアントが獲得できなければ宝の持ち腐れです。
        </p>
        <p>
          とはいえ、出来たばかりのコンテンツでは、怖くて一人では行動しにくいですよね。
        </p>
        <h2 className="text-xl">そこで７２時間限定集客チャレンジ</h2>
        <p>そこで、強制的に７２時間の集客チャレンジをしていただきます。</p>
        <p>もちろん、集客のアドバイスと集客に使うテンプレートを提供します。</p>
        <ol className="text-base list-outside">
          <li>
            集客した人に、あなたのコーチング・サービスを提案する際のプレゼン資料（スライド）テンプレート
          </li>
          <li>
            あなたのフォロワーや、あなたがフォローしている方に、
            あなたのコーチングサービスを紹介するアポを取るためのメッセージテンプレート
          </li>
        </ol>
        <h2 className="text-xl">わたしも行動するのが怖かった</h2>
        <p>
          わたしはこれまで、なかなか行動に移せなかった方をたくさん目にしてきました。
          実のところ、わたしもそうでした。
        </p>
        <p>
          映画や漫画の主人公を見ても、仲間に背中を押されたり、
          気付かされたりしないとなかなか行動にうつせないものです。
        </p>
        <p>
          ですから、たった７２時間だけ集客にチャレンジしてみて下さい。
          そんなことしたことがないから不安ですか？ だったら最高です。
          あなたには伸びしろしかありません。
        </p>
        <h2 className="text-xl">72時間で ZERO から HERO になってほしい</h2>
        <p>
          今、日本は住みにくくなっています。選挙妨害をビジネスにしようとする人がでてきています。
          迷惑なことをしてお金を稼ごうとする人が大勢います。
        </p>
        <p>
          だからこそ、あなたのように他人の理想を実現する、
          コーチという仕事を選んだ人に成功してほしいんです。
        </p>
        <p>このワークショップは、そんなあなたのために企画しました。</p>
        <p>
          理想を実現する人が増えれば増えるほど、日本はもっと住みやすくなり、
          世界中の人が、そんな日本を自慢してくれるようになると信じています。
        </p>
        <h2 className="text-xl">本音を言うと</h2>
        <p>
          ぶっちゃけ、あなたのようなコーチがクライアントを獲得して、
          高収益を得られるようになれば、ワンチャンわたしの有料サービスを
          利用してくれる人が増えるんじゃないかという下心もあります。
        </p>
        <p>でも、日本を住みやすくしたいというのも、もちろん本心です。</p>
      </div>
      <div className="md:columns-2 gap-8">
        <h2 className="text-xl rounded-md bg-sky-950 text-gold p-4 mb-8 mt-0">
          え！成約できちゃった？！まだ自信が……
        </h2>
        <p>
          ワークショプで作ったばかりのオリジナルコンテンツなのに、
          成約できちゃったら、うまくコーチングできるか不安ですよね。
        </p>
        <p>
          わかります。わたしも起業するのに勉強を終えたときもそうでした。
          不安と恐怖で、半年以上何の行動も起こせませんでした。
        </p>
        <p>でも、ご安心下さい。心配はいりません。</p>
        <p>
          集客チャレンジで、いち早くあるいは誰よりも成果を達成できた方には、
          わたしたち Alizza Ideal の有料サービス「
          <span className="text-gold-dark font-bold">
            コーチング・ビジネス教習
          </span>
          」を、
          <span className="font-bold text-black bg-gold rounded-lg p-2 py-1 m-1">
            無料で最高６ヶ月間
          </span>
          ご利用しちゃってください。
        </p>
        <p>
          バックアップは万全です。気後れすることなく集客にチャレンジして下さい。
        </p>
        <p>
          アニメ「葬送のフリーレン」で、シュタルツも言っています「必要なのは覚悟だけ」なんです。
          自信じゃないんです。 怖くても恥ずかしくないんです。
          アイゼンも言っています、「恐怖が自分をここまで連れてきたんだ」と。
        </p>
        <p>
          安心して覚悟を決めるために、あなたのパーティーに魔法使いを誘って下さい。
        </p>
        <Link href={`https://bit.ly/profitable-content-workshop`}>
          <Subscribe className="text-lg md:text-sm py-3 px-6 mx-auto my-4">
            今すぐ参加
          </Subscribe>
        </Link>
      </div>
    </div>
  )
}
