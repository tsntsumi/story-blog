import Link from "next/link"

export default async function NotFound() {
  return (
    <div className="mt-12 p-4">
      <h2>見つかりません</h2>
      <div className="m-2 p-2 rounded-lg bg-slate-100">
        <p>指定されたカテゴリーが見つかりませんでした</p>
        <p>
          <Link href="/blog" className="text-blue-600 underline">
            すべての記事を見る
          </Link>
        </p>
      </div>
    </div>
  )
}
