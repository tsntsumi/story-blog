import { storage } from "@/lib/firebase/app"
import { type BlogEntry } from "@/lib/types/blog"
import SlideIn from "@/components/Assets/slidein"
import AcceptOffer from "@/components/Assets/acceptoffer"
import Categories, {
  CategoryFromKey,
  NameFromKey,
  DescriptionFromKey
} from "@/lib/categories"
import type Category from "@/lib/types/category"
import Media, { Image, Video } from "@/components/Assets/media"
import Link from "@/components/Assets/link"
import NextImage from "next/image"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeRaw from "rehype-raw"
import rehypeSanitize from "rehype-sanitize"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"

type ContentProps = {
  path: string
  width?: number
  height?: number
  className?: string
  alt?: string
  rest?: any[]
}

type ContentTextProps = {
  text: string
  className?: string
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

const ContentText = ({ text, className, ...rest }: ContentTextProps) => {
  return (
    <Markdown
      rehypePlugins={[rehypeRaw, rehypeKatex, rehypeSanitize]}
      remarkPlugins={[remarkGfm]}
      className={`markdown ${className}`}
      {...rest}
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
    <article id="blog" className="md:w-3/4 xl:w-2/3 mx-auto">
      <SlideIn className="animate_top">
        <div className="m-0 p-0 w-full">
          <Media
            src={article?.hero}
            alt={article?.title}
            className="object-cover"
            width={1024}
            height={768}
          />
        </div>
      </SlideIn>

      <div className="m-0 p-0 px-4 text-sm font-mono flex flex-wrap items-start justify-start gap-x-2 border-b">
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
            カテゴリー: {NameFromKey(article?.category)} |
          </span>
        </div>
        <div className="my-0 py-0">
          <span className="text-black">タグ:</span>
          {" [ "}
          {article?.tags?.join(" | ")?.toUpperCase()}
          {" ]"}
        </div>
      </div>
      <div className="article-details m-2 p-4 py-1 rounded-lg bg-slate-100">
        <h1 className="m-0 my-2 text-4xl font-semibold text-black 2xl:text-sectiontitle2">
          {article?.title}
        </h1>
        <div className="pt-2 text-xs border-y-2">
          <Markdown
            rehypePlugins={[rehypeRaw, rehypeKatex, rehypeSanitize]}
            remarkPlugins={[remarkGfm]}
            className="markdown"
          >
            {article?.summary}
          </Markdown>
        </div>
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
      <div className="text-xs mx-2">
        <Link href={`/blog/${article?.category}`} go="back">
          戻る
        </Link>
      </div>
    </article>
  )
}
