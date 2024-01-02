import { CALENDARS_TO_CHECK, OWNER_TIMEZONE } from "../../config"
import type { DateTimeInterval } from "../types"
import getAccessToken from "./getAccessToken"

export default async function addWatch() {
  const result = await Promise.all(CALENDARS_TO_CHECK.map(async (cal) => {
    const response = await fetch(
      `https://www.googleapis.com/calendar/v3/calendars/${cal}/events/watch`,
    {
      cache: "no-cache",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${await getAccessToken()}`,
      },
      body: JSON.stringify({
        id: "meet-alizza-ideal", // channel id
        type: "web_hook",
        address: "https://meet.alizza-ideal.com/refresh-availability",
      }),
    }
    )
}
