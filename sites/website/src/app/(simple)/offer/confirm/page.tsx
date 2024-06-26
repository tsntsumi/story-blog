import type { Metadata } from "next"
import ClientPage from "./clientpage"

export const metadata: Metadata = {
  title: "限定プレゼントのお申し込みありがとうございます",
  description: `Webサイト限定プレゼントの申し込みのお礼と、お受け取り方法の説明`
}

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page(props: Props) {
  return <ClientPage {...props} />
}
