import { notFound } from "next/navigation";

import ThemeStudyPage from "../../../components/ThemeStudyPage";
import { themes } from "../../../content/corpusData";
import { themeMeta } from "../../../content/studyContent";
import { getSiteUrl, siteName } from "../../../lib/site";

export function generateStaticParams() {
  return themes.map((theme) => ({ slug: theme.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const theme = themes.find((item) => item.id === slug);

  if (!theme) {
    return {
      title: `Theme Not Found | ${siteName}`,
    };
  }

  const meta = themeMeta[theme.id] || {};
  const path = `/themes/${theme.id}`;
  const description = theme.shortDescription || theme.overview;
  const title = `${theme.shortTitle || theme.title} | Nietzsche Theme Guide`;
  const siteUrl = getSiteUrl();
  const ogImage = siteUrl ? `${siteUrl}/og-image.svg` : null;

  return {
    title,
    description,
    keywords: ["Nietzsche", theme.title, theme.shortTitle, theme.category, ...(theme.aliases || [])].filter(Boolean),
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url: path,
      siteName,
      ...(siteUrl
        ? {
            images: [
              {
                url: ogImage,
                width: 1200,
                height: 630,
                alt: `${theme.title} theme guide`,
              },
            ],
          }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(ogImage ? { images: [ogImage] } : {}),
    },
    other: meta.question ? { "study:question": meta.question } : undefined,
  };
}

export default async function ThemePage({ params }) {
  const { slug } = await params;
  const theme = themes.find((item) => item.id === slug);

  if (!theme) notFound();

  return <ThemeStudyPage theme={theme} />;
}
