"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

/* ─── Counter Hook — counts up from 0 on scroll ─────────────────── */
function useCountUp(target: number, decimals = 0, duration = 1600, inView: boolean) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();

    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      /* ease-out */
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * target).toFixed(decimals)));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, target, decimals, duration]);

  return value;
}

/* ─── Core stack pills ───────────────────────────────────────────── */
const coreStack = [
  "Python",
  "Django",
  "FastAPI",
  "React",
  "Flutter",
  "Scikit-learn",
  "TensorFlow",
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

/* ─── About Section ──────────────────────────────────────────────── */
export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const gpa = useCountUp(3.62, 2, 1800, isInView);
  const hours = useCountUp(1200, 0, 2000, isInView);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-6 border-t"
      style={{ borderColor: "var(--border-default)" }}
      aria-label="About"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={childVariants} className="relative mb-14">
          <span className="section-ghost-number">01</span>
          <div className="relative z-10">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{ fontFamily: "var(--font-mono)", color: "var(--accent-primary)" }}
            >
              01 — About
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold"
              style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
            >
              Who I Am
            </h2>
          </div>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-14 items-start">
          {/* Left — Prose */}
          <motion.div variants={childVariants} className="space-y-5">
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--text-subtle)" }}
            >
              I&apos;m a software engineer who builds across the full stack — web,
              mobile, and backend — with a strong focus on integrating AI and ML
              where it adds real value. I don&apos;t specialize in one layer; I
              understand the whole system.
            </p>
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--text-subtle)" }}
            >
              On the ML side, I design and train models for real problems: image
              classification, predictive pipelines, NLP. I care about clean data,
              honest evaluation, and shipping models that actually work in
              production — not just notebooks.
            </p>
            <p
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--text-subtle)" }}
            >
              I approach every problem like an engineer first: clarify
              requirements, plan before building, write code that others can
              maintain. I&apos;m building from Addis Ababa, Ethiopia, with the
              ambition to engineer systems that work at scale for emerging markets.
            </p>
          </motion.div>

          {/* Right — Stats grid */}
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 gap-4"
          >
            {/* GPA card */}
            <motion.div variants={childVariants} className="card-glow p-5 flex flex-col justify-center">
              <p
                className="text-4xl md:text-5xl font-extrabold mb-2 gradient-text"
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                {gpa.toFixed(2)}
              </p>
              <p
                className="text-xs font-semibold tracking-wide uppercase"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
              >
                GPA · AASTU
              </p>
            </motion.div>

            {/* Hours card */}
            <motion.div variants={childVariants} className="card-glow p-5 flex flex-col justify-center">
              <p
                className="text-4xl md:text-5xl font-extrabold mb-2 gradient-text"
                style={{
                  fontFamily: "var(--font-display)",
                }}
              >
                {hours.toLocaleString()}+
              </p>
              <p
                className="text-xs font-semibold tracking-wide uppercase"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
              >
                Hours · ALX
              </p>
            </motion.div>

            {/* Availability card */}
            <motion.div variants={childVariants} className="card-glow p-5">
              <div className="flex items-center gap-2 mb-2">
                <span
                  className="pulse-dot inline-block w-2 h-2 rounded-full"
                  style={{ backgroundColor: "#34d399" }}
                />
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Available
                </span>
              </div>
              <p className="text-xs" style={{ color: "var(--text-muted)" }}>
                Open to roles &amp; collaboration
              </p>
            </motion.div>

            {/* Current role card */}
            <motion.div variants={childVariants} className="card-glow p-5">
              <p
                className="text-sm font-medium mb-1"
                style={{ color: "var(--text-primary)" }}
              >
                Django Mentor
              </p>
              <p className="text-xs mb-1" style={{ color: "var(--text-muted)" }}>
                GDG On Campus AASTU
              </p>
              <p
                className="text-xs"
                style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
              >
                Nov 2025 – Present
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Core stack strip */}
        <motion.div
          variants={childVariants}
          className="mt-14 pt-8 border-t flex flex-wrap items-center gap-3"
          style={{ borderColor: "var(--border-default)" }}
        >
          <span
            className="text-xs mr-2"
            style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
          >
            Core Stack —
          </span>
          {coreStack.map((tech) => (
            <span key={tech} className="skill-pill">
              {tech}
            </span>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
