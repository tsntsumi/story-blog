import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ArticlePage from "./article"
import { documentBySlug } from "@/lib/firebase/firestore"
import type { Metadata } from "next"
import type { BlogEntry } from "@/lib/types/blog"

type Props = {
  params: { slug: string; category: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata({
  params,
  searchParams
}: Props): Promise<Metadata> {
  const { slug, category } = params
  const documents = await documentBySlug(category, slug)
  const { title, date } = documents?.at(0)
  return {
    title: title,
    description: `${new Date(
      date
    ).toLocaleDateString()}のまきせ鍼灸整骨院からのお知らせです。`
  }
}

export default function Page({ params, searchParams }: Props) {
  return (
    <>
      <Header />
      <section className="mt-20 py-4">
        <ArticlePage params={params} />
      </section>
      <Footer />
    </>
  )
}
