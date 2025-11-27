"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();

    const tabs = [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog"},
        { name: "Resume", path: "/resume" }
    ];

    return (
        <nav className="bg-transparent py-4">
            <div className="max-w-5xl mx-auto">
                <div className="flex gap-4">
                    {tabs.map((tab) => {
                        const isActive = pathname === tab.path;

                        return (
                            <Link
                                key={tab.path}
                                href={tab.path}
                                className={`
                                    flex-1 py-4 text-center font-mono text-sm uppercase tracking-widest transition-all duration-300 border border-tn-blue
                                    ${
                                        isActive
                                            ? "bg-tn-fg text-tn-bg font-bold shadow-[0_0_15px_rgba(192,202,245,0.3)]"
                                            : "bg-transparent text-tn-fg-dark hover:bg-tn-bg-highlight hover:text-white"
                                    }    
                                `}
                            >
                                {tab.name}
                            </Link>
                        )
                    })}
                </div>
            </div>
        </nav>
    );
}
