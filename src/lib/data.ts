export const portfolioData = {
  personal: {
    name: "Ragul T",
    title: "AI-Driven Full Stack Developer",
    tagline: "I architect intelligent, scalable systems — where backend precision meets AI-powered intelligence.",
    email: "thiruragul98@gmail.com",
    phone: "9345368842",
    github: "https://github.com/Ragul2125",
    linkedin: "https://www.linkedin.com/in/ragul-t21",
    portfolio: "https://ragul21.vercel.app",
    location: "India",
  },

  about: {
    headline: "Building systems that scale. Engineering intelligence that adapts.",
    body: [
      "I'm a full-stack engineer with a systems-first mindset — designing backends that handle real load, frontends that feel seamless, and AI layers that actually solve problems. Currently pursuing B.Tech in AI & Data Science, I approach every project like an architect: thinking about scale before the first line of code.",
      "My edge is the intersection of deep backend engineering and AI integration. I've shipped production-ready platforms, led cross-functional engineering teams at Google Developer Groups, and built AI-driven systems using RAG pipelines, LLM orchestration, and event-driven microservices patterns.",
      "I don't just implement features — I think in systems. Whether it's optimizing API latency, designing notification pipelines, or integrating LLMs into core product flows, I focus on solutions that hold up at scale.",
    ],
  },

  experience: [
    {
      role: "Tech Lead",
      company: "Google Developer Groups",
      duration: "September 2025 – Present",
      highlights: [
        "Led technical planning for a 24-hour hackathon engaging 200+ developers, defining problem statements and evaluating technical solutions",
        "Designed team onboarding & mentorship programs that improved collaboration standards and delivery velocity across engineering teams",
        "Coordinated cross-functional teams for community developer seminars, driving real-world problem-solving initiatives",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Construct Ease (Startup Initiative)",
      duration: "January 2025 – April 2025",
      highlights: [
        "Architected microservice-aligned backend modules (auth, reporting, project-tracking) with isolated responsibilities and independent Express.js services",
        "Built on-demand PDF/Excel reporting via serverless APIs and async job handlers, reducing manual reporting effort by ~40%",
        "Integrated Gen AI-powered progress summarization to auto-generate site updates from raw field data, reducing reporting lag significantly",
        "Designed modular React + Redux frontend with white-label routing, role-based access, and multi-tenant support",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Clients Bridge (Internship)",
      duration: "January 2024 – December 2024",
      highlights: [
        "Worked extensively on backend API design — built RESTful services for task assignment, bidding workflows, and role-based access control using Node.js and Express",
        "Designed and implemented a microservice-style separation between user management, project bidding, and notification delivery layers",
        "Integrated Gen AI features for smart project recommendation and automated proposal summarization using LLM APIs",
        "Implemented real-time bidding and live notification pipelines using WebSockets with delivery guarantees across Admin, Client, and Freelancer roles",
      ],
    },
  ],

  techStack: {
    frontend: ["React.js", "Next.js", "TypeScript", "JavaScript (ES6+)", "Redux", "Tailwind CSS", "Framer Motion", "HTML5", "CSS3"],
    backend: ["Node.js", "Express.js", "RESTful APIs", "WebSockets", "Microservices", "Serverless Functions", "Authentication & Authorization"],
    ai: ["RAG (Retrieval-Augmented Generation)", "LLM Integration", "AI Agents", "Prompt Engineering", "Gemini AI", "Generative AI Pipelines"],
    data: ["MongoDB", "MySQL", "Snowflake", "Redis (Caching)", "Event-Driven Architecture", "Flask", "Python"],
    languages: ["JavaScript", "TypeScript", "Python", "Java"],
  },

  strengths: [
    {
      title: "Microservices Architecture",
      description: "Designing loosely coupled, independently deployable services with clear ownership, fault isolation, and horizontal scaling strategies.",
      icon: "layers",
    },
    {
      title: "API Optimization & Caching",
      description: "Reducing API latency through response caching, query optimization, intelligent pagination, and payload compression strategies.",
      icon: "zap",
    },
    {
      title: "Event-Driven Systems",
      description: "Building asynchronous, decoupled workflows using event queues, pub/sub models, and real-time WebSocket pipelines.",
      icon: "activity",
    },
    {
      title: "AI Pipeline Integration",
      description: "Engineering RAG pipelines, LLM orchestration flows, and AI agent architectures that integrate cleanly into production backends.",
      icon: "brain",
    },
    {
      title: "State Architecture",
      description: "Implementing scalable frontend state management — from Redux slices to optimistic UI updates and real-time data sync.",
      icon: "database",
    },
    {
      title: "Notification Systems",
      description: "Building real-time and scheduled notification pipelines with WebSocket channels, delivery guarantees, and multi-role targeting.",
      icon: "bell",
    },
  ],

  featuredProject: {
    title: "ScoriX — AI-Powered Exam Evaluation Platform",
    subtitle: "End-to-end automated academic assessment using RAG + AI Agents",
    problemStatement:
      "Academic institutions spend thousands of man-hours manually grading exams. The process is inconsistent, error-prone, and doesn't scale. ScoriX eliminates that bottleneck entirely.",
    architecture: {
      overview:
        "ScoriX is built on a service-separated architecture where each concern — ingestion, evaluation, reporting — is independently deployed and scaled.",
      services: [
        {
          name: "Ingestion Service",
          description: "Handles question paper and answer sheet uploads, queues processing jobs asynchronously for the evaluation pipeline.",
        },
        {
          name: "RAG Evaluation Engine",
          description: "Retrieves relevant knowledge chunks from a vector store to generate accurate answer keys, then cross-evaluates student answers using LLM scoring.",
        },
        {
          name: "Grading Pipeline",
          description: "Supports partial marks, numerical tolerance bands, and theory-based rubric evaluation. Ensures consistent, bias-free scoring.",
        },
        {
          name: "Report Service",
          description: "Auto-generates per-student performance reports, class analytics, and exportable PDFs. Decoupled from the evaluation pipeline for async delivery.",
        },
      ],
    },
    features: [
      "Zero human intervention from upload to graded report",
      "Partial marks, numerical tolerance & theory-based evaluation",
      "RAG-powered answer key generation with real-time knowledge retrieval",
      "AI agent orchestration for multi-step grading decisions",
      "Automated performance report generation (PDF export)",
      "60%+ reduction in manual correction effort",
    ],
    scalability: [
      "Asynchronous job queue for batch paper processing",
      "Vector store indexing for fast knowledge retrieval at scale",
      "Service isolation enables independent scaling of evaluation and reporting",
      "Stateless grading workers — horizontally scalable",
    ],
    techStack: ["React", "Node.js", "Express", "Flask", "Python", "RAG", "LLM", "AI Agents", "MongoDB"],
    category: "AI · Full Stack · System Design",
  },

  projects: [
    {
      title: "Talk2DB",
      subtitle: "Natural Language → SQL Interface",
      description:
        "AI-powered platform enabling non-technical users to interact with MySQL and Snowflake databases through natural language. Reduced query turnaround from minutes to seconds.",
      highlights: [
        "Real-time SQL generation via Gemini AI with edge-case handling",
        "Clean Flask API layer with React frontend for seamless UX",
        "Dual database support: MySQL + Snowflake with unified query interface",
      ],
      techStack: ["React", "Flask", "Gemini AI", "MySQL", "Snowflake"],
      category: "AI · Full Stack",
    },
    {
      title: "SkillSync",
      subtitle: "AI-Matched Developer Collaboration Platform",
      description:
        "Full-stack developer collaboration platform with AI-based matching, real-time chat, role-based access, integrated notifications, and live project management workflows.",
      highlights: [
        "AI-powered developer-project matching using Gemini + RAG",
        "Real-time chat, notifications, and collaboration state management",
        "Multi-role dashboards with dynamic project lifecycle tracking",
      ],
      techStack: ["React", "Node.js", "MongoDB", "Express", "Gemini AI", "RAG", "WebSockets"],
      category: "Full Stack · AI",
    },
    {
      title: "Construct Ease",
      subtitle: "Construction SaaS — Work & Material Tracking",
      description:
        "Production-grade SaaS platform for construction project management with white-label routing, role-based views, on-demand reporting, and modular component architecture.",
      highlights: [
        "React + Redux UI with white-label multi-tenant routing",
        "Serverless PDF/Excel reporting cutting manual effort by ~40%",
        "Role-based access: Admin, Project Manager, Field Worker views",
      ],
      techStack: ["React", "Redux", "Node.js", "MongoDB", "Express", "Serverless"],
      category: "Full Stack · SaaS",
    },
    {
      title: "AURA",
      subtitle: "Adaptive User Rhythm Assistant — Human-Centered AI Productivity",
      description:
        "Biologically-aware AI productivity system that observes real-time screen activity, maintains short & long-term health memory, and uses RAG + AI agents to recommend tasks aligned with a user's energy, focus, and cognitive load — prioritizing well-being over raw output.",
      highlights: [
        "Behavior abstraction layer that models real productivity signals from raw screen activity and usage patterns",
        "Short & long-term health memory using semantic search with structured memory pruning to prevent noise accumulation",
        "Energy-aware AI agent feedback loop — dynamically adjusts task recommendations based on attention span and cognitive state",
        "RAG-powered semantic learning engine that improves task suggestions from past productivity patterns over time",
      ],
      techStack: ["React", "Node.js", "Express", "Python", "GenAI", "AI Agents", "RAG", "REST API"],
      category: "AI Agents · Full Stack",
      meta: { duration: "2 months", team: "4 Members", role: "Full Stack Developer" },
    },
    {
      title: "ShopFlow",
      subtitle: "E-Commerce Platform — Microservices Architecture",
      description:
        "Scalable e-commerce backend engineered as a fully decoupled microservices system — covering product discovery, order lifecycle, payments, inventory, and AI-powered recommendations in isolated, independently deployable services.",
      highlights: [
        "5 independently deployed services: Product, Order, Payment, Inventory & Recommendation — each with its own DB and API contract",
        "Event-driven inter-service communication via async message queues; zero tight coupling between order and inventory flows",
        "AI-powered product recommendation engine using collaborative filtering and LLM-based query understanding for personalized discovery",
        "API Gateway layer handling auth, rate limiting, and request routing across all microservices",
      ],
      techStack: ["Node.js", "Express", "MongoDB", "Redis", "RabbitMQ", "React", "Next.js", "Gemini AI", "Docker"],
      category: "Microservices · Full Stack",
    },
  ],

  achievements: [
    { title: "Winner", event: "TechnoForge Hackathon", org: "SMVEC" },
    { title: "Runner-Up", event: "CloudCouch Hackathon", org: "CloudCouch" },
  ],

  education: {
    degree: "B.Tech — Artificial Intelligence and Data Science",
    institution: "Sri Manakula Vinayagar Engineering College",
    duration: "2023 – 2027",
    cgpa: "8.10",
  },
};
