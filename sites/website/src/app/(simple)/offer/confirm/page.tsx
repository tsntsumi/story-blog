import type { Metadata } from "next"
import Link from "next/link"
import { store } from "@/lib/firebase/app"
import { doc, getDoc } from "firebase/firestore"
import type { OwnerData } from "@/lib/types"
import Media from "@/components/Assets/media"
import ClientPage from "./clientpage"

export const metadata: Metadata = {
  title: "限定プレゼントのお申し込みありがとうございます",
  description: `Webサイト限定プレゼントの申し込みのお礼と、お受け取り方法の説明`
}

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function Page(props: Props) {
  const ss = await getDoc(doc(store, "users/owner"))
  const owner: OwnerData = ss.data() as OwnerData
  owner.id = ss.id
  return <ClientPage {...props} owner={owner} />
}
