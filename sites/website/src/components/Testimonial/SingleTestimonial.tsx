//import { Testimonial } from "@/lib/types/testimonial";
import Image from "next/image"

const SingleTestimonial = ({ review }: { review: any }) => {
  const { name, stars, summary, content, comment } = review
  return (
    <div className="rounded-lg bg-orange-400 text-white p-9 pt-4 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-4 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div className="flex gap-16 justify-between items-center">
          <h4 className="mb-0 text-metatitle3 text-white dark:text-white whitespace-nowrap">
            {name}
          </h4>
          <div>
            <div className="text-yellow-300">{stars}</div>
            <p className="text-sm">{summary}</p>
          </div>
        </div>
      </div>

      <div className="mb-7.5 text-xs text-justify leading-normal space-y-1">
        {content}
      </div>
      <hr />
    </div>
  )
}

export default SingleTestimonial
