import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function ServicesCard({
  icon,
  title,
  description,
  attributes,
  slug,
}) {
  const Icon = icon;
  return (
    <div>
      <div className=" bg-white p-5 shadow-sm rounded-sm hover:-translate-y-0.5 transition-all duration-300 ease-out hover:shadow-md hover:shadow-blue-900/25 h-full">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full text-[var(--brand-blue)] bg-[var(--brand-light-gray)]">
          <Icon size={30} />
        </div>

        <h3 className="text-[length:var(--fs-h3)] text-center text-black font-[var(--fw-semibold)] leading-[var(--lh-heading)]">
          {title}
        </h3>
        <p className="mt-1 text-left text-[var(--brand-gray)] text-[length:var(--fs-body)] leading-[var(--lh-body)] font-[var(--fw-regular)] lg:h-24">
          {description}
        </p>

        <div className="flex flex-col lg:flex-row justify-between mt-4">
          <ul className="flex flex-col">
            {attributes.map((attribute) => (
              <li
                key={attribute}
                className="text-[length:var(--fs-small)] text-[var(--brand-gray)] "
              >
                • {attribute}
              </li>
            ))}
          </ul>

          <Link
            href={`/services/${slug}`}
            className="flex gap-2 text-[var(--brand-orange)] hover:text-[var(--brand-orange-hover)] transition-colors duration-300 font-[var(--fw-medium)] items-end mt-4"
          >
            <span>read about service</span>
            <ArrowRight strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}
