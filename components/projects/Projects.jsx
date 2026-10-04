"use client";
import React from "react";
import { PROJECTS } from "./data";
import ProjectCard from "./ProjectCard";
import FilterProjects from "./FilterProjects";
import { useSearchParams } from "next/navigation";

export default function Projects() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredProjects = category
    ? PROJECTS.filter((project) =>
        project.category.some(
          (item) => item.toLowerCase() === category.toLowerCase(),
        ),
      )
    : PROJECTS;

  return (
    <section className="py-[var(--section-space)]">
      <FilterProjects selectedCategory={category} />
      <h2 className="text-center text-[length:var(--fs-h2)] text-[var(--brand-blue)]">
        Our Projects
      </h2>

      <p className="mt-2 text-[var(--brand-gray)] text-[length:var(--fs-body)] leading-[var(--lh-body)] text-center mb-[24px] mx-2">
        Explore our projects in different IT fields
      </p>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-6 mx-10">
        {filteredProjects.map((project) => (
          <div key={project.id}>
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  );
}
