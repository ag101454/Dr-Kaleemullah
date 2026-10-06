import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BadgeCheck,
  Calendar,
  GraduationCap,
  Languages as LanguagesIcon,
  MapPin,
  MessageCircle,
  Quote,
  ShieldCheck,
  Users,
} from "lucide-react";
import { doctor } from "@/data/doctor";
import { whatsappUrl, telUrl } from "@/lib/utils";
import DoctorPortrait from "@/components/DoctorPortrait";
import Experience from "@/components/Experience";
import Qualifications from "@/components/Qualifications";

export const metadata = {
  title: "About",
  description: `Profile of ${doctor.name} — ${doctor.title}. Biography, qualifications, experience, and areas of practice.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About — ${doctor.name}`,
    description: `Profile of ${doctor.name} — ${doctor.title}.`,
    url: "/about",
  },
};

export default function AboutPage() {
  const wa = whatsappUrl(
    doctor.whatsapp,
    `Hello ${doctor.name}, I would like to book an appointment.`
  );

  return (
    <>
      {/* ---------- Header ---------- */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10"
        >
          <div className="absolute -top-24 -left-24 h-[24rem] w-[24rem] bg-blob-teal blur-2xl" />
          <div className="absolute top-1/4 -right-32 h-[22rem] w-[22rem] bg-blob-sand blur-2xl" />
        </div>

        <div className="container-page grid items-end gap-10 pt-10 pb-14 md:grid-cols-12 md:gap-14 md:pt-16 md:pb-20">
          <div className="md:col-span-7">
            <p className="eyebrow">About the Doctor</p>
            <h1 className="mt-5 font-display text-h1 text-ink-900 balance">
              {doctor.name}
            </h1>
            <p className="mt-4 text-lg text-ink-500 md:text-xl">
              <span className="text-ink-800">{doctor.title}</span>
            </p>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500 pretty">
              {doctor.tagline}
            </p>

            {/* Quick meta chips */}
            <ul className="mt-8 flex flex-wrap gap-2 text-sm text-ink-700">
              {doctor.specialization ? (
                <Chip icon={ShieldCheck}>{doctor.specialization}</Chip>
              ) : null}
              {doctor.clinic?.city ? (
                <Chip icon={MapPin}>{doctor.clinic.city}</Chip>
              ) : null}
              {doctor.experience ? (
                <Chip icon={Calendar}>
                  {doctor.experience}+ years in practice
                </Chip>
              ) : null}
              {doctor.languages?.length ? (
                <Chip icon={LanguagesIcon}>
                  {doctor.languages.join(" · ")}
                </Chip>
              ) : null}
            </ul>
          </div>

          {/* Portrait */}
          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-xs md:max-w-sm md:ml-auto">
              <div
                aria-hidden="true"
                className="absolute inset-0 -translate-x-4 translate-y-4 rounded-[1.75rem] border border-line-strong bg-cream-100/60"
              />
              <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] border border-line bg-gradient-to-br from-cream-100 via-cream-50 to-teal-50">
                <DoctorPortrait
                  src="/doctor/doctor-profile.jpg"
                  alt={`Portrait of ${doctor.name}`}
                  fallbackLabel="Portrait coming soon"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Biography ---------- */}
      {doctor.biography ? (
        <section
          aria-labelledby="bio-heading"
          className="container-page py-16 md:py-24"
        >
          <div className="grid gap-10 md:grid-cols-12 md:gap-14">
            <div className="md:col-span-4">
              <p className="eyebrow">Biography</p>
              <h2
                id="bio-heading"
                className="mt-5 font-display text-h2 text-ink-900 balance"
              >
                A practice rooted in{" "}
                <em className="not-italic text-teal-600">
                  clinical care & academic rigor.
                </em>
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-base leading-relaxed text-ink-700 pretty md:text-lg">
                {doctor.biography}
              </p>

              {/* Pull quote */}
              <div className="mt-10 rounded-3xl border border-line bg-surface p-7 md:p-9">
                <Quote
                  className="h-5 w-5 text-teal-600"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <p className="mt-4 font-display text-xl text-ink-900 balance md:text-2xl">
                  {doctor.tagline}
                </p>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      {/* ---------- Areas of expertise ---------- */}
      {doctor.expertise?.length ? (
        <section
          aria-labelledby="expertise-heading"
          className="container-page py-16 md:py-24"
        >
          <div className="max-w-2xl">
            <p className="eyebrow">Areas of Expertise</p>
            <h2
              id="expertise-heading"
              className="mt-5 font-display text-h2 text-ink-900 balance"
            >
              Focused clinical and academic work.
            </h2>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
            {doctor.expertise.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-line bg-surface p-5"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-teal-50 text-teal-600">
                  <BadgeCheck className="h-4 w-4" strokeWidth={2} />
                </span>
                <span className="text-sm text-ink-700">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* ---------- Experience timeline ---------- */}
      <Experience />

      {/* ---------- Qualifications + Certifications + Memberships + Awards ---------- */}
      <Qualifications />

      {/* ---------- Awards ---------- */}
      {doctor.awards?.length ? (
        <section
          aria-labelledby="awards-heading"
          className="container-page py-16 md:py-24"
        >
          <div className="max-w-2xl">
            <p className="eyebrow">Recognition</p>
            <h2
              id="awards-heading"
              className="mt-5 font-display text-h2 text-ink-900 balance"
            >
              Selections & acknowledgments.
            </h2>
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {doctor.awards.map((a, i) => (
              <li
                key={`${a.title}-${i}`}
                className="rounded-3xl border border-line bg-surface p-6"
              >
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-teal-50 text-teal-600">
                  <Award className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <p className="mt-5 font-display text-lg text-ink-900">
                  {a.title}
                </p>
                <p className="mt-1 text-sm text-ink-500">
                  {[a.issuer, a.year].filter(Boolean).join(" · ")}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* ---------- Memberships as full section ---------- */}
      {doctor.memberships?.length ? (
        <section
          aria-labelledby="memberships-heading"
          className="container-page py-16 md:py-24"
        >
          <div className="max-w-2xl">
            <p className="eyebrow">Professional Affiliations</p>
            <h2
              id="memberships-heading"
              className="mt-5 font-display text-h2 text-ink-900 balance"
            >
              Where the work happens.
            </h2>
          </div>

          <ul className="mt-10 divide-y divide-line-strong/60 border-y border-line-strong/60">
            {doctor.memberships.map((m, i) => (
              <li
                key={`${m.name || m}-${i}`}
                className="flex items-center gap-4 py-5"
              >
                <GraduationCap
                  className="h-5 w-5 text-teal-600"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <span className="text-sm text-ink-800 md:text-base">
                  {m.name || m}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* ---------- Final CTA ---------- */}
      <section className="container-page pt-8 pb-20 md:pt-12 md:pb-28">
        <div className="relative overflow-hidden rounded-[2rem] border border-line bg-gradient-to-br from-cream-100 via-cream-50 to-teal-50 p-8 md:p-14">
          <div className="grid gap-8 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="eyebrow">Next step</p>
              <h2 className="mt-4 font-display text-h2 text-ink-900 balance">
                Let&rsquo;s take the next step in your care.
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink-500 pretty md:text-base">
                Book a consultation or reach out directly — whichever is easier.
              </p>
            </div>
            <div className="md:col-span-4 md:justify-self-end">
              <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                <Link
                  href="/appointment"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink-900 px-6 py-3.5 text-sm font-medium text-cream-50 transition hover:bg-ink-800"
                >
                  Book an Appointment
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </Link>
                {doctor.whatsapp ? (
                  <a
                    href={wa}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3.5 text-sm font-medium text-ink-900 transition hover:border-teal-500/40 hover:bg-teal-50"
                  >
                    <MessageCircle
                      className="h-4 w-4 text-teal-600"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    WhatsApp
                  </a>
                ) : null}
                {doctor.phone ? (
                  <a
                    href={telUrl(doctor.phoneRaw || doctor.phone)}
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3.5 text-sm font-medium text-ink-900 transition hover:border-teal-500/40 hover:bg-teal-50"
                  >
                    <Users
                      className="h-4 w-4 text-teal-600"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                    Call Clinic
                  </a>
                ) : null}
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-10 border-t border-line pt-6">
            <Link
              href="/"
              className="group inline-flex items-center gap-2 text-sm text-ink-800 underline decoration-line-strong underline-offset-4 transition hover:decoration-teal-500"
            >
              <ArrowUpRight
                className="h-4 w-4 rotate-[-135deg] transition-transform group-hover:-translate-x-0.5"
                strokeWidth={2}
                aria-hidden="true"
              />
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ------------------------------------------------------------------ */

function Chip({ icon: Icon, children }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5">
      <Icon
        className="h-3.5 w-3.5 text-teal-600"
        strokeWidth={2}
        aria-hidden="true"
      />
      {children}
    </li>
  );
}