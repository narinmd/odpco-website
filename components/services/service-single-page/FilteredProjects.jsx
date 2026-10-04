import React from "react";
import { PROJECTS } from "@/components/projects/data";
import ProjectCard from "@/components/projects/ProjectCard";

export default function FilteredProjects({ service }) {
  const filteredProjects = PROJECTS.filter((project) =>
    project.category.includes(service.navLink),
  ).slice(0, 3);

  return (
    <section className="py-[var(--section-space)]">
      <h2 className="text-center text-[length:var(--fs-h2)] text-[var(--brand-blue)] mb-[24px]">
        Related Projects
      </h2>

      <div className=" grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mx-10">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
