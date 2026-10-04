"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError(res.error);
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-[var(--brand-light-gray)]">
      <div className="w-full max-w-[420px] bg-white p-5 rounded-sm shadow-sm">
        <h1 className="text-[length:var(--fs-h2)] mb-2 text-[var(--brand-blue)] text-center">
          Login
        </h1>

        <p className="text-[var(--brand-gray-credit)] text-[length:var(--fs-small)] leading-[var(--lh-body)] text-center mb-[24px]">
          Website Administrator
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="block text-[length:var(--fs-body)] mb-1 font-[var(--fw-semibold)]"
            >
              Username / Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="password"
              className="block text-[length:var(--fs-body)] mb-1 font-[var(--fw-semibold)]"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full px-3 py-2 text-sm border border-[var(--brand-gray-border-form)] rounded-sm focus:outline-none focus:border-[var(--brand-blue-hover)] focus:ring-1 focus:ring-[var(--brand-blue-hover)] transition"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 text-red-600 text-[length:var(--fs-small)] rounded-[var(--radius-md)] text-center border border-red-200">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[var(--brand-blue-hover)] hover:bg-[var(--brand-blue)] text-white cursor-pointer font-[var(--fw-medium)] py-3 px-6 rounded-md transition duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? "Redirecting..." : "Submit"}
          </button>
        </form>
      </div>
    </section>
  );
}
