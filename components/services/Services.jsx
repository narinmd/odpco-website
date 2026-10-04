import React from "react";
import ServicesCard from "./ServicesCard";
import { SERVICES } from "./data";

export default function Services() {
  return (
    <section className="py-[var(--section-space)]">
      <h2 className="text-center text-[length:var(--fs-h2)] mb-[24px] text-[var(--brand-blue)]">
        Our Services
      </h2>
      <p className=" mt-2 text-[var(--brand-gray)] text-[length:var(--fs-body)] leading-[var(--lh-body)] text-center mb-[24px] mx-2">Enterprise IT solutions for your needs</p>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-10">
        {SERVICES.map((product) => (
          <ServicesCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
