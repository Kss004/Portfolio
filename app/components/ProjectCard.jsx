import { Github, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/app/components/ui/card";
import { Badge } from "@/app/components/ui/badge";

export default function ProjectCard({
  title,
  description,
  imgUrl,
  gitUrl,
  previewUrl,
  tags = [],
  featured = false,
}) {
  const hasGit = gitUrl && gitUrl !== "/#projects" && gitUrl !== "/";
  const hasDemo =
    previewUrl && previewUrl !== "/#projects" && previewUrl !== "/";
  const hasImage = imgUrl && imgUrl !== "";

  return (
    <Card
      className={`group h-full overflow-hidden rounded-lg p-0 shadow-none transition-colors hover:border-foreground/20 ${
        featured ? "md:col-span-2" : ""
      }`}
    >
      {hasImage ? (
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
          <Image
            src={imgUrl}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={75}
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex aspect-[16/10] w-full items-center justify-center border-b border-border bg-gradient-to-br from-muted to-muted/50 px-6">
          <div className="flex flex-wrap justify-center gap-1.5 opacity-60">
            {tags.map((t) => (
              <Badge key={t} variant="outline" className="font-mono text-xs">
                {t}
              </Badge>
            ))}
          </div>
        </div>
      )}
      <CardContent className="p-5">
        <div className="mb-2 flex flex-wrap gap-1.5">
          {tags.map((t) => (
            <Badge key={t} variant="secondary" className="font-normal">
              {t}
            </Badge>
          ))}
        </div>
        <h3 className="text-base font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </CardContent>
      {(hasGit || hasDemo) && (
        <CardFooter className="flex gap-4 px-5 pb-5 pt-0">
          {hasGit && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Github className="size-3.5" />
              Code
            </Link>
          )}
          {hasDemo && (
            <Link
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ExternalLink className="size-3.5" />
              Live demo
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
