import React from "react";
import ServiceHomeCard from "./ServicesHomeCard";
import { SERVICES } from "./data";

export default function ServicesHome() {
  return (
    <section className="py-[var(--section-space)]">
      <h2 className="text-center text-[length:var(--fs-h2)] mb-[24px] text-[var(--brand-blue)]">
        Main Services
      </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10">
        {SERVICES.map((product) => (
          <ServiceHomeCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
