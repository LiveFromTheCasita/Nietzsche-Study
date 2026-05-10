import Link from "next/link";

import { themes } from "../../content/corpusData";
import {
  willToPowerBooks,
  willToPowerPassages,
  willToPowerReadingPrinciples,
  willToPowerSource,
} from "../../content/willToPowerData";
import { getPassageById } from "../../lib/corpus";
import { getSiteUrl, siteDescription, siteName } from "../../lib/site";

const siteUrl = getSiteUrl();
const ogImage = siteUrl ? `${siteUrl}/og-image.svg` : null;

export const metadata = {
  title: `The Will to Power | ${siteName}`,
  description:
    "A dedicated study guide to Nietzsche's posthumous The Will to Power, with theme-linked section references and reading cautions.",
  alternates: {
    canonical: "/the-will-to-power",
  },
  openGraph: {
    title: "The Will to Power",
    description:
      "A section-based guide to Nietzsche's posthumous compilation, read as Nachlass material and connected to the site's major themes.",
    type: "article",
    url: "/the-will-to-power",
    siteName,
    ...(ogImage
      ? {
          images: [
            {
              url: ogImage,
              width: 1200,
              height: 630,
              alt: "Nietzsche Study social preview",
            },
          ],
        }
      : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "The Will to Power",
    description: siteDescription,
    ...(ogImage ? { images: [ogImage] } : {}),
  },
};

const themeMap = new Map(themes.map((theme) => [theme.id, theme]));

function ThemeLinks({ themeIds }) {
  return (
    <div className="wtp-theme-links">
      {themeIds.map((themeId) => {
        const theme = themeMap.get(themeId);
        if (!theme) return null;

        return (
          <Link key={themeId} href={`/themes/${themeId}`} className="meta-chip meta-chip--amber">
            {theme.shortTitle || theme.title}
          </Link>
        );
      })}
    </div>
  );
}

function CompanionList({ passageIds }) {
  const companionPassages = passageIds.map((id) => getPassageById(id)).filter(Boolean);

  return (
    <div className="wtp-companions">
      <p className="notes-label">Read with</p>
      <div className="theme-study-mini-list">
        {companionPassages.map((passage) => (
          <div key={passage.id} className="arc-reference">
            <span>{passage.title}</span>
            <small>
              {passage.work} {passage.citation}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function WillToPowerPage() {
  return (
    <main className="theme-study-page wtp-page">
      <a href="#content" className="skip-link">
        Skip to content
      </a>

      <nav className="site-nav">
        <div className="site-nav__inner">
          <Link href="/" className="site-nav__brand">
            Nietzsche Study
          </Link>
          <div className="site-nav__links">
            <Link href="/">Corpus</Link>
            <Link href="/themes">Themes</Link>
            <Link href="/#theme-navigator">Navigator</Link>
            <Link href="/#lessons">Lessons</Link>
          </div>
        </div>
      </nav>

      <section className="theme-study-hero wtp-hero">
        <div className="theme-study-hero__inner">
          <div className="theme-study-hero__copy">
            <Link href="/" className="text-link">
              Back to Nietzsche Study
            </Link>
            <div className="chip-row">
              <span className="meta-chip meta-chip--amber">Posthumous compilation</span>
              <span className="meta-chip">Nachlass</span>
              <span className="meta-chip">Kaufmann / Hollingdale</span>
            </div>
            <h1>The Will to Power</h1>
            <p className="theme-study-lede">
              A dedicated guide to the book behind the domain name: influential, dangerous, and useful when read
              as notebook material rather than as Nietzsche's final system.
            </p>
          </div>

          <aside className="theme-study-summary" aria-label="The Will to Power summary">
            <p className="section-kicker">Work Guide</p>
            <div className="theme-study-summary__block">
              <h2>How this page treats the book</h2>
              <p>
                The Will to Power is organized here as a cross-reference map. Each selected section is tied back
                to the site's themes and to finished works where Nietzsche develops related problems.
              </p>
            </div>
            <div className="theme-study-stats">
              <div className="theme-study-stat">
                <span>4</span>
                <small>books in the compilation</small>
              </div>
              <div className="theme-study-stat">
                <span>{willToPowerPassages.length}</span>
                <small>mapped sections</small>
              </div>
              <div className="theme-study-stat">
                <span>{themes.length}</span>
                <small>site themes</small>
              </div>
              <div className="theme-study-stat">
                <span>1</span>
                <small>central caution</small>
              </div>
            </div>
            <div className="callout callout--amber">
              <strong>Reading caution:</strong> Treat this as a posthumous editorial arrangement, not as a book
              Nietzsche completed and authorized.
            </div>
          </aside>
        </div>
      </section>

      <div id="content" className="theme-study-content">
        <section className="theme-study-section theme-study-section--split">
          <div className="theme-study-section__intro">
            <p className="section-kicker">Orientation</p>
            <h2>Why give it its own page?</h2>
          </div>

          <div className="wtp-orientation-grid">
            {willToPowerReadingPrinciples.map((principle, index) => (
              <article key={principle} className="theme-study-panel">
                <div className="number-badge">{index + 1}</div>
                <p>{principle}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="theme-study-section">
          <div className="theme-study-section__intro">
            <p className="section-kicker">Book Map</p>
            <h2>The editorial structure.</h2>
            <p>
              The old table of contents is useful as a locator, provided the reader remembers that the arrangement
              belongs to the editors rather than to Nietzsche's finished plan.
            </p>
          </div>

          <div className="wtp-book-grid">
            {willToPowerBooks.map((book) => (
              <article key={book.title} className="theme-study-panel">
                <div className="card-header">
                  <h3>{book.title}</h3>
                  <span className="meta-chip">{book.range}</span>
                </div>
                <p>{book.focus}</p>
                <ThemeLinks themeIds={book.themeIds} />
              </article>
            ))}
          </div>
        </section>

        <section className="theme-study-section">
          <div className="theme-study-section__intro">
            <p className="section-kicker">Theme-Mapped Sections</p>
            <h2>Passages in conversation.</h2>
            <p>
              These entries do not reproduce the book. They give section references, interpretive summaries, and
              links into the site's existing themes.
            </p>
          </div>

          <div className="wtp-passage-grid">
            {willToPowerPassages.map((passage) => (
              <article key={passage.id} id={passage.id} className="wtp-passage-card">
                <div className="wtp-passage-card__header">
                  <div>
                    <p className="section-kicker">{passage.book}</p>
                    <h3>
                      {passage.citation}: {passage.title}
                    </h3>
                    <p className="fine-print">
                      {passage.part} | {passage.notebookDate}
                    </p>
                  </div>
                  <a href={`#${passage.id}`} className="meta-chip">
                    Link
                  </a>
                </div>

                <p>{passage.summary}</p>
                <div className="callout">
                  <strong>Why it matters:</strong> {passage.whyItMatters}
                </div>
                <ThemeLinks themeIds={passage.themeIds} />
                <CompanionList passageIds={passage.companionPassageIds} />
              </article>
            ))}
          </div>
        </section>

        <section className="theme-study-section theme-study-section--network">
          <div className="theme-study-section__intro">
            <p className="section-kicker">Source</p>
            <h2>Use the text, but cite with care.</h2>
          </div>

          <div className="theme-study-network">
            <div className="theme-study-panel">
              <h3>Internet Archive edition</h3>
              <p>
                The source linked here is the Walter Kaufmann and R. J. Hollingdale translation, edited by Walter
                Kaufmann. Use section numbers where possible so readers can compare editions.
              </p>
              <div className="theme-card__actions">
                <a href={willToPowerSource.archivePageUrl} className="button button--primary" target="_blank" rel="noreferrer">
                  Open Archive page
                </a>
                <a href={willToPowerSource.pdfUrl} className="button button--ghost" target="_blank" rel="noreferrer">
                  Open PDF
                </a>
              </div>
            </div>

            <div className="theme-study-panel">
              <h3>Best use on this site</h3>
              <p>
                Let The Will to Power serve as a thematic index to Nietzsche's late notebooks, then test each
                idea against the published works, the period, and the specific problem being studied.
              </p>
              <Link href="/themes" className="button button--secondary">
                Compare the themes
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
