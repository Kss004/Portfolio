export const PROFILE = {
  name: "Shashwat",
  role: "Senior AI Engineer",
  tagline: "I ship production AI systems — GenAI, ML, and full-stack.",
  location: "New Delhi, India",
  available: "Open to senior roles and contract work",
  email: "shashwat.sandilya@gmail.com",
  github: "https://github.com/Kss004",
  githubHandle: "Kss004",
  linkedin:
    "https://www.linkedin.com/in/kumar-shashwat-sandilya-b75332218/",
  resume:
    "https://drive.google.com/file/d/1GE1bSnwt2H_4qgWVpb-dRtDAMIFQ2zI2/view?usp=sharing",
  calendly:
    "https://calendly.com/shashwat-sandilya1/30min?back=1&month=2026-01",
};

export const NAV_LINKS = [
  { title: "Work", path: "#work" },
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

export const STATS = [
  {
    value: "<TBD>",
    label: "Production AI systems shipped",
    hint: "GenAI, CV, audio, full-stack",
  },
  {
    value: "<TBD>",
    label: "Models deployed to production",
    hint: "From research to live inference",
  },
  {
    value: "<TBD>",
    label: "Domains covered",
    hint: "Computer vision, audio, NLP, GenAI",
  },
  {
    value: "<TBD>",
    label: "Open-source repositories",
    hint: "Public work on GitHub",
  },
];

export const SERVICES = [
  {
    icon: "Brain",
    title: "Production AI Systems",
    description:
      "Custom ML models and AI systems built for real workloads — automation, inference, decision support. Designed for reliability, not just notebooks.",
    points: [
      "Custom ML models",
      "Predictive analytics",
      "Computer vision pipelines",
      "Audio & speech AI",
    ],
  },
  {
    icon: "Sparkles",
    title: "Generative AI Applications",
    description:
      "LLM-powered systems — assistants, document understanding, agentic workflows, retrieval pipelines. Built with evals, guardrails, and cost control.",
    points: [
      "Agentic LLM workflows",
      "RAG & document analysis",
      "Chat & assistant systems",
      "LLM evaluation & guardrails",
    ],
  },
  {
    icon: "Globe",
    title: "Full-Stack Engineering",
    description:
      "End-to-end product work — API design, frontend, deployment, observability. The AI is only useful if the product around it ships.",
    points: [
      "React / Next.js apps",
      "FastAPI & Node services",
      "Cloud deployment",
      "Observability & CI",
    ],
  },
  {
    icon: "BarChart3",
    title: "Data & Analytics",
    description:
      "Turn raw data into decisions — statistical modeling, dashboards, and reporting that hold up under real business questions.",
    points: [
      "Statistical modeling",
      "Data pipelines",
      "Business intelligence",
      "Reporting dashboards",
    ],
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Deepfake Audio Detection",
    description:
      "Lightweight CNN for deepfake audio detection using MFCC features, tuned for ASR robustness. Shipped as an inference service.",
    image: "/images/projects/deepfakeaudiodetection.jpg",
    tags: ["ML", "Audio"],
    gitUrl: "https://github.com/Kss004/DeepFake-Audio-Detection",
    previewUrl: "",
    featured: true,
  },
  {
    id: 2,
    title: "GMeet Bot — AI Notes & Action Items",
    description:
      "Meeting assistant that joins Google Meet, transcribes, summarizes, and extracts action items using SOTA models. Runs unattended.",
    image: "/images/projects/gmeetbot.png",
    tags: ["GenAI", "Automation"],
    gitUrl: "https://github.com/Kss004/GMeetBotPocV2",
    previewUrl: "",
    featured: true,
  },
  {
    id: 3,
    title: "Career Recommendation System",
    description:
      "ML system that analyzes skills, interests, and market trends to recommend career paths for graduates and early professionals.",
    image: "/images/projects/crs.png",
    tags: ["ML", "GenAI"],
    gitUrl: "https://github.com/Kss004/career-recommendation-system-squ",
    previewUrl: "",
    featured: false,
  },
  {
    id: 4,
    title: "Multimodal Tumor Detection",
    description:
      "Real-time MRI tumor detection combining classical ML and CNNs for high-accuracy medical image classification.",
    image: "/images/projects/braintumordetection.jpg",
    tags: ["ML", "Computer Vision"],
    gitUrl: "https://github.com/Kss004/PyTumorDetection",
    previewUrl: "",
    featured: false,
  },
  {
    id: 5,
    title: "Cognitive Workforce Intelligence Engine",
    description:
      "Real-time semantic analytics core fusing vector clustering with agentic LLM workflows — turns unstructured employee narratives into quantifiable strategic insights.",
    image: "/images/projects/backendsurverydetection.png",
    tags: ["GenAI", "NLP"],
    gitUrl: "https://github.com/Kss004/BackendSurveryPipeline.git",
    previewUrl: "",
    featured: false,
  },
  {
    id: 6,
    title: "Portfolio",
    description:
      "This site. Next.js, Tailwind v4, shadcn/ui, server-cached GitHub API. Light-first with a dark toggle.",
    image: "/images/projects/image.png",
    tags: ["Web"],
    gitUrl: "https://github.com/Kss004/Portfolio",
    previewUrl: "",
    featured: false,
  },
];

export const SKILLS = {
  "Languages": ["Python", "SQL", "JavaScript", "TypeScript", "Go", "R", "Java"],
  "AI / ML": [
    "PyTorch",
    "Scikit-learn",
    "Computer Vision",
    "Audio AI",
    "Agentic AI",
    "Hugging Face",
  ],
  "GenAI": ["LLM workflows", "RAG", "Prompt evals", "Guardrails", "Vector DBs"],
  "Web & APIs": ["React", "Next.js", "FastAPI", "Node.js", "REST", "Django"],
  "Data": ["MongoDB", "PostgreSQL", "Streamlit", "Dashboards"],
  "Cloud & DevOps": ["AWS", "GCP", "Azure", "Docker", "Kubernetes", "CI/CD"],
};

export const EDUCATION = [
  {
    title: "B.Tech, Computer Science Engineering",
    school: "Manipal University Jaipur",
    period: "2021 — 2025",
    note: "Specialization in Data Science and AI",
  },
  {
    title: "Diploma, Data Science",
    school: "IIT Madras",
    period: "Through Dec 2025",
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

export const PROJECT_TAGS = ["All", "GenAI", "ML", "Computer Vision", "Audio", "Web"];
