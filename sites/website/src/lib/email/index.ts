import { remark } from "remark"
import html from "remark-html"
import type { SendMailOptions, Transporter } from "nodemailer"
import { createTransport } from "nodemailer"
import { ownerConfig, retrieveDocuments } from "@/lib/firebase/firestore"
import Handlebars from "handlebars"
import { httpsCallable } from "firebase/functions"
import type { OwnerConfig, EmailParams } from "@/lib/types"

/**
 * Configure the mail transporter using OAuth2 authentication.
 * @returns {Transporter} The configured mail transporter object.
 */
function configureTransporter(): Transporter {
  const transporter = createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      type: "OAuth2",
      clientId: process.env.GOOGLE_OAUTH_CLIENT_ID,
      clientSecret: process.env.GOOGLE_OAUTH_SECRET
    }
  })
  return transporter
}

async function retrieveEmailTemplate(template, context) {
  const processed = { subject: "", html: "" }
  try {
  } catch (e) {
    console.error("retrieve template error", e.toString())
    throw e
  }
  return processed
}

/**
 * Sends an email using the nodemailer package with OAuth2 authentication.
 *
 * @param {emailParams} options An object containing the recipient's
 * email address, email subject, and email body.
 *
 * @returns {Promise<void>} A promise that resolves when the
 * email is sent successfully.
 */
export default async function sendMail({
  to,
  template,
  context
}: EmailParams): Promise<void> {
  const docs = await retrieveDocuments("emails", {
    title: template,
    limit: 1
  })
  if (!docs?.length) {
    throw Error(`email template ${template} not found`)
  }
  const emailTemplate = docs?.pop()

  const subjectTemplate = Handlebars.compile(emailTemplate.subject)
  const contentTemplate = Handlebars.compile(emailTemplate.content)
  const subject = subjectTemplate(context)
  const content = contentTemplate(context)
  const processedContent = await remark().use(html).process(content)
  const processedHtml = processedContent.toString()
  const transporter = configureTransporter()
  const { name, email, reply_to, bcc, user_account } = context.owner

  await transporter.sendMail({
    from: {
      address: email,
      name: name
    },
    replyTo: reply_to,
    bcc,
    to,
    subject: subject,
    html: processedHtml,
    auth: {
      user: user_account,
      refreshToken: process.env.GOOGLE_OAUTH_REFRESH
    }
  } as SendMailOptions & {
    auth: {
      user: string
      refreshToken: string
      accessToken?: string
    }
  })
}
