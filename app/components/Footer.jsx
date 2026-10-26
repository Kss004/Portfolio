import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { PROFILE, NAV_LINKS } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-b-0">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <div className="text-sm font-medium text-foreground">
              {PROFILE.name}
            </div>
            <p className="mt-2 max-w-xs text-sm text-muted-foreground">
              AI engineer and full-stack developer shipping production systems.
            </p>
            <div className="mt-4 flex gap-3">
              <Link
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="size-4" />
              </Link>
              <Link
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="size-4" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Links
            </h4>
            <ul className="mt-3 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.path}>
                  <Link
                    href={l.path}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {l.title}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href={PROFILE.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Resume
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Contact
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.calendly}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Book a call
                </a>
              </li>
              <li className="text-sm text-muted-foreground">
                {PROFILE.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            Thanks for scrolling. © {year} {PROFILE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
