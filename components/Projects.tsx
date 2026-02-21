"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

/* ─── Types ──────────────────────────────────────────────────────── */
interface Project {
    title: string;
    description: string;
    longDescription: string;
    stack: string[];
    github?: string;
    demo?: string;
    status: string;
}

/* ─── Project data ───────────────────────────────────────────────── */
const projects: Project[] = [
    {
        title: "AI Mood Companion",
        description:
            "A mental health companion app that classifies emotions from text and returns therapeutic, supportive responses.",
        longDescription:
            "Built a full-stack mental health app combining a Flutter mobile frontend with a Python/Flask backend. Developed a TF-IDF + Logistic Regression emotion classifier, integrated mood history tracking with local SQLite storage, and resolved cross-origin issues for multi-platform compatibility.",
        stack: ["Python", "Flask", "Scikit-learn", "Flutter", "Dart", "SQLite"],
        github: "https://github.com/rebiraolin/ai-mood-companion",
        status: "In Progress",
    },
    {
        title: "Student Performance Predictor",
        description:
            "Machine learning pipeline that predicts student final grades using Random Forest regression with feature importance visualization.",
        longDescription:
            "End-to-end ML project with data preprocessing, feature engineering, and two Random Forest models for grade prediction. Includes side-by-side predicted vs. actual plots and feature importance bar charts saved as PNGs, with beginner-friendly explanations for stakeholders.",
        stack: ["Python", "Scikit-learn", "Pandas", "Matplotlib", "Seaborn"],
        github: "https://github.com/rebiraolin",
        status: "Complete",
    },
    {
        title: "Gemstone Polishing Platform",
        description:
            "Full-stack e-commerce web app for an energy-efficient gemstone polishing machine, built as an academic engineering project.",
        longDescription:
            "Built a Django REST backend and React (Vite) frontend for an IETP academic project. Implemented user authentication, machine sales listings, polishing service requests, order confirmation emails, and a Django Admin panel with consolidated user activity inlines.",
        stack: ["Django", "Python", "React", "Vite", "PostgreSQL", "REST API"],
        github: "https://github.com/rebiraolin",
        status: "Complete",
    },
];

/* ─── ProjectCard sub-component ──────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
    return (
        <motion.article
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="gradient-border rounded-xl p-6 hover:shadow-blue-500/5 hover:shadow-xl transition-all duration-300 group"
        >
            {/* Header */}
            <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                        <h3 className="text-[#e2e8f0] font-semibold text-lg group-hover:text-blue-400 transition-colors">
                            {project.title}
                        </h3>
                        <span
                            className={`text-xs px-2 py-0.5 rounded-full border ${project.status === "Complete"
                                    ? "border-green-500/30 text-green-400 bg-green-500/5"
                                    : "border-yellow-500/30 text-yellow-400 bg-yellow-500/5"
                                }`}
                        >
                            {project.status}
                        </span>
                    </div>
                    <p className="text-[#64748b] text-sm leading-relaxed">
                        {project.description}
                    </p>
                </div>

                {/* Links */}
                <div className="flex items-center gap-3 shrink-0">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub: ${project.title}`}
                            className="text-[#64748b] hover:text-blue-400 transition-colors"
                        >
                            <FiGithub size={18} />
                        </a>
                    )}
                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Demo: ${project.title}`}
                            className="text-[#64748b] hover:text-blue-400 transition-colors"
                        >
                            <FiExternalLink size={18} />
                        </a>
                    )}
                </div>
            </div>

            {/* Long description */}
            <p className="text-[#64748b] text-xs leading-relaxed mb-4 border-l-2 border-blue-500/20 pl-3">
                {project.longDescription}
            </p>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                    <span
                        key={tech}
                        className="text-xs px-3 py-1 bg-blue-500/8 border border-blue-500/15 text-blue-300/80 rounded-full font-mono"
                    >
                        {tech}
                    </span>
                ))}
            </div>
        </motion.article>
    );
}

/* ─── Projects Section ───────────────────────────────────────────── */
export default function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="projects"
            ref={ref}
            className="py-24 px-6 border-t border-blue-500/10 bg-[#0f1117]"
            aria-label="Projects"
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
                            02. Projects
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#e2e8f0]">
                            Selected Work
                        </h2>
                        <p className="text-[#64748b] text-sm mt-2">
                            Projects combining backend engineering with AI/ML where real
                            problems meet real solutions.
                        </p>
                    </motion.div>
                </div>

                {/* Project cards */}
                <div className="grid gap-6 md:ml-[calc(200px+4rem)]">
                    {projects.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
}
