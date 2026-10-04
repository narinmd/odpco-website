"use client";

import React from "react";
import LogoLoop from "./LogoLoop";
import { CUSTOMERS } from "./data";

export default function Customers() {
  const customerLogos = CUSTOMERS.map((customer) => ({
    src: customer.logo,
    alt: customer.name,
    href: customer.href
  }));

  return (
    <section className="py-[var(--section-space)]">
      <h2 className="text-center text-[length:var(--fs-h2)] leading-[var(--lh-heading)] text-[var(--brand-blue)]">
        Trusted by Leading Organizations
      </h2>
      <p className=" mt-2 text-[var(--brand-gray)] text-[length:var(--fs-body)] leading-[var(--lh-body)] text-center mb-[24px] mx-2 ">
        Delivering IT infrastructure, networking and data center solutions for
        government and enterprise organizations.
      </p>
      <div className="h-40 overflow-hidden">
        <LogoLoop
          logos={customerLogos}
          speed={70}
          direction="left"
          logoHeight={80}
          gap={60}
          hoverSpeed={0}
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Our customers"
        />
      </div>
    </section>
  );
}
