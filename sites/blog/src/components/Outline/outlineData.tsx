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
        <div className="grid grid-cols-1 gap-2 items-start">
          <h4 className="my-2">無理に売り込まなくても売れていく</h4>
          <p className="text-sm">
            欲しがっている人だけ集客できるから、セールスで無理な売り込みをして
            <strong>嫌われる</strong>ことはありません
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
        <div className="grid grid-cols-1 gap-2 items-start">
          <h4 className="mt-2">大幅な値引きをしなくても売れていく</h4>
          <p className="text-sm">
            欲しがっている人だけ集客するから、 大幅な値引きをして
            <strong>利益を失う</strong>ことはありません
          </p>
          <p>商品の価値と価格を等価交換できるんです </p>
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
        <div className="grid grid-cols-1 gap-2 items-start">
          <h4 className="mt-2">クドクドと説明しなくても売れていく</h4>
          <p className="text-sm">
            欲しがっている人だけ集客できるから、クドクド説明して
            <strong>嫌がられる</strong>ことはありません
          </p>
        </div>
      </>
    )
  }
]

export default outlineData
