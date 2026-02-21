"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/* ─── About Section ──────────────────────────────────────────────── */
export default function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="about"
            ref={ref}
            className="py-24 px-6 border-t border-blue-500/10"
            aria-label="About"
        >
            <div className="max-w-6xl mx-auto grid md:grid-cols-[200px_1fr] gap-16 items-start">
                {/* Section label */}
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.5 }}
                    className="md:text-right"
                >
                    <span className="text-blue-400 text-sm tracking-[0.2em] uppercase font-medium">
                        01. About
                    </span>
                </motion.div>

                {/* Content */}
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.5, delay: 0.15 }}
                    className="space-y-5"
                >
                    <h2 className="text-2xl md:text-3xl font-bold text-[#e2e8f0]">
                        Who I am
                    </h2>

                    <div className="space-y-4 text-[#94a3b8] leading-relaxed text-sm md:text-base">
                        <p>
                            I&apos;m Rebira Oli Negassa, a software engineer based in Addis
                            Ababa, Ethiopia, with a passion for building systems at the
                            intersection of backend engineering and applied artificial
                            intelligence. My work spans the full software lifecycle — from
                            designing scalable APIs to training and deploying machine learning
                            models.
                        </p>
                        <p>
                            My technical foundation is in Python and Django, where I&apos;ve built
                            production-grade REST APIs, implemented authentication flows, and
                            managed relational databases. I&apos;m equally comfortable wiring up
                            frontend UIs in React when the project demands it, which lets me
                            reason about systems end-to-end rather than in isolation.
                        </p>
                        <p>
                            On the AI/ML side, I work with scikit-learn, TensorFlow, and
                            natural language processing tools to build models that do useful
                            things: classify text, surface insights, and surface structure in
                            messy data. I believe good ML engineering starts with clean data
                            and honest evaluation — not hype.
                        </p>
                        <p>
                            I approach problems like an engineer first: understand the
                            requirements clearly, design before coding, and prioritize
                            correctness and maintainability over cleverness. I write code that
                            I and others can read, extend, and debug six months from now.
                        </p>
                        <p>
                            Outside of code, I think deeply about how technology can create
                            real value in emerging markets — starting with my own context in
                            East Africa. I care about building systems that are reliable,
                            accessible, and meaningful to the people who actually use them.
                        </p>
                    </div>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                        {[
                            { label: "Focus", value: "Backend + AI/ML" },
                            { label: "Location", value: "Addis Ababa, ET" },
                            { label: "Available", value: "Open to roles" },
                        ].map((stat) => (
                            <div
                                key={stat.label}
                                className="bg-[#131720] border border-blue-500/10 rounded-lg px-4 py-3"
                            >
                                <p className="text-[#64748b] text-xs mb-1">{stat.label}</p>
                                <p className="text-blue-400 text-sm font-medium">{stat.value}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
