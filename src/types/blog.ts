export type BlogEntry = {
  title: string
  hero: string
  summary: string
  slug: string
  author: string
  tags: string[]
  content: (BlogEntryImages | BlogEntryText)[]
  category: string
  status: string
  createdat: Date
}

export type BlogEntryImages = {
  type: "images"
  value: string[]
}

export type BlogEntryText = {
  type: "text"
  value: string
}
