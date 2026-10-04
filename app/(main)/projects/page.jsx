import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";
import React, { Suspense } from "react";
import Overview from "@/components/overview/Overview";
import { OVERVIEWS } from "@/components/overview/data";

const pageDesc =
  "Browse our featured projects and see how ODPCO delivers reliable IT solutions for growing businesses.";

export const metadata = {
  title: "IT Projects",
  description: pageDesc,
  alternates: {
    canonical: "/projects",
  },

  openGraph: {
    title: "IT Projects | ODPCO",
    description: pageDesc,
  },
};

export default async function ProjectsPage() {
  return (
    <div>
      <Hero page="projects" />

      <Overview data={OVERVIEWS.projects} />

      <Suspense fallback={<p>Loading Projects...</p>}>
        <Projects />
      </Suspense>
    </div>
  );
}
