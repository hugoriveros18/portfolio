/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Image from "next/image";
import { useEffect, useState } from "react"
import { menuItems } from "../utils/menuItems";
import MenuItem from "./MenuItem";
import ActionButton from "./ActionButton";
import Link from "next/link";

export default function PortfolioHeader() {

  // STATES
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [isCurrentScrollZero, setIsCurrentScrollZero] = useState<boolean>(true);
  console.log('isCurrentScrollZero', isCurrentScrollZero)
  // EFFECTS
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleHeaderVisibility = () => {
      const scrollY = window.pageYOffset;
      console.log('scrollY', scrollY)
      const makeHeaderVisible = scrollY < lastScrollY;
  
      if(isHeaderVisible !== makeHeaderVisible) {
        setIsHeaderVisible(makeHeaderVisible);
      }

      if(scrollY === 0) {
        console.log('entro')
        setIsCurrentScrollZero(true);
      } else {
        console.log('entro2')
        setIsCurrentScrollZero(false);
      }
      lastScrollY = scrollY;
    }

    window.addEventListener('scroll', handleHeaderVisibility)

    return () => window.removeEventListener('scroll', handleHeaderVisibility)
  },[isHeaderVisible])

  // JSX
  return (
    <div 
      className={`fixed top-0 left-0 flex justify-between items-center w-full px-12 py-4 z-30 bg-firstColor bg-opacity-[0.85] transition-all duration-300 backdrop-blur-[10px] ${isHeaderVisible ? 'translate-y-0' : 'translate-y-[-100%]'} ${(isHeaderVisible && !isCurrentScrollZero) ? 'header-box-shadow' : undefined}`}
    >

      <div className="flex">
        <Link
          href="/"
        >
          <Image 
            alt="Logo"
            src="/logo/h-logo-blue.png"
            width={50}
            height={50}
          />
        </Link>
      </div>

      <div className="flex gap-3">
        <ul className="flex">
          {
            menuItems.map((item, index) => {
              return (
                <MenuItem
                  key={item.sectionNumber}
                  sectionNumber={item.sectionNumber}
                  title={item.title}
                  slug={item.slug}
                  delay={index}
                />
              )
            })
          }
        </ul>
        <div className="block-fade-in-down block-fade-in-down-4 opacity-0">
          <ActionButton
            text="Resume"
            slug="/files/cv-hugo-riveros.pdf"
            variation="secondary"
            openNewTab
          />
        </div>
      </div>

    </div>
  )
}
