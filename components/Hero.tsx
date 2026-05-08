"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMapPin, FiArrowDown, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

/* ─── Phrase Rotator Data ────────────────────────────────────────── */
const phrases = [
  "Full-Stack Engineer",
  "AI/ML Developer",
  "Backend Architect",
  "Systems Engineer",
];

/* ─── Orbital Animation Component ────────────────────────────────── */
function OrbitalAnimation() {
  return (
    <div className="relative w-[340px] h-[340px] md:w-[420px] md:h-[420px] mx-auto flex items-center justify-center">
      {/* Central Core */}
      <motion.div
        className="absolute z-20 w-16 h-16 rounded-full"
        style={{
          background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))",
          boxShadow: "0 0 40px var(--accent-primary), 0 0 80px var(--accent-secondary)",
        }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Outer Ring */}
      <motion.div
        className="absolute z-10 w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full border border-dashed border-white/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute top-[10%] left-[10%] w-3 h-3 bg-[#00c2ff] rounded-full shadow-[0_0_15px_#00c2ff]" />
        <div className="absolute bottom-[20%] right-[5%] w-2 h-2 bg-[#8b5cf6] rounded-full shadow-[0_0_10px_#8b5cf6]" />
      </motion.div>

      {/* Middle Ring */}
      <motion.div
        className="absolute z-10 w-[200px] h-[200px] md:w-[260px] md:h-[260px] rounded-full border border-white/10"
        animate={{ rotate: -360 }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute top-[50%] -left-[4px] w-2 h-2 bg-[#00c2ff] rounded-full shadow-[0_0_10px_#00c2ff]" />
        <div className="absolute -top-[4px] left-[50%] w-3 h-3 bg-white rounded-full shadow-[0_0_15px_white]" />
      </motion.div>

      {/* Inner Ring */}
      <motion.div
        className="absolute z-10 w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-full border border-white/30"
        animate={{ rotate: 360 }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute bottom-0 right-[20%] w-2.5 h-2.5 bg-[#8b5cf6] rounded-full shadow-[0_0_10px_#8b5cf6]" />
      </motion.div>

      {/* Floating Labels */}
      <motion.div
        className="absolute top-[20%] right-[5%] z-30 px-3 py-1 rounded-full text-[10px] font-mono border border-white/10 backdrop-blur-md"
        style={{ color: "var(--text-muted)", backgroundColor: "rgba(255,255,255,0.03)" }}
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        Neural Networks
      </motion.div>

      <motion.div
        className="absolute bottom-[25%] left-[5%] z-30 px-3 py-1 rounded-full text-[10px] font-mono border border-white/10 backdrop-blur-md"
        style={{ color: "var(--text-muted)", backgroundColor: "rgba(255,255,255,0.03)" }}
        animate={{ y: [5, -5, 5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        Data Pipelines
      </motion.div>
      
      {/* Background Glow */}
      <div className="absolute -inset-20 bg-gradient-to-r from-[#00c2ff] to-[#8b5cf6] rounded-full blur-[100px] opacity-20 pointer-events-none" />
    </div>
  );
}


/* ─── Hero Section ───────────────────────────────────────────────── */
export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);

  /* Cycle phrases every 3.2s */
  useEffect(() => {
    const interval = setInterval(() => {
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
      aria-label="Hero"
    >
      {/* Ambient background blobs */}
      <div
        aria-hidden
        className="ambient-1 absolute rounded-full blur-[120px] pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          top: "10%",
          left: "5%",
          backgroundColor: "var(--accent-glow-cyan)",
          opacity: 0.12,
        }}
      />
      <div
        aria-hidden
        className="ambient-2 absolute rounded-full blur-[120px] pointer-events-none"
        style={{
          width: "500px",
          height: "500px",
          bottom: "10%",
          right: "5%",
          backgroundColor: "var(--accent-glow-violet)",
          opacity: 0.12,
        }}
      />

      <div className="max-w-6xl mx-auto w-full relative z-10 grid lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
        {/* ─── LEFT CONTENT ──────────────────────────────────────── */}
        <div>
          {/* Mono label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-xs sm:text-sm mb-4"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--accent-primary)",
            }}
          >
            &lt; software engineer /&gt;
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-2"
            style={{ fontFamily: "var(--font-display)", color: "var(--text-primary)" }}
          >
            Rebira Oli
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 gradient-text"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Negassa
          </motion.h1>

          {/* Phrase rotator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="h-8 mb-6 flex items-center gap-2"
          >
            <span
              className="text-sm"
              style={{ fontFamily: "var(--font-mono)", color: "var(--text-muted)" }}
            >
              ~/
            </span>
            <div className="relative h-6 overflow-hidden" style={{ minWidth: "220px" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={phraseIndex}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -14 }}
                  transition={{ duration: 0.35 }}
                  className="absolute left-0 text-base font-medium whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: "var(--accent-primary)",
                  }}
                >
                  {phrases[phraseIndex]}
                </motion.span>
              </AnimatePresence>
            </div>
            <span
              className="inline-block w-[2px] h-5 cursor-blink"
              style={{ backgroundColor: "var(--accent-primary)" }}
            />
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-1 mb-5"
          >
            <p
              className="text-base md:text-lg leading-relaxed max-w-xl"
              style={{ color: "var(--text-muted)" }}
            >
              Building intelligent systems across web, mobile, and backend platforms.
            </p>
            <p
              className="text-base md:text-lg leading-relaxed max-w-xl"
              style={{ color: "var(--text-muted)" }}
            >
              Based in Addis Ababa — engineering for the real world.
            </p>
          </motion.div>

          {/* Location chip */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="flex items-center gap-2 text-sm mb-8"
            style={{ color: "var(--text-muted)" }}
          >
            <FiMapPin size={14} style={{ color: "var(--accent-primary)" }} />
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem" }}>
              Addis Ababa, Ethiopia
            </span>
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <a
              href="#projects"
              className="px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200"
              style={{
                background: "var(--gradient)",
                color: "var(--bg-primary)",
                fontFamily: "var(--font-display)",
              }}
            >
              View Projects
            </a>
            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 text-sm font-semibold rounded-lg transition-all duration-200"
              style={{
                border: "1px solid var(--accent-primary)",
                color: "var(--accent-primary)",
                fontFamily: "var(--font-display)",
              }}
            >
              Download CV
            </a>
          </motion.div>

          {/* Social icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="flex items-center gap-5"
          >
            {[
              { icon: FiGithub, href: "https://github.com/rebiraolin", label: "GitHub" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/rebira-oli/", label: "LinkedIn" },
              { icon: FiMail, href: "mailto:rebiranegassa24@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={label !== "Email" ? "_blank" : undefined}
                rel={label !== "Email" ? "noopener noreferrer" : undefined}
                aria-label={label}
                className="transition-colors duration-200"
                style={{ color: "var(--text-muted)" }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--accent-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-muted)")
                }
              >
                <Icon size={20} />
              </a>
            ))}
          </motion.div>
        </div>

        {/* ─── RIGHT SIDE — Orbital Animation ────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
          className="hidden lg:flex items-center justify-center w-full"
        >
          <OrbitalAnimation />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--text-muted)", opacity: 0.5 }}
      >
        <span
          className="text-xs tracking-widest"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          SCROLL
        </span>
        <FiArrowDown size={14} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
