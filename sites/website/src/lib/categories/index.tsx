// Categories for blog
import type Category from "@/lib/types/category"

export const Categories: Category[] = [
  {
    key: "encourage",
    name: "勇気の出る言葉",
    description: `\
起業する勇気、副業の覚悟をした方へ、アリザ・アイデアルから勇気の出る言葉を贈ります

気分が沈んだとき、やる気が出ないとき、先に進む勇気がでない時などに読んでください`
  },
  {
    key: "marketing",
    name: "選ばれる秘訣",
    description: `\
個人起業家のコーチにとって、人に知られなければ存在しないのと同じです

その他大勢の中に埋もれずに人に知られ、ビジネスを成長させたいなら是非ご覧ください`
  },
  {
    key: "mindset",
    name: "個人起業家魂",
    description: `\
個人で起業した人や、起業を目指して副業を始めた人が、何をしていいか迷ったら読んでください

個人起業家(ソロプレナー|SOLO-PRENEUR)が成功するためのマインドセットを紹介しています`
  },
  {
    key: "empower",
    name: "拍車をかける",
    description: `
あなたのクライアントが成果を出すためのヒントとツールを紹介します`
  }
]

export function CategoryFromKey(key: string): Category {
  return Categories.find((c) => c.key === key)
}

export function NameFromKey(key: string): string {
  const category: Category = CategoryFromKey(key)
  return !category ? key : category?.name
}

export function DescriptionFromKey(key: string): string {
  const category: Category = CategoryFromKey(key)
  return !category ? key : category?.description
}

export default Categories
