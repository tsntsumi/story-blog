import { OWNER_NAME } from "@/config"

const LINE_PREFIX = `<div class="gmail_default" style="font-family:arial,sans-serif">`
const LINE_SUFFIX = `</div>`

const SUBJECT = `ご予約を受け付けています｜${OWNER_NAME}`

export default function ConfirmationEmail({
  dateSummary,
  messageText,
}: {
  dateSummary: string
  messageText: string
}) {
  let body = `<div dir="ltr">`
  body += [
    `こんにちは ${OWNER_NAME} です。`,
    `<br>`,
    `<b>${dateSummary}</b> のご予約のお申込みを受け付けました。予約と予定を確認でき次第、予約確定のメールを折り返しいたします。`,
    `<br>`,
    `今しばらくお待ち下さい。ありがとうございました。`,
    `<br>`,
    messageText && `メッセージ内容:`,
    messageText && `<br>`,
    messageText && `「${messageText}」`,
    messageText && `<br>`,
    `${OWNER_NAME}`,
  ]
    .map((line) => `${LINE_PREFIX}${line}${LINE_SUFFIX}`)
    .join("")

  body += `</div>`

  return { subject: SUBJECT, body }
}
