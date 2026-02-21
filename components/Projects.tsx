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
            "A privacy-focused app to track and analyze emotions through text input.",
        longDescription:
            "Full-stack mobile app with a Flutter/Dart frontend and a FastAPI Python backend. Integrates a scikit-learn emotion classifier to analyze user-entered text and surface mood insights, with local storage via shared_preferences for privacy-first data handling.",
        stack: ["Flutter", "Dart", "FastAPI", "Python", "Scikit-learn", "shared_preferences"],
        github: "https://github.com/rebiraolin/ai-mood-companion",
        status: "In Progress",
    },
    {
        title: "Gemstone Platform",
        description:
            "Full-stack web app for an eco-friendly gemstone polishing machine project.",
        longDescription:
            "Built a Django REST Framework backend and a React + Vite frontend for an integrated engineering team project. Features include user authentication, machine sales listings, polishing service requests, order confirmation emails, and a customized Django Admin panel.",
        stack: ["Django REST Framework", "Python", "React", "Vite"],
        github: "https://github.com/rebiraolin/gempol-platform",
        status: "Complete",
    },
    {
        title: "Social Media API",
        description:
            "Django-based social media platform with API endpoints and HTML frontend.",
        longDescription:
            "A full-featured social platform backend built with Django REST Framework, exposing API endpoints for posts, follows, and feeds. Paired with a lightweight HTML/CSS frontend for direct browser interaction without a separate JS framework.",
        stack: ["Django REST Framework", "Python", "HTML", "CSS"],
        github: "https://github.com/rebiraolin/social_media_api",
        status: "Complete",
    },
    {
        title: "Guade Study Buddy",
        description:
            "Node.js backend API connecting students for study sessions, real-time chat & group management.",
        longDescription:
            "A real-time study collaboration platform backend built with Node.js and Express. Features Socket.IO-powered live chat, MongoDB for persistent storage of sessions and groups, and JWT-based authentication for secure student access.",
        stack: ["Node.js", "Express", "MongoDB", "Socket.IO", "JWT"],
        github: "https://github.com/rebiraolin/Guade_study-buddy_node",
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
