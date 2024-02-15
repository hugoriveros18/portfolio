'use client'

import Image from "next/image";
import SectionTitle from "../components/SectionTitle";
import { currentTechnologies } from "../utils/technologies";
import useElementOnScreen from "../hooks/useElementOnScreen";
import { useRef } from "react";
import useScreenWidth from "../hooks/useScreenWidth";
import { visibilityOptionsDesktopTablet, visibilityOptionsPhone } from "../utils/sectionsVisibilityOptions";

export default function AboutMe() {

    // DEVICE
    const device = useScreenWidth()

    // REFERENCES
    const aboutMeRef = useRef<any>(null);

    // IS VISIBLE ON SCREEN
    const isVisible = useElementOnScreen({
        options: device === 'phone' ? visibilityOptionsPhone : visibilityOptionsDesktopTablet,
        containerRef: aboutMeRef
    });

    //COMPANIES
    const companyLink = (name:string, url:string) => {
        return (
            <span>
                <a 
                    href={url}
                    target="_blank"
                    className="relative text-thirdColor font-bold text-hover-underline"
                >
                    {name}
                </a>
            </span>
        )
    }

    // JSX
    return (
        <div 
            className={`py-[100px] sm:py-[50px] opacity-0 ${isVisible ? 'block-fade-in-section' : undefined}`}
            ref={aboutMeRef}
        >
            <SectionTitle
                numeration="01."
                title="About Me"
                isReversed={false}
            />
            <div className="w-full grid grid-cols-aboutMe lg:flex lg:flex-col gap-5 lg:max-w-[95%] lg:mx-auto">

                {/* INFORMATION */}
                <div className="w-full">
                    <p className="text-base text-fifthColor">
                        Hi! My name is Hugo and I love creating software that <span className="text-thirdColor font-bold">positively impacts {`people's`} lives</span>. Since I started learning web development back in 2021 {`I'm`} constantly amazed by the impact of technology around the world, {`that's`} one of the reasons why I love my profession.
                    </p>
                    <p className="text-base text-fifthColor mt-3">
                        {`I'm`} passionate frontend developer committed to creating high quality applications focused on results and happy customers. Currently {`I'm`} part of {companyLink('ITGlobers', 'https://www.itglobers.com/')}, a leading software agency in Latin America focused in ecommerce, where I provide support and custom developments to large companies like {companyLink('Panamericana', 'https://www.panamericana.com.co/')} and {companyLink('Whitebird', 'https://www.whitebird.ca/')}.
                    </p>
                    <p className="text-base text-fifthColor mt-3">
                        {`This are some of the technologies I've been working with recently:`}
                    </p>
                    <ul className="w-full grid grid-cols-3 mt-2 list-none">
                        {
                            currentTechnologies.map(tech => {
                                return (
                                    <li
                                        key={tech}
                                        className="relative pl-5 sm:pl-4 mb-2 text-base text-white before:content-['▹'] before:absolute before:left-0 before:top-1/2 before:translate-y-[-50%] before:text-thirdColor"
                                    >
                                        {tech}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                
                {/* PROFILE IMAGE */}
                <div className="w-full flex justify-center sm:max-w-[80%] sm:mx-auto">
                    <div className="relative max-w-[330px] max-h-[330px] flex before:absolute before:content-[''] before:w-[100%] before:h-[100%] before:border-solid before:translate-x-5 before:translate-y-5 before:border-[2px] before:border-thirdColor before:rounded-2xl">
                        <Image
                            src='/profile-pic-web.png'
                            alt="Profile picture"
                            width={300}
                            height={300}
                            className="relative w-full rounded-2xl object-cover"
                        />
                    </div>
                </div>
                
            </div>
        </div>
    )
}
