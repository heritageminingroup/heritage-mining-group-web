import type { MetadataRoute } from "next";
import { projects } from "./data/projects";

const origin = "https://heritage-mining-group.lucianofugazzotto.chatgpt.site";

export default function sitemap(): MetadataRoute.Sitemap {
  const updated = new Date("2026-08-14T00:00:00-03:00");
  const staticRoutes = ["", "/en", "/aviso-legal", "/en/legal-notice"];
  const projectRoutes = projects.flatMap((project) => [
    `/proyectos/${project.slug}`,
    `/en/projects/${project.slug}`,
  ]);

  return [...staticRoutes, ...projectRoutes].map((route) => ({
    url: `${origin}${route}`,
    lastModified: updated,
    changeFrequency: route === "" || route === "/en" ? "monthly" : "quarterly",
    priority: route === "" || route === "/en" ? 1 : route.includes("projects") || route.includes("proyectos") ? 0.8 : 0.4,
  }));
}
