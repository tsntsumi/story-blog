import { initializeApp, getApps } from "firebase/app"
import { getAuth, signInWithCustomToken } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

import firebaseConfig from "@/firebase-config"

export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app)

/* export async function getAuthenticatedAppForUser(session = null) {
 *   if (typeof window !== "undefined") {
 *     console.log("client: ", app)
 *     return { app: app, user: auth.currentUser.toJSON() }
 *   }
 *   const { initializeApp: initializeAdminApp, getApps: getAdminApps } =
 *     await import("firebase-admin/app")
 *   const { getAuth: getAdminAuth } = await import("firebase-admin/auth")
 *   const { credential } = await import("firebase-admin")
 *   const ADMIN_APP_NAME = "firebase-frameworks"
 *   const adminApp =
 *     getAdminApps().find((it) => it.name === ADMIN_APP_NAME) ||
 *     initializeAdminApp(
 *       {
 *         credential: credential.applicationDefault()
 *       },
 *       ADMIN_APP_NAME
 *     )
 *   const adminAuth = getAdminAuth(adminApp)
 *   const noSessionReturn = { app: null, currentUser: null }
 *
 *   if (!session) {
 *     session = await getAppRouterSession()
 *     if (!session) {
 *       return noSessionReturn
 *     }
 *   }
 *
 *   const decodedIdToken = await adminAuth.verifySessionCookie(session)
 *   const app = initializeAuthenticatedApp(decodedIdToken.uid)
 *   const auth = getAuth(app)
 *   const isRevoked = !(await adminAuth
 *     .verifySessionCookie(session, true)
 *     .catch((e) => console.error(e.message)))
 *   if (isRevoked) {
 *     return noSessionReturn
 *   }
 *
 *   if (auth.currentUser?.uid !== decodedIdToken.uid) {
 *     const customToken = await adminAuth
 *       .createCustomToken(decodedIdTokenuid)
 *       .catch((e) => console.error(e.message))
 *     if (!customToken) {
 *       return noSessionReturn
 *     }
 *     await signInWithCustomToken(auth, customToken)
 *   }
 *   console.log("server: ", app)
 *   return { app, currentUser: auth.currentUser }
 * } */

async function getAppRouterSession() {
  const { cookies } = await import("next/headers")
  try {
    return cookies().get("__session")?.value
  } catch (error) {
    // cookies() throws when called from pages router
    return undefined
  }
}

function initializedAuthenticatedApp(uid) {
  const random = Math.random().toString(36).split(".")[1]
  const appName = `authenticated-context:${uid}:${random}`
  const app = initializeApp(firebaseConfig, appName)
  return app
}
