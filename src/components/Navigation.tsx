"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
    const pathname = usePathname();

    const tabs = [
        { name: "Home", path: "/" },
        { name: "Blog", path: "/blog"},
    ];

    return (
        <nav className="border-b border-zinc-200 dark:board-zinc-800 bg-white dark:bg-gray-950">
            <div className="max-w-3xl mx-auto px-8 py-4">
                <div className="flex gap-6">
                    {tabs.map((tab) => {
                        const isActive = pathname === tab.path;

                        return (
                            <Link
                                key={tab.path}
                                href={tab.path}
                                className={`
                                    px-4 py-2 rounded-lg transition-colors
                                    ${
                                        isActive
                                            ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-black font-semibold"
                                            : "text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"
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