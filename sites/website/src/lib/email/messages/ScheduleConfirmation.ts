import { storage } from "@/lib/firebase/app"
import { doc, getDoc } from "firebase/firestore"
import type { OwnerData, ScheduleData } from "@/lib/types"
import { ref, getDownloadURL } from "firebase/storage"

const LINE_PREFIX = `<div class="gmail_default" style="font-family:arial,sans-serif">`
const LINE_SUFFIX = `</div>`

const SUBJECT = (offer, name) =>
  `${offer} のお申し込みありがとうございます｜${name}`
const INTRO_VIDEO =
  "gs://story-made.appspot.com/videos/how-to-find-work-in-passionated-720p.mp4"

export default async function ConfirmationEmail({
  owner, // { name, sender, replyto }
  data // { name, email }: formData
}: {
  owner: OwnerData
  data: ScheduleData
}) {
  const intro = await getDownloadURL(ref(storage, INTRO_VIDEO))
  const { email, name } = data
  const offer = "無料相談会をスケジュール"

  const body = [
    `${data.name} さま`,
    `<br>`,
    `おはようございます！ ${owner.name} です。`,
    `<br>`,
    `${offer} のお申込みありがとうございます。`,
    `<br>`,
    `無料相談会のご希望日時は、<a href="https://meet.alizza-ideal.com">こちらのリンク</a>からお選びいただけます。`,
    `<br>`,
    `（準備がございますので、１週間後からの日時をお選びください。）`,
    `<br>`,
    `<a href="https://meet.alizza-ideal.com">https://meet.alizza-ideal.com</a>`,
    `<br>`,
    `それでは、あなたの成功を願っています`,
    `<br>`,
    `--- ${owner.name}`
  ]

  body.map((line) => `${LINE_PREFIX}${line}${LINE_SUFFIX}`)

  body.unshift(`<div dir="ltr">`)
  body.push(`</div>`)

  return { subject: SUBJECT(offer, owner.name), body: body.join("") }
}
