import Link from "next/link"
import Image from "next/image"
import { gtag_report_conversion } from "@/lib/googleTag"
import { gtag_report_phonebooking } from "@/lib/googleTag"

export const BookWithLineTalk = (): React.ReactNode => {
  return (
    <Link href="https://lin.ee/LuKG3mc">
      <button
        aria-label="Book via LINE Talk"
        className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary items-center justify-center bg-white rounded-full px-1 py-0"
        onClick={() => gtag_report_conversion("https://lin.ee/LuKG3mc")}
      >
        <Image
          src="/images/icon/LINE_APP_iOS.png"
          alt="LINEで予約"
          width="14"
          height="14"
          className="p-0 m-0 my-1.5 inline"
        />
        <span className="p-0 m-0 whitespace-nowrap text-xs md:text-sm duration-300 group-hover/btn:pr-2 text-sm underline">
          LINEで予約
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </Link>
  )
}

export const BookWithCalendar = (): React.ReactNode => {
  return (
    <Link href="https://meet-makise.alizza-ideal.com">
      <button
        aria-label="Book via Calendar"
        className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary bg-white rounded-full px-1"
      >
        <span className="whitespace-nowrap text-[11px] md:text-sm duration-300 group-hover/btn:pr-2 underline">
          📆 カレンダーで予約
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </Link>
  )
}

export const BookWithLineTalkExt = (): React.ReactNode => {
  return (
    <Link href="https://lin.ee/LuKG3mc">
      <button
        aria-label="Book via LINE Talk"
        className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
        onClick={() => gtag_report_conversion("https://lin.ee/LuKG3mc")}
      >
        <span className="whitespace-nowrap duration-300 group-hover/btn:pr-2 text-[11px] underline">
          @712yzusq
          <Image
            src="/images/icon/ext-link.svg"
            width="9"
            height="9"
            alt="external link"
            className="inline-block"
          />
        </span>
      </button>
    </Link>
  )
}

export const BookWithPhoneCall = (): React.ReactNode => {
  return (
    <Link href="tel:0292240076">
      <button
        aria-label="Get the Plan button"
        className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary bg-white rounded-full px-1"
        onClick={() => gtag_report_phonebooking("tel:0292240076")}
      >
        <span className="whitespace-nowrap text-[11px] md:text-sm duration-300 group-hover/btn:pr-2 underline">
          ☏ 電話で予約
        </span>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.4767 6.16701L6.00668 1.69701L7.18501 0.518677L13.6667 7.00034L7.18501 13.482L6.00668 12.3037L10.4767 7.83368H0.333344V6.16701H10.4767Z"
            fill="currentColor"
          />
        </svg>
      </button>
    </Link>
  )
}
