import Image from "next/image";
import React from "react";

export default function Overview({ data }) {
  return (
    <section className="flex flex-col-reverse gap-8 py-[var(--section-space)] mx-10 lg:flex-row">
      <div className="lg:w-1/2">
        {(data.category || data.date) && (
          <div className="flex flex-wrap items-center gap-2 mb-3 justify-center lg:justify-start">
            {data.category && Array.isArray(data.category) && (
              <div className="flex gap-1.5">
                {data.category.map((cat, index) => (
                  <span
                    key={index}
                    className="px-2.5 py-1 bg-[var(--brand-light-gray)] text-[var(--brand-blue)] text-xs font-semibold rounded-md border border-gray-200"
                  >
                    {cat}
                  </span>
                ))}
              </div>
            )}
            {data.date && (
              <span className="text-xs text-[var(--brand-gray)] font-medium">
                • {data.date}
              </span>
            )}
          </div>
        )}

        <h2
          className="
            text-[length:var(--fs-h2)]
            text-[var(--brand-blue)]
            text-center
            lg:text-start
          "
        >
          {data.title}
        </h2>

        <p
          className="
            mt-3
            text-[length:var(--fs-body)]
            leading-[var(--lh-body)]
            whitespace-pre-line
            text-start
          "
        >
          {data.description}
        </p>
      </div>

      <div className="lg:w-1/2 aspect-[16/9]">
        <Image
          src={data.image}
          alt={data.imageAlt || "project image"}
          className="h-full w-full rounded-sm object-cover"
          width={1200}
          height={600}
        />
      </div>
    </section>
  );
}
