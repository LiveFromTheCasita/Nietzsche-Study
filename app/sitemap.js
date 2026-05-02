import { getSiteUrl } from "../lib/site";

export default function sitemap() {
  const siteUrl = getSiteUrl();

  if (!siteUrl) return [];

  return [
    {
      url: `${siteUrl}/`,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/corpus`,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}
