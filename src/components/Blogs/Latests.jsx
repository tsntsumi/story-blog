"use client"
import SectionHeader from "../Common/SectionHeader"
import BlogListings from "./Listings"
import { retrieveBlogs } from "@/lib/firebase/firestore.js"

export default function LatestBlogs() {
  return (
    <>
      <BlogListings
        headerInfo={{
          title: "最新情報",
          subtitle: "ストーリー・セールス・ブログ",
          description: ""
        }}
        searchParams={{ limit: 4 }}
      />
    </>
  )
}
