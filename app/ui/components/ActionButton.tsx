import Link from "next/link";

type Variation = 'primary' | 'secondary';

interface ActionButtonProps {
    text: string
    slug: string
    variation?: Variation
    openNewTab?: boolean
}

export default function ActionButton({
    text = 'Text',
    slug = '/',
    variation = 'primary',
    openNewTab = false
}: ActionButtonProps) {
  return (
    <Link
        href={slug}
        target={openNewTab ? '_blank' : '_self'}
        className={`action-button ${variation === 'primary' ? 'px-7 py-4 text-base' : 'px-4 py-3 text-[13px]'} border-solid border-[1px] border-fourthColor text-fourthColor no-underline bg-transparent rounded-[4px] font-bold`}
    >
        {text}
    </Link>
  )
}
