import { retrieveDocuments } from "@/lib/firebase/firestore"
import type Category from "@/lib/type/category"
import type BlogEntry from "@/lib/types/blog"
import Categories from "@/lib/categories"

const NumberOfArticlesPerPage = 6

export async function fetchLatestArticles(category?: string): BlogEntry[] {
  const filter = {
    status: "published",
    limit: NumberOfArticlesPerPage,
    orderBy: "createdat"
  }
  if (category) {
    filter.category = category
  }
  const latestArticles = await retrieveDocuments("blogs", filter)
  // .sort((a, b) => floatFromTS(b.createdat) - floatFromTS(a.createdat))
  return latestArticles as BlogEntry[]
}

export async function fetchArticleBySlug(slug: string): BlogEntry {
  const data = await retrieveDocuments("blogs", {
    status: "published",
    slug: slug
  })
  return data?.pop() as BlogEntry
}

export async function fetchFilteredArticles(
  query: string,
  currentPage: number,
  category: string | undefined,
  articlesPerPage: number | undefined = 6
) {
  const startAfter = (currentPage - 1) * articlesPerPage

  const articles = await retrieveDocuments("blogs", {
    status: "published",
    category: category,
    limit: articlesPerPage + startAfter,
    orderBy: "createdat"
  })
  return articles.splice(startAfter, articlesPerPage)
}

export async function fetchArticlesPages(
  query: string,
  category?: string
): Number {
  try {
    const articles = await retrieveDocuments("blogs", {
      status: "published",
      category: category,
      orderBy: "createdat"
    })
    const totalArticles = articles?.length || 0
    const totalPages = Math.ceil(
      Number(totalArticles) / NumberOfArticlesPerPage
    )
    return totalPages
  } catch (error) {
    console.error("Database Error", error.toString())
    throw new Error("Failed to fetch total number of invoices.")
  }
}
