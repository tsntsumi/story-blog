// Categories for blog
import type Category from "@/lib/types/category"

export const CategoryFromKey = (key: string): Category => {
  return Categories.find((c) => c.key === key)
}

export const NameFromKey = (key: string): string => {
  const category: Category = CategoryFromKey(key)
  return !category ? key : category.name
}

export const DescriptionFromKey = (key: string): string => {
  const category: Category = CategoryFromKey(key)
  return !category ? key : category.description
}

export const Categories: Category[] = [
  {
    key: "encourage",
    name: "激励の言葉",
    description: `\
起業する勇気、副業の覚悟をした方へ、Alizza Idealから激励の言葉を贈ります

気分が沈んだとき、やる気が出ないときなどに読んでください`
  },
  {
    key: "marketing",
    name: "選ばれる秘訣",
    description: `\
個人起業家にとって、人に知られなければ存在しないのと同じです

人に知られ、ビジネスを成長させたいなら是非ご覧ください`
  },
  {
    key: "mindset",
    name: "個人起業家精神",
    description: `\
個人で起業した人や、起業を目指して副業を始めた人が、何をしていいか迷ったら読んでください

個人起業家(ソロプレナー|SOLO-PRENEUR)が成功するためのマインドセットを紹介しています`
  }
]

export default Categories
