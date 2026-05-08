"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";

/* ─── Navigation links ──────────────────────────────────────────── */
const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "AI/ML", href: "#aiml" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const sectionIds = navLinks.map((l) => l.href.replace("#", ""));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  /* Scroll detection — backdrop on scroll past 60px */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Active section detection via IntersectionObserver */
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleNavClick = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md border-b"
          : "bg-transparent"
      }`}
      style={
        scrolled
          ? {
              backgroundColor: "rgba(8, 11, 18, 0.80)",
              borderBottomColor: "var(--border-default)",
            }
          : {}
      }
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          href="#hero"
          className="flex items-center gap-2.5 group"
          aria-label="Home"
        >
          {/* Monogram */}
          <div
            className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
            style={{
              background: "var(--bg-card)",
              border: "1.5px solid transparent",
              borderImage: "var(--gradient) 1",
            }}
          >
            <span
              className="text-sm font-bold"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              RO
            </span>
          </div>
          {/* Code-style name */}
          <span
            className="text-sm tracking-tight group-hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--accent-primary)",
            }}
          >
            <span style={{ color: "var(--text-muted)" }}>&lt;</span>
            rebira
            <span style={{ color: "var(--text-muted)" }}> /&gt;</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace("#", "");
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm transition-colors duration-200 tracking-wide"
                  style={{
                    fontFamily: "var(--font-mono)",
                    color: isActive
                      ? "var(--accent-primary)"
                      : "var(--text-muted)",
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive)
                      e.currentTarget.style.color = "var(--text-primary)";
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive)
                      e.currentTarget.style.color = "var(--text-muted)";
                  }}
                >
                  {link.label}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="/resume.pdf"
              download
              className="px-4 py-1.5 text-xs rounded transition-all duration-200"
              style={{
                fontFamily: "var(--font-mono)",
                border: "1px solid var(--accent-primary)",
                color: "var(--accent-primary)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--accent-primary)";
                e.currentTarget.style.color = "var(--bg-primary)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "var(--accent-primary)";
              }}
            >
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden transition-colors"
          style={{ color: "var(--text-muted)" }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden backdrop-blur-md border-b"
            style={{
              backgroundColor: "rgba(13, 17, 23, 0.95)",
              borderBottomColor: "var(--border-default)",
            }}
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map((link) => {
                const isActive =
                  activeSection === link.href.replace("#", "");
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="block text-sm py-1 transition-colors"
                      style={{
                        fontFamily: "var(--font-mono)",
                        color: isActive
                          ? "var(--accent-primary)"
                          : "var(--text-muted)",
                      }}
                      onClick={handleNavClick}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-block px-4 py-1.5 text-xs rounded transition-all"
                  style={{
                    fontFamily: "var(--font-mono)",
                    border: "1px solid var(--accent-primary)",
                    color: "var(--accent-primary)",
                  }}
                >
                  Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
