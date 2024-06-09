import type { SendMailOptions, Transporter } from "nodemailer"
import { createTransport } from "nodemailer"
import type Queue from "bull"
import hbs from "nodemailer-express-handlebars"
import cron from "node-cron"

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
  replyTo: string
  timeZone: string
  userAccount: string
}

type SendMailParams = {
  to: string
  subject: string
  body: string
}

/**
 * Configure the mail transporter using OAuth2 authentication.
 * @returns {Transporter} The configured mail transporter object.
 */
function configureTransporter(): Transporter {
  const transpoter = createTransport({
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
}

function configureQueue(): Queue {
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
async function sendMail({ to, subject, body }: SendMailParams): Promise<void> {
  const transporter = configureTransporter()

  await transporter.sendMail({
    from: {
      address: OWNER_EMAIL,
      name: OWNER_NAME
    },
    sender: {
      address: OWNER_EMAIL,
      name: OWNER_NAME
    },
    replyTo: EMAIL_REPLYTO,
    bcc: EMAIL_BCC,
    to,
    subject,
    html: body,
    auth: {
      user: USER_ACCOUNT,
      refreshToken: process.env.GOOGLE_OAUTH_REFRESH
    }
  } as SendMailOptions & { auth: { user: string; refreshToken: string; accessToken?: string } })
}

export default sendMail
