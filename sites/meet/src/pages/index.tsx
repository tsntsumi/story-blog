import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next"
import { useEffect } from "react"
import { z } from "zod"

import Template from "@/components/Template"
import AvailabilityPicker from "@/components/availability/AvailabilityPicker"
import {
  OFFER_OFFSET,
  OFFER_DAYS,
  MENU_ITEMS,
  DEFAULT_DURATION,
  DEFAULT_COURSE,
  OWNER_AVAILABILITY,
} from "@/config"
import { useProvider, withProvider } from "@/context/AvailabilityContext"
import getBusyTimes from "@/lib/availability/getBusyTimes"
import getPotentialTimes from "@/lib/availability/getPotentialTimes"
import {
  getDateRangeInterval,
  mapDatesToStrings,
  mapStringsToDates,
} from "@/lib/availability/helpers"
import Day from "@/lib/day"
import localeDayString from "@/lib/locale"

export type PageProps = InferGetServerSidePropsType<typeof getServerSideProps>

function Page({
  start,
  end,
  busy,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const {
    state: { duration, course, selectedDate },
    dispatch,
  } = useProvider()

  const startDay = Day.dayFromString(start)
  const endDay = Day.dayFromString(end)

  const potential = getPotentialTimes({
    start: startDay,
    end: endDay,
    duration,
    availabilitySlots: OWNER_AVAILABILITY,
    busy: mapStringsToDates(busy),
  })

  const offer = potential.filter((slot) => {
    return slot.start > new Date()
  })

  const slots = offer.filter((slot, index) => {
    return (
      slot.start >= startDay.toInterval().start &&
      slot.end <= endDay.toInterval().end
    )
  })

  // If we got this far and there's no selectedDate, set it to the first date
  // with some availability.
  useEffect(() => {
    if (!selectedDate && slots.length > 0) {
      const date: Date = slots[0].start
      const dateString: string = localeDayString(date)

      dispatch({
        type: "SET_SELECTED_DATE",
        payload: Day.dayFromString(dateString), //payload from date respecting timezone
      })
    }
    // Run once, on initial render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main className="max-w-2xl sm:mx-auto mx-4 pb-24">
      <Template />
      <AvailabilityPicker slots={slots} />
    </main>
  )
}

export async function getServerSideProps({ query }: GetServerSidePropsContext) {
  const schema = z.object({
    timeZone: z.string().optional(),
    selectedDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/u)
      .optional(),
  })

  const { timeZone, selectedDate } = schema.parse(query)

  // Offer two weeks of availability.
  const start = Day.todayWithOffset(OFFER_OFFSET)
  const end = Day.todayWithOffset(OFFER_OFFSET + OFFER_DAYS)

  const busy = await getBusyTimes(
    getDateRangeInterval({
      start,
      end,
      timeZone,
    })
  )

  return {
    props: {
      start: start.toString(),
      end: end.toString(),
      busy: mapDatesToStrings(busy),
      duration: DEFAULT_DURATION,
      course: DEFAULT_COURSE,
      ...(timeZone && { timeZone }),
      ...(selectedDate && { selectedDate }),
    },
  }
}

export default withProvider(Page)
