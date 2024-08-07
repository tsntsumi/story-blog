import { initializeApp, getApps } from "firebase/app"
import { getAuth, signInWithCustomToken } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getFunctions } from "firebase/functions"

import firebaseConfig from "@/firebase-config"

export const app =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0]
export const auth = getAuth(app)
export const store = getFirestore(app)
export const db = store
export const storage = getStorage(app)
export const functions = getFunctions(app)

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
