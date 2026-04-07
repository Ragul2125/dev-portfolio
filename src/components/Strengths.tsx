"use client";

import { motion } from "framer-motion";
import { Layers, Zap, Activity, Brain, Database, Bell } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { portfolioData } from "@/lib/data";

const { strengths } = portfolioData;

const iconMap: Record<string, React.ElementType> = {
  layers: Layers,
  zap: Zap,
  activity: Activity,
  brain: Brain,
  database: Database,
  bell: Bell,
};

const iconColors = [
  { bg: "rgba(0,212,255,0.1)", border: "rgba(0,212,255,0.2)", color: "#00d4ff" },
  { bg: "rgba(59,126,245,0.1)", border: "rgba(59,126,245,0.2)", color: "#3b7ef5" },
  { bg: "rgba(139,92,246,0.1)", border: "rgba(139,92,246,0.2)", color: "#8b5cf6" },
  { bg: "rgba(16,185,129,0.1)", border: "rgba(16,185,129,0.2)", color: "#10b981" },
  { bg: "rgba(245,158,11,0.1)", border: "rgba(245,158,11,0.2)", color: "#f59e0b" },
  { bg: "rgba(236,72,153,0.1)", border: "rgba(236,72,153,0.2)", color: "#ec4899" },
];

export function Strengths() {
  return (
    <section id="strengths" className="py-24 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[rgba(139,92,246,0.03)] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <SectionHeader
          label="// core.strengths"
          title="Engineering DNA"
          subtitle="The disciplines I obsess over — built through real production experience."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {strengths.map((strength, i) => {
            const Icon = iconMap[strength.icon];
            const colorSet = iconColors[i % iconColors.length];
            return (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="glass-card rounded-2xl p-6 group cursor-default relative overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `radial-gradient(180px circle at top left, ${colorSet.bg}, transparent)` }}
                />

                <div className="relative z-10">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: colorSet.bg, border: `1px solid ${colorSet.border}` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: colorSet.color }} />
                  </div>

                  <h3 className="text-sm font-semibold text-[#f0f4ff] mb-2 group-hover:text-gradient-cyan">
                    {strength.title}
                  </h3>

                  <p className="text-xs text-[#64748b] leading-relaxed">
                    {strength.description}
                  </p>

                  {/* Bottom accent line */}
                  <div
                    className="mt-4 h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                    style={{ background: `linear-gradient(90deg, ${colorSet.color}, transparent)` }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
