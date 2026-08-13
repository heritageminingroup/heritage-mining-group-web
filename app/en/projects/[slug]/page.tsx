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
  };
}

export default async function EnglishProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectEn(slug);
  if (!project) notFound();
  return <ProjectPageContent project={project} locale="en" />;
}
