import "./globals.css";

import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";

import GoogleAnalytics from "../components/GoogleAnalytics";
import { getSiteUrl, siteDescription, siteKeywords, siteName } from "../lib/site";

const siteUrl = getSiteUrl();
const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  ...(googleSiteVerification ? { verification: { google: googleSiteVerification } } : {}),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: siteKeywords,
  alternates: {
    canonical: "/",
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
          url: "/",
          siteName,
          images: [
            {
              url: "/opengraph-image",
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
          images: ["/opengraph-image"],
        },
      }
    : {}),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
        <GoogleAnalytics measurementId={gaMeasurementId} />
      </body>
    </html>
  );
}
