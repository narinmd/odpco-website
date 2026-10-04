import React from "react";
import { notFound } from "next/navigation";
import { SERVICES } from "@/components/services/data";
import Hero from "@/components/hero/Hero";
import ServiceDesc from "@/components/services/service-single-page/ServiceDesc";
import ServiceCapabilities from "@/components/services/service-single-page/ServiceCapabilities";
import FilteredProjects from "@/components/services/service-single-page/FilteredProjects";
import CTA from "@/components/cta/CTA";

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const service = SERVICES.find((item) => item.slug === slug);

  if (!service) {
    return {
      title: "Service not found.",
    };
  }

  return {
    title: service.seoTitle,
    description: service.shortDescription,
    alternates: {
      canonical: `/services/${slug}`,
    },
    openGraph: {
      title: `${service.seoTitle}`,
      description: service.shortDescription,
    },
  };
}

export default async function SingleServicePage({ params }) {
  const { slug } = await params;

  const service = SERVICES.find((service) => service.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <>
      <Hero page={slug} />
      <ServiceDesc description={service.description} />
      <ServiceCapabilities details={service.details} />
      <FilteredProjects service={service} />
      <CTA />
    </>
  );
}
