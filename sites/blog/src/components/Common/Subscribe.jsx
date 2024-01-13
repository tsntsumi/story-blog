import Link from "next/link"

export default function Subscribe({
  className = "flex rounded-full mx-auto bg-black px-3 whitespace-nowrap py-2 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho",
  children = "お知らせを受取る"
}) {
  return (
    <div className="w-fit mx-auto mt-6 p-0 justify-center text-xs">
      <Link href="/request/newsletter?category=alchemy" className={className}>
        {children}
      </Link>
    </div>
  )
}
