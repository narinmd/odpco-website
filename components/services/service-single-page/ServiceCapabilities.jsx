import React from "react";
import ServiceCapabilitiesCard from "./ServiceCapabilitiesCard";

export default function ServiceCapabilities({ details }) {
  return (
    <section className="py-[var(--section-space)]">
      <h2 className="text-center text-[length:var(--fs-h2)] text-[var(--brand-blue)]">
        Capabilities
      </h2>

      <p className="mt-2 text-[var(--brand-gray)] text-[length:var(--fs-body)] leading-[var(--lh-body)] text-center mb-[24px] mx-2">
        Expertise and experience for your IT projects
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mx-10">
        {details.map((item) => (
          <ServiceCapabilitiesCard
            key={item.title}
            capabilitiesIcon={item.capabilitiesIcon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </section>
  );
}
