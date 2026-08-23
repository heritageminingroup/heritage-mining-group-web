import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ProjectPageContent } from "../../../components/ProjectPageContent";
import { getProjectEn, projectsEn } from "../../../data/projects-en";

type ProjectPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projectsEn.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectEn(slug);
  if (!project) return {};
  return {
    title: project.seoTitle,
    description: project.seoDescription,
    alternates: {
      canonical: `/en/projects/${slug}`,
      languages: { es: `/proyectos/${slug}`, en: `/en/projects/${slug}` },
    },
    openGraph: {
      type: "article",
      locale: "en_US",
      title: project.seoTitle,
      description: project.seoDescription,
      url: `/en/projects/${slug}`,
      images: [{ url: "/og.png", width: 1731, height: 909, alt: `${project.name} - Heritage Mining Group` }],
    },
    twitter: {
      card: "summary_large_image",
      title: project.seoTitle,
      description: project.seoDescription,
      images: ["/og.png"],
    },
  };
}

export default async function EnglishProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectEn(slug);
  if (!project) notFound();
  return <ProjectPageContent project={project} locale="en" />;
}
