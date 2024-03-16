import { store } from "@/lib/firebase/app"
import { doc, getDoc } from "firebase/firestore"
import type { OwnerData,  } from "@/lib/types"

const LINE_PREFIX = `<div class="gmail_default" style="font-family:arial,sans-serif">`
const LINE_SUFFIX = `</div>`

export default function ScheduleNotificationEmail(
  owner: OwnerData,
  data: 
): { subject: string; body: string } {
  const { title, url, category, email } = data
  const USER = email?.split("@")?.at(0)
  const SUBJECT = `${USER}さまから ${category}のお申し込みがありました`

  let body: string = `<div dir="ltr">`
  body += [
    `<b>${USER}&lt;${email}&gt;</b> 様から ${category}のお申し込みがありました。`,
    `<br>`,
    `TITLE: ${title || ""}`,
    `<br>`,
    `URL: ${url || ""}`,
    `<br>`,
    `CATEGORY: ${category || ""}`,
    `<br>`,
    `<hr>`,
    `${owner.name}`
  ]
    .map((line) => `${LINE_PREFIX}${line}${LINE_SUFFIX}`)
    .join("")

  body += `</div>`

  return { subject: SUBJECT, body }
}
