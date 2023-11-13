import SectionHeader from "@/components/Common/SectionHeader"
import BlogData from "@/components/Blogs/Data"
import BlogItem from "@/components/Blogs/Item"

export default function BlogList({ headerInfo, children }) {
  const blogs = children
  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader headerInfo={headerInfo} />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {blogs.map((blog, key) => (
            <BlogItem blog={blog} key={key}>
              <>{blog.summary}</>
            </BlogItem>
          ))}
        </div>
      </div>
    </section>
  )
}