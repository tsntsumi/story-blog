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

const generateBlogEntryMaps = async (baseurl: string): Promise<Props[]> => {
  const documents = await retrieveDocuments("blogs", { status: "published" })
  return documents?.map((d, i) => ({
    url: `${baseurl}/${ROOT_DIR}/${d.category}/${d.slug}`,
    lastModified: new Date(d.date),
    changeFrequency: "daily",
    priority: 0.7
  }))
}

// const generateCategoryMaps = (baseurl: string): Props[] => {
//   return Categories.map((c) => ({
//     url: `${baseurl}/${ROOT_DIR}/${c.key}`,
//     lastModified: new Date(),
//     changeFrequency: "monthly",
//     priority: 0.7
//   }))
// }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths: string[] = [
    "/legal",
    "/excl",
    "/map",
    "/policy",
    "/blog",
    "/blog/encourage",
    "/blog/marketing",
    "/blog/mindset",
    "/",
    "/who-we-are"
  ]
  const staticMaps: Props[] = paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.7
  }))

  const blogEntryMaps: Props[] = await generateBlogEntryMaps(SITE_URL)
  return [...staticMaps, ...blogEntryMaps]
}
