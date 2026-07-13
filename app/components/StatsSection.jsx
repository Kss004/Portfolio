import { Card } from "@/app/components/ui/card";
import { STATS } from "@/lib/data";

export default function StatsSection() {
  return (
    <section id="work" className="border-b border-border">
      <div className="mx-auto max-w-5xl px-5 py-14 md:py-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {STATS.map((s) => (
            <Card key={s.label} className="rounded-lg p-5 shadow-none">
              <div className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
                {s.value}
              </div>
              <div className="mt-2 text-sm font-medium text-foreground">
                {s.label}
              </div>
              <div className="mt-1 text-xs text-muted-foreground">{s.hint}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
