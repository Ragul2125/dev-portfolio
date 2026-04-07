"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Trophy, MapPin } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { portfolioData } from "@/lib/data";

const { about, experience, education, achievements } = portfolioData;

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

export function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(59,126,245,0.03)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6">
        <SectionHeader
          label="// about.me"
          title="System-Focused. AI-Augmented."
          subtitle="I design systems end-to-end — not just features."
          align="left"
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* About text — left 3 cols */}
          <div className="lg:col-span-3 space-y-8">
            <div className="space-y-5">
              {about.body.map((para, i) => (
                <motion.p
                  key={i}
                  custom={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="text-[#94a3b8] leading-relaxed text-base"
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* Experience cards */}
            <div className="space-y-4 mt-8">
              <h3 className="text-xs font-mono text-[#00d4ff] tracking-[0.15em] uppercase flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5" />
                Experience
              </h3>
              {experience.map((exp, i) => (
                <motion.div
                  key={i}
                  custom={i + 3}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="relative pl-4 border-l border-[rgba(59,126,245,0.2)] group hover:border-[rgba(0,212,255,0.4)] transition-colors"
                >
                  <div className="absolute left-[-5px] top-1 w-2 h-2 rounded-full bg-[#0d1526] border border-[rgba(59,126,245,0.5)] group-hover:border-[#00d4ff] group-hover:bg-[rgba(0,212,255,0.2)] transition-all" />
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-sm font-semibold text-[#f0f4ff]">{exp.role}</span>
                    <span className="text-xs text-[#3b7ef5] font-mono">@ {exp.company}</span>
                  </div>
                  <span className="text-xs text-[#475569] font-mono mb-2 block">{exp.duration}</span>
                  <ul className="space-y-1">
                    {exp.highlights.map((h, j) => (
                      <li key={j} className="text-xs text-[#64748b] flex gap-2">
                        <span className="text-[#3b7ef5] shrink-0">›</span>
                        {h}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right sidebar — 2 cols */}
          <div className="lg:col-span-2 space-y-6">
            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-4 h-4 text-[#8b5cf6]" />
                <span className="text-xs font-mono text-[#8b5cf6] tracking-widest uppercase">Education</span>
              </div>
              <h4 className="text-sm font-semibold text-[#f0f4ff] mb-1">{education.degree}</h4>
              <p className="text-xs text-[#64748b] mb-3">{education.institution}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#475569]">{education.duration}</span>
                <div className="px-3 py-1 rounded-full bg-[rgba(139,92,246,0.1)] border border-[rgba(139,92,246,0.2)]">
                  <span className="text-xs font-mono font-semibold text-[#8b5cf6]">CGPA {education.cgpa}</span>
                </div>
              </div>
            </motion.div>

            {/* Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <Trophy className="w-4 h-4 text-[#f59e0b]" />
                <span className="text-xs font-mono text-[#f59e0b] tracking-widest uppercase">Achievements</span>
              </div>
              <div className="space-y-3">
                {achievements.map((a, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-[rgba(245,158,11,0.05)] border border-[rgba(245,158,11,0.1)]">
                    <div className="w-6 h-6 rounded-full bg-[rgba(245,158,11,0.15)] flex items-center justify-center shrink-0">
                      <Trophy className="w-3 h-3 text-[#f59e0b]" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-[#f59e0b] block">{a.title}</span>
                      <span className="text-xs text-[#64748b]">{a.event}</span>
                      <span className="text-xs text-[#475569] block">{a.org}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card rounded-2xl p-6"
            >
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-4 h-4 text-[#10b981]" />
                <span className="text-xs font-mono text-[#10b981] tracking-widest uppercase">Quick Info</span>
              </div>
              <dl className="space-y-3">
                {[
                  { label: "Domain", value: "AI + Full Stack" },
                  { label: "Focus", value: "Scalable Systems" },
                  { label: "Community", value: "Google Dev Groups" },
                  { label: "B.Tech Year", value: "2027 (AI & DS)" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-[rgba(59,126,245,0.08)] last:border-0">
                    <dt className="text-xs text-[#475569] font-mono">{item.label}</dt>
                    <dd className="text-xs font-medium text-[#94a3b8]">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
