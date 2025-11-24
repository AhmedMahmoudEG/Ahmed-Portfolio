"use client";

import { motion } from "framer-motion";

const projects = [
    {
        title: "Tourista — Full-Stack Travel Booking App",
        description:
            "Tourista is a complete travel booking web app built with Node.js, Express, and MongoDB using MVC architecture. It includes authentication, secure payments, and optimized APIs for a smooth booking experience.",
        tech: ["Node.js", "Express.js", "MongoDB", "MVC"],
        link: "https://tourista-psi.vercel.app",
        linkText: "View Project",
    },
    {
        title: "E-commerce Backend",
        description:
            "A scalable e-commerce backend built with Node.js, Express, and MongoDB. Features JWT & OAuth authentication, Redis caching, and optimized queries for high performance.",
        tech: ["Node.js", "Express.js", "MongoDB", "Redis"],
        link: "https://e-commerce-zeta-five-54.vercel.app",
        linkText: "View Project",
    },
    {
        title: "ProdFlow App",
        description:
            "ProdFlow is a backend application built with Node.js, Express, and Prisma to manage changelogs for digital products. It was built during a Frontend Masters workshop focusing on routing, authentication, error handling, testing, and deployment.",
        tech: ["Node.js", "Express.js", "Prisma", "PostgreSQL"],
        link: "https://github.com/AhmedMahmoudEG/ProdFlow-App",
        linkText: "View Code",
    },
    {
        title: "Todo App",
        description:
            "A full-stack Dockerized Todo App with authentication. Built using Node.js, Express, Prisma, PostgreSQL, and JWT. Includes secure login and persistent storage.",
        tech: ["Node.js", "Express.js", "Prisma", "PostgreSQL", "Docker"],
        link: "https://github.com/AhmedMahmoudEG/Todo-App",
        linkText: "View Code",
    },
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-16 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-white sm:text-4xl mb-4"
                    >
                        Projects
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "100px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto"
                    />
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -10, rotateX: 5, rotateY: 5, scale: 1.02 }}
                            className="group relative flex flex-col justify-between rounded-xl bg-[#151515] p-6 transition-all duration-300 border border-transparent hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)] perspective-1000"
                        >
                            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                            <div className="relative z-10">
                                <h3 className="mb-3 text-xl font-bold text-white group-hover:text-[#2dd4bf] transition-colors">
                                    {project.title}
                                </h3>
                                <p className="mb-6 text-sm leading-relaxed text-neutral-400 group-hover:text-neutral-300 transition-colors">
                                    {project.description}
                                </p>
                                <div className="mb-6 flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            className="rounded-full bg-neutral-800 px-3 py-1 text-xs font-medium text-neutral-300 group-hover:bg-cyan-900/30 group-hover:text-cyan-200 transition-colors"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative z-10 inline-flex w-fit items-center text-sm font-semibold text-[#2dd4bf] hover:text-[#14b8a6] transition-colors"
                                aria-label={`View ${project.title}`}
                            >
                                {project.linkText}
                                <svg
                                    className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
