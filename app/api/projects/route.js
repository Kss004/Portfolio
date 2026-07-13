import { NextResponse } from "next/server";
import { unstable_cache } from "next/cache";

const GITHUB_USER = "Kss004";

async function fetchProjects() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=100`,
    {
      headers: {
        Accept: "application/vnd.github+json",
        "X-GitHub-Api-Version": "2022-11-28",
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    return [];
  }

  const repos = await res.json();

  return repos
    .filter((r) => !r.fork && r.description)
    .map((r) => ({
      id: r.id,
      title: r.name,
      description: r.description,
      url: r.html_url,
      stars: r.stargazers_count,
      language: r.language,
      topics: r.topics || [],
      updatedAt: r.updated_at,
      homepage: r.homepage || "",
    }))
    .sort((a, b) => b.stars - a.stars);
}

const getCachedProjects = unstable_cache(fetchProjects, ["github-projects"], {
  revalidate: 3600,
});

export async function GET() {
  try {
    const projects = await getCachedProjects();
    return NextResponse.json({ projects });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
