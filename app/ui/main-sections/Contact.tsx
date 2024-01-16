'use client'

import { useRef } from "react";
import useScreenWidth from "../hooks/useScreenWidth";
import useElementOnScreen from "../hooks/useElementOnScreen";
import { visibilityOptionsDesktopTablet, visibilityOptionsPhone } from "../utils/sectionsVisibilityOptions";
import ActionButton from "../components/ActionButton";

export default function Contact() {

    // DEVICE
    const device = useScreenWidth()

    // REFERENCES
    const contactRef = useRef<any>(null);

    // IS VISIBLE ON SCREEN
    const isVisible = useElementOnScreen({
        options: device === 'phone' ? visibilityOptionsPhone : visibilityOptionsDesktopTablet,
        containerRef: contactRef
    });

    // JSX
    return (
        <div 
            className={`max-w-[600px] mx-auto py-[100px] sm:py-[50px] opacity-0 ${isVisible ? 'block-fade-in-section' : undefined}`}
            ref={contactRef}
        >
            <div className="w-full flex items-center justify-center gap-1 mt-3 mb-3 sm:mb-0">
                <span className={`text-fourthColor text-base`}>
                    0.4
                </span>
                <h2 className="text-base text-fourthColor">
                    Want to share a coffee?
                </h2>
            </div>
            <div className="w-full flex justify-center">
                <h2 className="text-[60px] sm:text-[40px]  text-thirdColor font-bold mt-0">
                    Get In Touch
                </h2>
            </div>
            <div className="w-full flex justify-center">
                <p className="m-0 text-lg sm:text-base text-center text-sixthColor">
                    I am open to new opportunities and connect with great people. If you have any questions, proposals or just want to say hello; I will do my best to respond as soon as I can.
                </p>
            </div>
            <div className="flex justify-center mt-6">
                <ActionButton
                    text="Send Email"
                    slug="mailto:hugoriverosfajardo@gmail.com"
                    variation="primary"
                />
            </div>
        </div>
    )
}
