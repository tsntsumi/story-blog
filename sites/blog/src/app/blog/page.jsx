"use client"
import Head from "next/head"
import BlogListings from "@/components/Blogs/Listings"
import { Categories } from "@/collections/categories"

// List all blog items
export default function Page() {
  const status = "published"
  const category = "google-maps"
  const displayName = Categories[category].name
  const description = Categories[category].description
  const tag = ""

  return (
    <>
      <Head>
        <title>{displayName}・ブログ投稿一覧</title>
        <meta name="description" content={description} key="desc" />
      </Head>
      <BlogListings
        headerInfo={{
          title: `ブログ一覧`,
          subtitle: <div className="text-center">{displayName} ・ブログ</div>,
          description: <>{description}</>
        }}
        searchParams={{
          status,
          category,
          tag
        }}
      />
    </>
  )
}
