import { useEffect, useState } from "react";

function useScrolled(offset = 20) {
    const [scrolled, setScrolled] = useState(() => (
        typeof window === "undefined" ? false : window.scrollY > offset
    ));

    useEffect(() => {
        let frameId = 0;

        const updateScrolled = () => {
            frameId = 0;
            const nextScrolled = window.scrollY > offset;
            setScrolled((current) => (current === nextScrolled ? current : nextScrolled));
        };

        const handleScroll = () => {
            if (frameId) return;
            frameId = window.requestAnimationFrame(updateScrolled);
        };

        updateScrolled();
        window.addEventListener("scroll", handleScroll, { passive: true });

        return () => {
            if (frameId) {
                window.cancelAnimationFrame(frameId);
            }
            window.removeEventListener("scroll", handleScroll);
        };
    }, [offset]);

    return scrolled;
}

export default useScrolled;
