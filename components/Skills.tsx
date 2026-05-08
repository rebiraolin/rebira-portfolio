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
    accent: false,
    borderColor: "#00c2ff",
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
    accent: false,
    borderColor: "#8b5cf6",
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
    accent: false,
    borderColor: "#64748b",
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
    accent: true,
    borderColor: "#8b5cf6",
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
    accent: false,
    borderColor: "#00c2ff",
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
    accent: false,
    borderColor: "#64748b",
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

/* ─── Skills Section ─────────────────────────────────────────────── */
export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 px-6"
      style={{ backgroundColor: "var(--bg-secondary)" }}
      aria-label="Skills"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={childVariants} className="relative mb-14">
          <span className="section-ghost-number">04</span>
          <div className="relative z-10">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ fontFamily: "var(--font-mono)", color: "var(--accent-primary)" }}
            >
              04 — Skills
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Technical Stack
            </h2>
          </div>
        </motion.div>

        {/* Skill groups — 3-column grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              variants={childVariants}
              whileHover={{ y: -4 }}
              className="card-glow p-5"
              style={{
                borderTop: `2px solid ${group.borderColor}`,
                ...(group.accent
                  ? { borderLeft: "2px solid var(--accent-secondary)" }
                  : {})
              }}
            >
              {/* Category header */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-lg">{group.icon}</span>
                <h3
                  className="text-sm font-semibold tracking-wide"
                  style={{
                    fontFamily: "var(--font-display)",
                    color: "var(--text-primary)",
                  }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Pills */}
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-pill">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
