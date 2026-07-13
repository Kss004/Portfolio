"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import { PROJECTS, PROJECT_TAGS } from "@/lib/data";
import ProjectCard from "./ProjectCard";
import GithubRepos from "./GithubRepos";
import { cn } from "@/lib/utils";

export default function ProjectsSection() {
  const [tag, setTag] = useState("All");

  const filtered =
    tag === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(tag));

  const featured = filtered.filter((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <section id="projects" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-2 md:mb-12">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Selected work
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Projects
          </h2>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {PROJECT_TAGS.map((t) => (
            <Button
              key={t}
              size="sm"
              variant={tag === t ? "default" : "outline"}
              onClick={() => setTag(t)}
              className={cn(tag === t && "shadow-none")}
            >
              {t}
            </Button>
          ))}
        </div>

        {featured.length > 0 && (
          <div className="mb-4 grid gap-4 md:grid-cols-2 md:gap-6">
            {featured.map((p) => (
              <ProjectCard
                key={p.id}
                title={p.title}
                description={p.description}
                imgUrl={p.image}
                gitUrl={p.gitUrl}
                previewUrl={p.previewUrl}
                tags={p.tags}
                featured={p.featured}
              />
            ))}
          </div>
        )}

        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {rest.map((p) => (
            <ProjectCard
              key={p.id}
              title={p.title}
              description={p.description}
              imgUrl={p.image}
              gitUrl={p.gitUrl}
              previewUrl={p.previewUrl}
              tags={p.tags}
              featured={p.featured}
            />
          ))}
        </div>

        {tag === "All" && <GithubRepos />}
      </div>
    </section>
  );
}
