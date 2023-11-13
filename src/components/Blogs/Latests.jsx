import SectionHeader from "../Common/SectionHeader"
import BlogData from "./Data"
import BlogList from "./List"

export default async function LatestBlogs() {
  const blogs = await BlogData(null, 4)
  return (
    <BlogList
      headerInfo={{
        title: "最新情報",
        subtitle: "ストーリー・セールス・ブログ",
        description: ""
      }}
    >
      {blogs}
    </BlogList>
  )
}
