import { doctor } from "@/data/doctor";

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
      className="container-page py-20 md:py-28"
    >
      <div className="max-w-2xl">
        <p className="eyebrow">Qualifications</p>
        <h2
          id="qualifications-heading"
          className="mt-5 font-display text-h2 text-ink-900 balance"
        >
          Credentials and{" "}
          <em className="not-italic text-teal-600">professional standing.</em>
        </h2>
      </div>

      <div className="mt-12 grid gap-10 md:grid-cols-2 md:gap-14">
        {quals.length ? (
          <Block title="Medical Degrees">
            <ul className="space-y-6">
              {quals.map((q, i) => (
                <li
                  key={`${q.degree}-${i}`}
                  className="border-t border-line pt-5 first:border-t-0 first:pt-0"
                >
                  <p className="font-display text-lg text-ink-900">
                    {q.degree}
                  </p>
                  <p className="mt-1 text-sm text-ink-500">
                    {[q.institution, q.year].filter(Boolean).join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </Block>
        ) : null}

        {certs.length ? (
          <Block title="Certifications">
            <ul className="space-y-6">
              {certs.map((c, i) => (
                <li
                  key={`${c.title}-${i}`}
                  className="border-t border-line pt-5 first:border-t-0 first:pt-0"
                >
                  <p className="font-display text-lg text-ink-900">
                    {c.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-500">
                    {[c.issuer, c.year].filter(Boolean).join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </Block>
        ) : null}

        {memberships.length ? (
          <Block title="Professional Memberships">
            <ul className="space-y-3">
              {memberships.map((m, i) => (
                <li
                  key={`${m.name || m}-${i}`}
                  className="text-sm text-ink-700"
                >
                  {m.name || m}
                </li>
              ))}
            </ul>
          </Block>
        ) : null}

        {awards.length ? (
          <Block title="Awards & Honors">
            <ul className="space-y-6">
              {awards.map((a, i) => (
                <li
                  key={`${a.title}-${i}`}
                  className="border-t border-line pt-5 first:border-t-0 first:pt-0"
                >
                  <p className="font-display text-lg text-ink-900">
                    {a.title}
                  </p>
                  <p className="mt-1 text-sm text-ink-500">
                    {[a.issuer, a.year].filter(Boolean).join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </Block>
        ) : null}
      </div>
    </section>
  );
}

function Block({ title, children }) {
  return (
    <div className="rounded-3xl border border-line bg-surface p-8">
      <h3 className="text-xs uppercase tracking-[0.16em] text-ink-400">
        {title}
      </h3>
      <div className="mt-6">{children}</div>
    </div>
  );
}9