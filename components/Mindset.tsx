"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Philosophy data ────────────────────────────────────────────── */
const principles = [
    {
        icon: "◈",
        title: "Clarity before code",
        body: "I resist the urge to write code until the problem is truly understood. Clear requirements, clean interfaces, and honest tradeoffs produce better software than speed does.",
    },
    {
        icon: "◈",
        title: "Systems thinking",
        body: "I reason about how components interact, fail, and scale — not just how they behave in isolation. Every design decision is a bet on the future; I try to make good bets.",
    },
    {
        icon: "◈",
        title: "Ownership mentality",
        body: "I take responsibility for the full lifecycle of my work: design, implementation, testing, documentation, and maintenance. If it breaks, I want to be the first to know and fix it.",
    },
    {
        icon: "◈",
        title: "Technical craft matters",
        body: "I believe that readable code is a feature, and that quiet attention to correctness, naming, and structure compounds over time into systems people are proud to maintain.",
    },
];

/* ─── Mindset Section ────────────────────────────────────────────── */
export default function Mindset() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="mindset"
            ref={ref}
            className="py-24 px-6 border-t border-blue-500/10"
            aria-label="Mindset and Philosophy"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-[200px_1fr] gap-16 items-start mb-12">
                    {/* Section label */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="md:text-right"
                    >
                        <span className="text-blue-400 text-sm tracking-[0.2em] uppercase font-medium">
                            05. Philosophy
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#e2e8f0]">
                            How I Work
                        </h2>
                        <p className="text-[#64748b] text-sm mt-2">
                            Principles that guide how I approach engineering problems.
                        </p>
                    </motion.div>
                </div>

                {/* Principles grid */}
                <div className="md:ml-[calc(200px+4rem)] grid sm:grid-cols-2 gap-5">
                    {principles.map((p, i) => (
                        <motion.div
                            key={p.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.4, delay: i * 0.1 }}
                            className="gradient-border rounded-xl p-6 group"
                        >
                            <div className="flex items-start gap-4">
                                <span className="text-blue-400 text-xl mt-0.5 shrink-0 group-hover:scale-110 transition-transform">
                                    {p.icon}
                                </span>
                                <div>
                                    <h3 className="text-[#e2e8f0] font-semibold mb-2 group-hover:text-blue-300 transition-colors">
                                        {p.title}
                                    </h3>
                                    <p className="text-[#64748b] text-sm leading-relaxed">{p.body}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
