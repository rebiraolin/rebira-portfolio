import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

/* ─── Footer Component ──────────────────────────────────────────── */
export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="border-t border-blue-500/10 bg-[#0a0c10]">
            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center gap-6">
                {/* CTA */}
                <p className="text-[#64748b] text-sm tracking-wider text-center">
                    <span className="text-blue-400 font-medium">{"// "}</span>
                    Let&apos;s build something together
                </p>

                {/* Social Links */}
                <div className="flex items-center gap-6">
                    <a
                        href="https://github.com/rebiraolin"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-[#64748b] hover:text-blue-400 transition-colors duration-200"
                    >
                        <FiGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/rebira-oli/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="text-[#64748b] hover:text-blue-400 transition-colors duration-200"
                    >
                        <FiLinkedin size={20} />
                    </a>
                    <a
                        href="mailto:rebiranegassa24@gmail.com"
                        aria-label="Email"
                        className="text-[#64748b] hover:text-blue-400 transition-colors duration-200"
                    >
                        <FiMail size={20} />
                    </a>
                </div>

                {/* Copyright */}
                <p className="text-[#64748b]/50 text-xs tracking-wide">
                    © {year} Rebira Oli Negassa. Built with Next.js &amp; Tailwind CSS.
                </p>
            </div>
        </footer>
    );
}
