import ClientPage, { type Props } from "./clientpage"
import { retrieveDocuments } from "@/lib/firebase/firestore"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
  searchParams
}: Props): Promise<Metadata> {
  const { category, slug } = params
  const entries = await retrieveDocuments("blogs", {
    status: "published",
    category: category,
    slug: slug
  })
  const { title, summary } = entries?.at(0)
  return {
    title: title,
    description: summary
  }
}

// List all blog items
export default function Page(props: Props) {
  return (
    <>
      <ClientPage {...props} />
    </>
  )
}
