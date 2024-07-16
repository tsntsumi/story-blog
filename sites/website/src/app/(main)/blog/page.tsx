import ClientPage from "./clientpage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "アイデアル・ブログ｜カテゴリー一覧",
  description: `
50代を目前にしている現場の最前線で経験を積んできた方だけに限定公開。
単なる業者と思われずに、尊敬と報酬を払われるコーチングビジネス構築。
あなたを煙たがる管理者に支配された会社を飛び出し、
より多くのクライアントに貢献し成功者を生み出し続ける
コーチング起業成功の秘密の手順を探しているならここにあります。
  `,
  robots: {
    index: true
  }
}

// List all blog items
export default function Page() {
  return (
    <section className="mt-14 mx-4">
      <ClientPage />
    </section>
  )
}
