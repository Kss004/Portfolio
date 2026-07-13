import {
  Brain,
  Sparkles,
  Globe,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/app/components/ui/card";
import { Button } from "@/app/components/ui/button";
import { SERVICES, PROFILE } from "@/lib/data";

const ICONS = {
  Brain,
  Sparkles,
  Globe,
  BarChart3,
};

export default function ServicesSection() {
  return (
    <section id="services" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-2 md:mb-12">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            What I build
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Services
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {SERVICES.map((s) => {
            const Icon = ICONS[s.icon] ?? Brain;
            return (
              <Card key={s.title} className="rounded-lg shadow-none">
                <CardHeader>
                  <div className="mb-3 flex size-9 items-center justify-center rounded-md border border-border bg-muted">
                    <Icon className="size-4 text-foreground" />
                  </div>
                  <CardTitle className="text-lg font-semibold tracking-tight">
                    {s.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {s.points.map((p) => (
                      <li
                        key={p}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <span className="size-1 rounded-full bg-foreground/40" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-sm text-muted-foreground">
            Have a problem in mind?
          </p>
          <Button asChild variant="outline" size="default">
            <Link href="#contact">
              Start a project
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
