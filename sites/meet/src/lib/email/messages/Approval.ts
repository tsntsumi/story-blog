import { OWNER_NAME } from "@/config"

const LINE_PREFIX = `<div class="gmail_default" style="font-family:arial,sans-serif">`
const LINE_SUFFIX = `</div>`

export default function ApprovalEmail({
  email,
  name,
  location,
  dateSummary,
  approveUrl,
  timeZone,
  messageText,
}: {
  dateSummary: string
  email: string
  name: string
  location: string
  approveUrl: string
  timeZone: string
  messageText: string
}) {
  const SUBJECT = `${name}様から予約が申し込まれました`

  const declineUrl = `mailto:${encodeURI(email)}?subject=${encodeURIComponent(
    `Re: ご予約のお申し込みについて`
  )}&body=${encodeURIComponent(
    `こんにちは。${OWNER_NAME}です。

  ${dateSummary} の予定を確認したところ、
  大変申し訳ありませんが、他の予定が入っておりました。

  別の日時をお選びいただけると幸いです。`
  )}`

  let body = `<div dir="ltr">`
  body += [
    `<b>${name}</b> 様から <b>${dateSummary}</b> のご予約をお申し込みいただきました。`,
    `<br>`,
    `予定を確認して、申込みを受け付けるか、お断りするか選んでタップして下さい。`,
    `<br>`,
    `<br>`,
    messageText && `${name}様からのメッセージ`,
    messageText,
    `<br>`,
    `<b><a href=${approveUrl}>申込みを受け付けて予約をカレンダーに追加する</a></b>`,
    `<br>`,
    `<b><a href=${declineUrl}>申込みをお断りするメールを送る</a></b>`,
  ]
    .map((line) => `${LINE_PREFIX}${line}${LINE_SUFFIX}`)
    .join("")

  body += `</div>`

  return { subject: SUBJECT, body }
}
