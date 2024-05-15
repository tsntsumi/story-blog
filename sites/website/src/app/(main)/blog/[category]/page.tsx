import ClientPage, { type Props } from "./clientpage"
import type { Metadata } from "next"
import Categories, { NameFromKey, DescriptionFromKey } from "@/lib/categories"
import type Category from "@/lib/types/category"

/* export const metadata: Metadata = {
 *   title: "見つかるブログカテゴリー記事一覧",
 *   description: `\
 *   このカテゴリーのブログ記事の一覧です。\
 *   気になる記事があったらぜひ選択してご覧ください。`
 * } */

export function generateMetadata({ params, searchParams }: Props): Metadata {
  const key = params.category
  const category: Category = Categories.find((c) => c.key === key)
  const name: string = NameFromKey(key) || key
  const desc: string =
    DescriptionFromKey(key) || `${name}カテゴリーのブログ記事の一覧です`

  return {
    title: `見つかる！ ${name?.toUpperCase()}ブログ記事一覧`,
    description: desc
  }
}

// List all blog items
export default function Page(props: Props) {
  return <ClientPage {...props} />
}
