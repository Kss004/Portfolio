export const PROFILE = {
  name: "Shashwat",
  role: "AI Engineer",
  tagline:
    "I build production AI systems — multi-agent orchestration, RAG, speech AI, and the infrastructure to run them.",
  location: "New Delhi, India",
  available: "Open to AI engineering roles and contract work",
  email: "shashwat.sandilya@gmail.com",
  github: "https://github.com/Kss004",
  githubHandle: "Kss004",
  linkedin:
    "https://www.linkedin.com/in/kumar-shashwat-sandilya-b75332218/",
  resume:
    "https://drive.google.com/file/d/1GE1bSnwt2H_4qgWVpb-dRtDAMIFQ2zI2/view?usp=sharing",
  calendly:
    "https://calendly.com/shashwat-sandilya1/30min?back=1&month=2026-01",
  website: "kss04.me",
};

export const NAV_LINKS = [
  { title: "Work", path: "#work" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

export const STATS = [
  {
    value: "10+",
    label: "Production AI systems shipped",
    hint: "Multi-agent, RAG, speech, full-stack",
  },
  {
    value: "5",
    label: "LLMs orchestrated in parallel",
    hint: "Per-query fan-out with fallback",
  },
  {
    value: "1000+",
    label: "Meetings processed end-to-end",
    hint: "Audio capture → transcription → analysis",
  },
  {
    value: "25",
    label: "Concurrent AI calls handled",
    hint: "Worker pool + Redis token-bucket rate limiting",
  },
];

export const EXPERIENCE = [
  {
    company: "HYRGPT",
    role: "AI Engineer",
    period: "May 2025 — Present",
    points: [
      "Built a multi-agent interview-scheduling system orchestrating 8 specialized agents (master, scheduler, calendar, comms, alert, note-taker) across a 12-step workflow, with state in MongoDB and human-in-the-loop hiring-manager approvals.",
      "Delivered a production RAG pipeline for AI content discovery: concurrent URL validation, overlap-aware chunking, Vertex AI embeddings, and ChromaDB retrieval (k=6, metadata filtering) feeding LLM course generation.",
      "Engineered an async AI phone-screening service on FastAPI handling 25 concurrent calls via a worker pool, Redis token-bucket rate limiting (10 CPS), httpx async I/O, PostgreSQL transcripts/verdicts, and multi-stage Docker deployment.",
    ],
  },
  {
    company: "KPMG",
    role: "Software Engineer",
    period: "June 2025 — September 2025",
    points: [
      "Built an automated meeting intelligence bot using Python and Selenium that joins Google Meet/Teams, captures audio via BlackHole driver, and processes 1000+ meetings end-to-end.",
      "Developed a full-stack Streamlit web app for real-time meeting control, session management, and file export, integrating Whisper for transcription and Gemini 2.5 Flash for analysis.",
      "Designed a cost-optimized hybrid AI pipeline (Whisper + Google Gemini API) for meeting summarization, action item extraction, and sentiment analysis, achieving 99% uptime.",
    ],
  },
];

export const SERVICES = [
  {
    icon: "Brain",
    title: "Production AI Systems",
    description:
      "Multi-agent orchestration, RAG pipelines, and ML models built for real workloads. Designed for reliability and evals, not just notebooks.",
    points: [
      "Multi-agent workflows",
      "RAG pipelines",
      "Speech & audio AI",
      "Computer vision",
    ],
  },
  {
    icon: "Sparkles",
    title: "Generative AI Applications",
    description:
      "LLM-powered systems — agentic workflows, structured outputs, retrieval pipelines, guardrails. Built with evals, cost control, and fallback strategies.",
    points: [
      "Agentic LLM workflows",
      "Multi-model orchestration",
      "LLM evaluation & guardrails",
      "Structured output pipelines",
    ],
  },
  {
    icon: "Globe",
    title: "Full-Stack Engineering",
    description:
      "End-to-end product work — FastAPI services, Next.js frontends, Postgres, Redis, Docker, K8s. The AI is only useful if the product around it ships.",
    points: [
      "FastAPI & Next.js apps",
      "Postgres & Redis",
      "Docker & Kubernetes",
      "Observability & CI",
    ],
  },
  {
    icon: "BarChart3",
    title: "ML & Data Engineering",
    description:
      "From research to production — model training, batch processing, feature engineering, MLflow tracking, and APIs with model hot-switching.",
    points: [
      "PyTorch & scikit-learn",
      "MLflow tracking",
      "Batch processing pipelines",
      "Model serving APIs",
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "AI Phone Screening Agent",
    description:
      "Self-hosted AI phone screener handling 25 concurrent calls via LiveKit WebRTC + Plivo SIP. Recruiter-editable Prompt Studio, Sarvam STT/TTS for Hinglish, OpenAI gpt-4.1-mini for live conversation, gpt-5-mini for post-call verdicts. Redis Lua token-bucket CPS limiter, Postgres + MinIO, Docker Compose.",
    image: "",
    tags: ["GenAI", "Agents", "Audio"],
    gitUrl: "https://github.com/Kss004",
    previewUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "LLM Inference Telemetry Pipeline",
    description:
      "Multi-provider LLM chat app with full inference logging — every call shipped through a custom SDK onto Redis Streams, consumed by an ingestion worker that validates, PII-redacts (Luhn-validated card/SSN detection), and persists to Postgres JSONB. Grafana/Prometheus observability, DLQ, k8s manifests.",
    image: "",
    tags: ["GenAI", "Infra"],
    gitUrl: "https://github.com/Kss004/-Ollive-Take-Home-Assignment",
    previewUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "AEO Diagnostic Tool",
    description:
      "Search Console for ChatGPT — fans buyer queries across 5 LLMs in parallel with per-cell 60s timeouts, exponential backoff, and rate-limit fallback. Extracts ranked brand mentions via structured outputs with fuzzy competitor dedup. Upstash Redis rate limiting, 58 unit tests, GitHub Actions CI/CD, deployed live on Vercel.",
    image: "",
    tags: ["GenAI"],
    gitUrl: "https://github.com/Kss004/AEO_Tool",
    previewUrl: "https://aeo-tool-vert.vercel.app",
    featured: false,
  },
  {
    id: 4,
    title: "Healthcare RAG Assistant",
    description:
      "RAG pipeline grounded in 11 trusted medical sources with LLM-based reliability scoring (1-100) and source citations. Prescription OCR via Gemini Vision, strict guardrails (temperature=0, no-diagnosis constraints), pgvector semantic search to minimize hallucinations. Whitelisted domains, forced grounding, refusal on unverified info.",
    image: "",
    tags: ["GenAI", "RAG"],
    gitUrl: "https://github.com/Kss004/MedicalAgent",
    previewUrl: "",
    featured: false,
  },
  {
    id: 5,
    title: "Codex Usage Analyzer",
    description:
      "Paste code, a zip, or a GitHub URL — get ranked line-cited candidates where OpenAI Codex would save the most time, then watch GPT-5 attempt the refactor with a diff and conservative ROI estimate. Two-model pipeline (GPT-5-mini ranking + GPT-5 deep audit), eval-driven development (eval caught a real LLM ordering bug, fixed with deterministic fallback), 50 unit tests.",
    image: "",
    tags: ["GenAI"],
    gitUrl: "https://github.com/Kss004/Codex-Usage-Analyzer",
    previewUrl: "https://codex-usage-analyzer.vercel.app",
    featured: false,
  },
  {
    id: 6,
    title: "Meeting Intelligence Bot",
    description:
      "Automated meeting bot that joins Google Meet and Microsoft Teams via Selenium, captures system audio through BlackHole driver, and runs a hybrid AI pipeline (local Whisper transcription + Gemini 2.5 Flash analysis) for summaries, action items, and sentiment. Full-stack Streamlit dashboard for real-time control. 1000+ meetings processed.",
    image: "/images/projects/gmeetbot.png",
    tags: ["GenAI", "Audio"],
    gitUrl: "https://github.com/Kss004/GMeetBotPocV2",
    previewUrl: "",
    featured: false,
  },
  {
    id: 7,
    title: "Nautilus — K8s Store Provisioning",
    description:
      "Provisions isolated multi-tenant MedusaJS stores through a namespace-per-store Helm architecture with dedicated PostgreSQL/Redis per tenant. 10s async reconcile loop, 10-slot concurrency semaphore, per-IP rate limiting (5 creates/min), 600s timeout auto-recovery, Helm-native rollback. Runs on Kind (local) and k3s (prod) from a single chart.",
    image: "",
    tags: ["Infra"],
    gitUrl: "https://github.com/Kss004/UrumiAssignment",
    previewUrl: "",
    featured: false,
  },
  {
    id: 8,
    title: "Deepfake Audio Detection",
    description:
      "Trained TinyAudioNet CNN on MFCC features achieving 93% validation accuracy. Applied pitch shift and time stretch augmentations for robustness on noisy, low-resource audio. Designed for deployment as an inference service.",
    image: "/images/projects/deepfakeaudiodetection.jpg",
    tags: ["ML", "Audio"],
    gitUrl: "https://github.com/Kss004/DeepFake-Audio-Detection",
    previewUrl: "",
    featured: false,
  },
];

export const SKILLS = {
  Languages: ["Python", "SQL", "C", "Go"],
  "AI / ML": [
    "LangGraph",
    "LangChain",
    "Multi-Agent Systems",
    "Agentic Workflows",
    "RAG",
    "LLM Orchestration & Evaluation",
    "Prompt Engineering",
    "Vector Search (ChromaDB, FAISS, pgvector)",
    "Guardrails",
    "Speech AI",
    "Fine-tuning",
  ],
  "Frameworks & Libraries": [
    "FastAPI",
    "Pydantic",
    "asyncio",
    "httpx",
    "Streamlit",
    "Next.js",
    "React",
    "PyTorch",
    "Scikit-learn",
    "Pandas",
    "NumPy",
  ],
  "Cloud & Infra": [
    "GCP",
    "Kubernetes",
    "Helm",
    "PostgreSQL",
    "pgvector",
    "MongoDB",
    "Redis",
    "MinIO/S3",
    "Docker",
  ],
  "Developer Tools": ["Git", "GitHub", "pytest", "Linux", "VS Code"],
};

export const EDUCATION = [
  {
    title: "B.Tech, Computer and Communications Engineering",
    school: "Manipal University Jaipur",
    period: "2026",
    note: "Specialization in Data Science and AI",
  },
  {
    title: "B.Sc, Data Science and Applications",
    school: "Indian Institute of Technology Madras",
    period: "2027",
    note: "Advanced analytics and machine learning",
  },
  {
    title: "International Exchange Program",
    school: "Sultan Qaboos University, Oman",
    period: "Exchange",
    note: "Cross-cultural academic experience",
  },
];

export const CERTIFICATIONS = [
  {
    name: "IBM Data Science Professional",
    note: "Full data science pipeline & analytics",
  },
  { name: "IBM AI Engineer", note: "Machine learning & AI development" },
  {
    name: "Google Generative AI",
    note: "Large language models & GenAI applications",
  },
  {
    name: "DeepLearning.ai GenAI",
    note: "Advanced generative AI techniques",
  },
  { name: "Microsoft Azure AI", note: "AI fundamentals & cloud AI services" },
  {
    name: "Kaggle — Python, ML & APIs",
    note: "Applied machine learning",
  },
];

export const PROJECT_TAGS = [
  "All",
  "GenAI",
  "ML",
  "RAG",
  "Agents",
  "Audio",
  "Infra",
];
