"use client";

import { motion, useInView } from "framer-motion";
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
                            I&apos;m Rebira Oli Negassa, a software engineer based in Addis Ababa,
                            Ethiopia, passionate about building systems that combine robust software
                            engineering with applied artificial intelligence and machine learning.
                            My work spans the full software lifecycle — from designing scalable web
                            and mobile applications to training and deploying intelligent models.
                        </p>
                        <p>
                            I&apos;m comfortable working across the full stack, designing APIs,
                            integrating frontend interfaces, and ensuring systems are maintainable,
                            scalable, and performant. I integrate AI and ML into projects where it
                            adds real value, whether that&apos;s automating tasks, analyzing data, or
                            providing intelligent features to end users.
                        </p>
                        <p>
                            On the AI/ML side, I work with modern machine learning tools to build
                            models that solve practical problems: classifying data, extracting
                            insights, and uncovering patterns in complex datasets. I believe good ML
                            engineering begins with clean data, thoughtful evaluation, and a focus on
                            utility rather than hype.
                        </p>
                        <p>
                            I approach problems like an engineer first: clarify requirements, plan
                            before building, and prioritize correctness, maintainability, and
                            readability. My goal is to create systems that are not just functional,
                            but understandable and extensible for the long term.
                        </p>
                        <p>
                            Outside of code, I care about creating meaningful technology solutions in
                            emerging markets, starting with East Africa. I strive to build systems
                            that are reliable, accessible, and genuinely useful to the people who
                            rely on them.
                        </p>
                    </div>

                    {/* Quick stats */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4">
                        {[
                            { label: "Focus", value: "Full-Stack Software Engineering + AI/ML" },
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
