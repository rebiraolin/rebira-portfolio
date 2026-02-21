"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiArrowDown } from "react-icons/fi";

/* ─── Typewriter hook ────────────────────────────────────────────── */
function useTypewriter(text: string, speed = 40) {
    const [displayed, setDisplayed] = useState("");
    const [done, setDone] = useState(false);

    useEffect(() => {
        let i = 0;
        const timer = setInterval(() => {
            if (i < text.length) {
                setDisplayed(text.slice(0, i + 1));
                i++;
            } else {
                setDone(true);
                clearInterval(timer);
            }
        }, speed);
        return () => clearInterval(timer);
    }, [text, speed]);

    return { displayed, done };
}

/* ─── Hero Section ───────────────────────────────────────────────── */
export default function Hero() {
    const headline =
        "Software engineer building AI-powered systems that solve real problems.";
    const { displayed, done } = useTypewriter(headline, 35);

    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px-6 grid-bg overflow-hidden"
            aria-label="Hero"
        >
            {/* Ambient glow */}
            <div
                aria-hidden
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none"
            />

            <div className="max-w-4xl w-full relative z-10">
                {/* Location badge */}
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex items-center gap-2 text-[#64748b] text-sm mb-6"
                >
                    <FiMapPin className="text-blue-400" size={14} />
                    <span>Addis Ababa, Ethiopia</span>
                </motion.div>

                {/* Headline with typewriter */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight text-[#e2e8f0] mb-6 min-h-[8rem] md:min-h-[7rem]">
                    {displayed}
                    {!done && (
                        <span className="inline-block w-[2px] h-[1em] bg-blue-400 ml-1 cursor-blink align-middle" />
                    )}
                </h1>

                {/* Subtext */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.6 }}
                    className="text-[#64748b] text-base md:text-lg max-w-2xl leading-relaxed mb-10"
                >
                    Backend-focused engineer with experience in Python, Django, and
                    applied machine learning. I turn complex requirements into clean,
                    maintainable systems.
                </motion.p>

                {/* CTA buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.9, duration: 0.6 }}
                    className="flex flex-wrap gap-4"
                >
                    <a
                        href="#projects"
                        className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded transition-all duration-200 glow-border tracking-wide"
                    >
                        Explore My Work
                    </a>
                    <a
                        href="#contact"
                        className="px-6 py-3 border border-blue-500/40 text-blue-400 hover:bg-blue-500/10 text-sm font-semibold rounded transition-all duration-200 tracking-wide"
                    >
                        Get In Touch
                    </a>
                    <a
                        href="/resume.pdf"
                        download
                        className="px-6 py-3 border border-[#64748b]/30 text-[#64748b] hover:border-blue-500/40 hover:text-[#e2e8f0] text-sm font-semibold rounded transition-all duration-200 tracking-wide"
                    >
                        Download Resume
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 3.5, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#64748b]/50"
            >
                <span className="text-xs tracking-widest">SCROLL</span>
                <FiArrowDown size={14} className="animate-bounce" />
            </motion.div>
        </section>
    );
}
