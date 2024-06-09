export type NewsletterEntry = {
  title: string
  seqno: number
  author: string
  tags: string[]
  content: (NewsletterEntryImages | NewsletterEntryText)[]
  status: string
  createdat: Date
}

export type NewsletterEntryImages = {
  type: "images"
  value: string[]
}

export type NewsletterEntryText = {
  type: "text"
  value: string
}
