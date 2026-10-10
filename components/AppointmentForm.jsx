"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  AlertCircle,
  CalendarHeart,
  CheckCircle2,
  MessageCircle,
  Send,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { whatsappUrl } from "@/lib/utils";

const CONSULTATION_TYPES = [
  { value: "In-person consultation", label: "In-person consultation" },
  { value: "Follow-up visit", label: "Follow-up visit" },
  { value: "Second opinion", label: "Second opinion" },
  { value: "Online consultation", label: "Online consultation" },
  { value: "Other", label: "Other" },
];

const initial = {
  name: "",
  phone: "",
  email: "",
  date: "",
  time: "",
  type: CONSULTATION_TYPES[0].value,
  message: "",
};

export default function AppointmentForm() {
  const reduce = useReducedMotion();
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

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

  /**
   * Build a clean, professional WhatsApp message with all appointment details.
   */
  const buildWhatsAppMessage = () => {
    const lines = [
      `*New Appointment Request*`,
      ``,
      `*Doctor:* ${doctor.name}`,
      `*Clinic:* ${doctor.clinic?.name || "Nishtar Hospital"}`,
      ``,
      `---`,
      ``,
      `*Patient Name:* ${values.name.trim()}`,
      `*Phone:* ${values.phone.trim()}`,
      values.email ? `*Email:* ${values.email.trim()}` : null,
      `*Preferred Date:* ${formatDate(values.date)}`,
      values.time ? `*Preferred Time:* ${formatTime(values.time)}` : null,
      `*Consultation Type:* ${values.type}`,
      values.message ? `` : null,
      values.message ? `*Message from patient:*` : null,
      values.message ? values.message.trim() : null,
      ``,
      `---`,
      ``,
      `_This message was sent from the appointment form on ${doctor.seo?.siteUrl || "the website"}._`,
    ].filter((l) => l !== null);

    return lines.join("\n");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // Open WhatsApp with the message prefilled — this is the "submission".
    const url = whatsappUrl(doctor.whatsapp, buildWhatsAppMessage());

    // Open in new tab (opens WhatsApp app on mobile, WhatsApp Web on desktop)
    window.open(url, "_blank", "noopener,noreferrer");

    // Show success state
    setSubmitted(true);
  };

  const reset = () => {
    setValues(initial);
    setErrors({});
    setSubmitted(false);
  };

  /* ---------------- Success state ---------------- */
  if (submitted) {
    return (
      <motion.div
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="rounded-3xl border border-line bg-white p-8 shadow-card md:p-10"
        role="status"
        aria-live="polite"
      >
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-50 text-cyan-600">
          <CheckCircle2 className="h-6 w-6" strokeWidth={2} />
        </div>

        <h3 className="mt-6 font-display text-2xl font-bold text-navy-900 md:text-3xl">
          Almost done — send it on WhatsApp.
        </h3>

        <p className="mt-3 max-w-lg text-sm leading-relaxed text-ink-500 pretty md:text-base">
          We&rsquo;ve opened WhatsApp with your appointment details ready to
          send. Just press <strong className="text-navy-800">Send</strong> in
          WhatsApp, and the clinic will confirm your appointment.
        </p>

        <p className="mt-3 max-w-lg text-xs leading-relaxed text-ink-400">
          Didn&rsquo;t open automatically? Click below to open it again.
        </p>

        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappUrl(doctor.whatsapp, buildWhatsAppMessage())}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-navy-800"
          >
            <MessageCircle className="h-4 w-4" strokeWidth={2} aria-hidden="true" />
            Reopen WhatsApp
          </a>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition hover:border-cyan-400/40 hover:bg-cyan-50"
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
      className="relative overflow-hidden rounded-3xl border border-line bg-white p-6 shadow-card md:p-10"
      aria-labelledby="appointment-form-heading"
    >
      {/* Red top accent bar */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-red-500 via-red-500 to-cyan-400"
      />

      <h2
        id="appointment-form-heading"
        className="font-display text-2xl font-bold text-navy-900 md:text-3xl"
      >
        Request an appointment
      </h2>
      <p className="mt-2 text-sm text-ink-500 md:text-base">
        Fill in the details below. Your request will be sent directly to the
        clinic&rsquo;s WhatsApp. Fields marked with{" "}
        <span className="text-red-500">*</span> are required.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        <Field
          id="name"
          label="Full name"
          value={values.name}
          onChange={update("name")}
          error={errors.name}
          autoComplete="name"
          required
          placeholder="e.g. Ahmed Khan"
        />
        <Field
          id="phone"
          label="Phone number"
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
          label="Email (optional)"
          value={values.email}
          onChange={update("email")}
          error={errors.email}
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
        />
        <Field
          id="date"
          label="Preferred date"
          value={values.date}
          onChange={update("date")}
          error={errors.date}
          type="date"
          required
        />
        <Field
          id="time"
          label="Preferred time (optional)"
          value={values.time}
          onChange={update("time")}
          type="time"
        />
        <div>
          <label
            htmlFor="type"
            className="block text-xs font-bold uppercase tracking-[0.14em] text-ink-400"
          >
            Consultation type
          </label>
          <select
            id="type"
            name="type"
            value={values.type}
            onChange={update("type")}
            className="mt-2 w-full rounded-2xl border border-line bg-cream-50 px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-cyan-500/60 focus:bg-white"
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
            className="block text-xs font-bold uppercase tracking-[0.14em] text-ink-400"
          >
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={values.message}
            onChange={update("message")}
            placeholder="Briefly describe the reason for your visit."
            className="mt-2 w-full resize-none rounded-2xl border border-line bg-cream-50 px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-cyan-500/60 focus:bg-white"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-red"
        >
          <Send
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            strokeWidth={2}
            aria-hidden="true"
          />
          Book Appointment via WhatsApp
        </button>

        {doctor.phone ? (
          <a
            href={`tel:${doctor.phoneRaw || doctor.phone}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition hover:border-cyan-400/40 hover:bg-cyan-50"
          >
            <CalendarHeart className="h-4 w-4 text-cyan-600" strokeWidth={2} aria-hidden="true" />
            Call Clinic Instead
          </a>
        ) : null}
      </div>

      <p className="mt-6 text-xs leading-relaxed text-ink-400">
        Your information is used only to process this appointment request. It
        is not stored on this website.
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
  const requiredMark = required ? <span className="text-red-500"> *</span> : null;

  return (
    <div>
      <label
        htmlFor={id}
        className="block text-xs font-bold uppercase tracking-[0.14em] text-ink-400"
      >
        {label}
        {requiredMark}
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
        className={`mt-2 w-full rounded-2xl border bg-cream-50 px-4 py-3 text-sm text-navy-900 outline-none transition focus:bg-white ${
          error
            ? "border-red-400/70 focus:border-red-500/70"
            : "border-line focus:border-cyan-500/60"
        }`}
      />
      {error ? (
        <p
          id={errId}
          className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-red-500"
        >
          <AlertCircle className="h-3.5 w-3.5" strokeWidth={2} aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Helpers to format date/time into friendly text                     */
/* ------------------------------------------------------------------ */

function formatDate(isoDate) {
  if (!isoDate) return "";
  try {
    const d = new Date(isoDate);
    return d.toLocaleDateString("en-GB", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return isoDate;
  }
}

function formatTime(time) {
  if (!time) return "";
  try {
    const [h, m] = time.split(":");
    const hour = parseInt(h, 10);
    const period = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 === 0 ? 12 : hour % 12;
    return `${hour12}:${m} ${period}`;
  } catch {
    return time;
  }
}