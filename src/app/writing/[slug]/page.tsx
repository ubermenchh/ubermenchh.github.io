import { getWritingBySlug, getAllWritingSlugs } from "@/lib/posts";
import Link from "next/link";

export async function generateStaticParams() {
    return getAllWritingSlugs();
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getWritingBySlug(slug);
    return { title: post.title, description: post.description };
}

export default async function WritingPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getWritingBySlug(slug);

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <Link
                href="/writing"
                className="inline-flex items-center gap-2 mb-8 font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-accent transition-colors"
            >
                &larr; Back to writing
            </Link>
            <article>
                <header className="mb-10">
                    <h1 className="font-serif text-3xl md:text-4xl font-semibold text-fg mb-3">{post.title}</h1>
                    <span className="font-mono text-xs text-fg-faint">{post.date}</span>
                </header>
                <div
                    className="prose max-w-none font-serif text-lg leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: post.content || "" }}
                />
            </article>
        </div>
    );
}