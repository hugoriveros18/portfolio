import { GithubIcon, InstagramIcon, LinkedInIcon } from "./SocialMediaIcons";

export default function SocialMedia() {


    // JSX
    return (
        <div className="fixed justify-center items-center flex-col flex z-10 left-10 bottom-0 block-fade-in-fixed block-fade-in-700 opacity-0">
            <div className="flex flex-col gap-6 mb-5">
                <GithubIcon />
                <InstagramIcon />
                <LinkedInIcon />
            </div>
            <div
                className="w-[1px] h-[90px] bg-sixthColor"
            />
        </div>
    )
}
