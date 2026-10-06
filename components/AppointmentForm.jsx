"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Send,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { whatsappUrl } from "@/lib/utils";

const CONSULTATION_TYPES = [
  { value: "in-person", label: "In-person consultation" },
  { value: "follow-up", label: "Follow-up visit" },
  { value: "second-opinion", label: "Second opinion" },
  { value: "other", label: "Other" },
];

const initial = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  type: "in-person",
  message: "",
};

export default function AppointmentForm() {
  const reduce = useReducedMotion();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const update = (field) => (e) => {
    const v = e.target.value;
    setValues((prev) => ({ ...prev, [field]: v }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: "" }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your full name.";
    if (!values.phone.trim()) next.phone = "Please enter a phone number.";
    else if (!/^[+\d][\d\s()-]{5,}$/.test(values.phone.trim()))
      next.phone = "Please enter a valid phone number.";
    if (values.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
      next.email = "Please enter a valid email address.";
    if (!values.date) next.date = "Please choose a preferred date.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const buildMessage = () => {
    const lines = [
      `Hello ${doctor.name}, I would like to book an appointment.`,
      "",
      `Name: ${values.name}`,
      `Phone: ${values.phone}`,
      values.email ? `Email: ${values.email}` : null,
      `Preferred date: ${values.date}`,
      values.time ? `Preferred time: ${values.time}` : null,
      `Consultation type: ${
        CONSULTATION_TYPES.find((t) => t.value === values.type)?.label ||
        values.type
      }`,
      values.message ? `Message: ${values.message}` : null,
    ].filter(Boolean);
    return lines.join("\n");
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");

    // NOTE: no backend yet. We simulate a short "send" and then reveal
    // the success state + a WhatsApp handoff. Replace this block with a
    // real API call when a backend endpoint is available.
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setStatus("idle");
  };

  const waHref = whatsappUrl(doctor.whatsapp, buildMessage());

  /* ---------------- Success state ---------------- */
  if (status === "success") {
    return (
      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-line bg-surface p-8 md:p-10"
        role="status"
        aria-live="polite"
      >
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-teal-50 text-teal-600">
          <CheckCircle2 className="h-6 w-6" strokeWidth={2} />
        </div>
        <h3 className="mt-6 font-display text-2xl text-ink-900">
          Request prepared.
        </h3>
        <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-500 pretty">
          Your request details are ready. To confirm your appointment, please
          send them via WhatsApp — the clinic will respond to confirm the
          slot.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-medium text-cream-50 transition hover:bg-ink-800"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            Send via WhatsApp
          </a>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3.5 text-sm font-medium text-ink-900 transition hover:border-teal-500/40 hover:bg-teal-50"
          >
            Send another request
          </button>
        </div>
      </motion.div>
    );
  }

  /* ---------------- Form ---------------- */
  return (
    <form
      onSubmit={onSubmit}
      noValidate
      className="rounded-3xl border border-line bg-surface p-6 md:p-10"
      aria-labelledby="appointment-form-heading"
    >
      <h2
        id="appointment-form-heading"
        className="font-display text-2xl text-ink-900"
      >
        Request an appointment
      </h2>
      <p className="mt-2 text-sm text-ink-500">
        Fill in the details below. Fields marked with * are required.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field
          id="name"
          label="Full name *"
          value={values.name}
          onChange={update("name")}
          error={errors.name}
          autoComplete="name"
          required
        />
        <Field
          id="phone"
          label="Phone number *"
          value={values.phone}
          onChange={update("phone")}
          error={errors.phone}
          type="tel"
          autoComplete="tel"
          placeholder="+92 300 1234567"
          required
        />
        <Field
          id="email"
          label="Email"
          value={values.email}
          onChange={update("email")}
          error={errors.email}
          type="email"
          autoComplete="email"
        />
        <Field
          id="date"
          label="Preferred date *"
          value={values.date}
          onChange={update("date")}
          error={errors.date}
          type="date"
          required
        />
        <Field
          id="time"
          label="Preferred time"
          value={values.time}
          onChange={update("time")}
          type="time"
        />
        <div>
          <label
            htmlFor="type"
            className="block text-xs uppercase tracking-[0.14em] text-ink-400"
          >
            Consultation type
          </label>
          <select
            id="type"
            name="type"
            value={values.type}
            onChange={update("type")}
            className="mt-2 w-full rounded-2xl border border-line bg-cream-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-teal-500/60 focus:bg-surface"
          >
            {CONSULTATION_TYPES.map((t) => (
              <option key={t.value} value={t.value}>
                {t.label}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-2">
          <label
            htmlFor="message"
            className="block text-xs uppercase tracking-[0.14em] text-ink-400"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={update("message")}
            placeholder="Briefly describe the reason for your visit (optional)."
            className="mt-2 w-full resize-none rounded-2xl border border-line bg-cream-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:border-teal-500/60 focus:bg-surface"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-medium text-cream-50 transition hover:bg-ink-800 disabled:cursor-not-allowed disabled:opacity-70"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2} aria-hidden="true" />
              Sending…
            </>
          ) : (
            <>
              <Send className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
              Book Appointment
            </>
          )}
        </button>

        {doctor.whatsapp ? (
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3.5 text-sm font-medium text-ink-900 transition hover:border-teal-500/40 hover:bg-teal-50"
          >
            <MessageCircle className="h-4 w-4 text-teal-600" strokeWidth={2} aria-hidden="true" />
            Continue on WhatsApp
          </a>
        ) : null}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-ink-400">
        Your information is used only to process this appointment request and is
        never stored in your browser.
      </p>
    </form>
  );
}

/* ------------------------------------------------------------------ */

function Field({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  required = false,
  autoComplete,
  placeholder,
}) {
  const errId = `${id}-error`;
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs uppercase tracking-[0.14em] text-ink-400"
      >
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        autoComplete={autoComplete}
        placeholder={placeholder}
        aria-invalid={error ? "true" : undefined}
        aria-describedby={error ? errId : undefined}
        className={`mt-2 w-full rounded-2xl border bg-cream-50 px-4 py-3 text-sm text-ink-900 outline-none transition focus:bg-surface ${
          error
            ? "border-red-400/70 focus:border-red-500/70"
            : "border-line focus:border-teal-500/60"
        }`}
      />
      {error ? (
        <p
          id={errId}
          className="mt-2 inline-flex items-center gap-1.5 text-xs text-red-500"
        >
          <AlertCircle className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}