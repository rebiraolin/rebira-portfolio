"use client";

import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

/* ─── Navigation links (matching navbar) ─────────────────────────── */
const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "AI/ML", href: "#aiml" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/* ─── Footer Component ──────────────────────────────────────────── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ backgroundColor: "var(--bg-primary)" }}>
      {/* Gradient top border */}
      <div
        className="h-[1px] w-full"
        style={{ background: "var(--gradient)" }}
      />

      <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-8">
        {/* Logo row */}
        <div className="flex items-center gap-2.5">
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
          <span
            className="text-sm tracking-tight"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--accent-primary)",
            }}
          >
            <span style={{ color: "var(--text-muted)" }}>&lt;</span>
            rebira
            <span style={{ color: "var(--text-muted)" }}> /&gt;</span>
          </span>
        </div>

        {/* Nav links row */}
        <nav className="flex flex-wrap justify-center gap-6">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs transition-colors duration-200"
              style={{
                fontFamily: "var(--font-mono)",
                color: "var(--text-muted)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--accent-primary)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--text-muted)")
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-6">
          {[
            {
              icon: FiGithub,
              href: "https://github.com/rebiraolin",
              label: "GitHub",
            },
            {
              icon: FiLinkedin,
              href: "https://www.linkedin.com/in/rebira-oli/",
              label: "LinkedIn",
            },
            {
              icon: FiMail,
              href: "mailto:rebiranegassa24@gmail.com",
              label: "Email",
            },
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
              <Icon size={18} />
            </a>
          ))}
        </div>

        {/* Bottom row */}
        <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-2">
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
            }}
          >
            © {year} Rebira Oli Negassa
          </p>
          <p
            className="text-xs"
            style={{
              fontFamily: "var(--font-mono)",
              color: "var(--text-muted)",
            }}
          >
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
