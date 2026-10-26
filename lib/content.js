// Single source of truth for the portfolio copy.
// Keep it in sync with the resume: same titles, same numbers.

export const PROFILE = {
  name: "Kumar Shashwat Sandilya",
  short: "Shashwat",
  role: "AI Engineer",
  location: "New Delhi, India",
  status: "Open to AI engineering roles",
  intro:
    "I build production LLM systems: voice agents, multi-agent orchestration, retrieval, and the infrastructure that keeps them running.",
  now: "AI Engineer. Previously HYRGPT and KPMG.",
  email: "shashwat.sandilya@gmail.com",
  github: "https://github.com/Kss004",
  linkedin: "https://www.linkedin.com/in/kumar-shashwat-sandilya-b75332218/",
  resume:
    "https://drive.google.com/file/d/1GE1bSnwt2H_4qgWVpb-dRtDAMIFQ2zI2/view?usp=sharing",
  calendly: "https://calendly.com/shashwat-sandilya1/30min",
};

export const EXPERIENCE = [
  {
    company: "Oorik Technologies",
    role: "Technical Consultant",
    period: "Aug 2026 – Present",
    points: [
      "Built a zero-to-one hospitality ordering platform across kiosk software, hardware acceleration and backend services, from architecture through deployment.",
      "Contributed to the AI Hub integration layer: OCR document scanning and LLM-agent workflows for quick-scan and financial decision support.",
      "Grew the engagement to $5K MRR within the first six weeks.",
    ],
  },
  {
    company: "HYRGPT",
    role: "Generative AI Intern",
    period: "May 2025 – Jun 2026",
    points: [
      "Shipped an async AI phone-screening platform (FastAPI, LiveKit, Plivo) running live outbound interviews, with Redis token-bucket rate limiting and Postgres transcripts and verdicts.",
      "Built an MCP server exposing a 13-step interview-scheduling workflow as tools, driven from Claude Desktop through a custom MCP client.",
      "Orchestrated a 7-agent LangGraph scheduling system over Google Calendar, Gmail and WhatsApp, removing manual coordination for hiring managers.",
      "Delivered a RAG pipeline for course discovery: Scrapy + Playwright crawling, overlap-aware chunking, Vertex AI embeddings and ChromaDB retrieval.",
    ],
  },
  {
    company: "KPMG",
    role: "SDE Intern",
    period: "Jun 2025 – Sep 2025",
    points: [
      "Built a meeting-intelligence bot that joins Google Meet and Teams, captures audio and processes meetings end to end. 1000+ meetings processed.",
      "Designed a hybrid Whisper + Gemini pipeline for summaries, action items and sentiment at 99% uptime.",
    ],
  },
];

// Ordered by strength. `live` and `code` are optional.
export const PROJECTS = [
  {
    title: "Harbor",
    subtitle: "Kubernetes MCP gateway",
    description:
      "One /mcp endpoint in front of many MCP servers, with per-user keys, audit logging, a chat agent and a dashboard. Helm charts for kind and k3s, plus a custom WooCommerce MCP server.",
    meta: ["TypeScript", "Kubernetes", "Helm", "Postgres", "100+ tests"],
    live: "https://app.169-58-78-14.sslip.io",
    code: "https://github.com/Kss004/KubernetesBasedMCPGateway",
  },
  {
    title: "Hotseat",
    subtitle: "AI sparring partner for high-stakes meetings",
    description:
      "Builds a persona from the counterpart's profile, predicts objections, runs a streaming role-play with a live stance meter, then scores you with quotes from the conversation.",
    meta: ["Next.js", "SSE", "Multi-provider LLM", "Turso", "90+ tests"],
    live: "https://hotseat-lac.vercel.app",
    code: "https://github.com/Kss004/Hotseat",
  },
  {
    title: "Dory 2.0",
    subtitle: "WhatsApp health assistant",
    description:
      "PCOS-focused WhatsApp bot: consent, conversational survey, rule-engine matching, evidence-grounded content, lab-report OCR and pgvector RAG Q&A. Verified end to end on the Meta Cloud API.",
    meta: ["Next.js", "pgvector", "GPT-4o Vision", "WhatsApp API", "110+ tests"],
    code: "https://github.com/Kss004/Dory2.0Opensource",
  },
  {
    title: "AEO Diagnostic",
    subtitle: "How AI assistants rank your brand",
    description:
      "Fans buyer-style queries across 5 LLMs in parallel with per-cell timeouts, backoff and fallback, then extracts ranked brand mentions with structured outputs.",
    meta: ["AI SDK", "Upstash Redis", "Structured outputs", "60+ tests", "CI"],
    live: "https://aeo-tool-vert.vercel.app",
    code: "https://github.com/Kss004/AEO_Tool",
  },
  {
    title: "Healthcare Information Assistant",
    subtitle: "Grounded medical RAG",
    description:
      "Answers only from 9 whitelisted medical domains, scores each source's reliability with a separate LLM pass, cites inline and reads prescriptions with vision OCR. Temperature 0, no diagnosis.",
    meta: ["LangChain", "Tavily", "GPT-4o Vision", "Guardrails"],
    code: "https://github.com/Kss004/MedicalAgent",
  },
  {
    title: "Nautilus",
    subtitle: "Multi-tenant store provisioning on Kubernetes",
    description:
      "Namespace-per-store Helm architecture with dedicated Postgres and Redis per tenant, a 10s reconcile loop, concurrency limits and timeout auto-recovery.",
    meta: ["FastAPI", "Kubernetes", "Helm", "k3s"],
    code: "https://github.com/Kss004/UrumiAssignment",
  },
];

export const STACK = [
  ["AI", "LangGraph, LangChain, MCP, RAG, multi-agent systems, evals, guardrails, speech AI"],
  ["Languages", "Python, TypeScript, SQL, Go"],
  ["Backend", "FastAPI, Next.js, asyncio, Pydantic, Postgres, pgvector, Redis, MongoDB"],
  ["Infra", "Docker, Kubernetes, Helm, GCP, Vercel, GitHub Actions"],
];

export const EDUCATION = [
  { school: "Manipal University Jaipur", degree: "B.Tech, Computer and Communications Engineering", year: "2026" },
  { school: "IIT Madras", degree: "BS, Data Science and Applications", year: "2027" },
];
