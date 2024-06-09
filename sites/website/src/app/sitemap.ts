import { MetadataRoute } from "next"
import { retrieveDocuments } from "@/lib/firebase/firestore"
import { Categories } from "@/lib/categories"
import type Category from "@/lib/types/category"

const SITE_URL = process.env.SITE_URL || "https://www.alizza-ideal.com"
const ROOT_DIR = "blog"

type Props = {
  url: string
  lastModified?: string | Date
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never"
  priority?: number
}

const sitemapEntryFromPath = (path: string, lastModified: Date): Props => {
  return {
    url: `${SITE_URL}/${path}`,
    lastModified: lastModified,
    changeFrequency: "daily",
    priority: 0.7
  }
}

const generateBlogEntryMaps = async (): Promise<Props[]> => {
  const documents = await retrieveDocuments("blogs", { status: "published" })
  return documents?.map((d, i) =>
    sitemapEntryFromPath(`/blog/${d.category}/${d.slug}`, new Date(d.date))
  )
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths: string[] = [
    "/legal",
    "/offer/monthly-success",
    "/map",
    "/policy",
    "/blog",
    "/",
    "/who-we-are"
  ]
  const categoryPaths: string[] = Categories.map((c) => `/blog/${c.key}`)
  const staticMaps: Props[] = [...paths, ...categoryPaths].map((p) =>
    sitemapEntryFromPath(p, new Date())
  )

  const blogEntryMaps: Props[] = await generateBlogEntryMaps()
  return [...staticMaps, ...blogEntryMaps]
}
