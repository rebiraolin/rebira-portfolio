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
    gpa: "3.62",
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
    gpa: null,
  },
  {
    institution: "GDG On Campus AASTU",
    degree: "Node.js Track",
    duration: "Jan 2025 – Jun 2025",
    location: "Addis Ababa, Ethiopia",
    bullets: [
      "Gained hands-on experience in full-stack MERN development with Node.js and Express.",
      "Built and deployed web applications using REST APIs, MongoDB, and JWT authentication.",
    ],
    badge: "GDG",
    gpa: null,
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

/* ─── Education Section ──────────────────────────────────────────── */
export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="education"
      ref={ref}
      className="py-24 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
      aria-label="Education"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={childVariants} className="relative mb-14">
          <span className="section-ghost-number">06</span>
          <div className="relative z-10">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--accent-primary)",
              }}
            >
              06 — Education
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              Academic Background
            </h2>
          </div>
        </motion.div>

        {/* Education items */}
        <motion.div variants={containerVariants} className="space-y-6">
          {education.map((edu) => (
            <motion.article
              key={edu.institution}
              variants={childVariants}
              className="card-glow p-6 flex gap-5 items-start"
            >
              {/* Badge */}
              <div
                className="shrink-0 w-12 h-12 rounded-lg flex items-center justify-center text-xs font-bold tracking-wide"
                style={{
                  fontFamily: "var(--font-mono)",
                  backgroundColor: "rgba(0, 194, 255, 0.08)",
                  border: "1px solid var(--border-default)",
                  color: "var(--accent-primary)",
                }}
              >
                {edu.badge}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                {/* Degree + GPA */}
                <div className="flex items-center gap-3 flex-wrap">
                  <h3
                    className="font-semibold"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--text-primary)",
                    }}
                  >
                    {edu.degree}
                  </h3>
                  {edu.gpa && (
                    <span
                      className="text-xs px-2 py-0.5 rounded-full border"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: "#34d399",
                        backgroundColor: "rgba(52, 211, 153, 0.1)",
                        borderColor: "rgba(52, 211, 153, 0.2)",
                      }}
                    >
                      {edu.gpa} GPA
                    </span>
                  )}
                </div>

                {/* Meta */}
                <div className="flex flex-wrap items-center gap-2 mt-1 mb-3">
                  <span
                    className="text-sm"
                    style={{ color: "var(--accent-primary)" }}
                  >
                    {edu.institution}
                  </span>
                  <span style={{ color: "var(--text-muted)" }}>·</span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {edu.duration}
                  </span>
                  <span style={{ color: "var(--text-muted)" }}>·</span>
                  <span
                    className="text-xs"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--text-muted)",
                    }}
                  >
                    {edu.location}
                  </span>
                </div>

                {/* Bullets */}
                <ul className="space-y-1.5">
                  {edu.bullets.map((b, j) => (
                    <li
                      key={j}
                      className="flex gap-3 text-sm leading-relaxed"
                      style={{ color: "var(--text-subtle)" }}
                    >
                      <span
                        className="mt-1.5 shrink-0 text-xs"
                        style={{ color: "var(--accent-primary)" }}
                      >
                        ▹
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
