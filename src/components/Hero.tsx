"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download, Terminal } from "lucide-react";
import { ParticleField } from "./ParticleField";
import { portfolioData } from "@/lib/data";

const { personal } = portfolioData;

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-pattern opacity-100" />
      <div className="absolute inset-0 bg-hero-gradient" />
      <ParticleField />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-[rgba(0,212,255,0.04)] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[rgba(139,92,246,0.05)] rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="max-w-4xl">
          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.06)] mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-pulse-slow" />
            <span className="text-xs font-mono text-[#00d4ff] tracking-wide">
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-sm font-mono text-[#94a3b8] tracking-[0.15em] uppercase mb-3 block">
              Hi, I&apos;m
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-none mb-2">
              <span className="text-gradient-hero">{personal.name}</span>
            </h1>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mt-4 mb-6"
          >
            <Terminal className="w-5 h-5 text-[#3b7ef5]" />
            <span className="text-xl md:text-2xl font-mono font-semibold text-[#3b7ef5]">
              {personal.title}
            </span>
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-[#94a3b8] leading-relaxed max-w-2xl mb-10"
          >
            {personal.tagline}
          </motion.p>

          {/* Stat pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {[
              { val: "3+", label: "Production Apps" },
              { val: "200+", label: "Devs Mentored" },
              { val: "2×", label: "Hackathon Winner" },
              { val: "8.10", label: "CGPA" },
            ].map((stat, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[rgba(13,21,38,0.8)] border border-[rgba(59,126,245,0.12)] backdrop-blur-sm"
              >
                <span className="text-lg font-bold text-[#f0f4ff]">{stat.val}</span>
                <span className="text-xs text-[#94a3b8]">{stat.label}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a
              href="#projects"
              id="hero-cta-projects"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#050811] bg-gradient-to-r from-[#00d4ff] to-[#3b7ef5] rounded-xl hover:shadow-lg hover:shadow-[rgba(0,212,255,0.3)] transition-all duration-200 hover:scale-105 group"
            >
              View My Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:thiruragul98@gmail.com"
              id="hero-cta-contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#f0f4ff] border border-[rgba(59,126,245,0.3)] rounded-xl hover:border-[rgba(0,212,255,0.5)] hover:bg-[rgba(0,212,255,0.06)] transition-all duration-200"
            >
              <Mail className="w-4 h-4" />
              Get In Touch
            </a>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="flex items-center gap-4"
          >
            <span className="text-xs text-[#475569] font-mono tracking-wide">CONNECT</span>
            <div className="h-px w-8 bg-[rgba(59,126,245,0.3)]" />
            {[
              { href: personal.github, icon: Github, label: "GitHub", id: "hero-github" },
              { href: personal.linkedin, icon: Linkedin, label: "LinkedIn", id: "hero-linkedin" },
              { href: `mailto:${personal.email}`, icon: Mail, label: "Email", id: "hero-email" },
            ].map(({ href, icon: Icon, label, id }) => (
              <a
                key={id}
                href={href}
                id={id}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 flex items-center justify-center rounded-lg border border-[rgba(59,126,245,0.15)] text-[#94a3b8] hover:text-[#00d4ff] hover:border-[rgba(0,212,255,0.4)] hover:bg-[rgba(0,212,255,0.06)] transition-all duration-200 hover:scale-110"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-[#475569] font-mono tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-[rgba(59,126,245,0.3)] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-[#3b7ef5] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
