"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
    return (
        <section id="about" className="py-24 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="border-l-2 border-cyan-400/50 pl-6 md:pl-10">
                    {/* Title */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-white sm:text-4xl mb-2"
                    >
                        About Me
                    </motion.h2>

                    {/* Subtitle Accent */}
                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100px" }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-cyan-400 to-transparent mb-8"
                    />

                    {/* Content */}
                    <div className="space-y-6 text-lg text-neutral-300 leading-relaxed">
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                        >
                            I am a Full-Stack Engineer specializing in React & Next.js, Node.js (Express.js & NestJS), and TypeScript.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            I have solid experience working with MongoDB and PostgreSQL to build reliable and well-structured data layers.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                        >
                            I focus on creating fast, scalable APIs and full-stack applications that feel smooth, clean, and user-friendly.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}
