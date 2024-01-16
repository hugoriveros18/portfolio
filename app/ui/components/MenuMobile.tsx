'use client'

import { useEffect, useState } from "react";
import { menuItems } from "../utils/menuItems";
import ReactDOM from 'react-dom';
import ActionButton from "./ActionButton";
import { MenuItemMobile } from "./MenuItem";
import Image from "next/image";

export default function MenuMobile() {

    // STATES
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isClientActive, setIsClientActive] = useState<boolean>(false);

    // EFEFECTS
    useEffect(() => {
        setIsClientActive(true);
    },[])

    // METHODS
    const handleDrawerOpen = () => {
        setIsMenuOpen(true);
        const bodyTag = document.getElementsByTagName('body')
        bodyTag[0].style.overflow = 'hidden';
    }
    const handleDrawerClose = () => {
        setIsMenuOpen(false);
        const bodyTag = document.getElementsByTagName('body')
        bodyTag[0].style.overflow = 'auto';
    }

    // JSX
    return (
        <>
            <div
                className="hidden md:block opacity-0 block-fade-in-down block-fade-in-down-0"
            >
                <Image
                    alt="Menu icon"
                    src="/icons/menu-icon.svg"
                    width={60}
                    height={60}
                    onClick={handleDrawerOpen}
                />
            </div>
            {
                isClientActive &&
                ReactDOM.createPortal(
                    <>
                        <div className={`fixed top-0 right-0 z-50 flex items-center max-w-[400px] sm:max-w-[320px] min-w-[400px] sm:min-w-[320px] h-full transition-all duration-300 bg-firstColor ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                            <div className="flex flex-col w-full items-center gap-8 py-12 px-3">
                                <p 
                                    className="absolute top-6 right-6 text-fourthColor text-4xl sm:text-3xl" 
                                    onClick={handleDrawerClose}
                                >
                                    X
                                </p>
                                <ul className="flex flex-col gap-3 sm:gap-2">
                                {
                                    menuItems.map(item => {
                                        return (
                                            <MenuItemMobile
                                                key={item.sectionNumber}
                                                sectionNumber={item.sectionNumber}
                                                title={item.title}
                                                slug={item.slug}
                                                calbackOnclick={handleDrawerClose}
                                            />
                                        )
                                    })
                                }
                                </ul>
                                <div>
                                    <ActionButton
                                        text="Resume"
                                        slug="/files/cv-hugo-riveros.pdf"
                                        variation="primary"
                                        openNewTab
                                    />
                                </div>
                            </div>
                        </div>
                        <div
                            className={`fixed top-0 left-0 z-40 w-full h-full bg-[#000] bg-opacity-30 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                            onClick={handleDrawerClose}
                        />
                    </>,
                    document.body
                )
            }
        </>
    )
}
