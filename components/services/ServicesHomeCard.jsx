import Link from "next/link";
import React from "react";

export default function ServicesHomeCard({
  icon,
  title,
  shortDescription,
  slug,
}) {
  const Icon = icon;
  return (
    <Link
      href={`/services/${slug}`}
      className=" bg-white p-5 shadow-sm rounded-sm hover:-translate-y-0.5 transition-all duration-300 ease-out hover:shadow-md hover:shadow-blue-900/25 "
    >
      <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full text-[var(--brand-blue)] bg-[var(--brand-light-gray)]">
        <Icon size={30} />
      </div>

      <h3 className="text-[length:var(--fs-h3)] text-center text-black font-[var(--fw-semibold)] leading-[var(--lh-heading)]">
        {title}
      </h3>
      <p className="mt-1 text-center text-[var(--brand-gray)] text-[length:var(--fs-body)] leading-[var(--lh-body)] font-[var(--fw-regular)]">
        {shortDescription}
      </p>
    </Link>
  );
}
