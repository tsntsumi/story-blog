export type AnnounceEntry = {
  title: string
  slug: string
  author: string
  tags: string[]
  content: (AnnounceEntryImages | AnnounceEntryText)[]
  category: string
  status: string
  createdat: Date
}

export type AnnounceEntryImages = {
  type: "images"
  value: string[]
}

export type AnnounceEntryText = {
  type: "text"
  value: string
}
