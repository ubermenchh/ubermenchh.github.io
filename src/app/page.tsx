import { getSortedPosts } from "@/lib/posts";

export default function Home() {
    const posts = getSortedPosts();

    return (
        <div className="min-h-screen bg-gray-950 dark:bg:black p-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100 mb-8">
                    Compiler Durden
                </h1>

                <div className="space-y-6">
                    {posts.map((post) => {
                        return (
                            <div
                                key={post.slug}
                                className="border border-zinc-200 dark:border-zinc-800 p-6 rounded-lg"
                            >
                                <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-z">
                                    {post.title}
                                </h2>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">
                                    {post.date}
                                </p>
                                <p className="text-zinc-600 dark:text-zinc-400">
                                    {post.description}
                                </p>
                                <p className="text-xs text-zinc-400 dark:text-zinc-600 mt-2">
                                    Slug: {post.slug}
                                </p>
                            </div>
                        );
                    })}
                </div>
                {posts.length === 0 && (
                    <p className="text-zinc-600 dark:text-zinc-400">
                        No posts found.
                    </p>
                )}
            </div>
        </div>
    )
}