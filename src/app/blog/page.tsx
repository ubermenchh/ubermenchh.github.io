import { getSortedPosts } from "@/lib/posts";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
};

export default function BlogPage() {
    const posts = getSortedPosts();

    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <h1 className="font-serif text-3xl font-semibold text-fg mb-10">Blog</h1>

            {posts.length > 0 ? (
                <ul>
                    {posts.map((post) => (
                        <li key={post.slug} className="border-b border-border-light">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-4 py-5"
                            >
                                <div className="flex-1">
                                    <span className="font-serif text-lg text-fg group-hover:text-accent transition-colors">
                                        {post.title}
                                    </span>
                                    {post.description && (
                                        <p className="font-serif text-sm text-fg-muted mt-1">
                                            {post.description}
                                        </p>
                                    )}
                                    {post.tags && post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mt-2">
                                            {post.tags.map((tag: string) => (
                                                <span
                                                    key={tag}
                                                    className="font-mono text-[10px] uppercase tracking-wider text-fg-muted border border-border px-2 py-0.5"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                                <span className="font-mono text-xs text-fg-faint shrink-0">
                                    {post.date}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <div className="text-center py-12">
                    <p className="font-serif text-lg text-fg-muted">No posts yet.</p>
                </div>
            )}
        </div>
    );
}
