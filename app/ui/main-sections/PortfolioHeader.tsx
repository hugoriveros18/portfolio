/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import Image from "next/image";
import { useEffect, useState } from "react"
import Link from "next/link";
import MenuDesktop from "../components/MenuDesktop";
import MenuMobile from "../components/MenuMobile";

export default function PortfolioHeader() {

  // STATES
  const [isHeaderVisible, setIsHeaderVisible] = useState<boolean>(true);
  const [isCurrentScrollZero, setIsCurrentScrollZero] = useState<boolean>(true);

  // EFFECTS
  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const handleHeaderVisibility = () => {
      const scrollY = window.pageYOffset;
      const makeHeaderVisible = scrollY < lastScrollY;
  
      if(isHeaderVisible !== makeHeaderVisible) {
        setIsHeaderVisible(makeHeaderVisible);
      }

      if(scrollY === 0) {
        setIsCurrentScrollZero(true);
      } else {
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
      className={`fixed top-0 left-0 flex justify-between items-center w-full sm:min-h-[92px] px-12 sm:pl-5 sm:pr-2 py-4 z-30 bg-firstColor bg-opacity-[0.85] transition-all duration-300 backdrop-blur-[10px] ${isHeaderVisible ? 'translate-y-0' : 'translate-y-[-100%]'} ${(isHeaderVisible && !isCurrentScrollZero) ? 'header-box-shadow' : undefined}`}
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

      <MenuDesktop />
      <MenuMobile />
    </div>
  )
}
