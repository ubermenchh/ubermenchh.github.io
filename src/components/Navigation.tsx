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
        <nav className="bg-tn-bg py-6">
            <div className="max-w-3xl mx-auto">
                <div className="p-6 border border-tn-blue bg-tn-bg-dark">
                    <div className="flex gap-4">
                        {tabs.map((tab) => {
                            const isActive = pathname === tab.path;

                            return (
                                <Link
                                    key={tab.path}
                                    href={tab.path}
                                    className={`
                                        flex-1 px-8 py-4 transition-all font-semibold text-lg text-center
                                        ${
                                            isActive
                                                ? "bg-tn-blue text-tn-bg shadow-sm shadow-tn-blue/50"
                                                : "border border-tn-blue text-tn-fg-dark hover:border-tn-cyan hover:text-tn-fg"
                                        }    
                                    `}
                                >
                                    {tab.name}
                                </Link>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}