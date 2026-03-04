"use client";

import { useRef, useCallback, type ReactNode } from "react";

export default function GlitchText({
    children,
    className = "",
}: {
    children: ReactNode;
    className?: string;
}) {
    const ref = useRef<HTMLSpanElement>(null);

    const handleMouseEnter = useCallback(() => {
        const el = ref.current;
        if (!el) return;
        el.style.animation = "none";
        void el.offsetWidth;
        el.style.animation = "";
    }, []);

    return (
        <span
            ref={ref}
            className={`glitch-hover ${className}`}
            onMouseEnter={handleMouseEnter}
        >
            {children}
        </span>
    );
}
