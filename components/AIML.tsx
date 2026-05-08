"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiGithub } from "react-icons/fi";

/* ─── ML Project Data ────────────────────────────────────────────── */
const mlProjects = [
  {
    title: "FX Predictor",
    status: "Complete",
    description:
      "LSTM-based deep learning model forecasting ETB/USD exchange rates using historical data from the National Bank of Ethiopia. Includes full preprocessing pipeline, sequence modeling, and visualization of predicted vs actual curves.",
    stack: ["Python", "TensorFlow", "LSTM", "Pandas", "Matplotlib", "NumPy"],
    github: "https://github.com/rebiraolin",
  },
];

/* ─── ML Toolkit Data ────────────────────────────────────────────── */
const mlToolkit = [
  {
    label: "Modeling & Frameworks",
    skills: ["Scikit-learn", "TensorFlow", "Keras", "PyTorch (familiar)"],
  },
  {
    label: "NLP & Text",
    skills: ["TF-IDF", "Logistic Regression", "Text Preprocessing", "NLTK"],
  },
  {
    label: "Deep Learning",
    skills: ["LSTM", "Neural Networks", "Sequence Modeling"],
  },
  {
    label: "Data & Visualization",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
  },
  {
    label: "Methods",
    skills: [
      "Feature Engineering",
      "Model Evaluation",
      "Random Forest",
      "Cross-Validation",
    ],
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

/* ─── AIML Section ───────────────────────────────────────────────── */
export default function AIML() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="aiml"
      ref={ref}
      className="py-24 px-6 border-t"
      style={{ borderColor: "var(--border-default)" }}
      aria-label="AI and Machine Learning"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={childVariants} className="relative mb-14">
          <span className="section-ghost-number">03</span>
          <div className="relative z-10">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--accent-primary)",
              }}
            >
              03 — AI &amp; Machine Learning
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              Intelligence Layer
            </h2>
            <p className="text-sm" style={{ color: "var(--text-muted)" }}>
              Where I apply machine learning to real problems — from data to
              deployed model.
            </p>
          </div>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 items-start">
          {/* Left — ML Projects */}
          <motion.div variants={containerVariants} className="space-y-6">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-1"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
              }}
            >
              ML Projects
            </p>
            {mlProjects.map((project) => (
              <motion.article
                key={project.title}
                variants={childVariants}
                whileHover={{ y: -6 }}
                className="card-glow p-6 group"
                style={{
                  borderLeft: "4px solid var(--accent-secondary)",
                }}
              >
                {/* Title + status */}
                <div className="flex items-center justify-between gap-3 mb-3 flex-wrap">
                  <div className="flex items-center gap-3">
                    <h3
                      className="text-lg font-semibold"
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
                        fontFamily: "var(--font-mono)",
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
                      }}
                    >
                      {project.status}
                    </span>
                  </div>
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
              </motion.article>
            ))}
          </motion.div>

          {/* Right — ML Toolkit */}
          <motion.div variants={containerVariants}>
            <p
              className="text-xs uppercase tracking-[0.2em] mb-5"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
              }}
            >
              ML Toolkit
            </p>
            <div className="space-y-6">
              {mlToolkit.map((group) => (
                <motion.div key={group.label} variants={childVariants}>
                  <p
                    className="text-xs mb-2.5"
                    style={{
                      fontFamily: "var(--font-mono)",
                      color: "var(--accent-primary)",
                    }}
                  >
                    {group.label}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
