import { doctor } from "@/data/doctor";

export default function sitemap() {
  const base =
    doctor.seo?.siteUrl?.replace(/\/$/, "") || "https://example.com";
  const now = new Date();

  const routes = ["", "/about", "/services", "/appointment", "/contact"];

  return routes.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path === "/appointment" ? 0.9 : 0.7,
  }));
}