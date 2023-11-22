import BlogListings from "@/components/Blogs/Listings"
import { retrieveBlogs } from "@/lib/firebase/firestore.js"

// List all blog items
export default async function Page() {
  const posts = await retrieveBlogs()
  return (
    <BlogListings
      headerInfo={{
        title: "ブログ一覧",
        subtitle: "ストーリー・セールス・ブログ",
        description: <></>
      }}
      blogs={posts}
    />
  )
}
