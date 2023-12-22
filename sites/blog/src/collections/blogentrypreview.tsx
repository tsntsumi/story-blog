"use client"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import Media, { Image, Video } from "@/components/Media"

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
  return (
    <Box>
      <Media
        alt={"Header"}
        style={{
          width: "100%",
          maxHeight: "300px",
          objectFit: "cover"
        }}
        width={320}
        height={240}
        src={modifiedValues?.hero}
      />

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
          <Image src={path} alt={"Content image"} width={250} height={250} />
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
          <Video src={path} width={250} height={250} />
        </Box>
      ))}
    </Box>
  )
}

const components: any = {
  Image: Image,
  Video: Video,
  Media: Media
}

function Text({ markdownText }: { markdownText: string }) {
  if (!markdownText) return <></>

  return (
    <Container maxWidth={"sm"}>
      <Box mt={6} mb={6}>
        <Markdown
          components={components}
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeKatex]}
        >
          {markdownText}
        </Markdown>
      </Box>
    </Container>
  )
}
