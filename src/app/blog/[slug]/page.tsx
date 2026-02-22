import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import Link from "next/link";

export async function generateStaticParams() {
    const posts = getAllPostSlugs();
    return posts;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    return {
        title: post.title,
        description: post.description,
    };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <Link
                href="/blog"
                className="inline-flex items-center gap-2 mb-8 font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-accent transition-colors"
            >
                &larr; Back to blog
            </Link>

            <article>
                <header className="mb-10">
                    <h1 className="font-serif text-3xl md:text-4xl font-semibold text-fg mb-3">
                        {post.title}
                    </h1>
                    <div className="flex items-center gap-3">
                        <span className="font-mono text-xs text-fg-faint">{post.date}</span>
                        {post.tags && post.tags.length > 0 && (
                            <div className="flex gap-2">
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
                </header>

                <div
                    className="prose max-w-none font-serif text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />
            </article>
        </div>
    );
}