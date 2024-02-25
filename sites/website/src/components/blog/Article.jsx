import Media from "@/components/common/media"
import { storage } from "@/lib/firebase/app"
import CategoriesMap from "@/collections/categories.json"

const Article = ({ article, children }) => {
  const category = (c) => {
    if (!c) {
      return <></>
    }
    return <>{CategoriesMap[c]?.toUpperCase()}</>
  }
  return (
    <>
      <section className="pb-20 pt-20 lg:pb-25 lg:pt-30 xl:pb-30 xl:pt-40">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex items-center justify-center flex-col-reverse gap-7.5 lg:flex-row xl:gap-12.5">
            <div className="lg:w-2/3">
              <div className="animate_top rounded-md border border-stroke bg-white p-7.5 shadow-solid-13 dark:border-strokedark dark:bg-blacksection md:p-10">
                <h2 className="mb-5 mt-11 text-3xl font-semibold text-black dark:text-white 2xl:text-sectiontitle2">
                  {article?.title}
                </h2>

                <ul className="m-0 p-0 leading-tight md:mb-9 flex flex-wrap gap-0 md:gap-7.5 list-none">
                  <li className="m-0 p-0">
                    <span className="text-black dark:text-white">記事: </span>{" "}
                    {article?.author || "Anonymouth"}
                  </li>
                  <li className="m-0 p-0">
                    <span className="text-black dark:text-white">
                      公開日: {article?.date || "Someday"}
                    </span>
                  </li>
                  <li className="my-0 py-0">
                    <span className="text-black dark:text-white">
                      カテゴリー: {category(article?.category)}
                    </span>
                  </li>
                  <li className="my-0 py-0">
                    <span className="text-black dark:text-white">タグ:</span>
                    {" [ "}
                    {article?.tags?.join(", ")?.toUpperCase()}
                    {" ]"}
                  </li>
                </ul>

                <div className="article-details">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Article
