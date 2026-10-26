"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, ChevronDown } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { Badge } from "@/app/components/ui/badge";
import { PROFILE } from "@/lib/data";

export default function HeroSection() {
  return (
    <section className="relative border-b border-border">
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-center gap-10 px-5 py-20 pt-28 md:grid-cols-12 md:py-28 md:pt-32">
        <div className="md:col-span-7">
          <Badge variant="secondary" className="mb-5 font-normal">
            {PROFILE.available}
          </Badge>
          <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            {PROFILE.name}
          </h1>
          <p className="mt-2 text-xl text-muted-foreground sm:text-2xl">
            {PROFILE.role}
          </p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {PROFILE.tagline} I build practical systems across computer vision,
            audio AI, agentic LLM workflows, and full-stack. Shipped, not just
            prototyped.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="default">
              <Link href="#projects">
                View work
                <ArrowRight className="size-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="default">
              <a
                href={PROFILE.calendly}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </a>
            </Button>
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-3.5" />
            {PROFILE.location}
          </div>
        </div>

        <div className="md:col-span-5">          <div className="relative mx-auto aspect-square w-full max-w-xs overflow-hidden rounded-full border border-border bg-muted">
            <Image
              src="/images/new1.png"
              alt={PROFILE.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 320px"
              priority
              quality={85}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center pb-6">
        <a
          href="#work"
          aria-label="Scroll to work"
          className="flex flex-col items-center gap-1 text-muted-foreground/60 transition-colors hover:text-muted-foreground"
        >
          <span className="text-[10px] uppercase tracking-wider">Scroll</span>
          <ChevronDown className="size-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
