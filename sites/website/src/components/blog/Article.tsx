import { storage } from "@/lib/firebase/app"
import { type BlogEntry } from "@/lib/types/blog"
import SlideIn from "@/components/common/slidein"
import AcceptOffer from "@/components/common/acceptoffer"
import Categories, { type Category } from "@/lib/collections/categories"
import Media, { Image, Video } from "@/components/common/media"
import Link from "@/components/common/link"
import NextImage from "next/image"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import Magnet from "@/components/Magnet"

type ContentProps = {
  path: string
  width?: number
  height?: number
  className?: string
  alt?: string
  rest?: any[]
}

const ContentImage = ({
  path,
  width,
  height,
  className,
  alt,
  ...rest
}: ContentProps) => {
  return (
    <Image
      src={path}
      width={width || 640}
      height={height || 480}
      alt={alt || "blog content image"}
      className={`w-full object-cover ${className}`}
      {...rest}
    />
  )
}

const ContentVideo = ({
  path,
  width,
  height,
  className,
  alt,
  ...rest
}: ContentProps) => {
  return (
    <>
      <Video
        src={path}
        width={width || 320}
        height={height || 240}
        controls
        muted={true}
        autoPlay={true}
        loop={true}
        alt={alt || "blog content video"}
        className={`w-full mx-auto object-cover ${className}`}
        {...rest}
      />
    </>
  )
}

const ContentText = ({ text }: { text: string }) => {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw, rehypeKatex, rehypeSanitize]}
      remarkPlugins={[remarkGfm]}
      className="markdown"
    >
      {text}
    </Markdown>
  )
}

const Content = ({
  content,
  alt
}: {
  content: {
    type: string
    value: string | string[]
  }
  alt: string
}) => {
  if (content.type === "text") {
    return <ContentText text={content.value as string} />
  }
  if (content.type === "images") {
    const images: string[] = [...(content.value as string[])]
    return images.map((image, key) => (
      <ContentImage path={image} key={key} width={640} height={480} alt={alt} />
    ))
  }
  if (content.type === "videos") {
    const videos: string[] = [...(content.value as string[])]
    return videos.map((video, key) => (
      <ContentVideo path={video} key={key} width={320} height={240} alt={alt} />
    ))
  }
  return <>{content.value}</>
}

export default function Article({ article }: { article: BlogEntry }) {
  return (
    <>
      <SlideIn className="animate_top mb-8 border-b-2">
        <div className="m-0 p-0 w-full mb-4">
          <Media
            src={article?.hero}
            alt={article?.title}
            className="rounded-t-lg object-cover"
            width={1024}
            height={768}
          />
        </div>
      </SlideIn>

      <h1 className="mb-5 pb-2 border-b text-4xl font-semibold text-black 2xl:text-sectiontitle2">
        {article?.title}
      </h1>
      <div className="m-0 pb-4 p-0 pl-8 text-sm font-mono flex flex-wrap items-start justify-start gap-x-2 border-b">
        <div className="m-0 p-0">
          <span className="text-black">Written by: </span>{" "}
          {article?.author || "Anonymouth"}
        </div>
        <div className="m-0 p-0">
          <span className="text-black">
            Post at: {article?.date || "Someday"}
          </span>
        </div>
        <div className="my-0 py-0">
          <span className="text-black">
            カテゴリー: [ {Categories[article?.category]?.name} ]
          </span>
        </div>
        <div className="my-0 py-0">
          <span className="text-black">タグ:</span>
          {" [ "}
          {article?.tags?.join(" | ")?.toUpperCase()}
          {" ]"}
        </div>
      </div>
      <div className="article-details my-4">
        {article?.content?.map((c, i) => (
          <SlideIn
            key={i}
            className={`${
              i % 2 ? "animate_left" : "animate_right"
            } mb-8 border-b-2`}
          >
            <Content key={i} content={c} alt={article?.title} />
          </SlideIn>
        ))}
      </div>
      <div className="text-xs">
        <Link href={`/blog/${article?.category}`} go="back">
          戻る
        </Link>
      </div>
      <div className="text-sm">
        <div>あなたのライバルのいない場所で集客できたらよくないですか？</div>
        <Link href={`/#lead-magnet`} go="detail">
          月刊集客成功事例集をさしあげます
        </Link>
      </div>
    </>
  )
}
