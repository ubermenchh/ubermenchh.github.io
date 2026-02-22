"use client";

import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export default function ResumeContact() {
    return (
        <div className="flex flex-col items-end gap-2 max-md:items-start">
            <div className="flex gap-3 items-center">
                <a href="https://mail.google.com/mail/?view=cm&to=umangkaushik2002@gmail.com" className="text-fg-faint hover:text-accent transition-colors" aria-label="Email">
                    <HiOutlineMail className="w-4 h-4" />
                </a>
                <a href="https://github.com/ubermenchh" target="_blank" rel="noopener noreferrer" className="text-fg-faint hover:text-accent transition-colors" aria-label="GitHub">
                    <FaGithub className="w-4 h-4" />
                </a>
                <a href="https://x.com/ubermenchh_" target="_blank" rel="noopener noreferrer" className="text-fg-faint hover:text-accent transition-colors" aria-label="X">
                    <FaXTwitter className="w-4 h-4" />
                </a>
            </div>
            <a
                href="https://drive.google.com/file/d/1g0kzBsJytBm1kHZgut245uoFuFFCxwy_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[0.6rem] font-light tracking-[0.1em] uppercase text-fg-faint border border-border px-2.5 py-1 hover:text-accent hover:border-accent transition-colors"
            >
                &darr; Download PDF
            </a>
        </div>
    );
}