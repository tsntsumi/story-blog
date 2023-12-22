import Time from "./TimeButton"
import type { DateTimeInterval } from "@/lib/types"
import { getHours, getMinutes } from "date-fns"

type TimeListProps = {
  availability: DateTimeInterval[]
}
export default function TimeList({ availability }: TimeListProps) {
  return (
    <div className="grid grid-cols-2 gap-2 items-start">
      <div className="grid grid-rows-max">
        <div>午前</div>
        {availability
          ?.filter((slot) => getHours(slot.start) <= 12)
          .map((slot) => (
            <Time
              key={slot.start.toISOString() + slot.end.toISOString()}
              time={slot}
            />
          ))}
      </div>
      <div className="grid grid-rows-max">
        <div>午後</div>
        {availability
          ?.filter((slot) => getHours(slot.start) > 12)
          .map((slot) => (
            <Time
              key={slot.start.toISOString() + slot.end.toISOString()}
              time={slot}
            />
          ))}
      </div>
    </div>
  )
}
