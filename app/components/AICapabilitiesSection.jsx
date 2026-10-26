import {
  Workflow,
  Database,
  Mic,
  Shield,
  Brain,
  Search,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";

const CAPABILITIES = [
  {
    icon: Workflow,
    title: "Multi-Agent Orchestration",
    description:
      "LangGraph workflows with 8+ specialized agents, human-in-the-loop approvals, and stateful execution across multi-step pipelines.",
  },
  {
    icon: Search,
    title: "RAG Pipelines",
    description:
      "Overlap-aware chunking, Vertex AI embeddings, ChromaDB/pgvector retrieval, metadata filtering, and source-grounded responses.",
  },
  {
    icon: Mic,
    title: "Speech & Audio AI",
    description:
      "Real-time STT/TTS with Sarvam, Deepgram, and Whisper. Bidirectional audio streaming, Hinglish support, phone-grade latency.",
  },
  {
    icon: Brain,
    title: "LLM Evaluation",
    description:
      "Structured outputs with schema validation, eval-driven development, deterministic fallbacks when the LLM gets it wrong.",
  },
  {
    icon: Shield,
    title: "Guardrails & Safety",
    description:
      "Temperature=0 for factual tasks, forced grounding, refusal behavior, PII redaction, domain whitelisting, no-diagnosis constraints.",
  },
  {
    icon: Database,
    title: "LLM-to-Database Agents",
    description:
      "Natural language to structured query plans with tenant isolation, aggregation allowlists, and read-only guardrails.",
  },
];

export default function AICapabilitiesSection() {
  return (
    <section id="capabilities" className="border-b border-border bg-muted/30">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-2 md:mb-12">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            AI capabilities
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            What I can do with AI
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Not bolt-on AI. Production systems with evals, guardrails, and
            real infrastructure. These are the patterns I&apos;ve shipped.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 md:gap-6">
          {CAPABILITIES.map((c) => {
            const Icon = c.icon;
            return (
              <Card key={c.title} className="rounded-lg shadow-none">
                <CardHeader className="flex-row items-center gap-3 space-y-0">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-md border border-border bg-background">
                    <Icon className="size-4 text-foreground" />
                  </div>
                  <CardTitle className="text-sm font-semibold tracking-tight">
                    {c.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
