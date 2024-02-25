"use client"
import React, { useState, useEffect } from "react"
import { Article } from "@/components/blog"
import NextImage from "next/image"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import { basename } from "path"
import { db, storage } from "@/lib/firebase/app"
import {
  retrieveDocumentsSnapshot,
  documentBySlug
} from "@/lib/firebase/firestore"
import Media, { Image, Video } from "@/components/common/media"
import Spinner from "@/components/common/spinner"

type Props = {
  params: { slug: string }
}

const components: any = {
  img: Image,
  video: Video
}

const ContentText = ({ text }) => {
  return (
    <Markdown
      components={components}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeKatex]}
    >
      {text}
    </Markdown>
  )
}

const ContentImage = ({ path, width, height, ...rest }) => {
  return (
    <Image
      src={path}
      width={width || 320}
      height={height || 240}
      alt="content image"
      {...rest}
    />
  )
}

const ContentVideo = ({ path, width, height, ...rest }) => {
  return (
    <>
      <Video
        src={path}
        width={width || 320}
        height={height || 240}
        controls
        muted={true}
        autoPlay={true}
        alt="content video"
        className="mx-auto"
        {...rest}
      />
    </>
  )
}

const Content = ({ content }) => {
  if (content.type === "text") {
    return <ContentText text={content.value} />
  }
  if (content.type === "images") {
    return (
      <div className="flex flex-wrap gap-2 items-start justify-around w-full">
        {content.value.map((path, key) => (
          <Image alt={`content image ${key}`} src={path} key={key} />
        ))}
      </div>
    )
  }
  if (content.type === "videos") {
    const videos = [...content.value]
    return (
      <div className="flex flex-wrap gap-2 items-start justify-around w-full">
        {content.value.map((path, key) => (
          <Video alt={`content video ${key}`} src={path} key={key} />
        ))}
      </div>
    )
  }
  return <>{content.value}</>
}

export default function Page({ params }: Props): React.ReactNode {
  const { slug } = params
  const [documents, setDocuments] = useState([])
  const [filters, setFilters] = useState({ slug: slug })
  const [loading, setLoding] = useState(true)

  useEffect(() => {
    const unsubscribe = retrieveDocumentsSnapshot((data) => {
      setDocuments(data)
      setLoding(false)
    }, filters)
    return () => {
      if (unsubscribe && typeof unsubscribe === "function") {
        unsubscribe()
      }
    }
  }, [filters, slug])

  if (loading) {
    return (
      <div className="flex flex-col h-screen w-full items-center justify-center">
        <div>
          <Spinner />
        </div>
        <div>読み込み中です...</div>
      </div>
    )
  }
  if (!documents || !documents.length) {
    return (
      <div className="flex flex-nowrap h-screen w-full items-center justify-center">
        まだ記事はありません
      </div>
    )
  }
  const article = documents.shift()
  return (
    <Article article={article}>
      {article?.content?.map((c, k) => (
        <Content content={c} key={k} />
      ))}
    </Article>
  )
}
