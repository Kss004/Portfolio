"use client";

import Image from "next/image";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/app/components/ui/tabs";
import { Card, CardContent } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";
import {
  SKILLS,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
} from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-muted">
              <Image
                src="/images/IMG_1834.png"
                alt={PROFILE.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 320px"
                quality={80}
              />
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              {PROFILE.location} · {PROFILE.available}
            </p>
          </div>

          <div className="md:col-span-8">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
              About
            </span>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              I build AI systems that ship.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              I&apos;m {PROFILE.name}, an AI engineer focused on taking models
              from research to production. My work spans multi-agent
              orchestration, RAG pipelines, speech AI, and the full-stack
              infrastructure to run them. The last mile matters as much as the
              model.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              I care about reliability, evals, guardrails, and products that
              hold up in the real world. Notebooks don&apos;t count.
            </p>
            <p className="mt-4 text-sm italic text-muted-foreground/80">
              Outside of engineering: I read research papers for fun, break
              things on purpose to learn how they work, and think good docs are
              a feature.
            </p>

            <Tabs defaultValue="experience" className="mt-8">
              <TabsList>
                <TabsTrigger value="experience">Experience</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
              </TabsList>

              <TabsContent value="experience" className="mt-6 space-y-6">
                {EXPERIENCE.map((e) => (
                  <div key={e.company}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-base font-semibold text-foreground">
                        {e.role} · {e.company}
                      </h4>
                      <span className="text-xs text-muted-foreground">
                        {e.period}
                      </span>
                    </div>
                    <ul className="mt-3 space-y-2">
                      {e.points.map((p, i) => (
                        <li
                          key={i}
                          className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground"
                        >
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-foreground/40" />
                          {p}
                        </li>
                      ))}
                    </ul>
                    {e.tech && (
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {e.tech.map((t) => (
                          <Badge
                            key={t}
                            variant="outline"
                            className="font-mono text-[10px] font-normal"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </TabsContent>

              <TabsContent value="skills" className="mt-6">
                <div className="grid gap-5 sm:grid-cols-2">
                  {Object.entries(SKILLS).map(([group, items]) => (
                    <div key={group}>
                      <h4 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                        {group}
                      </h4>
                      <div className="flex flex-wrap gap-1.5">
                        {items.map((s) => (
                          <Badge
                            key={s}
                            variant="secondary"
                            className="font-normal"
                          >
                            {s}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="education" className="mt-6 space-y-4">
                {EDUCATION.map((e) => (
                  <Card key={e.title} className="rounded-lg p-5 shadow-none">
                    <CardContent className="p-0">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h4 className="text-sm font-semibold text-foreground">
                          {e.title}
                        </h4>
                        <span className="text-xs text-muted-foreground">
                          {e.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm text-muted-foreground">
                        {e.school}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        {e.note}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
