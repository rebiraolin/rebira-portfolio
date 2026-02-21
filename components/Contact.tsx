"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiCheck } from "react-icons/fi";

/* ─── Contact Section ────────────────────────────────────────────── */
export default function Contact() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("sending");

        // TODO: Replace with EmailJS or your preferred email service
        // Example: await emailjs.send(serviceId, templateId, form, publicKey)
        // For now, simulate a network request
        await new Promise((resolve) => setTimeout(resolve, 1200));

        // Placeholder: always succeeds for demo purposes
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
    };

    return (
        <section
            id="contact"
            ref={ref}
            className="py-24 px-6 border-t border-blue-500/10 bg-[#0f1117]"
            aria-label="Contact"
        >
            <div className="max-w-6xl mx-auto">
                <div className="grid md:grid-cols-[200px_1fr] gap-16 items-start mb-12">
                    {/* Section label */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="md:text-right"
                    >
                        <span className="text-blue-400 text-sm tracking-[0.2em] uppercase font-medium">
                            06. Contact
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.1 }}
                    >
                        <h2 className="text-2xl md:text-3xl font-bold text-[#e2e8f0]">
                            Get In Touch
                        </h2>
                        <p className="text-[#64748b] text-sm mt-2 max-w-md">
                            Whether you have a project in mind, a question, or just want to
                            connect — my inbox is open.
                        </p>
                    </motion.div>
                </div>

                <div className="md:ml-[calc(200px+4rem)] grid md:grid-cols-[1fr_280px] gap-10">
                    {/* Contact form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        {/* Name */}
                        <div>
                            <label
                                htmlFor="contact-name"
                                className="block text-xs text-[#64748b] mb-1.5 tracking-wide"
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
                                className="w-full bg-[#131720] border border-blue-500/15 rounded-lg px-4 py-3 text-sm text-[#e2e8f0] placeholder:text-[#64748b]/50 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200 font-mono"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label
                                htmlFor="contact-email"
                                className="block text-xs text-[#64748b] mb-1.5 tracking-wide"
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
                                className="w-full bg-[#131720] border border-blue-500/15 rounded-lg px-4 py-3 text-sm text-[#e2e8f0] placeholder:text-[#64748b]/50 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200 font-mono"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label
                                htmlFor="contact-message"
                                className="block text-xs text-[#64748b] mb-1.5 tracking-wide"
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
                                className="w-full bg-[#131720] border border-blue-500/15 rounded-lg px-4 py-3 text-sm text-[#e2e8f0] placeholder:text-[#64748b]/50 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all duration-200 font-mono resize-none"
                            />
                        </div>

                        {/* Submit button */}
                        <button
                            type="submit"
                            disabled={status === "sending" || status === "sent"}
                            className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-600/40 text-white text-sm font-semibold rounded-lg transition-all duration-200 tracking-wide"
                        >
                            {status === "sending" ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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

                        {/* Sent confirmation note */}
                        {status === "sent" && (
                            <p className="text-green-400 text-xs">
                                ✓ Message sent. I&apos;ll get back to you soon!
                            </p>
                        )}
                    </motion.form>

                    {/* Sidebar links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.15 }}
                        className="flex flex-col gap-4"
                    >
                        <p className="text-[#64748b] text-xs tracking-wide uppercase mb-2">
                            Or reach me directly
                        </p>

                        <a
                            href="mailto:rebira.oli@example.com"
                            className="flex items-center gap-3 text-sm text-[#94a3b8] hover:text-blue-400 transition-colors group"
                        >
                            <span className="p-2.5 bg-[#131720] border border-blue-500/15 rounded-lg group-hover:border-blue-500/40 transition-colors">
                                <FiMail size={16} />
                            </span>
                            <span>rebira.oli@example.com</span>
                        </a>

                        <a
                            href="https://github.com/rebiraolin"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm text-[#94a3b8] hover:text-blue-400 transition-colors group"
                        >
                            <span className="p-2.5 bg-[#131720] border border-blue-500/15 rounded-lg group-hover:border-blue-500/40 transition-colors">
                                <FiGithub size={16} />
                            </span>
                            <span>github.com/rebiraolin</span>
                        </a>

                        <a
                            href="https://linkedin.com/in/rebiraoli"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 text-sm text-[#94a3b8] hover:text-blue-400 transition-colors group"
                        >
                            <span className="p-2.5 bg-[#131720] border border-blue-500/15 rounded-lg group-hover:border-blue-500/40 transition-colors">
                                <FiLinkedin size={16} />
                            </span>
                            <span>linkedin.com/in/rebiraoli</span>
                        </a>

                        {/* Response time note */}
                        <div className="mt-4 p-4 bg-[#131720] border border-blue-500/10 rounded-lg">
                            <p className="text-[#64748b] text-xs leading-relaxed">
                                <span className="text-blue-400 font-medium">Response time:</span>{" "}
                                Usually within 24–48 hours. Available for freelance, full-time
                                roles, and collaboration.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
