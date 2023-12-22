"use client"
import React, { useCallback, useEffect, useState } from "react"

import { User as FirebaseUser } from "firebase/auth"
import {
  buildCollection,
  buildProperty,
  buildEnumValues,
  EntityReference,
  Authenticator,
  FirebaseCMSApp
} from "firecms"

import "typeface-rubik"
import "@fontsource/ibm-plex-mono"
import firebaseConfig from "@/firebase-config"

import { blogCollection } from "@/collections/blogentries"

export default function CMS() {
  const cmsAuthenticator: Authenticator<FirebaseUser> = useCallback(
    async ({ user, authController }) => {
      if (user?.email?.includes("flanders")) {
        throw Error("Stupid Flanders!")
      }

      console.log("Allowing access to", user?.email)

      return true
    },
    []
  )

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  if (loading) {
    return (
      <>
        <div className="flex w-full h-screen max-h-full max-w-full bg-gray-50 dark:bg-gray-900">
          <div className="m-auto">
            <div>Now loading...</div>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className="mt-12">
      <FirebaseCMSApp
        name={"Blog Content Manager"}
        basePath={"/cms"}
        authentication={cmsAuthenticator}
        collections={[blogCollection]}
        firebaseConfig={firebaseConfig}
        signInOptions={["password", "google.com"]}
      />
    </div>
  )
}
