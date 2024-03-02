import { OWNER_NAME } from "@/config"

const LINE_PREFIX = `<div class="gmail_default" style="font-family:arial,sans-serif">`
const LINE_SUFFIX = `</div>`

export default function NotificationEmail({
  email,
  title,
  url,
  category
}: {
  email: string
  title: string
  url: string
}) {
  const USER = email?.split("@")?.at(0)
  const SUBJECT = `${USER}さまからオファーの受諾がありました`

  let body = `<div dir="ltr">`
  body += [
    `<b>${USER}&lt;${email}&gt;</b> 様からオファーの受諾がありました。`,
    `<br>`,
    `${title || ""}`,
    `<br>`,
    `${url || ""}`,
    `<br>`,
    `${OWNER_NAME}`
  ]
    .map((line) => `${LINE_PREFIX}${line}${LINE_SUFFIX}`)
    .join("")

  body += `</div>`

  return { subject: SUBJECT, body }
}
