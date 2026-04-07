# Ragul T — AI-Driven Full Stack Developer Portfolio

A premium, production-ready developer portfolio built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.

## ✨ Features

- 🌑 Deep space dark theme with particle field animations
- ⚡ Framer Motion scroll-triggered animations throughout
- 🧩 Reusable component architecture with a centralized data layer
- 📱 Fully responsive across all screen sizes
- 🔍 SEO-optimized with proper metadata, Open Graph, and semantic HTML
- 🎯 Premium glassmorphism card design system

## 🏗️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript

## 🗂️ Folder Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout + SEO metadata
│   ├── page.tsx            # Main page (section composition)
│   └── globals.css         # Global styles + design tokens
├── components/
│   ├── Navbar.tsx          # Sticky nav with active state + mobile menu
│   ├── Hero.tsx            # Hero section with particle field
│   ├── About.tsx           # About + experience timeline + education
│   ├── TechStack.tsx       # 4-group tech stack grid
│   ├── Strengths.tsx       # 6 core engineering strengths
│   ├── FeaturedProject.tsx # Flagship project w/ architecture breakdown
│   ├── Projects.tsx        # Additional projects grid
│   ├── Contact.tsx         # Contact section with social links
│   ├── Footer.tsx          # Footer
│   ├── ParticleField.tsx   # Canvas particle animation
│   └── SectionHeader.tsx   # Reusable section header
└── lib/
    └── data.ts             # Centralized portfolio data source
```

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Visit http://localhost:3000
```

## 🌐 Deploy to Vercel

### Option 1: CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Option 2: GitHub Integration

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **"New Project"** → Import your GitHub repo
4. Vercel auto-detects Next.js — click **Deploy**
5. Your site is live at `https://your-project.vercel.app`

### Environment Variables (Optional)

No env vars required for the current setup.

## 🎨 Customization

All portfolio data lives in a single file: `src/lib/data.ts`

To update:
- Personal info → `personal` object
- Experience → `experience` array
- Projects → `projects` array  
- Featured project → `featuredProject` object
- Tech stack → `techStack` object

## 📄 License

MIT
