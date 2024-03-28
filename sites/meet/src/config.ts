import type { AvailabilitySlotsMap, MenuItem } from "./lib/types"

// 選択可能なスロット
export const MENU_ITEMS: MenuItem[] = [
  {
    name: ["無料相談会"],
    course: "business-driving-school",
    duration: 120,
  },
]

export const DURATION_TO_NAME = (duration: number) =>
  MENU_ITEMS.find((item) => item.duration === duration)?.name?.join("")
export const COURSE_TO_NAME = (course: string) =>
  MENU_ITEMS.find((item) => item.course === course)?.name?.join("")
export const DURATION_TO_COURSE = (duration: number) =>
  MENU_ITEMS.find((item) => item.duration === duration)?.course || ""
export const COURSE_TO_DURATION = (course: string) =>
  MENU_ITEMS.find((item) => item.course === course)?.duration || 0

export const DEFAULT_DURATION = MENU_ITEMS[0].duration
export const DEFAULT_COURSE = DURATION_TO_COURSE(DEFAULT_DURATION) || ""

export const OWNER_EMAIL = "meet@alizza-ideal.com"
export const FROM_EMAIL = OWNER_EMAIL
export const OWNER_NAME = "Alizza Ideal"
export const OWNER_PHONE = "+81 70 9034 223 1"
export const OWNER_ADDRESS = "〒311-1132 茨城県水戸市 東前町 1397番地の2"
export const USER_ACCOUNT = "kikuo@alizza-ideal.com"
export const EMAIL_REPLYTO = OWNER_EMAIL
export const EMAIL_BCC = []

export const EVENT_CALENDAR =
  "c_b971c39b68fae61a5607ed5b81b49e5e5e6dc68dbd329c6f6e0d549b836f5665@group.calendar.google.com"

// 空き状況を確認するカレンダーのID（primary はメインのカレンダー）
export const CALENDARS_TO_CHECK = [
  EVENT_CALENDAR,
  "tsutsumi.kikuo@gmail.com",
  "primary",
]

export const WEEKDAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]

// 使用可能なスロットとスロットの間の猶予時間
// この猶予時間がない場合、予約済みと表示される
export const SLOT_PADDING = 30

// タイムゾーン（TODO:国際的なリモートミーティングで使用）
export const OWNER_TIMEZONE = "Asia/Tokyo"

export const LEAD_TIME = 120

export const OFFER_OFFSET = 7
export const OFFER_DAYS = 28

// １日の営業時間
const DEFAULT_WORKDAY = [
  {
    start: {
      hour: 8,
      minute: 0,
    },
    end: {
      hour: 11,
      minute: 30,
    },
  },
  {
    start: {
      hour: 14,
    },
    end: {
      hour: 17,
    },
  },
  {
    start: {
      hour: 18,
    },
    end: {
      hour: 21,
    },
  },
]
const WEEKEND_WORKINGTIME = [
  {
    start: {
      hour: 10,
      minute: 0,
    },
    end: {
      hour: 11,
      minute: 30,
    },
  },
  {
    start: {
      hour: 14,
    },
    end: {
      hour: 17,
    },
  },
]

// 一週間のそれぞれの曜日の営業時間（0 = 日、1 = 月、6 = 土）
// 指定しなければ休業日
export const OWNER_AVAILABILITY: AvailabilitySlotsMap = {
  0: WEEKEND_WORKINGTIME,
  1: DEFAULT_WORKDAY,
  2: DEFAULT_WORKDAY,
  3: DEFAULT_WORKDAY,
  4: DEFAULT_WORKDAY,
  5: DEFAULT_WORKDAY,
  6: WEEKEND_WORKINGTIME,
}

export const OWNER_LOCALE = "ja-JP"

export const LOCAL_DATE_OPTIONS: Intl.DateTimeFormatOptions = {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "short",
}

export const LOCAL_TIME_OPTIONS: Intl.DateTimeFormatOptions = {
  hour: "2-digit",
  minute: "2-digit",
}

export const REMINDERS = [
  { method: "email", minutes: 24 * 60 }, // Emailで１日前
  { method: "email", minutes: 60 }, // Emailで１時間前
  { method: "popup", minutes: 30 }, // ポップアップで３０分前
]
