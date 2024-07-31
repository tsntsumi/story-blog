import { OWNER_NAME } from "@/config"

const LINE_PREFIX = `<div class="gmail_default" style="font-family:arial,sans-serif">`
const LINE_SUFFIX = `</div>`

const SUBJECT = `あなたはブロックされています｜電子システムの目的外使用です`

export default function BlockedNotifyEmail({
  dateSummary,
  messageText,
  course,
  courseName,
  duration,
}: {
  dateSummary: string
  messageText: string
  course: string
  courseName: string
  duration: string
}) {
  let body = `<div dir="ltr">`
  body += [
    `あなたはブロックされています。電子システムの目的外使用です。`,
    `<br>`,
    `不正アクセス禁止法、特定電子メール法、電子計算機損壊等業務妨害罪などにつながる恐れのあるものとして記録しました。`,
    `<br>`,
    `あなたの目的外使用によって、業務に損害が発生しています。`,
    `以後、同様の行為を繰り返さないでください。`,
    `<br>`,
    `<hr>`,
    messageText && `いただいたメッセージの内容:`,
    messageText && `<hr>`,
    messageText && `「${messageText}」`,
    messageText && `<br>`,
    messageText && `<hr>`,
    `<br>`,
    `${OWNER_NAME}`,
  ]
    .map((line) => `${LINE_PREFIX}${line}${LINE_SUFFIX}`)
    .join("")

  body += `</div>`

  return { subject: SUBJECT, body }
}
