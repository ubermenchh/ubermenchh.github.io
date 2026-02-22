import type { Metadata } from "next";
import ResumeContact from "@/components/ResumeContact";

export const metadata: Metadata = {
    title: "Resume",
    description: "Resume -- Umang Kaushik",
};

function GitHubIcon({ size = 16, className = "" }: { size?: number; className?: string }) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 98 96"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`inline-block shrink-0 ${className}`}
            aria-label="GitHub"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                fill="#8a8a82"
            />
        </svg>
    );
}

function HuggingFaceIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 256 256" fill="none" className="w-4 h-4 inline-block shrink-0">
            <path d="M230.721 172.7C230.183 170.673 229.313 168.75 228.146 167.008C228.396 166.091 228.587 165.159 228.714 164.217C229.543 158.241 227.471 152.77 223.567 148.537C221.452 146.225 219.185 144.698 216.784 143.761C218.36 137.018 219.157 130.117 219.161 123.193C219.161 120.03 218.982 116.932 218.682 113.88C218.526 112.356 218.337 110.836 218.115 109.32C217.428 104.847 216.408 100.431 215.064 96.11C214.183 93.2707 213.164 90.476 212.01 87.736C210.281 83.6782 208.262 79.75 205.969 75.982C204.465 73.475 202.827 71.0508 201.062 68.72C200.197 67.543 199.296 66.3938 198.358 65.274C195.58 61.898 192.561 58.7277 189.325 55.788C188.25 54.7997 187.145 53.8453 186.01 52.926C184.893 51.9943 183.751 51.0927 182.586 50.222C180.241 48.4766 177.818 46.8392 175.324 45.315C161.543 36.945 145.382 32.145 128.109 32.145C77.817 32.145 37.057 72.907 37.057 123.196C37.055 130.208 37.867 137.196 39.477 144.02C37.317 144.958 35.247 146.42 33.327 148.535C29.424 152.766 27.351 158.217 28.18 164.193C28.306 165.142 28.495 166.082 28.747 167.006C27.5811 168.749 26.7117 170.673 26.174 172.7C24.974 177.261 25.369 181.374 26.894 184.978C25.236 189.688 25.65 194.704 27.809 199.065C29.379 202.25 31.626 204.714 34.396 206.916C37.689 209.534 41.811 211.758 46.783 213.892C52.715 216.422 59.956 218.799 63.249 219.671C71.755 221.873 79.911 223.269 88.177 223.337C99.954 223.446 110.096 220.677 117.357 213.59C120.924 214.027 124.515 214.246 128.109 214.244C131.906 214.236 135.699 213.997 139.467 213.529C146.711 220.661 156.892 223.455 168.712 223.343C176.977 223.277 185.133 221.881 193.617 219.676C196.932 218.804 204.17 216.427 210.105 213.897C215.077 211.76 219.199 209.536 222.514 206.922C225.263 204.719 227.508 202.256 229.079 199.071C231.26 194.709 231.652 189.693 230.017 184.983C231.527 181.379 231.92 177.257 230.721 172.7Z" fill="#c9a84c"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M152.047 102.567C153.229 102.985 154.108 104.257 154.944 105.468C156.074 107.104 157.126 108.627 158.74 107.769C160.644 106.756 162.205 105.202 163.225 103.302C164.246 101.402 164.681 99.2427 164.475 97.096C164.321 95.4908 163.813 93.9398 162.987 92.5548C162.161 91.1697 161.038 89.985 159.7 89.0862C158.361 88.1874 156.839 87.5968 155.245 87.3569C153.65 87.117 152.022 87.2339 150.478 87.699C148.934 88.1639 147.513 88.9653 146.316 90.0455C145.119 91.1257 144.176 92.4578 143.556 93.946C142.936 95.4342 142.653 97.0415 142.728 98.652C142.804 100.263 143.235 101.836 143.992 103.26C144.74 104.667 146.4 104.003 148.152 103.302C149.525 102.753 150.956 102.181 152.047 102.567ZM100.672 102.567C99.49 102.985 98.611 104.258 97.775 105.468C96.645 107.105 95.592 108.627 93.979 107.769C91.5845 106.501 89.7482 104.386 88.8278 101.838C87.9075 99.2895 87.9692 96.4896 89.0008 93.9841C90.0324 91.4786 91.9601 89.4471 94.408 88.2855C96.856 87.1239 99.6488 86.9156 102.242 87.701C104.307 88.3228 106.141 89.5427 107.513 91.2065C108.885 92.8704 109.732 94.9035 109.949 97.049C110.165 99.1945 109.74 101.356 108.728 103.26C107.979 104.667 106.319 104.003 104.567 103.303C103.193 102.753 101.764 102.181 100.672 102.567ZM144.099 149.318C152.242 142.903 155.233 132.429 155.233 125.977C155.233 120.877 151.802 122.482 146.309 125.202L145.999 125.355C140.957 127.852 134.245 131.177 126.877 131.177C119.508 131.177 112.796 127.852 107.755 125.354C102.084 122.545 98.527 120.783 98.527 125.978C98.527 132.634 101.709 143.563 110.443 149.912C111.596 147.573 113.219 145.497 115.211 143.813C117.202 142.129 119.52 140.874 122.018 140.126C122.89 139.866 123.788 141.367 124.707 142.904C125.594 144.386 126.501 145.902 127.423 145.902C128.406 145.902 129.371 144.408 130.314 142.95C131.299 141.425 132.26 139.94 133.189 140.237C137.864 141.738 141.775 144.993 144.099 149.318Z" fill="#1a1a18"/>
            <path d="M144.097 149.317C139.856 152.659 134.219 154.9 126.878 154.9C119.981 154.9 114.587 152.922 110.443 149.911C111.596 147.572 113.219 145.495 115.211 143.812C117.202 142.128 119.52 140.873 122.018 140.125C123.73 139.614 125.545 145.901 127.423 145.901C129.433 145.901 131.37 139.655 133.189 140.236C137.863 141.738 141.773 144.993 144.097 149.317Z" fill="#7a3b1e"/>
            <path fillRule="evenodd" clipRule="evenodd" d="M81.2 111.64C80.2312 112.288 79.1173 112.687 77.9572 112.801C76.7971 112.916 75.6267 112.742 74.55 112.295C73.6893 111.94 72.9072 111.418 72.2488 110.759C71.5903 110.101 71.0684 109.319 70.713 108.458C70.267 107.381 70.0935 106.211 70.2082 105.051C70.3228 103.891 70.7219 102.777 71.37 101.808C72.1488 100.642 73.2558 99.7333 74.5512 99.1967C75.8466 98.6601 77.272 98.5197 78.6471 98.7935C80.0223 99.0672 81.2853 99.7427 82.2764 100.734C83.2675 101.726 83.9422 102.99 84.215 104.365C84.4883 105.74 84.3477 107.165 83.8113 108.46C83.2748 109.755 82.3654 110.861 81.2 111.64ZM182.613 111.64C181.644 112.288 180.53 112.687 179.37 112.801C178.209 112.916 177.039 112.742 175.962 112.295C175.101 111.939 174.319 111.418 173.661 110.759C173.003 110.101 172.481 109.319 172.125 108.458C171.68 107.381 171.507 106.211 171.621 105.051C171.736 103.891 172.135 102.777 172.782 101.808C173.364 100.936 174.133 100.205 175.032 99.6658C175.931 99.1269 176.938 98.7942 177.981 98.6917C179.025 98.5891 180.078 98.7193 181.064 99.0728C182.051 99.4264 182.947 99.9944 183.688 100.736C184.68 101.727 185.355 102.99 185.628 104.365C185.902 105.74 185.761 107.165 185.224 108.46C184.687 109.755 183.779 110.861 182.613 111.64Z" fill="#a07830"/>
        </svg>
    );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return (
        <div className="py-8 pr-6 border-r border-border max-md:border-r-0 max-md:border-b max-md:py-4 max-md:pr-0">
            <span className="font-mono text-[0.6rem] font-normal tracking-[0.14em] uppercase text-fg-faint sticky top-[72px] block">
                {children}
            </span>
        </div>
    );
}

function Tag({ children, variant = "warm" }: { children: React.ReactNode; variant?: "blue" | "warm" }) {
    const styles = variant === "warm"
        ? "text-accent-warm border-tag-warm-border bg-tag-warm-bg"
        : "text-accent-blue border-tag-blue-border bg-tag-blue-bg";
    return (
        <span className={`font-mono text-[0.58rem] font-light tracking-[0.06em] border px-[7px] py-[2px] ${styles}`}>
            {children}
        </span>
    );
}

const experience = [
    {
        dateEnd: "Present",
        dateStart: "March 2025",
        title: "AI Engineer",
        org: "Prospire Technology Services, Jodhpur",
        desc: "Pioneered SimplifAI, an agentic AI system for automated incident resolution using Google ADK, reducing MTTR and improving SLA adherence. Built full-stack with GraphQL, FastAPI, React, and ShadCN. Designed high-throughput alert pipelines with RabbitMQ, Redis, and Elasticsearch. Deployed on AWS EC2 with Docker, Nginx, and GitHub Actions CI/CD. Presented SimplifAI at India Mobile Congress 2025.",
        tags: ["Google ADK", "FastAPI", "GraphQL", "RabbitMQ", "Redis", "Docker", "AWS"],
    },
    {
        dateEnd: "November 2025",
        dateStart: "August 2025",
        title: "DevOps Engineer (Part-Time)",
        org: "Vrya, Trilogy Group, Austin TX",
        desc: "Engineered Nagios monitoring scripts reducing MTTD by 20%. Automated SSL certificate lifecycles with Certbot and Route53, eliminating certificate-related downtime. Tuned CloudWatch alarms to maintain 99.9% availability, achieving 15% P99 latency reduction and 10% cloud cost decrease.",
        tags: ["AWS", "Nagios", "CloudWatch", "Nginx", "Shell"],
    },
];

interface Project {
    year: string;
    title: string;
    desc: string;
    tags: string[];
    link?: string;
    hfLink?: string;
}

const projects: Project[] = [
    {
        year: "2025",
        title: "mini-vLLM",
        desc: "Implemented PagedAttention from the vLLM paper using custom Triton GPU kernels for memory-efficient LLM inference. Built paged KV cache with block allocation, reference counting, and prefix caching. Developed continuous batching scheduler with chunked prefill.",
        tags: ["CUDA", "Triton", "vLLM", "Python"],
        link: "github.com/ubermenchh/mini-vllm",
    },
    {
        year: "2024",
        title: "Flash Attention 2 in CUDA",
        desc: "Implemented Flash Attention 2 in CUDA using shared memory tiling and online softmax, reducing memory complexity from O(n^2) to O(n).",
        tags: ["CUDA C++", "Attention"],
        link: "github.com/ubermenchh/flash-attention",
    },
    {
        year: "2025",
        title: "Qwen2.5-3B-Open-R1-Math",
        desc: "Fine-tuned Qwen2.5 3B on math reasoning using GRPO loss. Implemented reward hacking and RL post-training with HuggingFace TRL. Used Unsloth and vLLM for quantized multi-GPU training. Explored the lower bound of reasoning capability in small models.",
        tags: ["PyTorch", "TRL", "Unsloth", "vLLM", "GRPO"],
        hfLink: "huggingface.co/ubermenchh/Qwen2.5-3B-open-r1-math",
    },
    {
        year: "2026",
        title: "anki-cli",
        desc: "Hybrid Anki CLI for humans and AI agents. Supports both AnkiConnect and direct SQLite backends. Features a full search query language compiled to SQL, interactive TUI review mode, and ships a SKILL.md for autonomous agent integration. Published on PyPI.",
        tags: ["Python", "SQLite", "CLI", "AI Agents"],
        link: "github.com/ubermenchh/anki-cli",
    },
    {
        year: "2026",
        title: "tangent",
        desc: "Mobile agent that understands natural language and executes actions on Android. Uses an LLM as the reasoning engine with phone capabilities exposed as callable tools. Built with Expo SDK 54, React Native, Tamagui, and Zustand.",
        tags: ["TypeScript", "React Native", "Expo", "LLM"],
        link: "github.com/ubermenchh/tangent",
    },
    {
        year: "2026",
        title: "engram",
        desc: "PyTorch implementation of DeepSeek's Engram paper, augmenting transformer attention with n-gram memory retrieval via hash-based lookup and learned gating. Trained on WikiText-103 with Modal cloud deployment.",
        tags: ["Python", "PyTorch", "Modal"],
        link: "github.com/ubermenchh/engram",
        hfLink: "huggingface.co/ubermenchh/nanogpt-engram-wikitext",
    },
    {
        year: "2026",
        title: "mhc",
        desc: "PyTorch implementation of DeepSeek's Manifold-constrained Hyper-Connections, integrating multi-stream transformer routing into NanoGPT. Includes a Modal cloud training pipeline on A100 GPUs.",
        tags: ["Python", "PyTorch", "Modal"],
        link: "github.com/ubermenchh/mhc",
        hfLink: "huggingface.co/ubermenchh/nano-mhc",
    },
    {
        year: "2024",
        title: "dream.cu",
        desc: "GPU-accelerated ray tracer ported from a custom CPU framework to CUDA. Implements materials, spheres, camera systems, and hittable lists entirely on the GPU with clean header-only architecture.",
        tags: ["CUDA", "C++", "Ray Tracing"],
        link: "github.com/ubermenchh/dream.cu",
    },
    {
        year: "2024",
        title: "pycc",
        desc: "A tiny C compiler written in Python. Handles lexing, parsing, and x86 assembly code generation. Supports functions and basic C constructs. Based on Nora Sandler's incremental compiler approach.",
        tags: ["Python", "Compilers", "x86 Assembly"],
        link: "github.com/ubermenchh/pycc",
    },
    {
        year: "2024",
        title: "chotagrad",
        desc: "Tiny autograd engine built from scratch. Implements reverse-mode automatic differentiation, a neural network module system, and trains on scikit-learn's make_moons dataset as a demonstration.",
        tags: ["Python", "Autograd", "Neural Networks"],
        link: "github.com/ubermenchh/chotagrad",
    },
];

const skills = [
    { label: "ML & Agents", items: "PyTorch (DDP, FSDP), JAX, HuggingFace, Unsloth, vLLM, LangChain/LangGraph, Google ADK" },
    { label: "Programming", items: "Python, CUDA, OpenAI Triton, TypeScript, Shell, C/C++" },
    { label: "Infrastructure", items: "FastAPI, GraphQL, RabbitMQ, Redis, Kafka, Docker, Nginx, GitHub Actions" },
    { label: "Cloud & Data", items: "AWS (EC2, ELB, Route53, CloudWatch, IAM), Postgres, Elasticsearch, MongoDB, Faiss, Pinecone" },
];

export default function ResumePage() {
    return (
        <div className="max-w-[860px] mx-auto px-8 pt-14 pb-24">
            {/* Page Header */}
            <div className="flex justify-between items-end pb-8 border-b-2 border-fg max-md:flex-col max-md:items-start max-md:gap-4">
                <div>
                    <h1 className="font-serif text-[2rem] font-medium tracking-tight leading-tight mb-1">
                        Umang Kaushik
                    </h1>
                    <p className="font-serif text-[0.95rem] italic text-fg-muted">
                        AI Engineer &middot; ML Researcher
                    </p>
                </div>
                <ResumeContact />
            </div>

            {/* Resume Body */}
            <div className="grid grid-cols-1">

                {/* Experience */}
                <div className="grid grid-cols-[160px_1fr] border-b border-border max-md:grid-cols-1">
                    <SectionLabel>Experience</SectionLabel>
                    <div className="py-8 pl-8 max-md:pl-0 max-md:py-5">
                        {experience.map((entry, i) => (
                            <div key={i} className={`grid grid-cols-[110px_1fr] gap-x-5 max-md:grid-cols-[80px_1fr] max-md:gap-x-3 ${i < experience.length - 1 ? "mb-8" : ""}`}>
                                <div className="font-mono text-[0.62rem] font-light text-fg-faint leading-relaxed pt-[3px] text-right">
                                    <span className="block">{entry.dateEnd}</span>
                                    <span className="block border-t border-border pt-0.5 mt-0.5">{entry.dateStart}</span>
                                </div>
                                <div>
                                    <div className="font-serif text-base font-medium text-fg leading-snug mb-0.5">{entry.title}</div>
                                    <div className="font-serif text-[0.85rem] italic text-fg-muted mb-2">{entry.org}</div>
                                    <p className="font-serif text-[0.88rem] text-fg-muted leading-relaxed mb-2">{entry.desc}</p>
                                    <div className="flex flex-wrap gap-1.5 mt-2">
                                        {entry.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Projects */}
                <div className="grid grid-cols-[160px_1fr] border-b border-border max-md:grid-cols-1">
                    <SectionLabel>Projects</SectionLabel>
                    <div className="py-8 pl-8 max-md:pl-0 max-md:py-5">
                        {projects.map((project, i) => (
                            <div key={i} className={`grid grid-cols-[110px_1fr] gap-x-5 max-md:grid-cols-[80px_1fr] max-md:gap-x-3 ${i < projects.length - 1 ? "mb-6 pb-6 border-b border-dashed border-border" : ""}`}>
                                <div className="font-mono text-[0.62rem] font-light text-fg-faint pt-[3px] text-right">{project.year}</div>
                                <div>
                                    <div className="font-serif text-base font-medium text-fg leading-snug mb-0.5">{project.title}</div>
                                    <p className="font-serif text-[0.88rem] text-fg-muted leading-relaxed mb-2">{project.desc}</p>
                                    <div className="flex flex-wrap gap-1.5 mt-2">
                                        {project.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                                    </div>
                                        <div className="flex flex-col items-start gap-1 mt-2">
                                            {project.link && (
                                                <a
                                                    href={`https://${project.link}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-mono text-[0.6rem] font-light tracking-[0.06em] text-accent no-underline inline-flex items-center gap-1.5 hover:underline"
                                                >
                                                    <GitHubIcon />
                                                    {project.link} &rarr;
                                                </a>
                                            )}
                                            {project.hfLink && (
                                                <a
                                                    href={`https://${project.hfLink}`}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="font-mono text-[0.6rem] font-light tracking-[0.06em] text-accent no-underline inline-flex items-center gap-1.5 hover:underline"
                                                >
                                                    <HuggingFaceIcon />
                                                    {project.hfLink} &rarr;
                                                </a>
                                            )}
                                        </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Skills */}
                <div className="grid grid-cols-[160px_1fr] max-md:grid-cols-1">
                    <SectionLabel>Skills</SectionLabel>
                    <div className="py-8 pl-8 max-md:pl-0 max-md:py-5">
                        <div className="grid grid-cols-2 gap-x-8 gap-y-5 max-md:grid-cols-1">
                            {skills.map((group) => (
                                <div key={group.label}>
                                    <div className="font-mono text-[0.6rem] font-normal tracking-[0.1em] uppercase text-fg-faint mb-1.5">
                                        {group.label}
                                    </div>
                                    <div className="font-serif text-[0.88rem] text-fg-muted leading-relaxed">
                                        {group.items}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>

            {/* Footer */}
            <div className="border-t border-border pt-6 mt-8 text-center">
                <p className="font-mono text-[0.6rem] font-light tracking-[0.08em] text-fg-faint">
                    Compiler Durden &middot; ubermenchh &middot; last updated Feb 2026
                </p>
            </div>
        </div>
    );
}