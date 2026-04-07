"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle, Server, Cpu, BarChart3, TrendingUp } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { portfolioData } from "@/lib/data";

const { featuredProject } = portfolioData;

export function FeaturedProject() {
  return (
    <section id="featured" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-[rgba(8,13,26,0.6)]" />
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[rgba(139,92,246,0.04)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="// featured.project"
          title="Flagship System"
          subtitle="A production-grade, AI-first architecture built for scale."
        />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden border border-[rgba(139,92,246,0.2)] bg-[rgba(13,21,38,0.7)] backdrop-blur-xl"
          style={{ boxShadow: "0 0 60px rgba(139,92,246,0.08), 0 4px 24px rgba(0,0,0,0.4)" }}
        >
          {/* Header bar */}
          <div className="px-8 py-5 border-b border-[rgba(139,92,246,0.15)] flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[rgba(236,72,153,0.8)]" />
                <div className="w-3 h-3 rounded-full bg-[rgba(245,158,11,0.8)]" />
                <div className="w-3 h-3 rounded-full bg-[rgba(16,185,129,0.8)]" />
              </div>
              <span className="text-xs font-mono text-[#475569]">~/projects/{featuredProject.title.split(" ")[0].toLowerCase()}</span>
            </div>
            <span className="text-xs font-mono text-[#8b5cf6] border border-[rgba(139,92,246,0.3)] px-3 py-1 rounded-full">
              {featuredProject.category}
            </span>
          </div>

          <div className="p-8">
            {/* Title */}
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-[#f0f4ff] mb-2">{featuredProject.title}</h3>
              <p className="text-[#8b5cf6] font-mono text-sm">{featuredProject.subtitle}</p>
            </div>

            {/* Grid: 3 main blocks */}
            <div className="grid lg:grid-cols-3 gap-6 mb-8">
              {/* Problem statement */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-1 p-5 rounded-2xl border border-[rgba(59,126,245,0.15)] bg-[rgba(59,126,245,0.04)]"
              >
                <h4 className="text-xs font-mono text-[#3b7ef5] tracking-widest uppercase mb-3 flex items-center gap-2">
                  <Cpu className="w-3.5 h-3.5" /> Problem
                </h4>
                <p className="text-sm text-[#94a3b8] leading-relaxed">{featuredProject.problemStatement}</p>
              </motion.div>

              {/* Architecture overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="lg:col-span-2 p-5 rounded-2xl border border-[rgba(139,92,246,0.15)] bg-[rgba(139,92,246,0.04)]"
              >
                <h4 className="text-xs font-mono text-[#8b5cf6] tracking-widest uppercase mb-4 flex items-center gap-2">
                  <Server className="w-3.5 h-3.5" /> Microservices Architecture
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {featuredProject.architecture.services.map((service, i) => (
                    <div key={i} className="p-3 rounded-xl bg-[rgba(139,92,246,0.06)] border border-[rgba(139,92,246,0.1)]">
                      <span className="text-xs font-semibold text-[#c4b5fd] block mb-1">{service.name}</span>
                      <span className="text-xs text-[#64748b] leading-relaxed">{service.description}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Features + Scalability */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Features */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="p-5 rounded-2xl border border-[rgba(16,185,129,0.15)] bg-[rgba(16,185,129,0.04)]"
              >
                <h4 className="text-xs font-mono text-[#10b981] tracking-widest uppercase mb-4 flex items-center gap-2">
                  <CheckCircle className="w-3.5 h-3.5" /> Key Features
                </h4>
                <ul className="space-y-2">
                  {featuredProject.features.map((feat, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-[#10b981] mt-0.5 shrink-0">✓</span>
                      <span className="text-xs text-[#94a3b8]">{feat}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Scalability */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                className="p-5 rounded-2xl border border-[rgba(0,212,255,0.15)] bg-[rgba(0,212,255,0.04)]"
              >
                <h4 className="text-xs font-mono text-[#00d4ff] tracking-widest uppercase mb-4 flex items-center gap-2">
                  <TrendingUp className="w-3.5 h-3.5" /> Scalability Design
                </h4>
                <ul className="space-y-2">
                  {featuredProject.scalability.map((point, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <span className="text-[#00d4ff] mt-0.5 shrink-0">›</span>
                      <span className="text-xs text-[#94a3b8]">{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Tech stack + Impact */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[rgba(59,126,245,0.1)]">
              <div className="flex flex-wrap gap-2">
                {featuredProject.techStack.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.2)]">
                <BarChart3 className="w-4 h-4 text-[#10b981]" />
                <span className="text-xs font-mono font-semibold text-[#10b981]">60%+ effort reduction</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
