export type Newsletter = {
  title: string
  seqno: number
  author: string
  tags: string[]
  content: (NewsletterImages | NewsletterText)[]
  status: string
  createdat: Date
}

export type NewsletterImages = {
  type: "images"
  value: string[]
}

export type NewsletterText = {
  type: "text"
  value: string
}
