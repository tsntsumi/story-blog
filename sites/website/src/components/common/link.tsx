import NextLink from "next/link"

export default function Link({
  href,
  children,
  className,
  go = "detail"
}: {
  href: string
  children: React.ReactNode
  className?: string
  go?: "back" | "detail"
}): React.ReactNode {
  return (
    <div className={`m-0 p-0 ${className}`}>
      <NextLink href={href}>
        <button
          aria-label="Go button"
          className="group/btn inline-flex items-center gap-2.5 font-medium text-primary transition-all duration-300 dark:text-white dark:hover:text-primary"
        >
          <span className="duration-300 group-hover/btn:pr-2">{children}</span>
          {go === "back" ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.2,3.5L1.7,8L0.5,6.8L7,0.3l6.5,6.5L12.3,8L7.8,3.5v10.1H6.2V3.5z"
                fill="currentColor"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </NextLink>
    </div>
  )
}
