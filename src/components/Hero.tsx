"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";
import DownloadResume from "@/components/DownloadResume";

export default function Hero() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const rotateX = useTransform(y, [-100, 100], [30, -30]);
    const rotateY = useTransform(x, [-100, 100], [-30, 30]);

    return (
        <section id="home" className="relative flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 text-center mt-32 perspective-1000">
            {/* Avatar */}
            <motion.div
                style={{ x, y, rotateX, rotateY, z: 100 }}
                drag
                dragElastic={0.16}
                dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
                whileHover={{ cursor: "grab" }}
                whileTap={{ cursor: "grabbing" }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative mb-8 h-[140px] w-[140px] overflow-hidden rounded-full border-2 border-[#00ffcc40] shadow-[0_0_40px_-10px_rgba(0,255,204,0.3)] hover:shadow-[0_0_60px_-10px_rgba(0,255,204,0.5)] transition-shadow duration-300"
            >
                <Image
                    src="/avatar.jpg"
                    alt="Ahmed Mahmoud - Full-Stack Engineer"
                    fill
                    className="object-cover pointer-events-none"
                    priority
                />
            </motion.div>

            {/* Title */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-4 text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
                Hi, I’m Ahmad — <span className="text-[#2dd4bf]">Full-Stack Engineer</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mb-10 max-w-2xl text-lg text-neutral-400 sm:text-xl"
            >
                I build fast, modern, scalable web applications using Next.js, NestJS, and PostgreSQL.
            </motion.p>

            {/* Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col items-center space-y-6"
            >
                <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                    <a
                        href="#projects"
                        className="group relative rounded-full bg-[#2dd4bf] px-8 py-3 text-sm font-semibold text-black transition-all hover:bg-[#14b8a6] hover:shadow-[0_0_20px_rgba(45,212,191,0.4)]"
                    >
                        View Projects
                    </a>
                    <a
                        href="#contact"
                        className="group relative rounded-full border border-neutral-700 bg-transparent px-8 py-3 text-sm font-semibold text-white transition-all hover:border-[#2dd4bf]/50 hover:text-[#2dd4bf] hover:shadow-[0_0_20px_rgba(45,212,191,0.1)]"
                    >
                        Contact Me
                    </a>
                </div>

                <DownloadResume />
            </motion.div>
        </section>
    );
}
