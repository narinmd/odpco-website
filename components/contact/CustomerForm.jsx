"use client";

import React, { useActionState, useState, useEffect } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { validateConsultationForm } from "@/utils/validation";
import { submitConsultationForm } from "@/app/actions/sendEmail";

export default function CustomerForm() {
  const [formState, formAction, isPending] = useActionState(
    submitConsultationForm,
    {
      success: false,
      errors: null,
      previousValues: {},
    },
  );

  const [showSuccess, setShowSuccess] = useState(false);

  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    if (formState.success && formState.timestamp) {
      setShowSuccess(true);

      const timer = setTimeout(() => {
        setShowSuccess(false);
        setFormKey((prev) => prev + 1);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [formState]);

  return (
    <div className="p-5 shadow-sm rounded-sm bg-white">
      <h3 className="text-[length:var(--fs-h2)] mb-[24px] text-[var(--brand-blue)] lg:text-start text-center">
        Request a Consultation
      </h3>

      {showSuccess ? (
        <div className="flex flex-col items-center justify-center text-center py-8">
          <CheckCircle2 className="w-12 h-12 mb-5 text-green-800 mx-auto" />

          <h3 className="text-[length:var(--fs-h3)] font-[var(--fw-semibold)] text-green-800 mb-1 text-lg">
            Your request submitted successfully!
          </h3>

          <p className="text-[length:var(--fs-small)] text-green-700 font-[var(--fw-light)]">
            ODPCO will contact you soon. Thanks!
          </p>
        </div>
      ) : (
        <form
          key={formKey}
          action={formAction}
          noValidate
          className="space-y-4"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[length:var(--fs-body)] mb-1 font-[var(--fw-semibold)]">
                Full Name <span className="text-red-600">*</span>
              </label>

              <input
                type="text"
                name="fullName"
                defaultValue={formState.previousValues?.fullName}
                placeholder="John Doe"
                className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
              />
            </div>

            <div>
              <label className="block text-[length:var(--fs-body)] mb-1 font-[var(--fw-semibold)]">
                Work Email <span className="text-red-600">*</span>
              </label>

              <input
                type="email"
                name="email"
                defaultValue={formState.previousValues?.email}
                placeholder="you@company.com"
                className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-[length:var(--fs-body)] mb-1 font-[var(--fw-semibold)]">
                Phone Number <span className="text-red-600">*</span>
              </label>

              <input
                type="tel"
                name="phone"
                defaultValue={formState.previousValues?.phone}
                placeholder="09121234567"
                className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
              />
            </div>

            <div>
              <label className="block text-[length:var(--fs-body)] mb-1 font-[var(--fw-semibold)]">
                Company Name (Optional)
              </label>

              <input
                type="text"
                name="companyName"
                defaultValue={formState.previousValues?.companyName}
                placeholder="Orange Data Processing"
                className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-[length:var(--fs-body)] mb-1 font-[var(--fw-semibold)]">
              Required Service <span className="text-red-600">*</span>
            </label>

            <select
              name="serviceType"
              defaultValue={
                formState.previousValues?.serviceType || "NETWORK_DATACENTER"
              }
              className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
            >
              <option value="NETWORK_DATACENTER">
                Network & Data Center Solutions
              </option>
              <option value="HARDWARE">Hardware & Equipment Supply</option>
              <option value="OTHER">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-[length:var(--fs-body)] mb-1 font-[var(--fw-semibold)]">
              Project Details <span className="text-red-600">*</span>
            </label>

            <textarea
              name="message"
              rows={4}
              defaultValue={formState.previousValues?.message}
              placeholder="Describe your project requirements or challenges ..."
              className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
            ></textarea>
          </div>

          {formState.errors && (
            <div className="p-3 bg-red-50 border border-red-200 rounded text-red-700 text-sm space-y-1">
              {formState.errors.map((err, index) => (
                <div key={index}>• {err}</div>
              ))}
            </div>
          )}

          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-[var(--brand-blue-hover)] hover:bg-[var(--brand-blue)] text-white cursor-pointer font-[var(--fw-medium)] py-3 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {isPending ? (
              <span>Sending...</span>
            ) : (
              <>
                <span>Submit</span>
                <Send size={16} />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
