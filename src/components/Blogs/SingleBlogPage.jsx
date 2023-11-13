import RelatedPost from "@/components/Blogs/RelatedPost"
import SharePost from "@/components/Blogs/SharePost"
import Image from "next/image"
import { storage } from "@/lib/firebase"
import { ref, getDownloadURL } from "firebase/storage"

const SingleBlogPage = async ({ blog, children }) => {
  const image = ref(storage(), blog.hero)
  const imageURL = await getDownloadURL(image)
  return (
    <>
      <section className="pb-20 pt-20 lg:pb-25 lg:pt-30 xl:pb-30 xl:pt-40">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex items-center justify-center flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <div className="mb-10 w-full overflow-hidden ">
                  <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
                    <Image
                      src={imageURL}
                      alt="blog.title"
                      fill
                      className="rounded-md object-cover object-center"
                    />
                  </div>
                </div>

                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  {blog.title}
                </h2>

                <ul className="mb-9 flex flex-wrap gap-5 2xl:gap-7.5 list-none">
                  <li>
                    <span className="text-black dark:text-white">Author: </span>{" "}
                    {blog.author || "Anonymouth"}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Published On:{" "}
                      {blog.date?.toLocaleDateString() || "Someday"}
                    </span>{" "}
                  </li>
                  <li>
                    <span className="text-black dark:text-white">
                      Category: {blog.category.toUpperCase()}
                    </span>
                    <li>
                      <span className="text-black dark:text-white">Tags:</span>
                      {" [ "}
                      {blog.tags?.join(", ")?.toUpperCase()}
                      {" ]"}
                    </li>
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
