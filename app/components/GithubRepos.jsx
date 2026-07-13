"use client";

import { useEffect, useState } from "react";
import { Github, Star, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/app/components/ui/badge";
import { PROFILE } from "@/lib/data";

export default function GithubRepos() {
  const [repos, setRepos] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    let alive = true;
    fetch("/api/projects")
      .then((r) => r.json())
      .then((d) => {
        if (alive) setRepos(d.projects || []);
      })
      .catch(() => alive && setError(true));
    return () => {
      alive = false;
    };
  }, []);

  if (error) return null;
  if (!repos) {
    return (
      <div className="mt-12">
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="h-32 animate-pulse rounded-lg border border-border bg-muted/40"
            />
          ))}
        </div>
      </div>
    );
  }

  if (repos.length === 0) return null;

  const top = repos.slice(0, 6);

  return (
    <div className="mt-12">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-sm font-medium text-foreground">
          More from GitHub
        </h3>
        <Link
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github className="size-3.5" />
          View all
        </Link>
      </div>

      <div className="grid gap-4 md:grid-cols-3 md:gap-6">
        {top.map((r) => (
          <Link
            key={r.id}
            href={r.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col rounded-lg border border-border p-5 transition-colors hover:border-foreground/20"
          >
            <div className="flex items-start justify-between gap-2">
              <h4 className="text-sm font-semibold text-foreground">
                {r.title}
              </h4>
              <ArrowUpRight className="size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
            <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">
              {r.description}
            </p>
            <div className="mt-auto flex flex-wrap items-center gap-3 pt-4 text-xs text-muted-foreground">
              {r.language && (
                <span className="inline-flex items-center gap-1">
                  <span className="size-2 rounded-full bg-foreground/40" />
                  {r.language}
                </span>
              )}
              {r.stars > 0 && (
                <span className="inline-flex items-center gap-1">
                  <Star className="size-3" />
                  {r.stars}
                </span>
              )}
              {r.topics.slice(0, 2).map((t) => (
                <Badge
                  key={t}
                  variant="secondary"
                  className="font-normal"
                >
                  {t}
                </Badge>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
