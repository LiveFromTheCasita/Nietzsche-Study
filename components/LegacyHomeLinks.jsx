"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const destinations = {
  "#start": "/lessons", "#lessons": "/lessons", "#development": "/works",
  "#themes": "/themes", "#theme-navigator": "/navigator", "#theme-web": "/themes#connections",
  "#editions": "/editions", "#principles": "/method", "#method": "/method", "#will-to-power": "/the-will-to-power",
};

export default function LegacyHomeLinks() {
  const router = useRouter();
  useEffect(() => {
    function followLegacyLink() {
      const hash = window.location.hash;
      const destination = hash.startsWith("#development-genealogy-")
        ? `/works/genealogy-of-morals${hash}` : destinations[hash];
      if (destination) router.replace(destination);
    }
    followLegacyLink();
    window.addEventListener("hashchange", followLegacyLink);
    return () => window.removeEventListener("hashchange", followLegacyLink);
  }, [router]);
  return null;
}
