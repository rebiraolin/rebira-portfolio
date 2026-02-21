"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Education data ─────────────────────────────────────────────── */
const education = [
    {
        institution: "Addis Ababa Science and Technology University",
        degree: "Bachelor of Science in Software Engineering",
        duration: "Jan 2023 – Jun 2027",
        location: "Addis Ababa, Ethiopia",
        bullets: [
            "Actively applying software engineering principles to full-stack development, AI/ML integration, and system design.",
            "Built multiple production-ready applications as part of coursework and personal projects.",
            "Engaged in hands-on experience with distributed systems, database management, and machine learning applications.",
        ],
        badge: "B.Sc.",
    },
    {
        institution: "ALX Software Engineering Program",
        degree: "Backend Specialization",
        duration: "Feb 2025 – Sep 2025",
        location: "Addis Ababa, Ethiopia",
        bullets: [
            "Completed 1,200+ hours of intensive coding in Python, Django, SQL, and full-stack project development.",
            "Built 5+ full-stack projects using REST API architecture and database optimization techniques.",
        ],
        badge: "ALX",
    },
];

/* ─── Education Section ──────────────────────────────────────────── */
export default function Education() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="education"
            ref={ref}
            className="py-24 px-6 border-t border-blue-500/10"
            aria-label="Education"
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
                            05. Education
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#e2e8f0]">
                            Academic Background
                        </h2>
                        <p className="text-[#64748b] text-sm mt-2">
                            Formal education and intensive programs that built my foundation.
                        </p>
                    </motion.div>
                </div>

                {/* Education items */}
                <div className="md:ml-[calc(200px+4rem)] space-y-6">
                    {education.map((edu, i) => (
                        <motion.article
                            key={edu.institution}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.45, delay: i * 0.12 }}
                            className="gradient-border rounded-xl p-6 flex gap-5 items-start"
                        >
                            {/* Badge */}
                            <div className="shrink-0 w-12 h-12 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 text-xs font-bold tracking-wide">
                                {edu.badge}
                            </div>

                            {/* Content */}
                            <div className="flex-1 min-w-0">
                                <h3 className="text-[#e2e8f0] font-semibold">{edu.degree}</h3>
                                <div className="flex flex-wrap items-center gap-2 mt-0.5 mb-3">
                                    <span className="text-blue-400 text-sm">{edu.institution}</span>
                                    <span className="text-[#64748b] text-xs">•</span>
                                    <span className="text-[#64748b] text-xs">{edu.duration}</span>
                                    <span className="text-[#64748b] text-xs">•</span>
                                    <span className="text-[#64748b] text-xs">{edu.location}</span>
                                </div>

                                {/* Bullets */}
                                <ul className="space-y-1.5">
                                    {edu.bullets.map((b, j) => (
                                        <li key={j} className="flex gap-3 text-[#94a3b8] text-sm leading-relaxed">
                                            <span className="text-blue-400 mt-1.5 shrink-0 text-xs">▹</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
