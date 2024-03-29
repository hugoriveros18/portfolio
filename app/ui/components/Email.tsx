import Link from "next/link";

export default function Email() {

    //JSX 
    return (
        <div className="fixed md:relative justify-center items-center flex-col flex z-10 right-12 md:right-0 lg:right-5 bottom-0 block-fade-in-fixed opacity-0">
            <Link
                href="mailto:hugoriverosfajardo@gmail.com"
                className="email-text text-xs text-sixthColor no-underline my-5 md:mt-0 py-[10px] px-[10px] hover:translate-y-[-8px] hover:text-fourthColor transition-all duration-300"
            >
                hugoriverosfajardo@gmail.com
            </Link>
            <div
                className="w-[1px] h-[90px] bg-sixthColor md:hidden"
            />
        </div>
    )
}
