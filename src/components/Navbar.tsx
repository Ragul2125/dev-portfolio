"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#stack", label: "Stack" },
  { href: "#strengths", label: "Strengths" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of sections.reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(5,8,17,0.85)] backdrop-blur-xl border-b border-[rgba(59,126,245,0.1)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group" id="nav-logo">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#00d4ff] to-[#3b7ef5] flex items-center justify-center text-white font-bold text-sm font-mono">
            R
          </div>
          <span className="font-semibold text-[#f0f4ff] group-hover:text-[#00d4ff] transition-colors">
            ragul.dev
          </span>
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  active === link.href.slice(1)
                    ? "text-[#00d4ff]"
                    : "text-[#94a3b8] hover:text-[#f0f4ff]"
                }`}
              >
                {active === link.href.slice(1) && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 bg-[rgba(0,212,255,0.08)] rounded-lg border border-[rgba(0,212,255,0.15)]"
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:thiruragul98@gmail.com"
          id="nav-cta-contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-[#050811] bg-gradient-to-r from-[#00d4ff] to-[#3b7ef5] rounded-lg hover:shadow-lg hover:shadow-[rgba(0,212,255,0.25)] transition-all duration-200 hover:scale-105"
        >
          Hire Me
        </a>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 text-[#94a3b8] hover:text-[#f0f4ff]"
          onClick={() => setMobileOpen(!mobileOpen)}
          id="nav-mobile-toggle"
          aria-label="Toggle navigation"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 bg-current transition-all ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[rgba(8,13,26,0.95)] backdrop-blur-xl border-b border-[rgba(59,126,245,0.1)]"
          >
            <ul className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block px-4 py-2.5 text-[#94a3b8] hover:text-[#f0f4ff] hover:bg-[rgba(59,126,245,0.08)] rounded-lg transition-all"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
