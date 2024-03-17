import clsx from "clsx"

import { MENU_ITEMS } from "@/config"
import { useProvider } from "@/context/AvailabilityContext"
import type { AvailabilitySlotsMap, MenuItem } from "@/lib/types"

export default function DurationPicker() {
  const {
    state: { duration, course },
    dispatch,
  } = useProvider()

  return (
    <div>
      <div className="isolate inline-flex rounded-md shadow-sm mt-1">
        {MENU_ITEMS.map((item, i) => (
          <button
            key={item.duration}
            onClick={() => {
              dispatch({
                type: "SET_COURSE",
                payload: item.course,
              })
            }}
            type="button"
            className={clsx(
              "relative inline-flex items-start px-[2%] py-2 text-sm base:text-base font-semibold ring-1 ring-inset focus:z-10 outline-accent-600",
              {
                "rounded-l-md": i === 0,
                "rounded-r-md": i === MENU_ITEMS.length - 1,
                "-ml-px": i > 0,
                "bg-white text-gray-900 ring-gray-300 hover:bg-gray-200":
                  item.course !== course,
                "bg-accent-500 text-white ring-accent-600 shadow-inner shadow-accent-900":
                  item.course === course,
              }
            )}>
            <div className="flex flex-wrap justify-center">
              <div className="inline-flex justify-center flex-wrap ">
                {item.name.map((n, i) => (
                  <span key={i} className="inline">
                    {n}
                  </span>
                ))}
              </div>
              {item.duration}分
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
