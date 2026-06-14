import { getSortedPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";
import GlitchText from "@/components/GlitchText";

export default function Home() {
    const recentPosts = getSortedPosts().slice(0, 5);

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8">
            {/* Profile Header */}
            <section className="flex flex-col sm:flex-row items-start gap-4 sm:gap-6 mb-12">
                <div className="w-20 h-20 border border-border shrink-0 relative overflow-hidden">
                    <Image
                        src="/guts.jpg"
                        alt="Compiler Durden"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div>
                    <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-fg">
                        <GlitchText>Umang Kaushik</GlitchText>
                    </h1>
                    <p className="font-mono text-xs text-fg-muted mt-1">
                        ubermenchh
                    </p>

                    {/* TODO: Replace with 1-3 sentences in your own voice.
                        Be specific (what you work on, where, what you're chasing).
                        Avoid: "at the intersection of", crow/tab metaphors, "meaningfully". */}
                    <p className="font-serif text-base text-fg mt-3">
                        [bio goes here]
                    </p>

                    <div className="flex gap-4 mt-4">
                        <a
                            href="https://github.com/ubermenchh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-accent transition-colors"
                        >
                            Github
                        </a>
                        <a
                            href="https://x.com/ubermenchh_"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-accent transition-colors"
                        >
                            X
                        </a>
                        <a
                            href="mailto:ubermenchh69@gmail.com"
                            className="font-mono text-xs uppercase tracking-wider text-fg-muted hover:text-accent transition-colors"
                        >
                            Email
                        </a>
                    </div>
                </div>
            </section>

            {/* Recent Writing */}
            <section className="mb-14">
                <div className="flex items-center gap-4 mb-8">
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted shrink-0">
                        Recent Writing
                    </span>
                    <div className="h-px bg-border flex-1" />
                </div>
                <ul>
                    {recentPosts.map((post) => (
                        <li key={post.slug} className="border-b border-border-light">
                            <Link
                                href={`/blog/${post.slug}`}
                                className="group flex items-baseline justify-between gap-4 py-4"
                            >
                                <span className="font-serif text-lg text-fg group-hover:text-accent transition-colors">
                                    {post.title}
                                </span>
                                <span className="font-mono text-xs text-fg-faint shrink-0">
                                    {post.date?.substring(0, 7)}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
