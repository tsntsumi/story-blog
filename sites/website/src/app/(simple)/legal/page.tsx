/**
 * Googleマップ集客術: 特定商取引法に基づく表記
 */
import type { Metadata } from "next"
import ClientPage from "./clientpage"

export const metadata: Metadata = {
  title: "特定商取引法",
  description: "特定商取引法に基づく表記"
}

const Page = () => {
  return <ClientPage />
}
export default Page
