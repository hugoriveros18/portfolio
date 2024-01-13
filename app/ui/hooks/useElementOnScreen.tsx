/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useState, useEffect } from "react";

interface useElementOnScreenProps {
    options: any
    containerRef: React.MutableRefObject<any>
}

export default function useElementOnScreen ({
    options,
    containerRef
}: useElementOnScreenProps) {

    //STATES
    const [isVisible,setIsVisible] = useState<boolean>(false);

    //METHODS
    const setSectionVisibility = (entries:any[]) => {
        entries.forEach((entry) => {
            if(entry.isIntersecting) {
                setIsVisible(true)
            }
        })
    }

    //EFFECTS
    useEffect(() => {
        const node = containerRef.current;
        const observer = new IntersectionObserver(setSectionVisibility, options);
        node && observer.observe(node);

        return () => {
            node && observer.unobserve(node);
        }
    }, [])

    return isVisible;
}