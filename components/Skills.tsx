"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Skills data ────────────────────────────────────────────────── */
const skillGroups = [
    {
        category: "Languages & Databases",
        icon: "💾",
        skills: [
            "Python",
            "JavaScript",
            "TypeScript",
            "C++",
            "Java",
            "SQL (PostgreSQL, MySQL)",
            "NoSQL (MongoDB)",
        ],
    },
    {
        category: "Frameworks & Runtimes",
        icon: "🏗️",
        skills: [
            "Django",
            "Django REST Framework",
            "FastAPI",
            "Flask",
            "Node.js",
            "Express.js",
            "React",
            "Next.js",
            "Spring Boot",
            "TensorFlow",
        ],
    },
    {
        category: "Technical Concepts",
        icon: "⚙️",
        skills: [
            "REST API Development",
            "CRUD",
            "MVC Architecture",
            "Database Design",
            "Microservices",
            "Clean Architecture",
            "Git",
            "JWT Auth",
        ],
    },
    {
        category: "AI / ML",
        icon: "🧠",
        skills: [
            "Scikit-learn",
            "TensorFlow",
            "NLP",
            "TF-IDF",
            "Logistic Regression",
            "Random Forest",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
        ],
    },
    {
        category: "Frontend & Mobile",
        icon: "🎨",
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "Flutter",
            "Dart",
            "HTML / CSS",
        ],
    },
    {
        category: "Tools & DevOps",
        icon: "🛠️",
        skills: [
            "Git",
            "GitHub",
            "Docker",
            "Vercel",
            "Postman",
            "VS Code",
            "Linux",
        ],
    },
];

/* ─── SkillBadge sub-component ───────────────────────────────────── */
function SkillBadge({ name }: { name: string }) {
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono bg-[#0a0c10] border border-blue-500/15 text-[#94a3b8] rounded hover:border-blue-500/40 hover:text-blue-300 transition-all duration-200 cursor-default">
            <span className="w-1 h-1 rounded-full bg-blue-400/60 inline-block" />
            {name}
        </span>
    );
}

/* ─── Skills Section ─────────────────────────────────────────────── */
export default function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="skills"
            ref={ref}
            className="py-24 px-6 border-t border-blue-500/10"
            aria-label="Skills"
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
                            03. Skills
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#e2e8f0]">
                            Technical Stack
                        </h2>
                        <p className="text-[#64748b] text-sm mt-2">
                            Tools, languages, and frameworks I use to build production-ready systems.
                        </p>
                    </motion.div>
                </div>

                {/* Skill groups — 2-column grid */}
                <div className="md:ml-[calc(200px+4rem)] grid sm:grid-cols-2 gap-6">
                    {skillGroups.map((group, i) => (
                        <motion.div
                            key={group.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-60px" }}
                            transition={{ duration: 0.4, delay: i * 0.08 }}
                            className="gradient-border rounded-xl p-5"
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-lg">{group.icon}</span>
                                <h3 className="text-[#e2e8f0] font-semibold text-sm tracking-wide">
                                    {group.category}
                                </h3>
                            </div>

                            {/* Badges */}
                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <SkillBadge key={skill} name={skill} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
