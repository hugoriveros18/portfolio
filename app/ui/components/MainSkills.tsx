'use client'

import Image from "next/image";
import { useState } from "react";

export default function MainSkills({
    skillsAdquire
}: {skillsAdquire: string[]}) {

    // STATES
    const [isMainSkillsActive, setIsMainSkillsActive] = useState<boolean>(false);

    // JSX
    return (
        <div className="w-full flex flex-col gap-2 pt-2">
            <div className="w-full">
                <p 
                    className="flex items-center gap-2 text-fourthColor font-semibold text-base cursor-pointer"
                    onClick={() => setIsMainSkillsActive(!isMainSkillsActive)}
                >
                    What main skills did I acquire?
                    <span>
                        <Image
                            width={20}
                            height={20}
                            alt="Down arrow"
                            src="/icons/down-arrow.svg"
                            className={`${isMainSkillsActive ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}
                        />
                    </span>
                </p>
            </div>
            <ul
                role="list"
                className="w-full mt-1 mx-0 mb-0 transition-all duration-300 overflow-hidden"
                style={{
                    maxHeight: isMainSkillsActive ? '1000px' : '0'
                }}
            >
                {
                    skillsAdquire.map((skill) => {
                        return (
                            <li
                                key={skill}
                                className="relative pl-5 sm:pl-4 mb-1 text-base sm:text-sm sm:leading-normal text-white before:content-['•'] before:absolute before:left-0 before:top-0 before:text-thirdColor before:text-3xl before:leading-[0.7]"
                            >
                                {skill}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
