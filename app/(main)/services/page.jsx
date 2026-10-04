import React from "react";
import Hero from "@/components/hero/Hero";
import Services from "@/components/services/Services";
import ServiceStepper from "@/components/services/stepper/ServiceStepper";

const pageDesc =
  "Explore practical IT and networking services and find the right fit for your business.";

export const metadata = {
  title: "IT Services",
  description: pageDesc,
  alternates: {
    canonical: "/services",
  },

  openGraph: {
    title: "IT Services | ODPCO",
    description: pageDesc,
  },
};

export default async function ServicesPage() {
  "use cache";
  return (
    <div>
      <Hero page="services" />
      <Services />
      <ServiceStepper />
    </div>
  );
}
