"use client";

import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import DownloadResume from "@/components/DownloadResume";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    const socialLinks = [
        {
            name: "GitHub",
            href: "https://github.com/ahmedmahmoudEG/",
            icon: Github,
        },
        {
            name: "LinkedIn",
            href: "https://www.linkedin.com/in/ahmadmahmoud98",
            icon: Linkedin,
        },
        {
            name: "Email",
            href: "mailto:ahmed.mahmoud@hotmail.com",
            icon: Mail,
        },
    ];

    return (
        <footer className="w-full bg-[#0f0f0f] relative mt-20">
            {/* Cyan accent line with gradient */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

            <div className="max-w-5xl mx-auto px-6 py-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    {/* Copyright */}
                    <div className="flex flex-col md:flex-row items-center gap-4 text-neutral-400 text-sm font-light tracking-wide">
                        <span>&copy; Ahmed {currentYear}</span>
                        <DownloadResume variant="small" className="md:hidden" />
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-6">
                        <DownloadResume variant="small" className="hidden md:inline-flex" />
                        {socialLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                target={link.name !== "Email" ? "_blank" : undefined}
                                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                                className="group flex items-center gap-2 text-neutral-400 hover:text-cyan-400 transition-colors duration-300"
                                aria-label={link.name}
                            >
                                <link.icon className="w-4 h-4 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]" />
                                <span className="text-sm hidden md:inline-block opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                                    {link.name}
                                </span>
                            </Link>
                        ))}
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
