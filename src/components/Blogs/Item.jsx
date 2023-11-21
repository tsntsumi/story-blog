import { storage } from "@/lib/firebase"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ref, getDownloadURL } from "firebase/storage"

export default async function BlogItem({ blog, children }) {
  const imageURL = await getDownloadURL(ref(storage(), blog.hero))
  const elipsis = (text, count) => {
    text?.slice(0, count) + (text.length > count && "...")
  }
  return (
    <>
      <div>
        <Link
          href={`/blog/${blog.slug}`}
          className="relative block aspect-[368/239]"
        >
          <Image src={imageURL} alt={blog.title} unoptimized fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2 w-full text-center">
            <Link href={`/blog/${blog.slug}`}>{elipsis(blog.title)}</Link>
          </h3>
          <div>{children}</div>
        </div>
      </div>
    </>
  )
}
