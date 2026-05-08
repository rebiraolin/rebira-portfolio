"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiSend,
  FiCheck,
  FiExternalLink,
} from "react-icons/fi";

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

/* ─── Contact links data ─────────────────────────────────────────── */
const contactLinks = [
  {
    icon: FiMail,
    label: "rebiranegassa24@gmail.com",
    href: "mailto:rebiranegassa24@gmail.com",
    external: false,
  },
  {
    icon: FiGithub,
    label: "github.com/rebiraolin",
    href: "https://github.com/rebiraolin",
    external: true,
  },
  {
    icon: FiLinkedin,
    label: "linkedin.com/in/rebira-oli",
    href: "https://www.linkedin.com/in/rebira-oli/",
    external: true,
  },
];

/* ─── Contact Section ────────────────────────────────────────────── */
export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const subject = encodeURIComponent(
        `Portfolio Message from ${form.name}`
      );
      const body = encodeURIComponent(
        `Name: ${form.name}\n` +
          `Email: ${form.email}\n\n` +
          `Message:\n${form.message}`
      );

      const mailtoLink = `mailto:rebiranegassa24@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Mailto error:", error);
      setStatus("error");
    }
  };

  /* Input field shared styles */
  const inputStyles: React.CSSProperties = {
    backgroundColor: "var(--bg-card)",
    border: "1px solid var(--border-default)",
    color: "var(--text-primary)",
    fontFamily: "var(--font-body)",
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-6 border-t"
      style={{ borderColor: "var(--border-default)" }}
      aria-label="Contact"
    >
      <motion.div
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Section header */}
        <motion.div variants={childVariants} className="relative mb-14">
          <span className="section-ghost-number">07</span>
          <div className="relative z-10">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-3"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--accent-primary)",
              }}
            >
              07 — Contact
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold mb-2"
              style={{
                fontFamily: "var(--font-display)",
                color: "var(--text-primary)",
              }}
            >
              Get In Touch
            </h2>
            <p className="text-sm max-w-md" style={{ color: "var(--text-muted)" }}>
              Have a project, role, or idea? My inbox is open.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-[1fr_280px] gap-10">
          {/* Contact form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={childVariants}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="contact-name"
                className="block text-xs mb-2 uppercase tracking-wide"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                }}
              >
                Name
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-200 placeholder:opacity-40"
                style={inputStyles}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent-primary)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border-default)")
                }
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="contact-email"
                className="block text-xs mb-2 uppercase tracking-wide"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                }}
              >
                Email
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-200 placeholder:opacity-40"
                style={inputStyles}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent-primary)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border-default)")
                }
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs mb-2 uppercase tracking-wide"
                style={{
                  fontFamily: "var(--font-mono)",
                  color: "var(--text-muted)",
                }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project or question..."
                className="w-full rounded-lg px-4 py-3 text-sm focus:outline-none transition-all duration-200 resize-none placeholder:opacity-40"
                style={inputStyles}
                onFocus={(e) =>
                  (e.currentTarget.style.borderColor = "var(--accent-primary)")
                }
                onBlur={(e) =>
                  (e.currentTarget.style.borderColor = "var(--border-default)")
                }
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={status === "sending" || status === "sent"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold rounded-lg transition-all duration-200 disabled:opacity-50"
              style={{
                background: "var(--gradient)",
                color: "var(--bg-primary)",
                fontFamily: "var(--font-display)",
              }}
            >
              {status === "sending" ? (
                <>
                  <span className="w-4 h-4 border-2 border-current/30 border-t-current rounded-full animate-spin" />
                  Sending...
                </>
              ) : status === "sent" ? (
                <>
                  <FiCheck size={16} />
                  Sent!
                </>
              ) : (
                <>
                  <FiSend size={16} />
                  Send Message
                </>
              )}
            </button>

            {/* Status messages */}
            {status === "sent" && (
              <p className="text-xs" style={{ color: "#34d399" }}>
                ✓ Message sent. I&apos;ll get back to you soon!
              </p>
            )}
            {status === "error" && (
              <p className="text-xs" style={{ color: "#ef4444" }}>
                Something went wrong. Please try again.
              </p>
            )}
          </motion.form>

          {/* Sidebar links */}
          <motion.div variants={childVariants} className="flex flex-col gap-3">
            <p
              className="text-xs uppercase tracking-wide mb-2"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
              }}
            >
              Or reach me directly
            </p>

            {contactLinks.map(({ icon: Icon, label, href, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="card-glow flex items-center gap-3 p-3.5 group"
                style={{ transform: "none" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-hover)";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "var(--border-default)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <span
                  className="p-2 rounded-lg"
                  style={{
                    backgroundColor: "var(--bg-primary)",
                    border: "1px solid var(--border-default)",
                    color: "var(--text-muted)",
                  }}
                >
                  <Icon size={16} />
                </span>
                <span
                  className="flex-1 text-sm"
                  style={{ color: "var(--text-subtle)" }}
                >
                  {label}
                </span>
                {external && (
                  <FiExternalLink
                    size={14}
                    style={{ color: "var(--text-muted)" }}
                  />
                )}
              </a>
            ))}

            {/* Response time note */}
            <div
              className="mt-3 p-4 rounded-lg"
              style={{
                backgroundColor: "var(--bg-card)",
                border: "1px solid var(--border-default)",
              }}
            >
              <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                <span
                  className="font-medium"
                  style={{ color: "var(--accent-primary)" }}
                >
                  Response time:
                </span>{" "}
                Usually within 24–48 hours. Available for freelance, full-time
                roles, and collaboration.
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
