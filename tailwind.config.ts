import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "Courier New", "monospace"],
      },
      colors: {
        bg: {
          primary: "#050811",
          secondary: "#080d1a",
          card: "#0d1526",
          glass: "rgba(13, 21, 38, 0.7)",
        },
        accent: {
          cyan: "#00d4ff",
          blue: "#3b7ef5",
          violet: "#8b5cf6",
          green: "#10b981",
          pink: "#ec4899",
        },
        text: {
          primary: "#f0f4ff",
          secondary: "#94a3b8",
          muted: "#475569",
        },
        border: {
          subtle: "rgba(59, 126, 245, 0.15)",
          glow: "rgba(0, 212, 255, 0.3)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "hero-gradient": "radial-gradient(ellipse 80% 60% at 50% -20%, rgba(0,212,255,0.12), transparent 70%)",
        "card-gradient": "linear-gradient(135deg, rgba(13,21,38,0.9) 0%, rgba(8,13,26,0.95) 100%)",
        "glow-blue": "radial-gradient(circle at center, rgba(59,126,245,0.15), transparent 70%)",
        "glow-cyan": "radial-gradient(circle at center, rgba(0,212,255,0.1), transparent 70%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "gradient-x": "gradient-x 8s ease infinite",
        "scan-line": "scan-line 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-x": {
          "0%, 100%": { "background-size": "200% 200%", "background-position": "left center" },
          "50%": { "background-size": "200% 200%", "background-position": "right center" },
        },
        "scan-line": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100vh)" },
        },
      },
      boxShadow: {
        "glow-cyan": "0 0 30px rgba(0, 212, 255, 0.2), 0 0 60px rgba(0, 212, 255, 0.05)",
        "glow-blue": "0 0 30px rgba(59, 126, 245, 0.25), 0 0 60px rgba(59, 126, 245, 0.1)",
        "glow-violet": "0 0 30px rgba(139, 92, 246, 0.2)",
        "card": "0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        "card-hover": "0 8px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
      },
    },
  },
  plugins: [],
};

export default config;
