import Link from "next/link"

interface MenuItemPropsDesktop {
    sectionNumber: string
    title: string
    slug: string
    delay: number
}

interface MenuItemPropsMobile {
    sectionNumber: string
    title: string
    slug: string
    calbackOnclick: () => void
}

export function MenuItemDekstop({
    sectionNumber,
    title,
    slug,
    delay
}:MenuItemPropsDesktop) {
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

export function MenuItemMobile({
    sectionNumber,
    title,
    slug,
    calbackOnclick
}:MenuItemPropsMobile) {
  return (
    <li className={`flex items-center w-full p-0 m-0`}>
      <Link
        href={slug}
        onClick={calbackOnclick}
        className="flex flex-col justify-center items-center w-full no-underline text-lg sm:text-base text-sixthColor p-[10px] hover:text-fourthColor"
      >
        <span className="text-fourthColor">
          {sectionNumber}.
        </span>
        {title}
      </Link>
    </li>
  )
}
