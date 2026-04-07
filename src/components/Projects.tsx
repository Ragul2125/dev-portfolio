"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Users, Code2 } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { portfolioData } from "@/lib/data";

const { projects } = portfolioData;

const categoryColors: Record<string, { text: string; bg: string; border: string }> = {
  "AI · Full Stack": { text: "#8b5cf6", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)" },
  "Full Stack · AI": { text: "#3b7ef5", bg: "rgba(59,126,245,0.08)", border: "rgba(59,126,245,0.2)" },
  "Full Stack · SaaS": { text: "#10b981", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)" },
  "Microservices · Full Stack": { text: "#00d4ff", bg: "rgba(0,212,255,0.08)", border: "rgba(0,212,255,0.2)" },
  "AI Agents · Full Stack": { text: "#f59e0b", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)" },
};

export function Projects() {
  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute left-0 bottom-0 w-[500px] h-[500px] bg-[rgba(59,126,245,0.03)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="// other.projects"
          title="More Built, More Shipped"
          subtitle="Full-stack systems, microservices architecture, and AI integrations — built with real engineering decisions."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => {
            const catStyle = categoryColors[project.category] ?? categoryColors["Full Stack · AI"];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="glass-card rounded-2xl p-6 flex flex-col group cursor-default relative overflow-hidden"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
                id={`project-card-${project.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* Subtle top border on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: catStyle.text }}
                />

                {/* Category tag */}
                <div className="flex items-start justify-between mb-5">
                  <span
                    className="text-xs font-mono px-2.5 py-1 rounded-full border"
                    style={{ color: catStyle.text, background: catStyle.bg, borderColor: catStyle.border }}
                  >
                    {project.category}
                  </span>
                  <ArrowUpRight
                    className="w-4 h-4 text-[#475569] group-hover:text-[#00d4ff] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                </div>

                {/* Title & subtitle */}
                <h3 className="text-base font-bold text-[#f0f4ff] mb-1">{project.title}</h3>
                <p className="text-xs font-mono text-[#475569] mb-3">{project.subtitle}</p>
                <p className="text-xs text-[#64748b] leading-relaxed mb-5 flex-1">{project.description}</p>

                {/* Highlights */}
                <ul className="space-y-1.5 mb-5">
                  {project.highlights.map((h, j) => (
                    <li key={j} className="flex gap-2 items-start">
                      <span style={{ color: catStyle.text }} className="mt-0.5 shrink-0 text-xs">›</span>
                      <span className="text-xs text-[#64748b]">{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Meta strip (duration / team / role) */}
                {(project as any).meta && (
                  <div className="flex flex-wrap gap-3 mb-4 py-3 px-3 rounded-xl bg-[rgba(245,158,11,0.04)] border border-[rgba(245,158,11,0.1)]">
                    {(project as any).meta.duration && (
                      <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#94a3b8]">
                        <Clock className="w-3 h-3 text-[#f59e0b]" />
                        {(project as any).meta.duration}
                      </span>
                    )}
                    {(project as any).meta.team && (
                      <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#94a3b8]">
                        <Users className="w-3 h-3 text-[#f59e0b]" />
                        {(project as any).meta.team}
                      </span>
                    )}
                    {(project as any).meta.role && (
                      <span className="flex items-center gap-1.5 text-[10px] font-mono text-[#94a3b8]">
                        <Code2 className="w-3 h-3 text-[#f59e0b]" />
                        {(project as any).meta.role}
                      </span>
                    )}
                  </div>
                )}

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-[rgba(59,126,245,0.08)]">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="tech-badge text-[10px] py-0.5">{tech}</span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
