"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { portfolioData } from "@/lib/data";

const { personal } = portfolioData;

export function Footer() {
  return (
    <footer className="py-10 px-6 border-t border-[rgba(59,126,245,0.08)] bg-[rgba(5,8,17,0.8)]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#3b7ef5] flex items-center justify-center text-white font-bold text-xs font-mono">
            R
          </div>
          <span className="text-[#475569] text-sm font-mono">
            ragul.dev © {new Date().getFullYear()}
          </span>
        </div>

        <p className="text-xs text-[#334155] font-mono text-center">
          Built with Next.js · Tailwind CSS · Framer Motion
        </p>

        <div className="flex items-center gap-3">
          {[
            { href: personal.github, icon: Github, id: "footer-github" },
            { href: personal.linkedin, icon: Linkedin, id: "footer-linkedin" },
            { href: `mailto:${personal.email}`, icon: Mail, id: "footer-email" },
          ].map(({ href, icon: Icon, id }) => (
            <a
              key={id}
              href={href}
              id={id}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-lg text-[#475569] hover:text-[#00d4ff] hover:bg-[rgba(0,212,255,0.08)] transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
