import Features from "@/components/features/Features";
import React from "react";
import Overview from "@/components/overview/Overview";
import { OVERVIEWS } from "@/components/overview/data";
import Hero from "@/components/hero/Hero";

const pageDesc =
  "ODPCO has over 20 years of experience delivering reliable services in computer networks, network security, data centers, and more. Discover more about our story.";

export const metadata = {
  title: "About Us",
  description: pageDesc,
  alternates: {
    canonical: "/about-us",
  },

  openGraph: {
    title: "About Us | ODPCO",
    description: pageDesc,
  },
};

export default async function AboutPage() {
  "use cache";
  return (
    <div>
      <Hero page="about" />
      <Overview data={OVERVIEWS.about} />
      <Features />
    </div>
  );
}
