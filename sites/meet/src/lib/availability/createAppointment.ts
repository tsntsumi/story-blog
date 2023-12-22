import type { AppointmentProps } from "../types"
import getAccessToken from "@/lib/availability/getAccessToken"
import fns from "date-fns"
import {
  EVENT_CALENDAR,
  OWNER_NAME,
  OWNER_EMAIL,
  OWNER_PHONE,
  OWNER_ADDRESS,
  REMINDERS,
} from "@/config"

// All available logging functions
const logger = require("firebase-functions/logger")
require("firebase-functions/logger/compat")

// Helper function to build the description
function buildDescription(location: string, messageText: string) {
  if (!OWNER_PHONE) {
    throw new Error(`OWNER_PHONE is not set.`)
  }

  const baseDescription =
    `こんにちは、${OWNER_NAME}です。ご予約のお申し込みありがとうございます。\n\n` +
    (messageText && `ご入力いただいたメッセージ: ${messageText}`)
  const phoneDetails = `当院の連絡先電話番号は ${OWNER_PHONE} ですが、こちらから電話したほうがよければ、メール (${OWNER_EMAIL}) などでご連絡下さい。`
  const meetDetails = `Googleミートによるリモート会議の情報などについても添付しております。ご確認下さい。`
  const closing = `\n\nそれではご予約の時間にお待ちしております。`

  return (
    baseDescription +
    (location === `phone`
      ? phoneDetails
      : location === `meet`
      ? meetDetails
      : "") +
    closing
  )
}

// Helper function to build the event body
function buildEventBody({
  start,
  end,
  timeZone,
  summary,
  email,
  location,
  requestId,
  name,
  messageText,
}: AppointmentProps) {
  const description = buildDescription(location, messageText)

  return {
    start: {
      dateTime: start,
      timeZone: timeZone,
    },
    end: {
      dateTime: end,
      timeZone: timeZone,
    },
    summary,
    description,
    attendees: [
      {
        email,
        displayName: name,
      },
    ],
    reminders: {
      useDefault: false,
      overrides: REMINDERS,
    },

    ...(location === `phone`
      ? { location: OWNER_PHONE ?? `TBD` }
      : location === "visit"
      ? { location: OWNER_ADDRESS }
      : {
          conferenceData: {
            createRequest: {
              requestId,
              conferenceSolutionKey: {
                type: `hangoutsMeet`,
              },
            },
          },
        }),
  }
}

export default async function createCalendarAppointment(
  props: AppointmentProps
) {
  const body = buildEventBody(props)

  const apiUrl = new URL(
    `https://www.googleapis.com/calendar/v3/calendars/${EVENT_CALENDAR}/events`
  )

  apiUrl.searchParams.set("sendNotifications", "true")
  apiUrl.searchParams.set("conferenceDataVersion", "1")

  return fetch(apiUrl, {
    cache: "no-cache",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${await getAccessToken()}`,
    },
    body: JSON.stringify(body),
  })
}
