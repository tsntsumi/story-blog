import { MetadataRoute } from "next"
//import { retrieveDocuments } from "@/lib/firebase/firestore"

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

// const generateMaps = async (baseurl: string): Promise<Props[]> => {
//   const documents = await retrieveDocuments()
//   return documents?.map((d, i) => {
//     return {
//       url: `${baseurl}/${ROOT_DIR}/${d.category}/${d.slug}`,
//       lastModified: new Date(d.date),
//       changeFrequency: "monthly",
//       priority: 0.7
//     }
//   })
// }

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const paths: string[] = ["/legal", "/confirmation", "/policy", "/blog", "/"]
  const staticMaps: Props[] = paths.map((p) => ({
    url: `${SITE_URL}${p}`,
    lastModified: new Date(),
    changeFrequency: "daily",
    priority: 0.7
  }))
  return staticMaps
  // const generatedMaps: Props[] = await generateMaps(SITE_URL)
  // return [...staticMaps, ...generatedMaps] as MetadataRoute.Sitemap
}
