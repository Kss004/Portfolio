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
import { SKILLS, EDUCATION, CERTIFICATIONS, PROFILE } from "@/lib/data";

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
              from research to production. My work spans computer vision, audio
              AI, generative AI, and full-stack engineering — the last mile
              matters as much as the model.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              I care about reliability, evals, and products that hold up in the
              real world. Notebooks don&apos;t count.
            </p>

            <Tabs defaultValue="skills" className="mt-8">
              <TabsList>
                <TabsTrigger value="skills">Skills</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
                <TabsTrigger value="certifications">
                  Certifications
                </TabsTrigger>
              </TabsList>

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

              <TabsContent value="certifications" className="mt-6">
                <div className="grid gap-3 sm:grid-cols-2">
                  {CERTIFICATIONS.map((c) => (
                    <Card key={c.name} className="rounded-lg p-5 shadow-none">
                      <CardContent className="p-0">
                        <h4 className="text-sm font-semibold text-foreground">
                          {c.name}
                        </h4>
                        <p className="mt-1 text-xs text-muted-foreground">
                          {c.note}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
