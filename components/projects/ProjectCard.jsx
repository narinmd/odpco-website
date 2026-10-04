import Link from "next/link";
import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ProjectCard({ image, company, description, slug }) {
  return (
    <div className="group h-full bg-white shadow-sm rounded-sm transition-all duration-300 ease-out hover:shadow-md hover:shadow-blue-900/25 flex flex-col  overflow-hidden">
      <Image
        src={image}
        alt={company}
        width={1200}
        height={675}
        className=" transition duration-300 group-hover:scale-[1.02]"
      />

      <div className="p-5">
        <h3 className="font-[var(--fw-semibold)] text-[length:var(--fs-h3)] text-center text-black line-clamp-1 leading-[var(--lh-heading)]">
          {company}
        </h3>
        <p className="mt-1 text-center text-[var(--brand-gray)] text-[length:var(--fs-body)] leading-[var(--lh-body)] line-clamp-2 ">
          {description}
        </p>
        <Link
          href={`/projects/${slug}`}
          className="flex mt-4 gap-2 text-[var(--brand-orange)] hover:text-[var(--brand-orange-hover)] transition-colors duration-300 justify-center font-[var(--fw-medium)]"
        >
          View Project
          <ArrowRight strokeWidth={1.5} />
        </Link>
      </div>
    </div>
  );
}
