"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function GoogleAnalytics({ measurementId }) {
  const pathname = usePathname();
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!isReady || !measurementId || typeof window.gtag !== "function") return;

    const search = window.location.search || "";
    window.gtag("config", measurementId, {
      page_path: `${pathname}${search}`,
    });
  }, [isReady, measurementId, pathname]);

  if (!measurementId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`}
        strategy="afterInteractive"
        onReady={() => setIsReady(true)}
      />
      <Script id="google-analytics-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
          window.gtag('js', new Date());
          window.gtag('config', ${JSON.stringify(measurementId)}, { send_page_view: false });
        `}
      </Script>
    </>
  );
}
