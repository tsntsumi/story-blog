import { storage } from "@/lib/firebase/app"
import { ref, getDownloadURL } from "firebase/storage"
//const logger = require("firebase-functions/logger")
//require("firebase-functions/logger/compat")

const LINE_PREFIX = `<div class="gmail_default" style="font-family:arial,sans-serif">`
const LINE_SUFFIX = `</div>`

const SUBJECT = (gift, name) =>
  `${gift} のお申し込みありがとうございます｜${name}`
const INTRO_VIDEO =
  "gs://story-made.appspot.com/videos/how-to-find-work-in-passionated-720p.mp4"

export default async function ConfirmationEmail({
  owner, // { name, sender, replyto }
  data // { title, url }: formData
}) {
  const intro = await getDownloadURL(ref(storage, INTRO_VIDEO))
  const { email, title, url } = data
  const offer = data.title || "ニュースレター"

  const body = [
    `${data.email} さま`,
    `<br>`,
    `こんにちは ${owner.name} です。`,
    `<br>`,
    `${offer} のお申込みありがとうございます。`,
    `<br>`
  ]
  if (url) {
    body.push(
      ...[
        `詳細は、こちらをご覧ください。`,
        `<br>`,
        `---->8---->8---->8---->8----`,
        `<br>`,
        `${data.url}`,
        `<br>`
      ]
    )
  }
  body.push(
    ...[
      `せっかくお知り合いになれた良い機会ですので、わたしの自己紹介ビデオをご覧ください`,
      `<br>`,
      `---->8---->8---->8---->8----`,
      `<br>`,
      `<a href="${intro}">自己紹介</a>`,
      `<br>`,
      `---->8---->8---->8---->8----`,
      `<br>`,
      `それでは、あなたの成功を願っています`,
      `<br>`,
      `--- ${owner.name}`
    ]
  )
  body.map((line) => `${LINE_PREFIX}${line}${LINE_SUFFIX}`)

  body.unshift(`<div dir="ltr">`)
  body.push(`</div>`)

  return { subject: SUBJECT(offer, owner.name), body: body.join("") }
}
