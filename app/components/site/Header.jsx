import ThemeToggle from "../ThemeToggle";
import { PROFILE } from "@/lib/content";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between px-5">
        <a href="#top" className="text-sm font-medium tracking-tight">
          {PROFILE.short}
        </a>
        <div className="flex items-center gap-1 text-sm">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden rounded-md px-3 py-1.5 text-muted-foreground transition-colors hover:text-foreground sm:inline-block"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
