import * as path from "path"
import type { SendMailOptions, Transporter } from "nodemailer"
import { createTransport } from "nodemailer"
import { ownerConfig } from "@/lib/firebase/firestore"
import Queue from "bull"
import cron from "node-cron"
import hbs from "nodemailer-express-handlebars"

import {
  OWNER_EMAIL,
  OWNER_NAME,
  OWNER_PHONE,
  OWNER_ADDRESS,
  EMAIL_BCC,
  EMAIL_REPLYTO,
  USER_ACCOUNT
} from "@/config"

type OwnerConfig = {
  email: string
  name: string
  phone: string
  address: string
  bcc: string[]
  reply_to: string
  time_zone: string
  user_account: string
}

type SendMailParams = {
  to: string
  subject: string
  body: string
}

type MailParams = {
  to: string
  subject: string
  template: string
  context: any
}

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
  const handlebarsOptions = {
    viewEngine: {
      extName: ".html",
      partialsDir: path.resolve("@/emails"),
      defaultLayout: false
    },
    viewPath: path.resolve("@/emails"),
    extName: ".html"
  }
  transporter.use("compile", hbs(handlebarsOptions))
  return transporter
}

function configureQueue() {
  const emailQueue = new Queue("email queue", {
    redis: {
      host: "127.0.0.1",
      port: 6379
    }
  })
  return emailQueue
}

// To add sending email job to queue: emailQueue.add({ data })
// emailQueue.process(async (job) => {
//   メールを送信
// });
// emailQueue.process(5, async (job) => {
//   5通のメールを同時に送信
// });

// To schedule sending email:
// monthly (1st date) cron.schedule('0 9 1 * *', () => { ... })
// weekly (monday) cron.schedule('0 9 * * 1', () => { ... })
// daily cron.schedule('0 9 * * *', () => {
//   const data = {
//     template: 'digest',
//     recipients: ['user1@email.com', 'user2@email.com'],
//   }
//   emailQueue.add(data);
// })

/**
 * Sends an email using the nodemailer package with OAuth2 authentication.
 *
 * @param {SendMailParams} options An object containing the recipient's
 * email address, email subject, and email body.
 *
 * @returns {Promise<void>} A promise that resolves when the
 * email is sent successfully.
 */
export default async function sendMail({
  to,
  subject,
  body
}: SendMailParams): Promise<void> {
  const owner: OwnerConfig = (await ownerConfig()) as OwnerConfig
  const transporter = configureTransporter()

  await transporter.sendMail({
    from: {
      address: owner.email,
      name: owner.name
    },
    sender: {
      address: owner.email,
      name: owner.name
    },
    replyTo: owner.reply_to,
    bcc: owner.bcc,
    to,
    subject,
    html: body,
    auth: {
      user: owner.user_account,
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

export async function sendMailTemplate({
  to,
  subject,
  template,
  context
}: MailParams): Promise<void> {
  const owner: OwnerConfig = (await ownerConfig()) as OwnerConfig
  const transporter = configureTransporter()

  await transporter.sendMail({
    from: {
      address: owner.email,
      name: owner.name
    },
    sender: {
      address: owner.email,
      name: owner.name
    },
    replyTo: owner.reply_to,
    bcc: owner.bcc,
    to,
    subject,
    auth: {
      user: owner.user_account,
      refreshToken: process.env.GOOGLE_OAUTH_REFRESH
    },
    template: name,
    context: context
  } as SendMailOptions & {
    auth: {
      user: string
      refreshToken: string
      accessToken?: string
    }
  })
}
