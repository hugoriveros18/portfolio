'use client'

import { useRef } from "react";
import ExperienceTabs from "../components/ExperienceTabs";
import SectionTitle from "../components/SectionTitle";
import useScreenWidth from "../hooks/useScreenWidth";
import useElementOnScreen from "../hooks/useElementOnScreen";
import { visibilityOptionsDesktopTablet, visibilityOptionsPhone } from "../utils/sectionsVisibilityOptions";

export default function Experience() {

    // DEVICE
    const device = useScreenWidth()

    // REFERENCES
    const experienceRef = useRef<any>(null);

    // IS VISIBLE ON SCREEN
    const isVisible = useElementOnScreen({
        options: device === 'phone' ? visibilityOptionsPhone : visibilityOptionsDesktopTablet,
        containerRef: experienceRef
    });

    // JSX
    return (
        <div 
            className={`py-[100px] sm:py-[50px] opacity-0 ${isVisible ? 'block-fade-in-section' : undefined}`}
            ref={experienceRef}
        >
            <SectionTitle
                numeration="02."
                title="Where I've Worked"
                isReversed={true}
            />

            <ExperienceTabs />
            
        </div>
    )
}
