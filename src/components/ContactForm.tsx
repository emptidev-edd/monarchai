"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    district: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputClass =
    "flex w-full rounded-xl border px-4 py-2 text-sm transition-all bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 h-12";

  if (submitted) {
    return (
      <div className="text-center py-8">
        <p className="text-white text-xl font-semibold">
          Thank you! We&apos;ll be in touch soon.
        </p>
        <p className="text-white/70 mt-2 text-sm">
          We&apos;ll review your request and reach out within 1–2 business days.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
          className={inputClass}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
          className={inputClass}
        />
      </div>
      <input
        type="email"
        name="email"
        placeholder="School Email Address"
        value={form.email}
        onChange={handleChange}
        required
        className={inputClass}
      />
      <input
        type="text"
        name="district"
        placeholder="District / School Name"
        value={form.district}
        onChange={handleChange}
        required
        className={inputClass}
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center whitespace-nowrap w-full mt-4 h-14 rounded-2xl px-8 text-base font-semibold bg-white text-slate-900 hover:bg-slate-50 shadow-sm transition-colors"
      >
        Request Pricing &amp; Info
      </button>
      <p className="text-sm text-white/60 mt-4">
        Or contact us directly at{" "}
        <a href="mailto:support@monarchai.io" className="text-white hover:underline">
          support@monarchai.io
        </a>
      </p>
    </form>
  );
}
