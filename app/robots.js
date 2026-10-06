import { doctor } from "@/data/doctor";

export default function robots() {
  const base =
    doctor.seo?.siteUrl?.replace(/\/$/, "") || "https://example.com";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
    ],
    sitemap: `${base}/sitemap.xml`,
    host: base,
  };
}