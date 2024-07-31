import { notFound } from "next/navigation"
import { retrieveDocuments } from "@/lib/firebase/firestore"
import { NameFromKey } from "@/lib/categories"
import Article from "@/components/Assets/Blog/Article"
import type { Metadata } from "next"

export type Props = {
  params: {
    category: string
    slug: string
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

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
  if (!entries?.length) {
    return {
      title: "404 | Blog not found",
      description: `Category: ${category}, Slug: ${slug} not found`
    }
  }
  const entry = entries?.at(0)
  return {
    title: `${NameFromKey(entry?.category)} | ${entry?.title}`,
    description: entry?.summary
  }
}

// List all blog items
export default async function Page(props: Props) {
  const { category, slug } = props.params
  const entries = await retrieveDocuments("blogs", {
    status: "published",
    category: category,
    slug: slug
  })
  if (!entries?.length) {
    return notFound()
  }
  const entry = entries?.pop()

  return (
    <section className="mt-14 mb-4">
      <Article article={entry} />
    </section>
  )
}
