"use client"
import { Autoplay, Pagination, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { Swiper, SwiperSlide } from "swiper/react"

import SlideIn from "@/components/Assets/slidein"
import SingleTestimonial from "./SingleTestimonial"

const Testimonial = () => {
  return (
    <>
      <section id="testimonial" className="pt-24">
        <h1 className="mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0">
          クライアントの声
        </h1>

        <SlideIn className="animate_top">
          {/* <SingleTestimonial>...</SingleTestimonial> */}
        </SlideIn>
      </section>
    </>
  )
}

export default Testimonial
