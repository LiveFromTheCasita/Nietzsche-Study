import "./globals.css";

import { getSiteUrl, siteDescription, siteKeywords, siteName } from "../lib/site";

const siteUrl = getSiteUrl();

export const metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: siteKeywords,
  alternates: {
    canonical: "/corpus",
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  },
  ...(siteUrl
    ? {
        openGraph: {
          title: siteName,
          description: siteDescription,
          type: "website",
          url: "/corpus",
          siteName,
          images: [
            {
              url: "/og-image.svg",
              width: 1200,
              height: 630,
              alt: `${siteName} social preview`,
            },
          ],
        },
        twitter: {
          card: "summary_large_image",
          title: siteName,
          description: siteDescription,
          images: ["/og-image.svg"],
        },
      }
    : {}),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
