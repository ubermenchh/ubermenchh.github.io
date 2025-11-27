import { getSortedPosts } from "@/lib/posts";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ContentBox from "@/components/ContentBox";

export default function BlogPost() {
    const posts = getSortedPosts();

    return (
        <div className="p-8">
            <div className="max-w-5xl mx-auto">
                <ContentBox title="~/user/blog">
                    <h1 className="text-4xl font-bold text-tn-fg mb-8">
                        Blog
                    </h1>

                    <div className="space-y-4">
                        {posts.map((post) => {
                            return (
                                <Link
                                 key={post.slug}
                                 href={`/blog/${post.slug}`}
                                  className="group flex flex-col sm:flex-row gap-4 p-4 border border-transparent hover:border-tn-bg-highlight hover:bg-tn-bg-highlight transition-all cursor-pointer"
                                >
                                    <div className="sm:w-32 flex-shrink-0 font-mono text-xs text-tn-comment pt-1">
                                        {post.date}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-lg font-bold text-white group-hover:text-tn-blue transition-colors flex items-center">
                                            {post.title}
                                            <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity ml-2 text-tn-blue" />
                                        </h3>
                                        <p className="text-sm text-tn-fg-dark mt-1 leading-relaxed">
                                            {post.description}
                                        </p>
                                        
                                        {post.tags && post.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mt-2">
                                                {post.tags.map((tag: string) => (
                                                    <span key={tag} className="inline-block text-xs border border-tn-bg-highlight px-2 py-0.5 rounded text-tn-cyan bg-tn-bg-dark/50">
                                                        #{tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                    </div>
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
                </ContentBox>
            </div>
        </div>
    );
}
