import RelatedPost from "@/components/Blogs/RelatedPost"
import SharePost from "@/components/Blogs/SharePost"
import Media from "@/components/Media"
import { storage } from "@/lib/firebase/app"
import { ref, getDownloadURL } from "firebase/storage"
import { categoryMap } from "@/collections/categories"

const categoryName = (c) => {
  return categoryMap[c]?.toUpperCase()
}

const SingleBlogPage = ({ blog, children }) => {
  return (
    <>
      <section
        id="blog-entry"
        className="pb-20 pt-20 lg:pb-25 lg:pt-30 xl:pb-30 xl:pt-40"
      >
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex items-center justify-center flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
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

                <ul className="m-0 p-0 leading-tight md:mb-9 flex flex-wrap gap-0 md:gap-7.5 list-none">
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
                      Category: {categoryName(blog?.category)}
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
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleBlogPage
