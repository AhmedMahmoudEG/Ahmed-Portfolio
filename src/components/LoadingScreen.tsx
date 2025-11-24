"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 800); // Slightly longer than requested to ensure smooth exit

        return () => clearTimeout(timer);
    }, []);

    if (!isLoading) return null;

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: isLoading ? 1 : 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#0f0f0f]"
        >
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="relative flex items-center justify-center"
            >
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />
                <div className="text-4xl font-bold text-white tracking-widest">
                    AHMED<span className="text-cyan-400">.</span>
                </div>
            </motion.div>
        </motion.div>
    );
}
