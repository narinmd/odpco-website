import React from "react";
import SpotlightCard from "./SpotlightCard";
import Link from "next/link";

export default function CTA() {
  return (
    <section>
      <SpotlightCard
        className="custom-spotlight-card"
        spotlightColor="#ffffff40"
      >
        <h2 className="text-white text-[length:var(--fs-h2)] text-center leading-[var(--lh-heading)]">
          Ready to Start Your Next IT Project?
        </h2>
        <div className="flex flex-col justify-center gap-4 mt-10 lg:flex-row">
          <Link
            href="/contact-us"
            className="text-[length:var(--fs-body)] py-2 px-4 rounded text-white bg-[var(--brand-orange)] hover:bg-[var(--brand-orange-hover)] transition duration-300 text-center font-[var(--fw-medium)]"
          >
            Contact Us
          </Link>
          <Link
            href="/projects"
            className="text-[length:var(--fs-body)] py-2 px-4 rounded border text-white transition duration-300 hover:bg-white hover:text-[var(--brand-blue)] text-center font-[var(--fw-medium)]"
          >
            Explore Projects
          </Link>
        </div>
      </SpotlightCard>
    </section>
  );
}
