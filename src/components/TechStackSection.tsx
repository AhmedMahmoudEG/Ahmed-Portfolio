"use client";

import { motion } from "framer-motion";
import {
    SiNodedotjs,
    SiExpress,
    SiNestjs,
    SiReact,
    SiNextdotjs,
    SiTypescript,
    SiMongodb,
    SiPostgresql,
    SiDocker,
} from "react-icons/si";

const techStack = [
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express.js", icon: SiExpress, color: "text-white" },
    { name: "NestJS", icon: SiNestjs, color: "text-red-500" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-blue-500" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-400" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "text-blue-400" },
    { name: "Docker", icon: SiDocker, color: "text-blue-600" },
];

export default function TechStackSection() {
    return (
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto">
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-foreground sm:text-4xl mb-4"
                    >
                        Tech Stack
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "80px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto"
                    />
                </div>

                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 justify-items-center">
                    {techStack.map((tech, index) => (
                        <motion.div
                            key={tech.name}
                            initial={{ opacity: 0, scale: 0.5 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100,
                            }}
                            whileHover={{ scale: 1.1, y: -5 }}
                            className="flex flex-col items-center gap-3 group"
                        >
                            <div className="p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 group-hover:border-cyan-500/50 group-hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] transition-all duration-300">
                                <tech.icon className={`w-8 h-8 ${tech.color} transition-transform duration-300`} />
                            </div>
                            <span className="text-sm font-medium text-neutral-400 group-hover:text-cyan-400 transition-colors">
                                {tech.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
