import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import ContentBox from "@/components/ContentBox";

export default function Home() {
    return (
        <div className="px-8 pb-8 pt-0">
            <div className="max-w-5xl mx-auto py-4">
                <section className="mb-8 p-6 md:p-8 border border-tn-blue bg-tn-bg flex flex-col md:flex-row items-center md:items-start gap-6 relative group overflow-hidden">
                    {/* Avatar Block */}
                    <div className="relative">
                        <div className="w-24 h-24 md:w-28 md:h-28 bg-tn-bg border border-tn-blue flex items-center justify-center overflow-hidden relative">
                            <Image 
                                src="/guts.jpg"
                                alt="Compiler Durden"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-tn-blue opacity-0 group-hover:opacity-10 transition-opacity mix-blend-overlay"></div>
                        </div>
                        <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-tn-blue"></div>
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-tn-blue"></div>
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-3">
                        <div>
                            <h1 className="text-2xl md:text-3xl font-bold text-tn-fg tracking-tight">Compiler Durden / ubermenchh</h1>
                            <p className="font-mono text-sm text-tn-purple mt-1">Nerd</p>
                        </div>

                        <div className="flex justify-center md:justify-start space-x-4 pt-1">
                            <a
                                href="https://github.com/ubermenchh"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-tn-fg-dark hover:text-tn-blue transition-colors transform"
                                aria-label="Github"
                            >
                                <FontAwesomeIcon icon={faGithub} className="w-[18px] h-[18px]" />
                            </a>
                            <a
                                href="https://x.com/ubermenchh_"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-tn-fg-dark hover:text-tn-blue transition-colors transform"
                                aria-label="X"
                            >
                                <FontAwesomeIcon icon={faXTwitter} className="w-[18px] h-[18px]" />
                            </a>
                            <a
                                href="mailto:ubermenchh69@gmail.com"
                                className="text-tn-fg-dark hover:text-tn-blue transition-colors transform"
                                aria-label="Email"
                            >
                                <FontAwesomeIcon icon={faEnvelope} className="w-[18px] h-[18px]" />
                            </a>
                        </div>
                    </div>
                    <div className="absolute top-4 right-6 font-mono text-xs text-tn-bg-highlight select-none pointer-events-none">ID: 0x241002</div>
                </section>

                {/* About Me Section */}
                <ContentBox title="~/user/home">
                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                        <p className="text-lg text-tn-fg-dark mb-4">
                            Hey, I&apos;m <span className="text-white font-bold">Compiler Durden</span> (ubermenchh), a serial nerd obsessed about low-level
                            and parallel systems. I work on <span className="text-tn-green1">AI Agents</span> during the day and <span className="text-tn-magenta">CUDA kernels</span> and
                            <span className="text-tn-magenta"> Model Training</span> during the night.
                        </p>
                        <p className="text-lg text-tn-fg-dark mb-4">
                            Currently breaking and learning CUDA kernels, Deep RL environments and interpretability
                            research. I want to make the smallest intelligent model possible.
                        </p>
                        <p className="text-lg text-tn-fg-dark mb-4">
                            My brain&apos;s browser has 47 tabs open across four different centuries and three levels of abstraction.
                            I collect intellectual hobbies like a crow hoards shiny things: compilers, dead philosophers, 
                            the psyche and history.
                        </p>
                    </div>
                </ContentBox>
            </div>
        </div>
    );
}