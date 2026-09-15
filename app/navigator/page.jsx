import { Suspense } from "react";
import CorpusNavigator from "../../components/CorpusNavigator";

export const metadata = {
  title: "Passage Navigator",
  description: "Explore Nietzsche by theme, work, period, and passage. Follow essential reading paths and save your place with shareable links.",
  alternates: { canonical: "/navigator" },
};

export default function NavigatorPage() {
  return (
    <main id="content" tabIndex={-1} className="navigator-route">
      <Suspense fallback={<div className="navigator-loading" role="status"><h1>Passage navigator</h1><p>Loading the passage index…</p></div>}>
        <CorpusNavigator />
      </Suspense>
    </main>
  );
}
