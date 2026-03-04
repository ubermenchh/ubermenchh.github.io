"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import GlitchText from "@/components/GlitchText";

export default function Navigation() {
    const pathname = usePathname();

    const links = [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog" },
        { name: "Writing", path: "/writing" },
        { name: "Resume", path: "/resume" },
    ];

    return (
        <nav className="max-w-3xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex items-center justify-between">
            <Link
                href="/"
                className="font-mono text-xs uppercase tracking-[0.2em] text-fg hover:text-accent transition-colors"
            >
                <GlitchText>ubermenchh</GlitchText>
            </Link>
            <div className="flex items-center gap-3 sm:gap-8">
                {links.map((link) => (
                    <Link
                        key={link.path}
                        href={link.path}
                        className={`font-mono text-xs uppercase tracking-[0.15em] transition-colors pb-0.5 ${
                            pathname === link.path
                                ? "text-fg border-b border-fg"
                                : "text-fg-muted hover:text-fg"
                        }`}
                    >
                        <GlitchText>{link.name}</GlitchText>
                    </Link>
                ))}
                <ThemeToggle />
            </div>
        </nav>
    );
}