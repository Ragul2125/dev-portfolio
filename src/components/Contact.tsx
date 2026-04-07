"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Copy, CheckCheck, ExternalLink } from "lucide-react";
import { portfolioData } from "@/lib/data";

const { personal } = portfolioData;

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[rgba(8,13,26,0.5)]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-1 bg-gradient-to-r from-transparent via-[rgba(0,212,255,0.3)] to-transparent" />
      <div className="absolute inset-0 grid-pattern opacity-20" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(0,212,255,0.03)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="section-label text-[#00d4ff] font-mono text-xs tracking-[0.2em] uppercase">// connect</span>
            <h2 className="text-3xl md:text-5xl font-bold">
              Let&apos;s Build Something{" "}
              <span className="text-gradient-cyan">Exceptional</span>
            </h2>
            <p className="text-[#94a3b8] text-lg max-w-xl mx-auto">
              Open to full-stack roles, AI product opportunities, and systems engineering challenges.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-5 gap-6 max-w-4xl mx-auto">
          {/* Email card — larger */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-3 glass-card rounded-2xl p-8 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(0,212,255,0.06)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="relative z-10">
              <div className="w-12 h-12 rounded-2xl bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-[#00d4ff]" />
              </div>

              <h3 className="text-lg font-semibold text-[#f0f4ff] mb-2">Send a message</h3>
              <p className="text-sm text-[#64748b] mb-6">
                Best for project inquiries, job opportunities, and technical collaboration.
              </p>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-[rgba(0,212,255,0.04)] border border-[rgba(0,212,255,0.1)] mb-4 group/email">
                <span className="text-sm font-mono text-[#94a3b8] flex-1">{personal.email}</span>
                <button
                  onClick={copyEmail}
                  id="contact-copy-email"
                  className="p-1.5 rounded-lg text-[#475569] hover:text-[#00d4ff] hover:bg-[rgba(0,212,255,0.1)] transition-all"
                  aria-label="Copy email"
                >
                  {copied ? <CheckCheck className="w-4 h-4 text-[#10b981]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={`mailto:${personal.email}`}
                id="contact-email-link"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#050811] bg-gradient-to-r from-[#00d4ff] to-[#3b7ef5] rounded-xl hover:shadow-lg hover:shadow-[rgba(0,212,255,0.25)] transition-all hover:scale-105"
              >
                <Mail className="w-4 h-4" />
                Open Email
              </a>
            </div>
          </motion.div>

          {/* Social links */}
          <div className="md:col-span-2 flex flex-col gap-4">
            {[
              {
                id: "contact-github",
                href: personal.github,
                icon: Github,
                label: "GitHub",
                username: "@Ragul2125",
                desc: "Open source & project code",
                color: "#f0f4ff",
                bg: "rgba(240,244,255,0.05)",
                border: "rgba(240,244,255,0.1)",
              },
              {
                id: "contact-linkedin",
                href: personal.linkedin,
                icon: Linkedin,
                label: "LinkedIn",
                username: "ragul-t21",
                desc: "Professional profile",
                color: "#3b7ef5",
                bg: "rgba(59,126,245,0.06)",
                border: "rgba(59,126,245,0.2)",
              },
              {
                id: "contact-portfolio",
                href: personal.portfolio,
                icon: ExternalLink,
                label: "Live Portfolio",
                username: "ragul21.vercel.app",
                desc: "Deployed site",
                color: "#10b981",
                bg: "rgba(16,185,129,0.06)",
                border: "rgba(16,185,129,0.2)",
              },
            ].map((link, i) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.id}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  id={link.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  whileHover={{ scale: 1.02, x: -2 }}
                  className="glass-card rounded-2xl p-5 flex items-center gap-4 group"
                  style={{ borderColor: link.border }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: link.bg, border: `1px solid ${link.border}` }}
                  >
                    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" style={{ color: link.color }} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-sm font-semibold text-[#f0f4ff]">{link.label}</span>
                      <ExternalLink className="w-3 h-3 text-[#475569] group-hover:text-[#00d4ff] transition-colors" />
                    </div>
                    <span className="text-xs font-mono truncate block" style={{ color: link.color }}>{link.username}</span>
                    <span className="text-xs text-[#475569]">{link.desc}</span>
                  </div>
                </motion.a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
