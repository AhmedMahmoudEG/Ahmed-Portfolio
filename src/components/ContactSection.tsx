"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isError, setIsError] = useState(false);

    async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmitting(true);
        setIsError(false);
        setIsSuccess(false);

        const formData = new FormData(event.currentTarget);

        // Append access key
        formData.append("access_key", "0feb8aa5-2cbc-40be-80d5-eedc49e0a3b4");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            if (data.success) {
                setIsSuccess(true);
                (event.target as HTMLFormElement).reset();
            } else {
                setIsError(true);
            }
        } catch (error) {
            setIsError(true);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <section id="contact" className="py-24 px-4">
            <div className="max-w-3xl mx-auto">
                {/* Section Header */}
                <div className="mb-12 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl font-bold text-white sm:text-4xl mb-4"
                    >
                        Contact Me
                    </motion.h2>
                    <motion.div
                        initial={{ width: 0, opacity: 0 }}
                        whileInView={{ width: "100px", opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="h-1 bg-gradient-to-r from-cyan-400 to-transparent mx-auto"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="mt-6 text-lg text-neutral-400"
                    >
                        Have a project in mind or just want to say hi? Send me a message!
                    </motion.p>
                </div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-[#151515] p-8 rounded-2xl border border-white/5 shadow-xl"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-neutral-300">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full bg-[#111] border border-neutral-800 rounded-lg p-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-neutral-300">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full bg-[#111] border border-neutral-800 rounded-lg p-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-neutral-300">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={5}
                                className="w-full bg-[#111] border border-neutral-800 rounded-lg p-3 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400 transition-all resize-none"
                                placeholder="Your message here..."
                            />
                        </div>

                        {/* Status Messages */}
                        {isSuccess && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="p-4 bg-green-500/10 border border-green-500/20 rounded-lg text-green-400 text-sm text-center"
                            >
                                Your message has been sent! I'll get back to you soon.
                            </motion.div>
                        )}

                        {isError && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center"
                            >
                                Something went wrong. Please try again later.
                            </motion.div>
                        )}

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-cyan-500 text-black font-bold py-4 rounded-lg hover:bg-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none"
                        >
                            {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
}
