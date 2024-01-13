'use client'

import { useRef } from "react";
import SectionTitle from "../components/SectionTitle";
import useScreenWidth from "../hooks/useScreenWidth";
import useElementOnScreen from "../hooks/useElementOnScreen";
import { visibilityOptionsDesktopTablet, visibilityOptionsPhone } from "../utils/sectionsVisibilityOptions";

export default function Projects() {

    // DEVICE
    const device = useScreenWidth()

    // REFERENCES
    const projectsRef = useRef<any>(null);

    // IS VISIBLE ON SCREEN
    const isVisible = useElementOnScreen({
        options: device === 'phone' ? visibilityOptionsPhone : visibilityOptionsDesktopTablet,
        containerRef: projectsRef
    });

    // JSX
    return (
        <div 
            className={`py-[100px] sm:py-[50px] opacity-0 ${isVisible ? 'block-fade-in-section' : undefined}`}
            ref={projectsRef}
        >
            <SectionTitle
                numeration="03."
                title="Main Projects"
                isReversed={false}
            />
        </div>
    )
}
