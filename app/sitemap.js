import { getSiteUrl } from "../lib/site";
import { themes } from "../content/corpusData";
import { getAllSubmittedPapers } from "../lib/papers";

export default function sitemap() {
  const siteUrl = getSiteUrl();

  if (!siteUrl) return [];

  const mainPages = [
    {
      url: `${siteUrl}/corpus`,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/themes`,
      changeFrequency: "weekly",
      priority: 0.95,
    },
  ];

  const themePages = themes.map((theme) => ({
    url: `${siteUrl}/themes/${theme.id}`,
    changeFrequency: "weekly",
    priority: 0.85,
  }));

  const paperPages = getAllSubmittedPapers()
    .filter((paper) => paper.slug)
    .map((paper) => ({
      url: `${siteUrl}/corpus/papers/${paper.slug}`,
      changeFrequency: "monthly",
      priority: 0.72,
    }));

  return [...mainPages, ...themePages, ...paperPages];
}
