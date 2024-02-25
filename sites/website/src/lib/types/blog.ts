export type BlogEntry = {
  title: string
  hero: string
  summary: string
  slug: string
  author: string
  tags: string[]
  content: (BlogEntryImages | BlogEntryVideos | BlogEntryText)[]
  category: string
  status: string
  createdat: Date
  date?: string | undefined
}

export type Category = {
  key: string
  name: string
  description: string | React.JSX.Element
}

export type BlogEntryImages = {
  type: "images"
  value: string[] // Image path name in storage
}

export type BlogEntryVideos = {
  type: "vedios"
  value: string[] // Video path name in storage
}

export type BlogEntryText = {
  type: "text"
  value: string // Markdown text
}
