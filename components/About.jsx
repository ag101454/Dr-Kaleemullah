import Link from "next/link";
import {
  Award,
  CalendarHeart,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { whatsappUrl } from "@/lib/utils";
import DoctorPortrait from "@/components/DoctorPortrait";

export default function About() {
  if (!doctor.biography) return null;

  const wa = whatsappUrl(
    doctor.whatsapp,
    `Hello ${doctor.name}, I would like to book an appointment.`
  );

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="relative overflow-hidden bg-white py-14 md:py-28"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-32 right-0 h-72 w-72 bg-blob-cyan blur-3xl md:h-96 md:w-96" />
      </div>

      <div className="container-page grid items-center gap-10 md:grid-cols-12 md:gap-16">
        {/* Portrait — DESKTOP ONLY */}
        <div className="hidden md:col-span-5 md:order-2 md:block">
          <div className="relative mx-auto max-w-md">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-cyan-400/20 via-cyan-400/5 to-transparent blur-xl"
            />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line shadow-card">
              <DoctorPortrait
                src="/doctor/kaleem-portrait.jpg"
                alt={`Portrait of ${doctor.name}`}
                fallbackLabel="Portrait coming soon"
              />
            </div>
          </div>
        </div>

        {/* Copy */}
        <div className="md:col-span-7 md:order-1">
          <p className="eyebrow">About the Doctor</p>

          <h2
            id="about-heading"
            className="mt-4 font-display text-h2 text-navy-900 balance"
          >
            {doctor.name}
          </h2>

          <p className="mt-2 text-base font-medium text-navy-700 md:text-xl">
            {doctor.title}
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-ink-600 pretty md:mt-6 md:text-lg">
            {doctor.tagline}
          </p>

          {/* Chips */}
          <ul className="mt-6 flex flex-wrap gap-2 md:mt-8 md:gap-3">
            <Chip icon={Stethoscope}>{doctor.specialization}</Chip>
            {doctor.clinic?.city ? (
              <Chip icon={MapPin}>{doctor.clinic.city}</Chip>
            ) : null}
            {doctor.experience ? (
              <Chip icon={ShieldCheck}>
                {doctor.experience}+ years in practice
              </Chip>
            ) : null}
            {doctor.awards?.length ? (
              <Chip icon={Award}>{doctor.awards.length} Recognitions</Chip>
            ) : null}
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center md:mt-10">
            <Link
              href="/appointment"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-red-500 px-6 py-3.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-red-600 hover:shadow-red"
            >
              <CalendarHeart
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5"
                strokeWidth={2}
                aria-hidden="true"
              />
              Book Appointment
            </Link>

            {doctor.whatsapp ? (
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-white px-6 py-3.5 text-sm font-semibold text-navy-900 transition-all hover:border-cyan-400/50 hover:bg-cyan-50"
              >
                <MessageCircle
                  className="h-4 w-4 text-cyan-600 transition-transform group-hover:scale-110"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                WhatsApp
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function Chip({ icon: Icon, children }) {
  return (
    <li className="inline-flex items-center gap-1.5 rounded-full border border-line bg-cream-50 px-3 py-1.5 text-xs font-medium text-navy-800 transition hover:border-cyan-400/40 hover:bg-cyan-50 md:gap-2 md:px-4 md:py-2 md:text-sm">
      <Icon
        className="h-3.5 w-3.5 text-cyan-600 md:h-4 md:w-4"
        strokeWidth={2}
        aria-hidden="true"
      />
      {children}
    </li>
  );
}