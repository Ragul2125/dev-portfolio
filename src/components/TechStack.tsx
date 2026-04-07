"use client";

import { motion } from "framer-motion";
import { Monitor, Server, Brain, Database } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { portfolioData } from "@/lib/data";

const { techStack } = portfolioData;

const groups = [
  {
    key: "frontend",
    label: "Frontend Layer",
    icon: Monitor,
    color: "#3b7ef5",
    gradient: "from-[rgba(59,126,245,0.15)] to-[rgba(59,126,245,0.03)]",
    borderColor: "rgba(59,126,245,0.2)",
    glowColor: "rgba(59,126,245,0.3)",
    description: "Component architecture, state management, and performance-first UI",
    items: techStack.frontend,
  },
  {
    key: "backend",
    label: "Backend & APIs",
    icon: Server,
    color: "#10b981",
    gradient: "from-[rgba(16,185,129,0.15)] to-[rgba(16,185,129,0.03)]",
    borderColor: "rgba(16,185,129,0.2)",
    glowColor: "rgba(16,185,129,0.3)",
    description: "Scalable server-side systems, API design, and real-time communication",
    items: techStack.backend,
  },
  {
    key: "ai",
    label: "AI Intelligence Layer",
    icon: Brain,
    color: "#8b5cf6",
    gradient: "from-[rgba(139,92,246,0.15)] to-[rgba(139,92,246,0.03)]",
    borderColor: "rgba(139,92,246,0.2)",
    glowColor: "rgba(139,92,246,0.3)",
    description: "LLM orchestration, RAG pipelines, and AI agent frameworks",
    items: techStack.ai,
  },
  {
    key: "data",
    label: "Data & Infrastructure",
    icon: Database,
    color: "#f59e0b",
    gradient: "from-[rgba(245,158,11,0.15)] to-[rgba(245,158,11,0.03)]",
    borderColor: "rgba(245,158,11,0.2)",
    glowColor: "rgba(245,158,11,0.3)",
    description: "Databases, caching strategies, event-driven queues, and cloud infrastructure",
    items: techStack.data,
  },
];

export function TechStack() {
  return (
    <section id="stack" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[rgba(8,13,26,0.5)]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[rgba(59,126,245,0.03)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="// tech.stack"
          title="Engineering Arsenal"
          subtitle="A deliberate, layered technology stack built for production-grade, AI-powered systems."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.key}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.01, y: -2 }}
                className="glass-card rounded-2xl p-6 overflow-hidden relative group cursor-default"
                style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)" }}
              >
                {/* Gradient background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${group.gradient} opacity-60`}
                />
                {/* Hover border glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: `inset 0 0 0 1px ${group.glowColor}` }}
                />

                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-5">
                    <div className="flex items-center gap-3">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center"
                        style={{
                          background: `rgba(${group.color === "#3b7ef5" ? "59,126,245" : group.color === "#10b981" ? "16,185,129" : group.color === "#8b5cf6" ? "139,92,246" : "245,158,11"}, 0.15)`,
                          border: `1px solid ${group.borderColor}`,
                        }}
                      >
                        <Icon className="w-5 h-5" style={{ color: group.color }} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[#f0f4ff] text-sm">{group.label}</h3>
                        <span
                          className="text-xs font-mono"
                          style={{ color: group.color }}
                        >
                          {group.items.length} technologies
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[#64748b] mb-5 leading-relaxed">{group.description}</p>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="tech-badge"
                        style={{
                          "--badge-color": group.color,
                        } as React.CSSProperties}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Language row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6 glass-card rounded-2xl p-5 flex flex-wrap items-center gap-4"
        >
          <span className="text-xs font-mono text-[#475569] whitespace-nowrap">LANGUAGES</span>
          <div className="h-px flex-1 bg-[rgba(59,126,245,0.1)]" />
          <div className="flex flex-wrap gap-2">
            {techStack.languages.map((lang) => (
              <span
                key={lang}
                className="px-4 py-1.5 text-xs font-mono font-semibold rounded-full border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.05)] text-[#00d4ff]"
              >
                {lang}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
