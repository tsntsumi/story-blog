import React from "react"

export type Testimonial = {
  id: number
  name: string
  stars?: string
  summary?: string
  // content: React.JSX.Element
  image: string
  comment?: string | React.JSX.Element
}
