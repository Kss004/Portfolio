import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { PROFILE, EXPERIENCE, PROJECTS, STACK, EDUCATION } from "@/lib/content";
import AgentNetwork from "./AgentNetwork";
import LocalTime from "./LocalTime";

/* Shared bits */

function Section({ id, n, label, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-20 border-t border-dashed border-border py-16 md:grid md:grid-cols-[9rem_1fr] md:gap-8"
    >
      <h2 className="mb-8 md:mb-0">
        <span className="block font-serif text-4xl italic leading-none text-art">{n}</span>
        <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </span>
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function ExtLink({ href, children, className = "" }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`group/link inline-flex items-center gap-0.5 text-foreground underline decoration-border decoration-1 underline-offset-[5px] transition-colors hover:text-art hover:decoration-art ${className}`}
    >
      {children}
      <ArrowUpRight className="size-3.5 text-muted-foreground transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-hover/link:text-art" />
    </a>
  );
}

const Em = ({ children }) => (
  <em className="whitespace-nowrap font-serif text-[1.12em] font-normal italic tracking-normal">{children}</em>
);

/* Intro */

export function Intro() {
  return (
    <section className="relative pb-16 pt-14 md:pt-24">
      {/* The art: a live agent network. Sits behind the text on the right. */}
      <div className="pointer-events-none absolute -right-24 top-0 -z-0 h-[26rem] w-[34rem] max-w-[100vw] opacity-90 [mask-image:radial-gradient(closest-side,black_55%,transparent)] md:-right-72 md:h-[34rem] md:w-[44rem]">
        <AgentNetwork />
      </div>

      <div className="relative z-10">
        <div className="rise group flex w-fit items-center gap-4">
          <Image
            src="/images/new1.png"
            alt={PROFILE.name}
            width={56}
            height={56}
            priority
            className="size-14 rotate-[-4deg] rounded-2xl border border-border object-cover shadow-sm transition-transform duration-300 group-hover:rotate-[4deg] group-hover:scale-105"
          />
          <div>
            <p className="text-lg font-medium tracking-tight">
              Hi, I&apos;m {PROFILE.short} <span className="wave" role="img" aria-label="waving hand">👋</span>
            </p>
            <p className="text-sm text-muted-foreground">
              {PROFILE.role} · {PROFILE.location}
            </p>
          </div>
        </div>

        <h1 className="rise mt-10 max-w-2xl text-balance text-[2rem] font-medium leading-[1.15] tracking-tight [animation-delay:120ms] md:text-[2.6rem]">
          I build{" "}
          <span className="relative inline-block">
            <Em>production</Em>
            <svg
              className="squiggle absolute -bottom-2 left-0 w-full text-art"
              viewBox="0 0 200 12"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path d="M2 8 C 30 2, 50 12, 80 6 S 130 2, 160 7 S 190 9, 198 4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
            </svg>
          </span>{" "}
          LLM systems: voice agents, <Em>multi-agent</Em> orchestration, retrieval, and the
          infrastructure that keeps them <Em>running</Em>.
        </h1>

        <p className="rise mt-6 max-w-xl text-muted-foreground [animation-delay:240ms]">{PROFILE.now}</p>

        <div className="rise mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm [animation-delay:360ms]">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-3 py-1 text-muted-foreground backdrop-blur">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500/60 motion-reduce:hidden" />
              <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
            </span>
            {PROFILE.status}
          </span>
          <ExtLink href={PROFILE.github}>GitHub</ExtLink>
          <ExtLink href={PROFILE.linkedin}>LinkedIn</ExtLink>
          <ExtLink href={PROFILE.resume}>Resume</ExtLink>
        </div>

        <p className="mt-12 hidden font-mono text-[11px] text-muted-foreground/70 md:block">
          ↗ those dots are agents passing messages. click anywhere to start a conversation.
        </p>
      </div>
    </section>
  );
}

/* Projects */

export function Projects() {
  return (
    <Section id="work" n="01" label="Selected work">
      <ul className="-mx-4 space-y-1">
        {PROJECTS.map((p, i) => (
          <li
            key={p.title}
            className="group grid grid-cols-[2.25rem_1fr] gap-3 rounded-xl px-4 py-5 transition-all duration-300 hover:bg-muted/70 hover:pl-5"
          >
            <span className="pt-0.5 font-serif text-xl italic text-muted-foreground/60 transition-colors group-hover:text-art">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="min-w-0">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                <h3 className="font-medium">
                  <span className="transition-colors group-hover:text-art">{p.title}</span>
                  <span className="font-normal text-muted-foreground"> · {p.subtitle}</span>
                </h3>
                <div className="flex shrink-0 gap-4 text-sm">
                  {p.live && <ExtLink href={p.live}>Live</ExtLink>}
                  {p.code && <ExtLink href={p.code}>Code</ExtLink>}
                </div>
              </div>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                {p.description}
              </p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {p.meta.map((m) => (
                  <li
                    key={m}
                    className="rounded-full border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 pl-[3.25rem] text-sm text-muted-foreground">
        More experiments on <ExtLink href={PROFILE.github}>GitHub</ExtLink>
      </p>
    </Section>
  );
}

/* Experience */

export function Experience() {
  return (
    <Section id="experience" n="02" label="Experience">
      <ol className="relative space-y-12 border-l border-border pl-6">
        {EXPERIENCE.map((job, i) => (
          <li key={job.company} className="relative">
            <span
              className={`absolute -left-[1.84rem] top-1.5 size-2.5 rounded-full border-2 border-background ${
                i === 0 ? "bg-art" : "bg-muted-foreground/40"
              }`}
            />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-medium">
                {job.role}{" "}
                <span className="font-serif text-lg font-normal italic text-muted-foreground">at</span>{" "}
                {job.company}
              </h3>
              <span className="shrink-0 font-mono text-xs text-muted-foreground">{job.period}</span>
            </div>
            <ul className="mt-3 space-y-2 text-[0.95rem] leading-relaxed text-muted-foreground">
              {job.points.map((p) => (
                <li key={p} className="relative pl-4 before:absolute before:left-0 before:top-[0.7em] before:h-px before:w-2 before:bg-art/60">
                  {p}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* Stack + education */

export function Stack() {
  return (
    <Section id="stack" n="03" label="Toolbox">
      <dl className="space-y-4 text-[0.95rem]">
        {STACK.map(([k, v]) => (
          <div key={k} className="grid gap-1 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
            <dt className="font-serif text-lg italic text-muted-foreground">{k}</dt>
            <dd className="leading-relaxed">{v}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Education() {
  return (
    <Section id="education" n="04" label="Education">
      <ul className="space-y-5">
        {EDUCATION.map((e) => (
          <li key={e.school} className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
            <div>
              <p className="font-medium">{e.school}</p>
              <p className="text-[0.95rem] text-muted-foreground">{e.degree}</p>
            </div>
            <span className="font-mono text-xs text-muted-foreground">{e.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

/* Contact */

export function Contact() {
  return (
    <Section id="contact" n="05" label="Say hello">
      <p className="max-w-lg text-balance text-3xl font-medium leading-tight tracking-tight">
        Building something with LLMs? Let&apos;s make it <Em>actually ship</Em>.
      </p>
      <p className="mt-3 text-muted-foreground">Email is the fastest way to reach me.</p>
      <div className="mt-7 flex flex-wrap gap-3 text-sm">
        <a
          href={`mailto:${PROFILE.email}`}
          className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-2 text-background transition-transform hover:-translate-y-0.5 hover:bg-art"
        >
          {PROFILE.email} <ArrowUpRight className="size-3.5" />
        </a>
        <a
          href={PROFILE.calendly}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full border border-border px-4 py-2 transition-all hover:-translate-y-0.5 hover:border-art hover:text-art"
        >
          Book a 30-min call <ArrowUpRight className="size-3.5" />
        </a>
      </div>
    </Section>
  );
}

export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-2 border-t border-dashed border-border py-8 font-mono text-[11px] text-muted-foreground sm:flex-row sm:justify-between">
      <span>© {new Date().getFullYear()} {PROFILE.short} · built with Next.js and too much chai ☕</span>
      <LocalTime />
    </footer>
  );
}
