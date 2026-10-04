import React from "react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { User as UserIcon, Mail } from "lucide-react";
import PasswordForm from "@/components/dashboard/PasswordForm";

export default async function ProfilePage() {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="w-full bg-white rounded-sm shadow-sm overflow-hidden p-8">
      <div className="mb-5">
        <h2 className="text-[length:var(--fs-h3)] text-[var(--brand-blue)] font-[var(--fw-medium)] mb-2">
          Profile Setting
        </h2>
        <p className="text-[var(--brand-gray)] text-[length:var(--fs-small)]">
          Information Mangement
        </p>
      </div>

      <div className=" flex flex-col gap-5">
        <div className="flex items-center gap-5">
          <div className="p-2 text-[var(--brand-orange)]">
            <UserIcon size={16} />
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[var(--brand-gray)] font-[var(--fw-medium)]">
              Username:
            </p>
            <p>{session.user.name || "Invalid"}</p>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <div className="p-2 text-[var(--brand-orange)]">
            <Mail size={16} />
          </div>
          <div className="flex gap-2 items-center">
            <p className="text-[var(--brand-gray)] font-[var(--fw-medium)]">
              Email:
            </p>
            <p>{session.user.email}</p>
          </div>
        </div>
      </div>

      <div className="mt-5 h-px bg-[var(--brand-gray-border-form)] w-full" />

      <PasswordForm userId={session.user.id} />
    </div>
  );
}
