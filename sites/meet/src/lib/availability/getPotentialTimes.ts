/** @file
 * この関数は、予約可能な潜在的な時間枠（DateTimeInterval）オブジェクトの
 * 配列を返す。１周間の１日の営業時間 OWNER_AVAILABILITY オブジェクトを使
 * 用して、休み時間や始業前、就業後を除く営業時間内で予約枠配列を返す。
 */
import {
  addMinutes,
  eachDayOfInterval,
  areIntervalsOverlapping,
  set,
} from "date-fns"

import type Day from "../day"
import type { AvailabilitySlotsMap, DateTimeInterval } from "../types"
import mergeOverlappingIntervals from "./mergeOverlappingIntervals"
import { OWNER_TIMEZONE } from "@/config"

export default function getPotentialTimes({
  start,
  end,
  duration,
  availabilitySlots,
}: {
  start: Day
  end: Day
  duration: number
  availabilitySlots: AvailabilitySlotsMap
}): DateTimeInterval[] {
  const intervals: DateTimeInterval[] = []

  if (start >= end || duration <= 0) {
    return intervals
  }

  // Sort the slots by start time
  const days = eachDayOfInterval({
    start: start.toInterval(OWNER_TIMEZONE).start,
    end: end.toInterval(OWNER_TIMEZONE).end,
  })
  days.forEach((day) => {
    const dayOfWeek = day.getDay()

    const slotsForDay = availabilitySlots[dayOfWeek] ?? []

    for (const slot of slotsForDay) {
      const slotStart = set(day, {
        hours: slot.start.hour,
        minutes: slot.start.minute,
      })

      const slotEnd = set(day, {
        hours: slot.end.hour,
        minutes: slot.end.minute,
      })

      let currentIntervalStart = slotStart

      while (
        currentIntervalStart < slotEnd &&
        addMinutes(currentIntervalStart, duration) <= slotEnd
      ) {
        const currentIntervalEnd = addMinutes(currentIntervalStart, duration)

        intervals.push({
          start: currentIntervalStart,
          end: currentIntervalEnd,
        })

        currentIntervalStart = currentIntervalEnd
      }
    }
  })

  return mergeOverlappingIntervals(intervals)
}
