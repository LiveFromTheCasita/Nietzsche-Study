import { getSiteUrl } from "../lib/site";

export default function robots() {
  const siteUrl = getSiteUrl();

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    ...(siteUrl ? { sitemap: `${siteUrl}/sitemap.xml` } : {}),
  };
}
