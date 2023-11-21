import * as firebase from "firebase-admin"
import { getFirestore } from "firebase-admin/firestore"
import { getAuth } from "firebase-admin/auth"
import { getStorage } from "firebase-admin/storage"
import serviceAccount from "@/firebase-adminsdk.json"

function app() {
  if (!firebase.apps.length) {
    try {
      firebase.initializeApp({
        credential: firebase.credential.applicationDefault()
      }) ||
        firebase.initializeApp({
          credential: firebase.credential.cert(serviceAccount)
        }) ||
        firebase.initializeApp({
          projectId: "story-made",
          credential: firebase.credential.applicationDefault()
        })
    } catch (e) {
      // do nothing
    }
  }
  return firebase
}

function db() {
  app()
  return getFirestore()
}

function auth() {
  app()
  return getAuth()
}

function storage() {
  app()
  return getStorage()
}

export { app, db, auth, storage }
