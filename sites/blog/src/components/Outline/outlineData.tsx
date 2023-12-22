import { Outline } from "@/types/outline"
import Image from "next/image"

const outlineData: Outline[] = [
  {
    id: 0.25,
    name: "STEP 1",
    href: "#",
    image: "/images/icon/alchemy-card-01.svg",
    imageLight: "/images/icon/alchemy-card-04.svg",
    content: (
      <>
        <div className="grid grid-cols-1 grid-rows-5 gap-2 items-start">
          <div className="row-span-1 font-bold text-lg my-0 p-0">
            独自の強みを発見する
          </div>
          <h4 className="mt-2 row-span-2">商品の錬金術テンプレート</h4>
          <p className="text-sm row-span-2">
            競合他社とかぶることがなく、マーケットで埋もれることのない、独自の強みをテンプレートを使って発見
          </p>
        </div>
      </>
    )
  },
  {
    id: 0.3,
    name: "STEP 2",
    href: "#",
    image: "/images/icon/alchemy-card-02.svg",
    imageLight: "/images/icon/alchemy-card-05.svg",
    content: (
      <>
        <div className="grid grid-cols-1 grid-rows-5 gap-2 items-start">
          <div className="row-span-1 font-bold text-lg my-0 p-0">
            商品の魅力を引き出す
          </div>
          <h4 className="row-span-2 mt-2">
            キャッチコピーの錬金術テンプレート
          </h4>
          <p className="text-sm row-span-2">
            謙遜もせず誇大表現もせず、掛け値なしの商品の魅力を伝えるメッセージをテンプレートを使って作成
          </p>
        </div>
      </>
    )
  },
  {
    id: 0.35,
    name: "STEP 2",
    href: "#",
    image: "/images/icon/alchemy-card-03.svg",
    imageLight: "/images/icon/alchemy-card-06.svg",
    content: (
      <>
        <div className="grid grid-cols-1 grid-rows-5 gap-2 items-start">
          <div className="font-bold text-lg my-0 p-0 row-span-1">
            渇望する群衆を惹き寄せる
          </div>
          <h4 className="mt-2 row-span-2">集客の錬金術シナリオ</h4>
          <p className="text-sm row-span-2">
            欲しがっている人が活用しているプラットフォーム・メディアで、多くの人々を集客
          </p>
        </div>
      </>
    )
  }
]

export default outlineData
