import { db } from "@/lib/firebase"

//const blogs = db().collection("blogs")

/* const SlugData = async (slug) => {
 *   const q = blogs.where("slug", "==", slug)
 *   return await q?.get()
 * } */

/* const AllData = async () => {
 *   return blogs
 *     .listDocuments()
 *     .then((docRefs) => {
 *       return db().getAll(...docRefs)
 *     })
 *     .then((docSnapshots) => {
 *       const docs = docSnapshots.reduce(async (acc, curr) => {
 *         const doc = await curr.data()
 *         acc.push(doc)
 *         return acc
 *       }, [])
 *     })
 * } */

export default async function BlogData(slug = null, upto = 0) {
  return []
  /* if (slug) {
   *   return await SlugData(slug)?.data()
   * }
   * if (!upto) {
   *   return await AllData()
   * }
   * return await blogs
   *   .limit(upto)
   *   .get()
   *   .then((ss) => {
   *     const docs = ss.reduce(async (acc, curr) => {
   *       const doc = await curr.data()
   *       acc.push(doc)
   *       return acc
   *     }, [])
   *   }) */
}
