"use client";

import { STEPS } from "./data";

const ServiceStepper = () => {
  return (
    <section className="py-[var(--section-space)]">
      <div className="mx-10">
        <h2 className="text-center text-[length:var(--fs-h2)] mb-[24px] text-[var(--brand-blue)]">
          Our Process
        </h2>

        <p className="mt-2 text-[var(--brand-gray)] text-[length:var(--fs-body)] leading-[var(--lh-body)] text-center mb-[30px] mx-2">
          From initial consultation to ongoing support
        </p>

        <div className="flex lg:flex-row flex-col ">
          {STEPS.map((step, index) => (
            <div key={step.id} className="flex flex-1 flex-col items-center justify-center align-center">
              <div className="flex w-full flex-col items-center lg:flex-row">
              <div 
  className={`w-px h-8 lg:w-auto lg:h-px lg:flex-1 border-l lg:border-l-0 lg:border-t border-[var(--brand-orange)] ${
    index === 0 ? "invisible" : ""
  }`} 
/>

                <div className="flex size-10 shrink-0 items-center justify-center rounded-full border-2 border-[var(--brand-orange)] bg-white text-[length:var(--fs-h3)] text-[var(--brand-orange)]">
                  {step.id}
                </div>

                <div 
  className={`w-px h-8 lg:w-auto lg:h-px lg:flex-1 border-l lg:border-l-0 lg:border-t border-[var(--brand-orange)] ${
    index === STEPS.length - 1 ? "lg:invisible" : ""
  }`}
/>
              </div>

              <div className="lg:mt-5 px-4 text-center w-64">
                <h3 className="font-[var(--fw-semibold)] text-[length:var(--fs-body)]">
                  {step.title}
                </h3>

                <p className="mt-1 leading-[var(--lh-body)] text-[length:var(--fs-small)]">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceStepper;
