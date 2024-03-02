import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay = 500) {

    // STATES
    const [debounceValue, setDebounceValue] = useState(value);

    // EFFECTS
    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value);
        }, delay)

        return () => { clearTimeout(timer) }
    },[value, delay])

    // RETURN
    return debounceValue
}