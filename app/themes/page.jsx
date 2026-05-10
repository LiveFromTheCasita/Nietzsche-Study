import Link from "next/link";

import { themes } from "../../content/corpusData";
import { submittedPapersByTheme, themeMeta } from "../../content/studyContent";
import { getThemePassages } from "../../lib/corpus";
import { getSiteUrl, siteName } from "../../lib/site";

const siteUrl = getSiteUrl();
const ogImage = siteUrl ? `${siteUrl}/og-image.svg` : null;

export const metadata = {
  title: `Nietzsche Themes | ${siteName}`,
  description:
    "A directory of Nietzsche study themes, including nihilism, ressentiment, eternal recurrence, will to power, perspectivism, and revaluation.",
  alternates: {
    canonical: "/themes",
  },
  openGraph: {
    title: "Nietzsche Themes",
    description:
      "A directory of focused Nietzsche theme guides with essential passages, developmental arcs, and related concepts.",
    type: "website",
    url: "/themes",
    siteName,
    ...(ogImage
      ? {
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: "Nietzsche Study theme directory",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "Nietzsche Themes",
    description: "Focused Nietzsche theme guides with essential passages, developmental arcs, and related concepts.",
    ...(ogImage ? { images: [ogImage] } : {}),
  },
};

export default function ThemesPage() {
  return (
    <main className="theme-study-page">
      <a href="#content" className="skip-link">
        Skip to content
      </a>

      <nav className="site-nav">
        <div className="site-nav__inner">
          <Link href="/corpus" className="site-nav__brand">
            Nietzsche Study
          </Link>
          <div className="site-nav__links">
            <Link href="/corpus">Corpus</Link>
            <Link href="/corpus#theme-navigator">Navigator</Link>
            <Link href="/corpus#lessons">Lessons</Link>
          </div>
        </div>
      </nav>

      <section className="theme-study-hero">
        <div className="theme-study-hero__inner">
          <div className="theme-study-hero__copy">
            <Link href="/corpus" className="text-link">
              Back to corpus
            </Link>
            <div className="chip-row">
              <span className="meta-chip meta-chip--amber">Theme directory</span>
              <span className="meta-chip">{themes.length} guides</span>
            </div>
            <h1>Nietzsche Themes</h1>
            <p className="theme-study-lede">
              Focused guides for the site’s central Nietzschean problems. Each theme page stands on its own with
              a key question, essential path, developmental arc, core passages, related concepts, and papers where
              available.
            </p>
          </div>

          <aside className="theme-study-summary" aria-label="Theme directory summary">
            <p className="section-kicker">Study Routes</p>
            <div className="theme-study-summary__block">
              <h2>Use this as the map.</h2>
              <p>
                Start with a concept, then move into the corpus navigator when you want the full passage network.
              </p>
            </div>
            <Link href="/corpus#theme-navigator" className="button button--secondary">
              Open corpus navigator
            </Link>
          </aside>
        </div>
      </section>

      <div id="content" className="theme-study-content">
        <section className="theme-study-section">
          <div className="theme-grid">
            {themes.map((theme) => {
              const meta = themeMeta[theme.id] || {};
              const passageCount = getThemePassages(theme).length;
              const paperCount = (submittedPapersByTheme[theme.id] || []).length;

              return (
                <article key={theme.id} className="card theme-card">
                  <div className="theme-card__body">
                    <div className="card-header">
                      <div>
                        <h3>
                          <Link href={`/themes/${theme.id}`} className="theme-card__title-link">
                            {theme.title}
                          </Link>
                        </h3>
                        {meta.question ? <p className="theme-card__question">{meta.question}</p> : null}
                      </div>
                      <span className="meta-chip meta-chip--amber">{meta.tag || theme.category}</span>
                    </div>

                    <div className="chip-row">
                      {meta.period ? <span className="meta-chip">{meta.period}</span> : null}
                      {meta.difficulty ? <span className="meta-chip">{meta.difficulty}</span> : null}
                      <span className="meta-chip">{passageCount} passages</span>
                      {paperCount > 0 ? <span className="meta-chip">{paperCount} papers</span> : null}
                    </div>

                    <p>{theme.shortDescription}</p>

                    <Link href={`/themes/${theme.id}`} className="button button--primary button--full">
                      Read theme guide
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
