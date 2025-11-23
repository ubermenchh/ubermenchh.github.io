import { getSortedPosts } from "@/lib/posts";
import Link from "next/link";

export default function BlogPost() {
    const posts = getSortedPosts();

    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
                    Blog
                </h1>

                <div className="space-y-6">
                    {posts.map((post) => {
                        return (
                            <Link
                             key={post.slug}
                             href={`/blog/${post.slug}`}
                              className="block border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg hover:shadow-lg transition-shadow"
                            >
                                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                                    {post.date}
                                </p>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    {post.description}
                                </p>

                                {post.tags && post.tags.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mb-2">
                                        {post.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blu-200 rounded"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </Link>
                        );
                    })}
                </div>

                {posts.length === 0 && (
                    <div className="text-center py-12">
                        <p className="text-zinc-600 daark:text-zinc-400 text-lg">
                            No posts yet.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}