"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

/* ─── Navigation links ──────────────────────────────────────────── */
const navLinks = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    /* Add blur/border on scroll */
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
                    ? "bg-[#0a0c10]/90 backdrop-blur-md border-b border-blue-500/10"
                    : "bg-transparent"
                }`}
        >
            <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                {/* Logo / Brand */}
                <Link
                    href="#hero"
                    className="text-blue-400 font-bold text-lg tracking-tight hover:text-blue-300 transition-colors"
                    aria-label="Home"
                >
                    <span className="text-[#64748b]">&lt;</span>
                    rebira
                    <span className="text-[#64748b]">/&gt;</span>
                </Link>

                {/* Desktop nav */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.label}>
                            <a
                                href={link.href}
                                className="text-sm text-[#64748b] hover:text-blue-400 transition-colors duration-200 tracking-wide"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="/resume.pdf"
                            download
                            className="px-4 py-1.5 text-sm border border-blue-500/40 text-blue-400 rounded hover:bg-blue-500/10 transition-all duration-200 tracking-wide"
                        >
                            Resume
                        </a>
                    </li>
                </ul>

                {/* Mobile hamburger */}
                <button
                    className="md:hidden text-[#64748b] hover:text-blue-400 transition-colors"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
                </button>
            </nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-[#0f1117]/95 backdrop-blur-md border-b border-blue-500/10"
                    >
                        <ul className="flex flex-col px-6 py-4 gap-4">
                            {navLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="block text-sm text-[#64748b] hover:text-blue-400 transition-colors py-1"
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="/resume.pdf"
                                    download
                                    className="inline-block px-4 py-1.5 text-sm border border-blue-500/40 text-blue-400 rounded hover:bg-blue-500/10 transition-all"
                                >
                                    Resume
                                </a>
                            </li>
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
