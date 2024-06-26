import { storage } from "@/lib/firebase/app"
import { doc, getDoc } from "firebase/firestore"
import type { OwnerData, AcceptOfferData } from "@/lib/types"
import { ref, getDownloadURL } from "firebase/storage"

const LINE_PREFIX = `<div class="gmail_default" style="font-family:arial,sans-serif">`
const LINE_SUFFIX = `</div>`

const SUBJECT = (gift, name) =>
  `${gift} のお申し込みありがとうございます｜${name}`
const INTRO_VIDEO =
  "gs://story-made.appspot.com/videos/how-to-find-work-in-passionated-720p.mp4"

export default async function ConfirmationEmail({
  owner, // { name, sender, replyto }
  data // { title, url }: formData
}: {
  owner: OwnerData
  data: AcceptOfferData
}) {
  const intro = await getDownloadURL(ref(storage, INTRO_VIDEO))
  if (data.url.startsWith("gs://")) {
    const url = await getDownloadURL(ref(storage, data.url))
    data.url = url
  }
  const { email, title, url } = data
  const offer = title || "ニュースレター"

  const body = [
    `${data.email} さま`,
    `<br>`,
    `おはようございます！ ${owner.name} です。`,
    `<br>`,
    `${offer} のお申込みありがとうございます。`,
    `<br>`,
    `（ちなみに、ご挨拶の「<b>こん</b>にちは」「<b>こん</b>ばんは」は、`,
    `「<b>こん</b>」が「お客が<b>来ん</b>」に通じるため、`,
    `<br>`,
    `験を担いで朝昼晩問わず「<b>おはようございます</b>」を使わせてもらってます！`,
    `<br>`,
    `若気の至りで、舞台演劇を勉強していた頃の習慣なんです。`,
    `<br>`
  ]
  if (url) {
    body.push(
      ...[
        `<br>`,
        `お約束の${offer}は、次のリンクからダウンロードしてください。`,
        `<br>`,
        `<br>`,
        `---->8-------->8-------->8-------->8----`,
        `<br>`,
        `<a href="${data.url}">${offer}</a>`,
        `<br>`,
        `---->8-------->8-------->8-------->8----`,
        `<br>`,
        `<br>`
      ]
    )
  }
  body.push(
    ...[
      `せっかくお知り合いになれた良い機会ですので、わたしの自己紹介ビデオをご覧ください`,
      `<br>`,
      `<br>`,
      `---->8-------->8-------->8-------->8----`,
      `<br>`,
      `<a href="${intro}">自己紹介</a>`,
      `<br>`,
      `---->8-------->8-------->8-------->8----`,
      `<br>`,
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
