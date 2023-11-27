"use client"
import { React, useState, useEffect } from "react"
import SingleBlogPage from "@/components/Blogs/SingleBlogPage"
import NextImage from "next/image"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import { db, storage } from "@/lib/firebase/app"
import { retrieveBlogsSnapshot } from "@/lib/firebase/firestore"
import Media, { Image, Video } from "@/components/Media"

const ContentImage = ({ path, width, height, ...rest }) => {
  return (
    <Image
      src={path}
      width={width || 640}
      height={height || 480}
      alt="blog content image"
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
        alt="blog content video"
        className="mx-auto"
        {...rest}
      />
    </>
  )
}

const components = {
  Image: Image,
  Video: Video,
  Media: Media
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

const Content = ({ content }) => {
  if (content.type === "text") {
    return <ContentText text={content.value} />
  }
  if (content.type === "images") {
    const images = [...content.value]
    // return images.map((image, key) => <ContentImage path={image} key={key} />)
    return <></>
  }
  if (content.type === "videos") {
    const videos = [...content.value]
    // return videos.map((video, key) => <ContentVideo path={video} key={key} />)
    return <></>
  }
  return <>{content.value}</>
}

export default function BlogPage({ params }) {
  const { slug } = params
  const [blogs, setBlogs] = useState([])
  const [filters, setFilters] = useState({
    slug: slug
  })

  useEffect(() => {
    const unsubscribe = retrieveBlogsSnapshot((data) => {
      setBlogs(data)
    }, filters)
    return () => {
      if (unsubscribe && typeof unsubscribe === "function") {
        unsubscribe()
      }
    }
  }, [filters, slug])

  return (
    <>
      {blogs.length > 0 && (
        <SingleBlogPage blog={blogs.at(0)}>
          {blogs?.at(0)?.content?.map((c, k) => (
            <Content content={c} key={k} />
          ))}
        </SingleBlogPage>
      )}
    </>
  )
}
