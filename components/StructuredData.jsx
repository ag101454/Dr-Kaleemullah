import { doctor } from "@/data/doctor";

export default function StructuredData() {
  const base =
    doctor.seo?.siteUrl?.replace(/\/$/, "") || "https://example.com";

  const physician = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: doctor.name,
    description: doctor.biography || doctor.seo?.defaultDescription,
    medicalSpecialty: doctor.specialization,
    url: base,
    telephone: doctor.phoneRaw || doctor.phone || undefined,
    email: doctor.email || undefined,
    image: `${base}/doctor/doctor-profile.jpg`,
    address: doctor.clinic
      ? {
          "@type": "PostalAddress",
          streetAddress: doctor.clinic.address || undefined,
          addressLocality: doctor.clinic.city || undefined,
          addressCountry: "PK",
        }
      : undefined,
    knowsLanguage: doctor.languages?.length ? doctor.languages : undefined,
    alumniOf: doctor.qualifications?.map((q) => ({
      "@type": "EducationalOrganization",
      name: q.institution,
    })),
    memberOf: doctor.memberships?.map((m) => ({
      "@type": "Organization",
      name: m.name || m,
    })),
    worksFor: doctor.clinic?.name
      ? {
          "@type": "Hospital",
          name: doctor.clinic.name,
          address: doctor.clinic.city,
        }
      : undefined,
  };

  const clinic = doctor.clinic?.name
    ? {
        "@context": "https://schema.org",
        "@type": "MedicalClinic",
        name: doctor.clinic.name,
        address: {
          "@type": "PostalAddress",
          streetAddress: doctor.clinic.address || undefined,
          addressLocality: doctor.clinic.city || undefined,
          addressCountry: "PK",
        },
        telephone: doctor.phoneRaw || doctor.phone || undefined,
        openingHours: doctor.clinic.hours?.length
          ? doctor.clinic.hours.map((h) => `${h.day} ${h.time}`)
          : undefined,
        url: base,
      }
    : null;

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: doctor.seo?.siteName || doctor.name,
    url: base,
    potentialAction: {
      "@type": "SearchAction",
      target: `${base}/?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const schemas = [physician, website, clinic].filter(Boolean);

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
          }}
        />
      ))}
    </>
  );
}