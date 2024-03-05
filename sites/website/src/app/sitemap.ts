import { MetadataRoute } from "next"
import { retrieveDocuments } from "@/lib/firebase/firestore"
import { type Category, Categories } from "@/lib/collections/categories"

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

const blogMap = async (baseurl: string): Promise<Props[]> => {
  const documents = await retrieveDocuments("blogs", { status: "published" })
  return documents?.map((d, i) => ({
    url: `${baseurl}/${ROOT_DIR}/${d.category}/${d.slug}`,
    lastModified: new Date(d.date),
    changeFrequency: "daily",
    priority: 0.7
  }))
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths: string[] = ["/legal", "/confirmation", "/policy", "/blog", "/"]
  const staticMaps: Props[] = paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.7
  }))
  // const categorymaps: Props[] = Categories.map(
  //   (c, i) =>
  //     ({
  //       url: `${SITE_URL}/${ROOT_DIR}/${c.key}`,
  //       lastModified: new Date(),
  //       changeFrequency: "monthly",
  //       priority: 0.7
  //     } as Props)
  // )
  //
  // const blogMaps: Props[] = await blogMap(SITE_URL)
  // return [...staticMaps, ...categorymaps, ...blogMaps]
  return staticMaps
}
