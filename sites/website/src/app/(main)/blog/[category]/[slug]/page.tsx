import ClientPage, { type Props } from "./clientpage"
import { retrieveDocuments } from "@/lib/firebase/firestore"
import { NameFromKey } from "@/lib/categories"
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
  if (!entries) {
    return { title: "(not found)", description: "(not found)" }
  }
  const entry = entries?.at(0)
  return {
    title: `${NameFromKey(entry?.category)} | ${entry?.title}`,
    description: entry?.summary
  }
}

// List all blog items
export default function Page(props: Props) {
  return (
    <section className="mt-14 mb-4">
      <ClientPage {...props} />
    </section>
  )
}
