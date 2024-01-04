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
          <div className="row-span-1 font-bold text-lg my-0 p-0 w-fit mx-auto">
            独自の強みを発見する
          </div>
          <h4 className="mt-2 row-span-2">コンテンツの錬金術テンプレート</h4>
          <p className="text-sm row-span-2">
            競合とかぶらない独自の強みを打ち出せば、
            ライバルと差別化でき、求めている人々を独り占めできます。
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
          <div className="row-span-1 font-bold text-lg my-0 p-0 w-fit mx-auto">
            商品の魅力を引き出す
          </div>
          <h4 className="row-span-2 mt-2">
            キャッチコピーの錬金術テンプレート
          </h4>
          <p className="text-sm row-span-2">
            謙虚すぎず誇大表現もせず、掛け値なしの商品の価値と魅力を伝えれば、
            大勢の興味を引き、買った後の満足度も上がります
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
          <div className="row-span-1 font-bold text-lg my-0 p-0 w-fit mx-auto">
            商品を欲しがらせる
          </div>
          <h4 className="row-span-2 mt-2">集客シナリオの錬金術テンプレート</h4>
          <p className="text-sm row-span-2">
            欲しがる人が活用しているSNSなどのプラットフォームから
            人々を呼び寄せ、買いたくなる動線を引きます
          </p>
        </div>
      </>
    )
  }
]

export default outlineData
