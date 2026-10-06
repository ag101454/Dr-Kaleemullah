import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { doctor } from "@/data/doctor";
import DoctorPortrait from "@/components/DoctorPortrait";
import Reveal from "@/components/Reveal";

export default function About() {
  const hasExpertise = doctor.expertise?.length > 0;
  const hasLanguages = doctor.languages?.length > 0;
  const hasMemberships = doctor.memberships?.length > 0;

  const hasContent =
    doctor.biography ||
    hasExpertise ||
    hasLanguages ||
    hasMemberships ||
    doctor.qualifications?.length;

  if (!hasContent) return null;

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="container-page py-20 md:py-28"
    >
      <div className="grid gap-12 md:grid-cols-12 md:gap-14">
        <Reveal className="md:col-span-5" y={24}>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm md:mx-0">
            <div
              aria-hidden="true"
              className="absolute inset-0 translate-x-4 translate-y-4 rounded-[1.75rem] border border-line-strong bg-cream-100/60"
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

          <div className="mt-10">
            <div className="rounded-2xl border border-line bg-surface/70 p-6">
              <Quote
                className="h-4 w-4 text-teal-600"
                strokeWidth={2}
                aria-hidden="true"
              />
              <p className="mt-3 font-display text-lg text-ink-900 balance">
                {doctor.tagline || "A patient-first approach to modern care."}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="md:col-span-7" delay={0.12} y={24}>
          <p className="eyebrow">About the Doctor</p>

          <h2
            id="about-heading"
            className="mt-5 font-display text-h2 text-ink-900 balance"
          >
            Care shaped by evidence,{" "}
            <em className="not-italic text-teal-600">
              delivered with empathy.
            </em>
          </h2>

          {doctor.biography ? (
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-500 pretty md:text-lg">
              {doctor.biography}
            </p>
          ) : null}

          <dl className="mt-10 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
            {hasExpertise ? (
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-ink-400">
                  Areas of Expertise
                </dt>
                <dd className="mt-3 space-y-1.5 text-sm text-ink-700">
                  {doctor.expertise.slice(0, 6).map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </dd>
              </div>
            ) : null}

            {hasLanguages ? (
              <div>
                <dt className="text-xs uppercase tracking-[0.14em] text-ink-400">
                  Languages
                </dt>
                <dd className="mt-3 space-y-1.5 text-sm text-ink-700">
                  {doctor.languages.map((lang) => (
                    <p key={lang}>{lang}</p>
                  ))}
                </dd>
              </div>
            ) : null}

            {hasMemberships ? (
              <div className="sm:col-span-2">
                <dt className="text-xs uppercase tracking-[0.14em] text-ink-400">
                  Professional Memberships
                </dt>
                <dd className="mt-3 space-y-1.5 text-sm text-ink-700">
                  {doctor.memberships.map((m) => (
                    <p key={m.name || m}>{m.name || m}</p>
                  ))}
                </dd>
              </div>
            ) : null}
          </dl>

          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              href="/about"
              className="group inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface px-6 py-3.5 text-sm font-medium text-ink-900 transition hover:border-teal-500/40 hover:bg-teal-50"
            >
              View Full Profile
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={2}
                aria-hidden="true"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}