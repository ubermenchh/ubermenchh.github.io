import React from 'react';

interface ContentBoxProps {
    children: React.ReactNode;
    title?: string;
    className?: string;
}

export default function ContentBox({ children, title, className = "" }: ContentBoxProps) {
    return (
        <div className={`relative min-h-[400px] border border-tn-blue bg-tn-bg p-6 md:p-10 ${className}`}>
            {title && (
                <div className="absolute top-0 left-0 right-0 h-8 border-b border-tn-terminal-black bg-tn-bg flex items-center px-4">
                    <div className="flex space-x-2 mr-4">
                        <div className="w-2 h-2 rounded-full bg-tn-red"></div>
                        <div className="w-2 h-2 rounded-full bg-tn-yellow"></div>
                        <div className="w-2 h-2 rounded-full bg-tn-green"></div>
                    </div>
                    <span className="text-xs font-mono text-tn-comment">{title}</span>
                </div>
            )}
            <div className={title ? 'mt-6' : ''}>{children}</div>
        </div>
    );
}

