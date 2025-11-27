import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
    return (
        <div className="bg-tn-bg p-8">
            <div className="max-w-5xl mx-auto py-12">
                <section className="mb-8 p-8 border border-tn-blue bg-tn-bg-dark">
                    <div className="flex items-start gap-8">
                        {/* Profile Image */}
                        <div className="relative w-32 h-32 overflow-hidden flex-shrink-0 border-2 border-tn-blue">
                            <Image 
                                src="/guts.jpg"
                                alt="Compiler Durden"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Name and Title */}
                        <div className="flex-1">
                            <h1 className="text-5xl font-bold text-tn-fg mb-3">
                                Compiler Durden
                            </h1>
                            <p className="text-xl text-tn-fg-dark mb-4">
                                Nerd
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-4">
                                <a
                                    href="https://github.com/ubermenchh"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-tn-fg-dark hover:text-tn-blue transition-colors"
                                    aria-label="Github"
                                >
                                    <FontAwesomeIcon icon={faGithub} className="w-7 h-7" />
                                </a>
                                <a
                                    href="https://x.com/ubermenchh_"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-tn-fg-dark hover:text-tn-blue transition-colors"
                                    aria-label="X"
                                >
                                    <FontAwesomeIcon icon={faXTwitter} className="w-6 h-6" />
                                </a>
                                <a
                                    href="mailto:ubermenchh69@gmail.com"
                                    className="text-tn-fg-dark hover:text-tn-blue transition-colors"
                                    aria-label="Email"
                                >
                                    <FontAwesomeIcon icon={faEnvelope} className="w-6 h-6" />
                                </a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Me Section */}
                <section className="p-8 border border-tn-blue bg-tn-bg-dark">
                    <div className="prose prose-zinc dark:prose-invert max-w-none">
                        <p className="text-lg text-tn-fg-dark mb-4">
                            Hey, I&apos;m Compiler Durden (ubermenchh), a serial nerd obsessed about low-level
                            and parallel systems. I work on AI Agents during the day and CUDA kernels and
                            Model Training during the night.
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
                </section>
            </div>
        </div>
    );
}