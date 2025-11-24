"use client";

import { usePathname } from "next/navigation";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
];

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function Header() {
    const pathname = usePathname();
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-md px-4 sm:px-0">
            <div className="flex items-center justify-between rounded-full bg-neutral-900/80 backdrop-blur-md border border-white/10 px-6 py-2 shadow-lg">
                <nav className="flex items-center space-x-6">
                    {navItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium transition-colors duration-200 text-neutral-300 hover:text-white hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]"
                        >
                            {item.name}
                        </a>
                    ))}
                </nav>
                <div className="pl-6 border-l border-white/10 ml-6">
                    <button
                        aria-label="Toggle theme"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="flex items-center justify-center w-8 h-8 rounded-full text-neutral-400 hover:text-white hover:bg-white/10 transition-colors"
                    >
                        {mounted && theme === "dark" ? (
                            <Sun className="w-5 h-5" aria-hidden="true" />
                        ) : (
                            <Moon className="w-5 h-5" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </div>
        </header>
    );
}
