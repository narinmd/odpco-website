import prisma from "@/lib/prisma";
import ContactForm from "@/components/dashboard/ContactForm";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function SettingsPage() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");

  const existingData = await prisma.contactManagement.findFirst();

  return (
    <div className="w-full bg-white rounded-sm shadow-sm overflow-hidden p-8">
      <div className="mb-5">
        <h2 className="text-[length:var(--fs-h3)] text-[var(--brand-blue)] font-[var(--fw-medium)] mb-2">
          Contact Settings
        </h2>
        <p className="text-[var(--brand-gray)] text-[length:var(--fs-small)]">
          Update your website's contact information
        </p>
      </div>

      <ContactForm initialData={existingData} />
    </div>
  );
}
