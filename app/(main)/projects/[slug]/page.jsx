import React from "react";
import { notFound } from "next/navigation";
import { PROJECTS } from "@/components/projects/data";
import Hero from "@/components/hero/Hero";
import Overview from "@/components/overview/Overview";

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = PROJECTS.find((item) => item.slug === slug);

  if (!project) {
    return {
      title: "No service found.",
    };
  }

  return {
    title: project.company,
    description: project.shortDescription,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: `${project.company} | ODPCO`,
      description: project.shortDescription,
    },
  };
}

export default async function SingleProjectPage({ params }) {
  const { slug } = await params;

  const project = PROJECTS.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const singleProjectOverview = {
    title: project.company,
    description: project.description,
    image: project.image,
    imageALt: project.company,
    date: project.date,
    category: project.category,
  };
  return (
    <>
      <Hero
        page="projectSinglePage"
        data={{
          title: project.company,
          description: project.shortDescription,
          // image: project.image,
        }}
      />
      <Overview data={singleProjectOverview} />
    </>
  );
}
