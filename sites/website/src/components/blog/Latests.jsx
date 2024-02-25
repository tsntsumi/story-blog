"use client"
import SectionHeader from "../common/sectionheader"
import AnnounceListings from "./Listings"
import { retrieveAnnounces } from "@/lib/firebase/firestore.js"

export default function LatestAnnounces() {
  return (
    <>
      <AnnounceListings
        headerInfo={{
          title: "最新情報",
          subtitle: "まきせ鍼灸整骨院からのお知らせ",
          description: ""
        }}
        searchParams={{ limit: 4 }}
      />
    </>
  )
}
