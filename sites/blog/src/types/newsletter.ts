export type NewsletterEntry = {
  title: string
  hero: string
  summary: string
  slug: string
  author: string
  tags: string[]
  content: (NewsletterEntryImages | NewsletterEntryText)[]
  category: string
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
