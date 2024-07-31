"use client"
import Markdown from "react-markdown"
import remarkGfm from "remark-gfm"
import rehypeKatex from "rehype-katex"
import "katex/dist/katex.min.css"
import Media, { Image, Video } from "@/components/Assets/media"

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

import { EmailTemplate } from "@/lib/types/emailtemplate"

/**
 * This is a sample view used to render the content of a newsletter entry.
 * It is bound to the data that is modified in the form.
 */
export function EmailTemplatePreview({
  modifiedValues
}: EntityCustomViewParams<EmailTemplate>) {
  return (
    <Box>
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

        {modifiedValues?.content && (
          <Text markdownText={modifiedValues?.content} />
        )}
      </Container>
    </Box>
  )
}

const components: any = {
  img: Image,
  video: Video
}

function Text({ markdownText }: { markdownText: string }) {
  if (!markdownText) return <></>

  return (
    <Container maxWidth={"sm"}>
      <Box mt={6} mb={6}>
        <div className="blog-details markdown">
          <Markdown
            components={components}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeKatex]}
          >
            {markdownText}
          </Markdown>
        </div>
      </Box>
    </Container>
  )
}
