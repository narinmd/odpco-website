import React from "react";

export default function ServiceDetails({ description }) {
  return (
    <section className="bg-[var(--brand-light-gray)] py-[var(--section-space)] mx-10">
      <div className="max-w-3xl">
        <h2 className="lg:text-left text-center text-[length:var(--fs-h2)] mb-[24px] text-[var(--brand-blue)]">
          What We Provide
        </h2>

        <p className="lg:text-left text-center mt-4 text-[length:var(--fs-body)] leading-[var(--lh-body)] text-[var(--brand-gray)]">
          {description}
        </p>
      </div>
    </section>
  );
}
