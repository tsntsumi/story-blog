import ClientPage from "./clientpage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "見つかるブログ｜カテゴリー一覧",
  description: `
コーチ・ヒーラー・治療家・セラピストが、より多くの人に貢献するための集客の仕組みを限定公開中。
この困難な時代に、人の役に立とうとするあなたの素晴らしいサービスが、悩めるクライアントに見つけられ選ばれる仕組みをブログで紹介しています。ぜひご覧ください。
  `
}

// List all blog items
export default function Page() {
  return (
    <>
      <ClientPage />
    </>
  )
}
