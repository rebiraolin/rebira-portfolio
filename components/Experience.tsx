"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Experience data ────────────────────────────────────────────── */
const experiences = [
    {
        company: "GDG On Campus AASTU",
        role: "Django Mentor",
        duration: "Nov 2025 – Present",
        location: "Addis Ababa, Ethiopia (Hybrid)",
        stack: ["Python", "Django", "Django REST Framework", "PostgreSQL"],
        bullets: [
            "Mentored 40+ students on backend architecture and complex database modules, achieving a 90% completion rate.",
            "Reduced average student debugging time by 30% via standardised teaching protocols for CRUD and DRF patterns.",
            "Supervised 15+ weekly code reviews, auditing and resolving over 100 logical errors across various student projects.",
        ],
        highlight: true,
    },
    {
        company: "Freelance / Independent Projects",
        role: "Full-Stack Software Engineer",
        duration: "2024 – Present",
        location: "Addis Ababa, Ethiopia",
        stack: ["Python", "React", "Flutter", "Scikit-learn", "AI/ML"],
        bullets: [
            "Designed and built multiple full-stack applications, integrating Python/Node.js backends with React and Flutter frontends.",
            "Developed AI/ML components including emotion classifiers (TF-IDF + Logistic Regression), grade prediction pipelines (Random Forest regression), and other applied ML solutions.",
            "Implemented REST API backends with JWT authentication, PostgreSQL/SQLite databases, and CORS-aware configurations for cross-platform compatibility.",
            "Built admin dashboards and customisations for multi-user management and order workflows.",
            "Authored clean, maintainable, and testable code with proper error handling and readable architecture.",
        ],
        skillsLine: "Skills: Python, React, Flutter, Scikit-learn, AI/ML",
        highlight: false,
    },
    {
        company: "Self-Directed Learning & Free Resources",
        role: "AI/ML Engineer",
        duration: "2023 – Present",
        location: "Addis Ababa, Ethiopia",
        stack: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Matplotlib"],
        bullets: [
            "Trained and evaluated machine learning models on structured and unstructured datasets, focusing on feature engineering, model interpretability, and practical deployment.",
            "Developed NLP pipelines for text classification and analysis, from data preprocessing through model evaluation and reporting.",
            "Generated visualisations such as predicted vs. actual comparisons and feature importance charts using Matplotlib and Seaborn.",
            "Applied AI/ML solutions across personal and freelance projects to integrate intelligence into full-stack systems.",
        ],
        skillsLine: "Skills: Python, TensorFlow, Scikit-learn, Pandas, Matplotlib",
        highlight: false,
    },
];

/* ─── ExperienceItem sub-component ──────────────────────────────── */
function ExperienceItem({
    exp,
    index,
}: {
    exp: (typeof experiences)[0];
    index: number;
}) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-6 border-l border-blue-500/20 pb-10 last:pb-0"
        >
            {/* Timeline dot — highlighted for featured role */}
            <div
                className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border ring-4 ring-[#0a0c10] ${exp.highlight
                    ? "bg-blue-500 border-blue-400"
                    : "bg-blue-500/40 border-blue-500"
                    }`}
            />

            {/* Header */}
            <div className="mb-3">
                <div className="flex flex-wrap items-center gap-2 mb-0.5">
                    <h3 className="text-[#e2e8f0] font-semibold text-lg">{exp.role}</h3>
                    {exp.highlight && (
                        <span className="text-xs px-2 py-0.5 rounded-full border border-blue-500/40 text-blue-400 bg-blue-500/8">
                            Featured
                        </span>
                    )}
                </div>
                <div className="flex flex-wrap items-center gap-3 mt-0.5">
                    <span className="text-blue-400 text-sm font-medium">{exp.company}</span>
                    <span className="text-[#64748b] text-xs">•</span>
                    <span className="text-[#64748b] text-xs">{exp.duration}</span>
                    <span className="text-[#64748b] text-xs">•</span>
                    <span className="text-[#64748b] text-xs">{exp.location}</span>
                </div>
            </div>

            {/* Bullets */}
            <ul className="space-y-2 mb-4">
                {exp.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 text-[#94a3b8] text-sm leading-relaxed">
                        <span className="text-blue-400 mt-1.5 shrink-0 text-xs">▹</span>
                        <span>{bullet}</span>
                    </li>
                ))}
            </ul>

            {/* Skills line */}
            {exp.skillsLine && (
                <p className="text-blue-400 font-mono text-xs mb-4">
                    {exp.skillsLine}
                </p>
            )}

            {/* Stack tags */}
            <div className="flex flex-wrap gap-2">
                {exp.stack.map((tech) => (
                    <span
                        key={tech}
                        className="text-xs px-2.5 py-1 bg-blue-500/8 border border-blue-500/15 text-blue-300/70 rounded font-mono"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.article>
    );
}

/* ─── Experience Section ─────────────────────────────────────────── */
export default function Experience() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="experience"
            ref={ref}
            className="py-24 px-6 border-t border-blue-500/10 bg-[#0f1117]"
            aria-label="Experience"
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
                            04. Experience
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#e2e8f0]">
                            Experience
                        </h2>
                        <p className="text-[#64748b] text-sm mt-2">
                            Where I&apos;ve worked and what I&apos;ve built along the way.
                        </p>
                    </motion.div>
                </div>

                {/* Timeline */}
                <div className="md:ml-[calc(200px+4rem)]">
                    {experiences.map((exp, i) => (
                        <ExperienceItem key={`${exp.company}-${exp.role}`} exp={exp} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
