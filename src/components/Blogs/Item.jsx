import { storage } from "@/lib/firebase"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ref, getDownloadURL } from "firebase/storage"

const BlogItem = async ({ blog }) => {
  const imageURL = await getDownloadURL(ref(storage(), blog.hero))
  return (
    <>
      <div>
        <Link
          href={`/blog/${blog.slug}`}
          className="relative block aspect-[368/239]"
        >
          <Image src={imageURL} alt={blog.title} fill />
        </Link>

        <div className="px-4">
          <h3 className="mb-3.5 mt-7.5 line-clamp-2 inline-block text-lg font-medium text-black duration-300 hover:text-primary dark:text-white dark:hover:text-primary xl:text-itemtitle2 w-full text-center">
            <Link href={`/blog/${blog.slug}`}>
              {`${blog.title?.slice(0, 40)}`}
              {blog.title.length > 40 && "..."}
            </Link>
          </h3>
          <p>{blog.summary}</p>
        </div>
      </div>
    </>
  )
}

export default BlogItem
