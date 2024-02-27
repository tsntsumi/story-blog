"use client"
import React, { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { retrieveDocumentsSnapshot } from "@/lib/firebase/firestore.js"
import SectionHeader from "@/components/common/sectionheader"
import DocumentItem from "./Item"

export default function Listings({ headerInfo, searchParams }) {
  const router = useRouter()
  const [collection, setCollection] = useState([])
  const [loading, setLoding] = useState(true)

  useEffect(() => {
    const unsubscribe = retrieveDocumentsSnapshot((data) => {
      setCollection(data)
      setLoding(false)
    })
    return () => {
      if (unsubscribe && typeof unsubscribe === "function") {
        unsubscribe()
      }
    }
  }, [setCollection])
  return (
    <section className="mt-20 py-10 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader headerInfo={headerInfo} />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {loading ? (
            <p>読み込み中...</p>
          ) : (
            !collection && <p>お知らせはありません。</p>
          )}
          {collection?.map((document) => (
            <DocumentItem key={document.id} document={document} />
          ))}
        </div>
      </div>
    </section>
  )
}
