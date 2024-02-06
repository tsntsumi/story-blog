import clsx from "clsx"
import type { ButtonHTMLAttributes, DetailedHTMLProps } from "react"
import { twMerge } from "tailwind-merge"

import { useProvider } from "@/context/AvailabilityContext"
import { useRouter } from "next/router"
import Day from "@/lib/day"

type DayProps = {
  date: Day
  availabilityScore: number
  hasAvailability: boolean
  morningCount: number
  afternoonCount: number
} & DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>

export default function DayButton({
  date,
  availabilityScore,
  hasAvailability,
  morningCount,
  afternoonCount,
  ...props
}: DayProps): JSX.Element {
  const {
    state: { start, end, selectedDate },
    dispatch,
  } = useProvider()
  const router = useRouter()

  const now = Day.todayWithOffset(0)

  // Facts about the current date used to apply formatting/logic later.

  const isToday = date.toString() === now.toString()

  const isSelected = selectedDate
    ? date.toString() === selectedDate.toString()
    : false

  const isDisabled = !hasAvailability

  const openSlotCount = []

  return (
    <button
      type="button"
      className={twMerge(
        clsx(
          "px-4 py-3 transition-all flex flex-col items-center outline-accent-600 relative",
          props.className,
          {
            "font-semibold bg-slate-100  text-slate-800 hocus:border-accent-500 hocus:shadow-sm hocus:shadow-accent-100 hocus:-mt-0.5 hocus:z-10 hocus:mb-0.5 border border-transparent":
              !isDisabled,
            "bg-white text-gray-300": isDisabled,
            "bg-accent-500": isSelected && !isToday,
            "bg-accent-600 hover:bg-accent-500": isSelected && isToday,
            "text-white": isSelected,
          }
        )
      )}
      disabled={isDisabled}
      aria-pressed={isSelected}
      aria-disabled={isDisabled}
      aria-label={`${isToday ? "Today" : ""} ${
        isDisabled ? "Unavailable" : "Available"
      } date ${date.toString()} in calendar`}
      onClick={() => {
        dispatch({
          type: "SET_SELECTED_DATE",
          payload: date,
        })
        router.push("#time-list")
      }}
      {...props}>
      <div className="flex flex-col items-center justify-between leading-none">
        <p
          className={clsx(
            "font-semibold text-[0.55rem] leading-0 h-3 items-center flex",
            { "text-white": isSelected, "text-accent-700": !isSelected }
          )}>
          {isToday && "TODAY"}
        </p>
        <time className="text-base flex leading-0 items-center">
          {date.getDay()}
        </time>
        <figure
          className="flex items-center space-x-0.5 h-3 justify-center"
          aria-hidden="true">
          {[morningCount, afternoonCount].map((count, index) => (
            <div
              key={`availability-bar-${index}`}
              className={clsx("rounded-full w-1 h-1", {
                "bg-red-300": !count,
                "bg-green-600": count > 0,
              })}
            />
          ))}
        </figure>
      </div>
    </button>
  )
}
