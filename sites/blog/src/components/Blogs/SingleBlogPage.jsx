"use client"
import RelatedPost from "@/components/Blogs/RelatedPost"
import { slug } from "github-slugger"
import Link from "next/link"
import SharePost from "@/components/Blogs/SharePost"
import Media from "@/components/Media"
import Subscribe from "@/components/Common/Subscribe"
import { storage } from "@/lib/firebase/app"
import { ref, getDownloadURL } from "firebase/storage"
import { categoryMap } from "@/collections/categories"

const Categories = Object.keys(categoryMap)

const categoryName = (c) => {
  return categoryMap[c]?.toUpperCase()
}

const SingleBlogPage = ({ blog, category, children }) => {
  const CategoryMenu = () =>
    Categories.map((c) => (
      <>
        <Link
          href={`/blog/${c}`}
          className="py-2 px-3 uppercase text-sm font-medium text-gray-500 dark:text-gray-300 hover:text-primary-500 dark:hover:text-primary-500"
        >
          <span className={`${category === c && "font-black"}`}>
            {categoryMap[c]}
          </span>
        </Link>
      </>
    ))

  return (
    <>
      <section
        id="blog-entry"
        className="flex flex-wrap py-26 lg:pb-25 lg:pt-30 xl:pb-30"
      >
        <div className="mx-auto w-full px-4 md:px-8 2xl:px-20">
          <div className="p-4 flex flex-nowrap justify-around items-center gap-2 bg-gray-50 dark:bg-gray-900/70 shadow-md dark:shadow-gray-800/40 rounded-t-md">
            <CategoryMenu />
          </div>

          <div className="flex items-center justify-center flex-col-reverse gap-7.5">
            <div className="w-full">
              <div className="animate_top rounded-b-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Media
                      src={blog?.hero}
                      alt={blog?.title}
                      width={512}
                      height={512}
                      className="rounded-md object-cover object-center w-full"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  {blog?.title}
                </h2>

                <ul className="m-0 p-0 leading-tight md:mb-9 flex flex-wrap gap-0 md:gap-7.5 list-none mb-4">
                  <li className="m-0 p-0">
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    {blog?.author || "Anonymouth"}
                  </li>
                  <li className="m-0 p-0">
                    <span className="text-black dark:text-white">
                      Published On: {blog?.date || "Someday"}
                    </span>{" "}
                  </li>
                  <li className="my-0 py-0">
                    <span className="text-black dark:text-white">
                      Category: [ {categoryName(blog?.category)} ]
                    </span>
                  </li>
                  <li className="my-0 py-0">
                    <span className="text-black dark:text-white">Tags:</span>
                    {" [ "}
                    {blog?.tags?.join(", ")?.toUpperCase()}
                    {" ]"}
                  </li>
                </ul>

                <div className="blog-details">
                  <>{children}</>
                </div>
              </div>
              <div className="mx-[180px] mt-6 px-4 md:px-8 xl:px-25">
                <div className="w-fit mx-auto">
                  <p>
                    このブログでは、ネットを使ってあなたのビジネスが
                    みんなに知られるためのテクニックを発信しています。
                  </p>
                  <p>
                    新しいブログ記事を追加したときに、メールでお知らせしています。
                  </p>
                  <p>いかがですか？</p>
                  <Subscribe />
                </div>
              </div>
              <div className="mt-8 p-4 flex flex-nowrap justify-around items-center gap-2 bg-gray-50 dark:bg-gray-900/70 shadow-md dark:shadow-gray-800/40 rounded-md">
                <CategoryMenu />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleBlogPage
