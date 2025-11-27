import { getPostBySlug, getAllPostSlugs } from "@/lib/posts";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import ContentBox from "@/components/ContentBox";

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
        <div className="p-8">
            <div className="max-w-5xl mx-auto">

                { /* Back Button */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 mb-8 text-tn-fg-dark hover:text-tn-cyan transition-colors"
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
                    Back to blog
                </Link>

                <ContentBox title={`~/user/blog/${slug}`}>
                    <article>
                        {/* Post Title */}
                        <h1 className="text-4xl md:text-5xl font-bold text-tn-fg mb-8">
                            {post.title}
                        </h1>

                        {/* Post Content */}
                        <div
                            className="prose prose-zinc dark:prose-invert max-w-none
                                prose-headings:font-bold 
                                prose-h1:text-3xl prose-h2:text-2xl prose-h3:text-xl
                                prose-a:text-tn-blue hover:prose-a:text-tn-cyan
                                prose-code:text-tn-cyan
                                prose-code:bg-tn-bg-highlight prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                                prose-pre:bg-tn-bg-dark prose-pre:border prose-pre:border-tn-terminal-black
                                prose-strong:text-tn-orange
                                prose-ul:list-disc prose-ol:list-decimal
                            "
                            dangerouslySetInnerHTML={{ __html: post.content || '' }}
                        />
                    </article>
                </ContentBox>
            </div>
        </div>
    )
}