"use client"
import SectionHeader from "../Common/SectionHeader"
import BlogListings from "./Listings"

export default function LatestBlogs() {
  return (
    <>
      <BlogListings
        headerInfo={{
          title: "最新情報",
          subtitle: "ストーリー・セールス・ブログ",
          description: ""
        }}
        searchParams={{ status: "published", limit: 4 }}
      />
    </>
  )
}
