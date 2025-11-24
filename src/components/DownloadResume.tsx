"use client";

import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

interface DownloadResumeProps {
    className?: string;
    variant?: "default" | "small";
}

export default function DownloadResume({
    className,
    variant = "default",
}: DownloadResumeProps) {
    return (
        <a
            href="/resume.pdf"
            download="Ahmed_Mahmoud_Resume.pdf"
            className={cn(
                "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-neutral-900 font-medium text-white transition-all duration-300 hover:bg-neutral-800 hover:text-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-neutral-900",
                variant === "default" ? "px-8 py-3 text-sm" : "px-4 py-2 text-xs",
                className
            )}
            aria-label="Download Resume"
        >
            <Download className={cn("transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5", variant === "default" ? "h-4 w-4" : "h-3 w-3")} />
            <span>Download Resume</span>
        </a>
    );
}
