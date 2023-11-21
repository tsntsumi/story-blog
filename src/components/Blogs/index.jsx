import SectionHeader from "../Common/SectionHeader"
import BlogData from "./Data"
import BlogList from "./List"

export default async function AllBlogs() {
  const blogs = await BlogData(null, 0)
  return (
    <BlogList
      headerInfo={{
        title: "ブログ一覧",
        subtitle: "ストーリー・セールス・ブログ",
        description: <></>
      }}
      blogs={blogs}
    />
  )
}
