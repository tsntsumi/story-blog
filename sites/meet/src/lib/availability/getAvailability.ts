import {
  add,
  areIntervalsOverlapping,
  sub,
  subMinutes,
  set,
  setMinutes,
  differenceInMinutes,
} from "date-fns"

import { formatLocalTime, formatLocalDate } from "./helpers"

import type { DateTimeInterval } from "../types"
import { SLOT_PADDING, LEAD_TIME } from "../../config"

/**
 * Takes an array of potential slots and an array of busy slots and returns
 * an array of available slots.
 *
 * @param {Object} obj - An object containing potential slots,
 *  busy slots, and padding.
 *
 * @param {DateTimeInterval[]} obj.potential - Potential slots.
 * @param {DateTimeInterval[]} obj.busy - Busy slots.
 * @param {number} [obj.padding] - Padding to apply to busy slots.
 *
 * @returns {DateTimeInterval[]} An array of available slots.
 */
export default function getAvailability({
  potential: potentialParam,
  busy,
  padding = SLOT_PADDING,
  leadTime = LEAD_TIME,
}: {
  potential?: DateTimeInterval[]
  busy?: DateTimeInterval[]
  padding?: number
  leadTime?: number
}): DateTimeInterval[] {
  const openSlots: DateTimeInterval[] = []

  if (potentialParam === undefined || busy === undefined) {
    return []
  }

  // Create a DateTimeInterval that starts now and ends leadTime minutes from now
  const now = new Date()

  if (leadTime > 0) {
    const leadTimeBuffer = {
      start: now,
      end: add(now, { minutes: leadTime }),
    }

    //add leadTimeBuffer to front of busy array
    busy?.unshift(leadTimeBuffer)
  }

  const potential = potentialParam.filter((slot) => {
    return slot.start > now
  })

  const reduceSlots: any[] = []

  potential.reduce((acc, curr, index) => {
    const findBusy = (slot: any) =>
      busy?.find((b) => {
        // apply padding to busySlot .start and .end times eg:
        //   appointment is 10:00am to 11:00am,  padding is 30min
        //   10:00am - 30min = 09:30am (now includes front padding)
        //   11:00am + 30min = 11:30am (now includes back padding)
        const busyStart = sub(b.start, { minutes: padding })
        const busyEnd = add(b.end, { minutes: padding })
        return areIntervalsOverlapping(slot, { start: busyStart, end: busyEnd })
      })
    if (index === 1) {
      const found = findBusy(acc)
      reduceSlots.push({ slot: acc, busy: found })
    }
    const found = findBusy(curr)
    reduceSlots.push({ slot: curr, busy: found })
    return curr
  })

  reduceSlots.reduce((acc, curr, index) => {
    if (index === 1) {
      if (!acc.busy) {
        openSlots.push(acc.slot)
      }
    }
    const acc_end = !acc.busy ? acc.slot?.end : acc.busy?.end
    const interval = !curr.busy
      ? differenceInMinutes(curr.slot?.start, acc_end)
      : 0
    if (curr.busy) {
      // do nothing
    } else {
      if (
        (acc.busy && interval >= padding && interval <= 60 * 6) ||
        (!acc.busy && interval === padding)
      ) {
        const start = sub(curr.slot?.start, { minutes: padding })
        const end = sub(curr.slot?.end, { minutes: padding })
        curr.slot = { start, end }
      }
      openSlots.push(curr.slot)
    }
    return curr
  })

  return openSlots
}
