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

export default app
