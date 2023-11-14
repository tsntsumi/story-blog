import React, { useEffect, useState } from "react"
import Image from "next/image"

import {
  Box,
  CardActionArea,
  CardContent,
  CircularProgress,
  Container,
  Paper,
  Typography
} from "@mui/material"
import {
  Entity,
  EntityCustomViewParams,
  EntityReference,
  EntityValues,
  ErrorView,
  Markdown,
  useDataSource,
  useStorageSource
} from "firecms"

import { BlogEntry } from "@/types/blog"

/**
 * This is a sample view used to render the content of a blog entry.
 * It is bound to the data that is modified in the form.
 */
export function BlogEntryPreview({
  modifiedValues
}: EntityCustomViewParams<BlogEntry>) {
  const storage = useStorageSource()

  const [headerUrl, setHeaderUrl] = useState<string | undefined>()
  useEffect(() => {
    if (modifiedValues?.hero) {
      storage
        .getDownloadURL(modifiedValues.hero)
        .then((res) => setHeaderUrl(res.url))
    }
  }, [storage, modifiedValues?.hero])

  return (
    <Box>
      {headerUrl && (
        <Image
          alt={"Header"}
          style={{
            width: "100%",
            maxHeight: "300px",
            objectFit: "cover"
          }}
          width={320}
          height={240}
          src={headerUrl}
        />
      )}

      <Container
        maxWidth={"md"}
        sx={{
          alignItems: "center",
          justifyItems: "center",
          display: "flex",
          flexDirection: "column"
        }}
      >
        {modifiedValues?.title && (
          <Typography
            variant={"h3"}
            sx={{
              marginTop: "40px",
              marginBottom: "20px"
            }}
          >
            {modifiedValues.title}
          </Typography>
        )}

        {modifiedValues?.content &&
          modifiedValues.content
            .filter((e: any) => !!e)
            .map((entry: any, index: number) => {
              if (entry.type === "text")
                return (
                  <Text
                    key={`preview_text_${index}`}
                    markdownText={entry.value}
                  />
                )
              if (entry.type === "images")
                return (
                  <Images
                    key={`preview_images_${index}`}
                    storagePaths={entry.value}
                  />
                )
              if (entry.type === "videos")
                return (
                  <Videos
                    key={`preview_images_${index}`}
                    storagePaths={entry.value}
                  />
                )
              return (
                <ErrorView
                  key={`preview_images_${index}`}
                  error={"Unexpected value in blog entry"}
                />
              )
            })}
      </Container>
    </Box>
  )
}

export function Images({ storagePaths }: { storagePaths: string[] }) {
  if (!Array.isArray(storagePaths)) return <></>
  return (
    <Box display="flex">
      {storagePaths.map((path, index) => (
        <Box
          p={2}
          m={1}
          key={`images_${index}`}
          sx={{
            width: 250,
            height: 250
          }}
        >
          <StorageImage storagePath={path} width={250} height={250} />
        </Box>
      ))}
    </Box>
  )
}

export function Videos({ storagePaths }: { storagePaths: string[] }) {
  if (!Array.isArray(storagePaths)) return <></>
  return (
    <Box display="flex">
      {storagePaths.map((path, index) => (
        <Box
          p={2}
          m={1}
          key={`images_${index}`}
          sx={{
            width: 250,
            height: 250
          }}
        >
          <StorageVideo storagePath={path} width={250} height={250} />
        </Box>
      ))}
    </Box>
  )
}

export function StorageImage({
  storagePath,
  width,
  height
}: {
  storagePath: string
  width: number
  height: number
}) {
  const storage = useStorageSource()
  const [url, setUrl] = useState<string | undefined>()
  useEffect(() => {
    if (storagePath) {
      storage.getDownloadURL(storagePath).then((res) => setUrl(res.url))
    }
  }, [storage, storagePath])

  if (!storagePath) return <></>

  return (
    <div className="mx-auto">
      <Image
        alt={"Generic"}
        className="w-full h-full object-contain"
        width={width}
        height={height}
        src={url}
      />
    </div>
  )
}

export function StorageVideo({
  storagePath,
  width,
  height
}: {
  storagePath: string
  width: number
  height: number
}) {
  const storage = useStorageSource()
  const [url, setUrl] = useState<string | undefined>()
  useEffect(() => {
    if (storagePath) {
      storage.getDownloadURL(storagePath).then((res) => setUrl(res.url))
    }
  }, [storage, storagePath])

  if (!storagePath) return <></>

  return (
    <div className="mx-auto">
      <video
        controls
        muted={true}
        autoPlay={true}
        className="w-full h-full object-contain"
        width={width}
        height={height}
        src={url}
      />
    </div>
  )
}

function Text({ markdownText }: { markdownText: string }) {
  if (!markdownText) return <></>

  return (
    <Container maxWidth={"sm"}>
      <Box mt={6} mb={6}>
        <Markdown source={markdownText} />
      </Box>
    </Container>
  )
}
