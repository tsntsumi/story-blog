import clsx from "clsx"

import { ALLOWED_DURATIONS, MENU_ITEMS } from "@/config"
import { useProvider } from "@/context/AvailabilityContext"

export default function DurationPicker() {
  const {
    state: { duration },
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
                type: "SET_DURATION",
                payload: item.duration,
              })
            }}
            type="button"
            className={clsx(
              "relative inline-flex items-center px-3 py-2 text-sm font-semibold ring-1 ring-inset focus:z-10 outline-accent-600",
              {
                "rounded-l-md": i === 0,
                "rounded-r-md": i === MENU_ITEMS.length - 1,
                "-ml-px": i > 0,
                "bg-white text-gray-900 ring-gray-300 hover:bg-gray-200":
                  item.duration !== duration,
                "bg-accent-500 text-white ring-accent-600 shadow-inner shadow-accent-900":
                  item.duration === duration,
              }
            )}>
            <>
              {item.name}: {item.duration}分
            </>
          </button>
        ))}
      </div>
    </div>
  )
}
