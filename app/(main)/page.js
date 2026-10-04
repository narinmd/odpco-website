import CTA from "@/components/cta/CTA";
import Customers from "@/components/customers/Customers";
import Hero from "@/components/hero/Hero";
import FeaturedProjects from "@/components/projects/FeaturedProjects";
import ServicesHome from "@/components/services/ServicesHome";
import prisma from "@/lib/prisma";

export default async function Home() {
  "use cache";
  return (
    <>
      <Hero page="home" />
      <ServicesHome />
      <FeaturedProjects />
      <Customers />
      <CTA />
    </>
  );
}
