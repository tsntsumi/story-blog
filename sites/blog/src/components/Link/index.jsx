import NextLink from "next/link"

export default function Link({ href, children }) {
  return (
    <div className="m-0 p-0">
      <NextLink href={href}>
        <button
          aria-label="Go button"
          className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300 group-hover/btn:pr-2">{children}</span>
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
      </NextLink>
    </div>
  )
}
