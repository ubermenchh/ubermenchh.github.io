import { getSortedWritings } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Writing",
};

export default function WritingPage() {
    const writings = getSortedWritings();

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <h1 className="font-serif text-3xl font-semibold text-fg mb-10">Writing</h1>
            {writings.length > 0 ? (
                <ul>
                    {writings.map((post) => (
                        <li key={post.slug} className="border-b border-border-light">
                            <Link
                                href={`/writing/${post.slug}`}
                                className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 py-5"
                            >
                                <div className="flex-1">
                                    <span className="font-serif text-lg text-fg group-hover:text-accent transition-colors">
                                        {post.title}
                                    </span>
                                    {post.description && (
                                        <p className="font-serif text-sm text-fg-muted mt-1">{post.description}</p>
                                    )}
                                </div>
                                <span className="font-mono text-xs text-fg-faint shrink-0">{post.date}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center py-12">
                    <p className="font-serif text-lg text-fg-muted">No writings yet.</p>
                </div>
            )}
        </div>
    );
}