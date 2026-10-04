import React from "react";

export default function FeaturesCard({ icon, title, description, number }) {
  const Icon = icon;
  return (
    <div className=" bg-white p-5 shadow-sm rounded-sm hover:-translate-y-0.5 transition-all duration-300 ease-out hover:shadow-md hover:shadow-blue-900/25 flex gap-5 h-40 lg:h-auto items-center">
      <div className=" flex justify-center items-center text-[var(--brand-orange)] w-1/5  text-[length:var(--fs-h2)]">
        {number}
      </div>

      <div className="w-px h-24 bg-[var(--brand-orange)]" />

      <div className="w-4/5 flex justify-center flex-col">
        <h3 className="text-[length:var(--fs-h3)] text-black font-[var(--fw-semibold)]">
          {title}
        </h3>
        <p className="mt-1 text-[var(--brand-gray)] text-[length:var(--fs-body)] leading-[var(--lh-body)] font-[var(--fw-regular)]">
          {description}
        </p>
      </div>
    </div>
  );
}
