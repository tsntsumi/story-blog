import SingleBlogPage from "@/components/Blogs/SingleBlogPage"
import NextImage from "next/image"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import { db, storage } from "@/lib/firebase/app"
import { retrieveBlogs } from "@/lib/firebase/firestore"
import Media, { Image, Video } from "@/components/Media"
const logger = require("firebase-functions/logger")

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

const ContentVideo = async ({ path, width, height, ...rest }) => {
  return (
    <>
      <video
        src={url}
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
  /* if (content.type === "images") {
   *   const images = [...content.value]
   *   // return images.map((image, key) => <ContentImage path={image} key={key} />)
   *   return <></>
   * }
   * if (content.type === "videos") {
   *   const videos = [...content.value]
   *   // return videos.map((video, key) => <ContentVideo path={video} key={key} />)
   *   return <></>
   * } */
  return <>{content.value}</>
}

export default async function BlogPage({ params }) {
  const blogs = await retrieveBlogs({ slug: params.slug })

  return blogs?.map((blog) => (
    <SingleBlogPage key={blog.id} blog={blog}>
      {blog.content?.map((c, key) => (
        <Content content={c} key={`$key`} />
      ))}
    </SingleBlogPage>
  ))
}
