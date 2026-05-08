"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub, FiExternalLink } from "react-icons/fi";

/* ─── Types ──────────────────────────────────────────────────────── */
interface Project {
  title: string;
  status: string;
  description: string;
  stack: string[];
  github: string;
  live: string;
  featured: boolean;
}

/* ─── Project data ───────────────────────────────────────────────── */
const projects: Project[] = [
  {
    title: "AfriLens",
    status: "Complete",
    description:
      "A computer vision platform for African cultural image recognition and classification. Built end-to-end from data pipeline to deployed API.",
    stack: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL"],
    github: "https://github.com/rebiraolin",
    live: "#",
    featured: true,
  },
  {
    title: "AASTU Course Load Balancer",
    status: "In Progress",
    description:
      "ML-powered scheduling tool that optimizes student course loads by analyzing difficulty weights, credit hours, and historical performance data.",
    stack: ["Python", "Scikit-learn", "Django", "React", "PostgreSQL"],
    github: "https://github.com/rebiraolin",
    live: "#",
    featured: false,
  },
];

/* ─── Animation variants ─────────────────────────────────────────── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const childVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] },
  },
};

/* ─── ProjectCard sub-component ──────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={childVariants}
      whileHover={{ y: -6 }}
      className={`card-glow p-6 flex flex-col sm:flex-row gap-5 group ${
        project.featured ? "gradient-border-left" : ""
      }`}
    >
      {/* Project number */}
      <div className="shrink-0 sm:w-14">
        <span
          className="text-3xl font-bold"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--accent-primary)",
            opacity: 0.2,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        {/* Title + status */}
        <div className="flex items-center gap-3 mb-2 flex-wrap">
          <h3
            className="text-lg font-semibold group-hover:opacity-90 transition-colors"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            {project.title}
          </h3>
          <span
            className="text-xs px-2.5 py-0.5 rounded-full border"
            style={{
              ...(project.status === "Complete"
                ? {
                    color: "#34d399",
                    backgroundColor: "rgba(52, 211, 153, 0.1)",
                    borderColor: "rgba(52, 211, 153, 0.2)",
                  }
                : {
                    color: "#fbbf24",
                    backgroundColor: "rgba(251, 191, 36, 0.1)",
                    borderColor: "rgba(251, 191, 36, 0.2)",
                  }),
              fontFamily: "var(--font-mono)",
            }}
          >
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p
          className="text-sm leading-relaxed mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          {project.description}
        </p>

        {/* Stack pills */}
        <div className="flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span key={tech} className="skill-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Links */}
      <div className="flex sm:flex-col items-center gap-3 shrink-0">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`GitHub: ${project.title}`}
          className="transition-colors duration-200"
          style={{ color: "var(--text-muted)" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--accent-primary)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "var(--text-muted)")
          }
        >
          <FiGithub size={18} />
        </a>
        {project.live !== "#" && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Demo: ${project.title}`}
            className="transition-colors duration-200"
            style={{ color: "var(--text-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--accent-primary)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--text-muted)")
            }
          >
            <FiExternalLink size={18} />
          </a>
        )}
      </div>
    </motion.article>
  );
}

/* ─── Projects Section ───────────────────────────────────────────── */
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
      aria-label="Projects"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={childVariants} className="relative mb-14">
          <span className="section-ghost-number">02</span>
          <div className="relative z-10">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ fontFamily: "var(--font-mono)", color: "var(--accent-primary)" }}
            >
              02 — Projects
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Selected Work
            </h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Production-ready systems across web, mobile, and backend.
            </p>
          </div>
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
