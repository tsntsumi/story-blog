import BlogListings from "@/components/Blogs/Listings"

// List all blog items
export default async function Page() {
  return (
    <BlogListings
      headerInfo={{
        title: "ブログ一覧",
        subtitle: "ストーリー・セールス・ブログ",
        description: <></>
      }}
      searchParams={{ status: "published" }}
    />
  )
}
