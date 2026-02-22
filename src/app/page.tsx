import { getSortedPosts } from "@/lib/posts";
import Link from "next/link";
import Image from "next/image";

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex items-center gap-4 mb-8">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted shrink-0">
                {children}
            </span>
            <div className="h-px bg-border flex-1" />
        </div>
    );
}

const interests = [
    { label: "Systems", description: "Compilers, CUDA, parallel computation, low-level architecture." },
    { label: "ML Research", description: "Interpretability, RL, efficient training, small models." },
    { label: "Philosophy", description: "Dead thinkers, phenomenology, philosophy of mind, Nietzsche." },
    { label: "History", description: "Intellectual history, science history, how ideas spread and die." },
];

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
                    <h1 className="font-serif text-2xl sm:text-3xl font-semibold text-fg">Compiler Durden / Umang Kaushik</h1>
                    <p className="font-mono text-xs text-fg-muted mt-1">
                        ubermenchh &middot; nerd
                    </p>
                    <p className="font-serif text-base italic text-fg-muted mt-3">
                        Serial obsessive at the intersection of low-level systems and machine intelligence.
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

            {/* About */}
            <section className="mb-14">
                <SectionLabel>About</SectionLabel>
                <div className="font-serif text-lg leading-relaxed text-fg space-y-4">
                    <p>
                        I work on{" "}
                        <a href="https://github.com/ubermenchh" className="text-accent underline underline-offset-2 hover:text-link-hover transition-colors">
                            AI agents
                        </a>{" "}
                        during the day and{" "}
                        <a href="https://github.com/ubermenchh" className="text-accent underline underline-offset-2 hover:text-link-hover transition-colors">
                            CUDA kernels
                        </a>{" "}
                        and model training during the night. Currently breaking and learning CUDA kernels,
                        deep RL environments, and interpretability research. The goal: make the smallest
                        intelligent model possible.
                    </p>
                    <p>
                        My brain runs 47 tabs across four centuries and three levels of abstraction.
                        I collect intellectual hobbies like a crow hoards shiny things &mdash; compilers,
                        dead philosophers, the psyche, and history.
                    </p>
                </div>
            </section>

            {/* Now */}
            <section className="mb-14">
                <SectionLabel>Now</SectionLabel>
                <ul className="space-y-3 font-serif text-lg text-fg list-disc pl-5">
                    <li>Writing custom CUDA kernels for sparse attention mechanisms.</li>
                    <li>Building deep RL environments from scratch to understand sample efficiency.</li>
                    <li>Reading mechanistic interpretability papers; trying to see inside the black box.</li>
                    <li>Working toward the smallest model that can be meaningfully called intelligent.</li>
                </ul>
            </section>

            {/* Interests */}
            <section className="mb-14">
                <SectionLabel>Interests</SectionLabel>
                <div className="grid grid-cols-1 sm:grid-cols-2 border border-border">
                    {interests.map((interest, i) => (
                        <div
                            key={interest.label}
                            className={`p-5 ${
                                i < interests.length - 2 ? "border-b border-border" : ""
                            } ${i % 2 === 0 ? "sm:border-r sm:border-border" : ""}`}
                        >
                            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-accent font-semibold mb-2">
                                {interest.label}
                            </h3>
                            <p className="font-serif text-base text-fg-muted">
                                {interest.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Recent Writing */}
            <section className="mb-14">
                <SectionLabel>Recent Writing</SectionLabel>
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

            {/* Footer */}
            <footer className="text-center py-8">
                <p className="font-mono text-xs text-fg-faint">
                    Compiler Durden &middot; ubermenchh &middot; updated{" "}
                    {new Date().toISOString().split("T")[0]}
                </p>
            </footer>
        </div>
    );
}