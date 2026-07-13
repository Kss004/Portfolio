# Copy — updated from resume + project exploration

## Hero
- **Name:** Shashwat
- **Role:** AI Engineer
- **Tagline:** I build production AI systems — multi-agent orchestration, RAG, speech AI, and the infrastructure to run them.
- **Location:** New Delhi, India
- **Status:** Open to AI engineering roles and contract work
- **CTAs:** View work · Book a call

## Stats (real numbers from resume + code)
1. **10+** — Production AI systems shipped (Multi-agent, RAG, speech, full-stack)
2. **5** — LLMs orchestrated in parallel (Per-query fan-out with fallback)
3. **1000+** — Meetings processed end-to-end (Audio capture → transcription → analysis)
4. **25** — Concurrent AI calls handled (Worker pool + Redis token-bucket rate limiting)

## Experience (framed as AI Engineer, not Intern)
- **HYRGPT** (May 2025 — Present) — AI Engineer
  - Multi-agent interview scheduling (8 agents, MongoDB, HITL approvals)
  - Production RAG pipeline (Vertex AI embeddings, ChromaDB, LLM course generation)
  - Async AI phone screening (FastAPI, 25 concurrent calls, Redis rate limiting, Postgres, Docker)
- **KPMG** (June 2025 — Sept 2025) — Software Engineer
  - Meeting intelligence bot (Selenium, BlackHole audio, 1000+ meetings)
  - Streamlit web app (Whisper transcription, Gemini 2.5 Flash)
  - Hybrid AI pipeline (Whisper + Gemini, 99% uptime)

## Projects (8 selected from 15+ explored)
### Featured (2)
1. **AI Phone Screening Agent** — LiveKit WebRTC + Plivo SIP + Sarvam STT/TTS + OpenAI. 25 concurrent calls, Redis Lua token-bucket, Postgres + MinIO.
2. **LLM Inference Telemetry Pipeline** — Multi-provider LLM chat, Redis Streams event bus, PII redaction, Postgres JSONB, Grafana/Prometheus, DLQ.

### Regular (6)
3. **AEO Diagnostic Tool** — 5-LLM parallel fan-out, per-cell timeouts, Upstash Redis, 58 tests, CI/CD, deployed live.
4. **Healthcare RAG Assistant** — 11 whitelisted medical sources, reliability scoring, prescription OCR (Gemini Vision), temperature=0 guardrails.
5. **Codex Usage Analyzer** — Two-model pipeline (GPT-5-mini + GPT-5), eval-driven dev, 50 unit tests, live deployed.
6. **Meeting Intelligence Bot** — Selenium, BlackHole audio, Whisper+Gemini hybrid, Streamlit dashboard, 1000+ meetings.
7. **Nautilus — K8s Store Provisioning** — Namespace-per-store Helm isolation, 10s reconcile loop, concurrency semaphore, Helm rollback.
8. **Deepfake Audio Detection** — TinyAudioNet CNN on MFCC, 93% validation accuracy, pitch shift + time stretch augmentation.

## Skills (from latest resume)
- **Languages:** Python, SQL, C, Go
- **AI/ML:** LangGraph, LangChain, Multi-Agent Systems, RAG, LLM Orchestration & Evaluation, Prompt Engineering, Vector Search (ChromaDB, FAISS, pgvector), Guardrails, Speech AI, Fine-tuning
- **Frameworks:** FastAPI, Pydantic, asyncio, httpx, Streamlit, Next.js, React, PyTorch, Scikit-learn, Pandas, NumPy
- **Cloud & Infra:** GCP, Kubernetes, Helm, PostgreSQL, pgvector, MongoDB, Redis, MinIO/S3, Docker
- **Dev Tools:** Git, GitHub, pytest, Linux, VS Code

## Education (corrected from resume)
- B.Tech, Computer and Communications Engineering — Manipal University Jaipur (2026)
- B.Sc, Data Science and Applications — IIT Madras (2027)
- International Exchange — Sultan Qaboos University, Oman

## Certifications (kept from original)
- IBM Data Science Professional, IBM AI Engineer, Google Generative AI, DeepLearning.ai GenAI, Microsoft Azure AI, Kaggle

## Projects explored but NOT included (for reference)
- Mongo Conversational Agent (AgentNoSql) — Tier 3, good but redundant with other GenAI
- Employee Survey Pipeline (EmpSurv2) — Tier 3, good but less flashy
- MentorAgent — Tier 3, good RAG but Healthcare RAG covers that
- Uniblox ML Assignment — Tier 3, good ML but Deepfake covers ML
- WhatsappBot — needs GitHub push first
- CheatingDetection — needs git init + push
- wubbleaihackathonproject — needs GitHub push
- CandFilt — strong but niche
- ClaraAIAssignment — good but narrower scope
- DheeraAssign — CV, not AI-focused enough
- MultilingualChatBot — decent but covered by phone agent
- slack-calendar-bot — no AI, integration only
- KPMG-Community-Backend — full-stack, not AI
- Various practise/learning repos — not portfolio-grade
