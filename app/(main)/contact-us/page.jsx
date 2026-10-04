import React from "react";
import Hero from "@/components/hero/Hero";
import ContactInfo from "@/components/contact/ContactInfo";
import Map from "@/components/contact/Map";
import CustomeForm from "@/components/contact/CustomerForm";

const pageDesc =
  "Find all ODPCO's contact informations here.Phone: 021-26204375 - Address: Unit 22, Floor 1, No. 60, Golfam St, Africa Blvd Tehran";

export const metadata = {
  title: "Contact Us",
  description: pageDesc,
  alternates: {
    canonical: "/contact-us",
  },

  openGraph: {
    title: "Contact Us | ODPCO",
    description: pageDesc,
  },
};

export default async function ContactPage() {
  "use cache";
  return (
    <>
      <Hero page="contact" />

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 lg:items-stretch lg:py-[var(--section-space)] pt-[var(--section-space)] mx-10 ">
        <ContactInfo />
        <CustomeForm />
      </div>

      <Map />
    </>
  );
}
