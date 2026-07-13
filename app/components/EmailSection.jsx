"use client";

import { useState } from "react";
import { Calendar, Github, Linkedin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";
import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Textarea } from "@/app/components/ui/textarea";
import { Card, CardContent } from "@/app/components/ui/card";
import { PROFILE } from "@/lib/data";

export default function ContactSection() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("Message sent. I'll respond within 24 hours.");
        e.target.reset();
      } else {
        toast.error("Failed to send. Try again or email me directly.");
      }
    } catch {
      toast.error("Network error. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <div className="mb-10 flex flex-col gap-2 md:mb-12">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Contact
          </span>
          <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
            Let&apos;s talk
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="space-y-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              Open to senior AI engineering roles and contract work. If you have
              a problem worth solving, send a note or book a call.
            </p>

            <div className="space-y-3">
              <a
                href={PROFILE.calendly}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:border-foreground/20"
              >
                <div>
                  <div className="text-sm font-medium text-foreground">
                    Book a 30-min call
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Quick intro or project scoping
                  </div>
                </div>
                <Calendar className="size-4 text-muted-foreground" />
              </a>

              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:border-foreground/20"
              >
                <div>
                  <div className="text-sm font-medium text-foreground">
                    {PROFILE.email}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    Direct email
                  </div>
                </div>
                <ArrowRight className="size-4 text-muted-foreground" />
              </a>
            </div>

            <div className="flex gap-3">
              <Button asChild variant="outline" size="sm">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="size-4" />
                  GitHub
                </a>
              </Button>
              <Button asChild variant="outline" size="sm">
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="size-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>

          <Card className="rounded-lg shadow-none">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-1.5 block text-xs font-medium text-muted-foreground"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="mb-1.5 block text-xs font-medium text-muted-foreground"
                  >
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium text-muted-foreground"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="Tell me about the problem you're solving."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={submitting}
                  className="w-full"
                >
                  {submitting ? "Sending…" : "Send message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
