import { GithubIcon, InstagramIcon, LinkedInIcon } from "./SocialMediaIcons";

export default function SocialMedia() {


    // JSX
    return (
        <div className="fixed md:relative flex justify-center items-center flex-col md:flex-row z-10 left-12 lg:left-5 md:left-0 bottom-0 block-fade-in-fixed block-fade-in-700 opacity-0">
            <div className="flex flex-col md:flex-row gap-6 mb-5 md:mb-0">
                <GithubIcon />
                <InstagramIcon />
                <LinkedInIcon />
            </div>
            <div
                className="w-[1px] h-[90px] bg-sixthColor md:hidden"
            />
        </div>
    )
}
