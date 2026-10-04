import React from "react";
import FeaturesCard from "./FeaturesCard";
import { FEATURES } from "./data";

export default function Features() {
  return (
    <section className="py-[var(--section-space)]">
      <h2 className="text-center text-[length:var(--fs-h2)] text-[var(--brand-blue)]">
        Why ODPCO
      </h2>
      <p className="mt-2 text-[var(--brand-gray)] text-[length:var(--fs-body)] leading-[var(--lh-body)] text-center mb-[24px] mx-2">
        Expertise and experience for your IT projects
      </p>

      <div className=" grid grid-cols-1 md:grid-cols-4 lg:grid-cols-2 gap-5 mx-10">
        {FEATURES.map((product) => (
          <FeaturesCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
