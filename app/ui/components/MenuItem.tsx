import Link from "next/link"

interface MenuItemProps {
    sectionNumber: string
    title: string
    slug: string
    delay: number
}

export default function MenuItem({
    sectionNumber,
    title,
    slug,
    delay
}:MenuItemProps) {
  return (
    <li className={`flex items-center p-0 m-0 opacity-0 block-fade-in-down block-fade-in-down-${delay}`}>
      <Link
        href={slug}
        className="flex gap-1 no-underline text-[13px] text-sixthColor p-[10px] hover:text-fourthColor"
      >
        <span className="text-fourthColor">
          {sectionNumber}.
        </span>
        {title}
      </Link>
    </li>
  )
}
