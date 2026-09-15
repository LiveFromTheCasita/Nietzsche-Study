export const siteName = "Nietzsche Study";

export const siteDescription =
  "A serious study site for reading Nietzsche across themes, passages, periods, and conceptual cross-references.";

export const siteKeywords = [
  "Nietzsche",
  "philosophy",
  "study guide",
  "corpus",
  "nihilism",
  "genealogy",
  "eternal recurrence",
  "ressentiment",
  "Zarathustra",
];

export function getSiteUrl() {
  const value =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    "https://www.thewilltopower.com";

  return (value.startsWith("http") ? value : `https://${value}`).replace(/\/$/, "");
}
