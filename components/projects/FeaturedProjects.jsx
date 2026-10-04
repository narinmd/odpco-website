import React from "react";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "./data";

import { FolderBookmark } from "lucide-react";
import Link from "next/link";

export default function FeaturedProjects() {
  return (
    <section className="py-[var(--section-space)]">
      <h2
        className="text-center text-[length:var(--fs-h2)] mb-[24px]
      text-[var(--brand-blue)]"
      >
        Featured Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6 mx-10 ">
        {PROJECTS.filter((project) => project.featured)
          .slice(0.3)
          .map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
      </div>
      <div className="flex justify-center mt-5">
        <Link className="text-white bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-hover)] py-2 px-4 rounded flex justify-center transition duration-300 mt-5" href="/projects">
          <FolderBookmark strokeWidth={1.5} />
          <span className="mx-2 text-[length:var(--fs-body)] font-[var(--fw-medium)]">
            Show Projects
          </span>
        </Link>
      </div>
    </section>
  );
}
