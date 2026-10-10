import { Award, BadgeCheck, BookOpen, Users } from "lucide-react";
import { doctor } from "@/data/doctor";
import Reveal from "@/components/Reveal";

export default function Qualifications() {
  const quals = doctor.qualifications || [];
  const certs = doctor.certifications || [];
  const memberships = doctor.memberships || [];
  const awards = doctor.awards || [];

  const hasAny =
    quals.length || certs.length || memberships.length || awards.length;

  if (!hasAny) return null;

  return (
    <section
      id="qualifications"
      aria-labelledby="qualifications-heading"
      className="relative overflow-hidden bg-cream-50 py-20 md:py-28"
    >
      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute -top-24 right-0 h-[400px] w-[400px] bg-blob-cyan opacity-50 blur-3xl" />
      </div>

      <div className="container-page">
        {/* Heading */}
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow">Qualifications</p>
            <h2
              id="qualifications-heading"
              className="mt-4 font-display text-h2 text-navy-900 balance"
            >
              Credentials and{" "}
              <span className="text-red-500">professional standing.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-ink-500 pretty md:text-lg">
              A record of medical education, certifications, and professional
              affiliations earned throughout a career in thoracic surgery.
            </p>
          </div>
        </Reveal>

        {/* Blocks */}
        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {quals.length ? (
            <Block icon={BookOpen} title="Medical Degrees" delay={0.05}>
              <ul className="space-y-6">
                {quals.map((q, i) => (
                  <li
                    key={`${q.degree}-${i}`}
                    className="border-t border-line pt-5 first:border-t-0 first:pt-0"
                  >
                    <p className="font-display text-lg font-bold text-navy-900">
                      {q.degree}
                    </p>
                    {q.institution ? (
                      <p className="mt-1.5 text-sm font-medium text-navy-600">
                        {q.institution}
                      </p>
                    ) : null}
                    {q.year ? (
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cyan-600">
                        {q.year}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}

          {certs.length ? (
            <Block icon={BadgeCheck} title="Certifications" delay={0.1}>
              <ul className="space-y-6">
                {certs.map((c, i) => (
                  <li
                    key={`${c.title}-${i}`}
                    className="border-t border-line pt-5 first:border-t-0 first:pt-0"
                  >
                    <p className="font-display text-lg font-bold text-navy-900">
                      {c.title}
                    </p>
                    {c.issuer ? (
                      <p className="mt-1.5 text-sm font-medium text-navy-600">
                        {c.issuer}
                      </p>
                    ) : null}
                    {c.year ? (
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cyan-600">
                        {c.year}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}

          {memberships.length ? (
            <Block icon={Users} title="Professional Memberships" delay={0.15}>
              <ul className="space-y-3">
                {memberships.map((m, i) => (
                  <li
                    key={`${m.name || m}-${i}`}
                    className="flex items-start gap-3 text-sm font-medium text-navy-700"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500"
                    />
                    <span>{m.name || m}</span>
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}

          {awards.length ? (
            <Block icon={Award} title="Awards & Recognition" delay={0.2}>
              <ul className="space-y-6">
                {awards.map((a, i) => (
                  <li
                    key={`${a.title}-${i}`}
                    className="border-t border-line pt-5 first:border-t-0 first:pt-0"
                  >
                    <p className="font-display text-lg font-bold text-navy-900">
                      {a.title}
                    </p>
                    {a.issuer ? (
                      <p className="mt-1.5 text-sm font-medium text-navy-600">
                        {a.issuer}
                      </p>
                    ) : null}
                    {a.year ? (
                      <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-cyan-600">
                        {a.year}
                      </p>
                    ) : null}
                  </li>
                ))}
              </ul>
            </Block>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

function Block({ icon: Icon, title, children, delay = 0 }) {
  return (
    <Reveal delay={delay} y={20}>
      <div className="group relative h-full overflow-hidden rounded-2xl border border-line bg-white p-7 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:shadow-card md:p-8">
        {/* Red top accent bar */}
        <span
          aria-hidden="true"
          className="absolute left-0 top-0 h-1 w-full bg-red-500 transition-all duration-300 group-hover:h-1.5"
        />

        {/* Header */}
        <div className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-50 text-cyan-600 transition-colors duration-300 group-hover:bg-cyan-500 group-hover:text-white">
            <Icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
          </span>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-600">
            {title}
          </h3>
        </div>

        {/* Content */}
        <div className="mt-6">{children}</div>
      </div>
    </Reveal>
  );
}