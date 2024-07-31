import {
  buildCollection,
  buildProperty,
  buildEntityCallbacks,
  buildEnumValues
} from "firecms"

import { EmailTemplatePreview } from "./emailtemplatepreview"
import type { EmailTemplate } from "@/lib/types/emailtemplate"

const emailTemplateCallbacks = buildEntityCallbacks({
  onPreSave: ({
    collection,
    path,
    entityId,
    values,
    previousValues,
    status
  }) => {
    return values
  }
})

export const emailTemplateCollection = buildCollection<EmailTemplate>({
  name: "Email Template Entries",
  path: "emails",
  group: "Main",
  views: [
    {
      path: "preview",
      name: "Preview",
      Builder: EmailTemplatePreview
    }
  ],
  properties: {
    title: {
      name: "Template name",
      validation: { required: true },
      dataType: "string"
    },
    subject: {
      name: "Subject",
      description: "Email subject template",
      validation: { required: true },
      dataType: "string"
    },
    author: {
      name: "Author",
      validation: { required: true },
      dataType: "string",
      defaultValue: "TSUTSUMI Kikuo"
    },
    content: {
      name: "Content",
      description: "Email content template (HTML)",
      validation: { required: true },
      dataType: "string",
      columnWidth: 400,
      markdown: true
    },
    status: ({ values }) => ({
      name: "Status",
      validation: { required: true },
      dataType: "string",
      columnWidth: 140,
      enumValues: {
        published: {
          id: "published",
          label: "Published",
          disabled: !values.content
        },
        draft: "Draft"
      },
      defaultValue: "published"
    }),
    createdat: {
      name: "Created at",
      dataType: "date",
      autoValue: "on_create"
    }
  },
  callbacks: emailTemplateCallbacks
})

export default emailTemplateCollection
