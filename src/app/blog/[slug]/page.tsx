import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import { faArrowLeft, faHashtag } from "@fortawesome/free-solid-svg-icons";

export async function generateStaticParams() {
    const posts = getAllPostSlugs();
    return posts;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }>}) {
    const { slug } = await params;
    const post  = await getPostBySlug(slug);

    return {
        title: post.title,
        description: post.description
    }
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }>}) {
    const { slug } = await params;

    const post = await getPostBySlug(slug);

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 p-8">
            <div className="max-w-3xl mx-auto">

                { /* Back Button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 mb-8 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
                    Back to blog
                </Link>

                <article>
                    {/* Post Header */}
                    <header className="mb-8 pb-8 border-b border-zinc-200 dark:border-zinc-800">
                        <h1 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-4 text-zinc-600 dark:text-zinc-400">
                            <time className="flex items-center gap-2 text-sm">
                                <FontAwesomeIcon icon={faCalendar} className="w-4 h-4" />
                                {post.date}
                            </time>
                        </div>
                        <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
                            {post.description}
                        </p>

                        {post.tags && post.tags.length > 0 && (
                            <div className="mb-4">
                                <div className="flex flex-wrap gap-2">
                                    {post.tags.map((tag, index) => (
                                        <span 
                                            key={index}
                                            className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}
                    </header>

                    {/* Post Content */}
                    <div
                        className="prose prose-zinc dark:prose-invert max-w-none
                            prose-headings:font-bold 
                            prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                            prose-a:text-blue-600 dark:prose-a:text-blue-400
                            prose-code:text-zinc-900 dark:prose-code:text-zinc-100
                            prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                            prose-pre:bg-zinc-100 dark:prose-pre:bg-zinc-900
                            prose-strong:text-zinc-900 dark:prose-strong:text-zinc-100
                            prose-ul:list-disc prose-ol:list-decimal
                        "
                        dangerouslySetInnerHTML={{ __html: post.content || '' }}
                    />
                </article>
            </div>
        </div>
    )
}