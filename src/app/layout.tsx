import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ragul T | AI-Driven Full Stack Developer",
  description:
    "Ragul T is an AI-Driven Full Stack Developer specializing in scalable microservices, LLM integration, RAG pipelines, and high-performance backend systems. Tech Lead at Google Developer Groups.",
  keywords: [
    "Ragul T",
    "Full Stack Developer",
    "AI Developer",
    "Next.js Portfolio",
    "React Developer",
    "Node.js",
    "Microservices",
    "LLM Integration",
    "RAG",
    "System Design",
  ],
  authors: [{ name: "Ragul T", url: "https://ragul21.vercel.app" }],
  openGraph: {
    title: "Ragul T | AI-Driven Full Stack Developer",
    description:
      "Building scalable, AI-integrated systems — from microservices to LLM pipelines.",
    url: "https://ragul21.vercel.app",
    siteName: "Ragul T Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ragul T | AI-Driven Full Stack Developer",
    description:
      "Building scalable, AI-integrated systems — from microservices to LLM pipelines.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#050811] text-[#f0f4ff] antialiased">
        {children}
      </body>
    </html>
  );
}
