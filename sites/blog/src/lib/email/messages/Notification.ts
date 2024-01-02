import { OWNER_NAME } from "@/config"

const LINE_PREFIX = `<div class="gmail_default" style="font-family:arial,sans-serif">`
const LINE_SUFFIX = `</div>`

export default function NotificationEmail({
  email,
  name,
  offerName,
  offerUrl
}: {
  email: string
  name: string
  offerName: string
  offerUrl: string
}) {
  const SUBJECT = `${name}様からリクエストがありました`

  let body = `<div dir="ltr">`
  body += [
    `<b>${name}&lt;${email}&gt;</b> 様からオファーのリクエストがありました。`,
    `<br>`,
    `${offerName || ""}`,
    `<br>`,
    `${offerUrl || ""}`,
    `<br>`,
    `${OWNER_NAME}`
  ]
    .map((line) => `${LINE_PREFIX}${line}${LINE_SUFFIX}`)
    .join("")

  body += `</div>`

  return { subject: SUBJECT, body }
}
