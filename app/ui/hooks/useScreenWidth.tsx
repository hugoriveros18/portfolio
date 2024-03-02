'use client'

import { useEffect, useState } from "react"

type Device = 'phone' | 'tablet' | 'desktop';

export default function useScreenWidth() {

    const [device, setDevice] = useState<Device>('desktop')

    // MEMO
    const updateWindowSizeValue = () => {
        const windowWidth = window.innerWidth
        if(windowWidth <= 640) {
            setDevice('phone')
        } else if (windowWidth > 640 && windowWidth <= 1024) {
            setDevice('tablet')
        } else if (windowWidth > 1024) {
            setDevice('desktop')
        } else {
            setDevice('desktop')
        }
    }

    //EFFECTS
    useEffect(() => {
        updateWindowSizeValue()

        window.addEventListener('resize', updateWindowSizeValue)

        return () => window.removeEventListener('resize', updateWindowSizeValue)
    },[])

    // RETURN
    return device
}
