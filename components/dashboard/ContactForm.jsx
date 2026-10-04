"use client";

import React, { useActionState, useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Smartphone,
  Printer,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Save,
} from "lucide-react";
import { updateContactInfo } from "@/app/actions/contact";

export default function ContactForm({ initialData }) {
  const [formState, formAction, isPending] = useActionState(
    updateContactInfo,
    null,
  );

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (formState?.success || formState?.error) {
      setShowMessage(true);

      if (formState?.success) {
        const timer = setTimeout(() => {
          setShowMessage(false);
        }, 3000);
        return () => clearTimeout(timer);
      }
    }
  }, [formState]);

  return (
    <form action={formAction} className="flex flex-col gap-6 max-w-3xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="text-[length:var(--fs-body)] mb-1 font-[var(--fw-semibold)] flex gap-2 items-center">
            <Phone size={16} className="text-[var(--brand-orange)]" /> Phone
          </label>
          <input
            type="text"
            name="phone"
            defaultValue={initialData?.phone || ""}
            placeholder="021-26204375"
            className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[length:var(--fs-body)] mb-1 font-[var(--fw-semibold)] flex gap-2 items-center">
            <Smartphone size={16} className="text-[var(--brand-orange)]" />{" "}
            Mobile / WhatsApp
          </label>
          <input
            type="text"
            name="mobile"
            defaultValue={initialData?.mobile || ""}
            placeholder="09121011206"
            className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[length:var(--fs-body)] mb-1 font-[var(--fw-semibold)] flex gap-2 items-center">
            <Mail size={16} className="text-[var(--brand-orange)]" /> Email
          </label>
          <input
            type="email"
            name="email"
            defaultValue={initialData?.email || ""}
            placeholder="info@odpco.com"
            className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[length:var(--fs-body)] mb-1 font-[var(--fw-semibold)] flex gap-2 items-center">
            <Printer size={16} className="text-[var(--brand-orange)]" /> Fax
          </label>
          <input
            type="text"
            name="fax"
            defaultValue={initialData?.fax || ""}
            placeholder="021-22034126"
            className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-[length:var(--fs-body)] mb-1 font-[var(--fw-semibold)] flex gap-2 items-center">
          <MapPin size={16} className="text-[var(--brand-orange)]" /> Address
        </label>
        <textarea
          name="address"
          defaultValue={initialData?.address || ""}
          rows={3}
          placeholder="Unit 22, Floor 1, No. 60, Golfam St, Africa Blvd, Tehran"
          className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition resize-none"
        ></textarea>
      </div>

      {showMessage && formState?.error && (
        <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 text-sm rounded-sm border border-red-200">
          <AlertCircle size={16} />
          {formState.error}
        </div>
      )}

      {showMessage && formState?.success && (
        <div className="flex items-center gap-2 p-3 bg-green-50 text-green-700 text-sm rounded-sm border border-green-200">
          <CheckCircle2 size={16} />
          {formState.success}
        </div>
      )}

      <div className="flex justify-end mt-2">
        <button
          type="submit"
          disabled={isPending}
          className="w-full md:w-auto bg-[var(--brand-blue-hover)] hover:bg-[var(--brand-blue)] text-white cursor-pointer font-[var(--fw-medium)] py-3 px-8 rounded-md transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
        >
          {isPending ? (
            "Saving Changes..."
          ) : (
            <>
              <Save size={18} />
              Save Settings
            </>
          )}
        </button>
      </div>
    </form>
  );
}
