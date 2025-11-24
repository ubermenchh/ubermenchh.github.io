import { getSortedPosts } from "@/lib/posts";
import Link from "next/link";

export default function BlogPost() {
    const posts = getSortedPosts();

    return (
        <div className="bg-tn-bg p-8">
            <div className="max-w-3xl mx-auto">
                <section className="p-8 border border-tn-blue bg-tn-bg-dark">
                    <h1 className="text-4xl font-bold text-tn-fg mb-8">
                        Blog
                    </h1>

                    <div className="space-y-6">
                        {posts.map((post) => {
                            return (
                                <Link
                                 key={post.slug}
                                 href={`/blog/${post.slug}`}
                                  className="block border border-tn-blue bg-tn-bg p-6 hover:border-tn-cyan hover:shadow-lg hover:shadow-tn-blue/20 transition-all"
                                >
                                    <h2 className="text-2xl font-semibold text-tn-fg mb-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-sm text-tn-comment mb-3">
                                        {post.date}
                                    </p>
                                    <p className="text-tn-fg-dark">
                                        {post.description}
                                    </p>

                                    {post.tags && post.tags.length > 0 && (
                                        <div className="flex flex-wrap gap-2 mb-2">
                                            {post.tags.map((tag: string, index: number) => (
                                                <span
                                                    key={index}
                                                    className="px-2 py-1 text-xs bg-tn-blue7 text-tn-blue border border-tn-blue0 rounded"
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
                            <p className="text-tn-fg-dark text-lg">
                                No posts yet.
                            </p>
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}