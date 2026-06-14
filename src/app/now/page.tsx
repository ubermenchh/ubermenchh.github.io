import type { Metadata } from "next";
import GlitchText from "@/components/GlitchText";

export const metadata: Metadata = {
    title: "Now",
};

export default function NowPage() {
    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
            <h1 className="font-serif text-3xl font-semibold text-fg mb-3">
                <GlitchText>Now</GlitchText>
            </h1>
            <p className="font-mono text-xs text-fg-muted mb-10">
                Updated {new Date().toISOString().split("T")[0]}
            </p>

            {/* TODO: rewrite in your own voice. Keep it specific and short. */}
            <ul className="space-y-3 font-serif text-lg text-fg list-disc pl-5">
                <li>Writing custom CUDA kernels for sparse attention mechanisms.</li>
                <li>Building deep RL environments from scratch to understand sample efficiency.</li>
                <li>Reading mechanistic interpretability papers; trying to see inside the black box.</li>
                <li>Working toward the smallest model that can be meaningfully called intelligent.</li>
            </ul>

            <p className="font-mono text-xs text-fg-faint mt-12">
                What is a{" "}
                <a
                    href="https://nownownow.com/about"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 hover:text-accent transition-colors"
                >
                    /now page
                </a>
                ?
            </p>
        </div>
    );
}
