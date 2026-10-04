"use client";

import React, { useActionState, useEffect, useState } from "react";
import { Lock } from "lucide-react";
import { updateUserProfile } from "@/app/actions/user";

export default function PasswordForm({ userId }) {
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  const [formState, formAction, isPending] = useActionState(
    updateUserProfile,
    null,
  );

  useEffect(() => {
    if (formState?.success) {
      const timer = setTimeout(() => {
        setShowPasswordForm(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [formState]);
  return (
    <div className="mt-5">
      {!showPasswordForm ? (
        <div className="flex items-center justify-between">
          <button
            onClick={() => setShowPasswordForm(true)}
            className="text-[var(--brand-blue-hover)] hover:text-[var(--brand-blue)] text-[length:var(--fs-small)] transition-colors hover:cursor-pointer "
          >
            Change Password
          </button>
        </div>
      ) : (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex items-center justify-between mb-5">
            <div className="text-[var(--brand-gray)] flex items-center gap-5">
              <div className="p-2 text-[var(--brand-orange)] hover:cursor-pointer">
                <Lock size={16} />
              </div>
              <span className=" font-[var(--fw-medium)]">Change Password</span>
            </div>
            <button
              onClick={() => setShowPasswordForm(false)}
              className="text-[var(--brand-gray-credit)] hover:text-black hover:cursor-pointer text-[length:var(--fs-small)] transition-colors"
            >
              Close
            </button>
          </div>

          <form action={formAction} className="flex flex-col gap-4 max-w-md">
            <input type="hidden" name="userId" value={userId} />

            <input
              type="password"
              name="currentPassword"
              required
              placeholder="Current Password"
              className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
            />

            <input
              type="password"
              name="newPassword"
              required
              placeholder="New Password"
              className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
            />

            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirm New Password"
              className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
            />

            {formState?.error && (
              <div className="flex items-center gap-2 p-3 bg-red-50 text-red-600 text-sm rounded-sm border border-red-200">
                {formState.error}
              </div>
            )}

            {formState?.success && (
              <div className="flex items-center gap-2 p-3 bg-green-50 text-green-700 text-sm rounded-sm border border-green-200">
                {formState.success}
              </div>
            )}

            <button
              type="submit"
              disabled={isPending}
              className="w-full bg-[var(--brand-blue-hover)] hover:bg-[var(--brand-blue)] text-white cursor-pointer font-[var(--fw-medium)] py-3 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isPending ? "Updating..." : "Update Password"}
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
