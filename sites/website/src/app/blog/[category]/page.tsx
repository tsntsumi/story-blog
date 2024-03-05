import ClientPage, { type Props } from "./clientpage"
import type { Metadata } from "next"
import { type Category, Categories } from "@/lib/collections/categories"

export const metadata: Metadata = {
  title: "見つかるブログカテゴリー記事一覧",
  description: `
  このカテゴリーのブログ記事の一覧です。
  気になる記事があったらぜひ選択してご覧ください。
  `
}

/* export async function generateMetadata({
 *   params,
 *   searchParams
 * }: Props): Promise<Metadata> {
 *   const category: Category = Categories.find((c) => c.key === params.category)
 *
 *   return {
 *     title: `見つかる！ ${
 *       category?.name || params.category.toUpperCase()
 *     }ブログ記事一覧`,
 *     description: category?.description || "このカテゴリーのブログ記事の一覧です"
 *   }
 * } */

// List all blog items
export default function Page(props: Props) {
  return <ClientPage {...props} />
}
