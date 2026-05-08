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
    featured: true,
  },
  {
    company: "Freelance / Independent Projects",
    role: "Full-Stack Software Engineer",
    duration: "2024 – Present",
    location: "Addis Ababa, Ethiopia",
    stack: ["Python", "React", "Flutter", "Scikit-learn", "AI/ML"],
    bullets: [
      "Designed and built multiple full-stack applications, integrating Python/Node.js backends with React and Flutter frontends.",
      "Developed AI/ML components including predictive models, grade prediction pipelines, and other applied ML solutions.",
      "Implemented REST API backends with JWT authentication, PostgreSQL/SQLite databases, and CORS-aware configurations.",
    ],
    featured: false,
  },
  {
    company: "Self-Directed Learning & Free Resources",
    role: "AI/ML Engineer",
    duration: "2023 – Present",
    location: "Addis Ababa, Ethiopia",
    stack: ["Python", "TensorFlow", "Scikit-learn", "Pandas", "Matplotlib"],
    bullets: [
      "Trained and evaluated machine learning models on structured and unstructured datasets, focusing on feature engineering and model interpretability.",
      "Developed NLP pipelines for text classification and analysis, from preprocessing through model evaluation and reporting.",
      "Generated visualisations such as predicted vs. actual comparisons and feature importance charts using Matplotlib and Seaborn.",
    ],
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
      variants={childVariants}
      className="relative pl-8 pb-12 last:pb-0"
    >
      {/* Timeline line segment */}
      <div
        className="absolute left-0 top-2 bottom-0 w-[2px]"
        style={{
          background:
            "linear-gradient(to bottom, var(--accent-primary), var(--accent-secondary))",
          opacity: 0.3,
        }}
      />

      {/* Timeline dot */}
      <div
        className="absolute -left-[5px] top-1.5 w-3 h-3 rounded-full"
        style={{
          backgroundColor: "var(--bg-card)",
          border: "2px solid var(--accent-primary)",
        }}
      />

      {/* Header */}
      <div className="mb-3">
        <div className="flex flex-wrap items-center gap-2.5 mb-1">
          <h3
            className="font-semibold"
            style={{
              fontFamily: "var(--font-display)",
              color: "var(--text-primary)",
            }}
          >
            {exp.company}
          </h3>
          {exp.featured && (
            <span
              className="text-xs px-2.5 py-0.5 rounded-full font-medium"
              style={{
                fontFamily: "var(--font-mono)",
                background: "var(--gradient)",
                color: "var(--bg-primary)",
              }}
            >
              Featured
            </span>
          )}
        </div>
        <p
          className="text-sm mb-1"
          style={{
            fontFamily: "var(--font-mono)",
            color: "var(--accent-primary)",
          }}
        >
          {exp.role}
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            {exp.duration}
          </span>
          <span style={{ color: "var(--text-muted)" }}>·</span>
          <span
            className="text-xs"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            {exp.location}
          </span>
        </div>
      </div>

      {/* Bullets */}
      <ul className="space-y-2 mb-4">
        {exp.bullets.map((bullet, i) => (
          <li
            key={i}
            className="flex gap-3 text-sm leading-relaxed"
            style={{ color: "var(--text-subtle)" }}
          >
            <span
              className="mt-1.5 shrink-0 text-xs"
              style={{ color: "var(--accent-primary)" }}
            >
              ▹
            </span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2">
        {exp.stack.map((tech) => (
          <span key={tech} className="skill-pill">
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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 px-6 border-t"
      style={{ borderColor: "var(--border-default)" }}
      aria-label="Experience"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={childVariants} className="relative mb-14">
          <span className="section-ghost-number">05</span>
          <div className="relative z-10">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ fontFamily: "var(--font-mono)", color: "var(--accent-primary)" }}
            >
              05 — Experience
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Where I&apos;ve Worked
            </h2>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div variants={containerVariants}>
          {experiences.map((exp, i) => (
            <ExperienceItem
              key={`${exp.company}-${exp.role}`}
              exp={exp}
              index={i}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
