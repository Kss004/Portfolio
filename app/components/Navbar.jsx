"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import { cn } from "@/lib/utils";
import { NAV_LINKS, PROFILE } from "@/lib/data";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 border-b transition-colors",
        scrolled
          ? "bg-background/80 backdrop-blur-md border-border"
          : "bg-background border-transparent"
      )}
    >
      <nav className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <Link
          href="/"
          className="text-sm font-medium tracking-tight text-foreground"
        >
          {PROFILE.name}
          <span className="text-muted-foreground"> · {PROFILE.role}</span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.path}
              href={l.path}
              className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.title}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild size="sm" variant="default" className="hidden sm:inline-flex">
            <a
              href={PROFILE.calendly}
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon-sm"
            className="md:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <ul className="mx-auto flex max-w-5xl flex-col px-5 py-2">
            {NAV_LINKS.map((l) => (
              <li key={l.path}>
                <Link
                  href={l.path}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-muted-foreground hover:text-foreground"
                >
                  {l.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
