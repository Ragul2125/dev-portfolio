"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  children?: ReactNode;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-16 ${isCenter ? "text-center" : "text-left"}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <span className="section-label tracking-[0.2em] text-[#00d4ff] text-xs font-mono uppercase">
          {label}
        </span>
        <h2
          className={`text-3xl md:text-4xl font-bold tracking-tight ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {title}
        </h2>
        {subtitle && (
          <p
            className={`text-[#94a3b8] text-base md:text-lg max-w-2xl ${
              isCenter ? "mx-auto" : ""
            }`}
          >
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
}
