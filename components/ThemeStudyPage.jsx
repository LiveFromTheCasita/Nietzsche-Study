import Link from "next/link";

import { relationTypes } from "../content/corpusData";
import { submittedPapersByTheme, themeMeta } from "../content/studyContent";
import { getWillToPowerPassagesForTheme } from "../content/willToPowerData";
import { getPassageById, getThemeById, getThemePassages, sortPassages, titleCase } from "../lib/corpus";

function RelationBadge({ relation }) {
  const info = relationTypes[relation] || { label: titleCase(relation) };
  return <span className={`relation-badge relation-badge--${relation}`}>{info.label}</span>;
}

function ThemeStat({ label, value }) {
  return (
    <div className="theme-study-stat">
      <span>{value}</span>
      <small>{label}</small>
    </div>
  );
}

function PassageReference({ passage, relation, relevance, index }) {
  return (
    <article className="theme-study-passage">
      <div className="theme-study-passage__index">{index}</div>
      <div>
        <div className="theme-study-passage__header">
          <h3>{passage.title}</h3>
          {relation ? <RelationBadge relation={relation} /> : null}
        </div>
        <p className="essential-card__citation">
          <em>{passage.work}</em> {passage.citation}
        </p>
        <p>{relevance || passage.summary}</p>
      </div>
    </article>
  );
}

export default function ThemeStudyPage({ theme }) {
  const meta = themeMeta[theme.id] || {};
  const passages = sortPassages(getThemePassages(theme), "readingOrder");
  const essentialPassages = theme.essentialPassageIds
    .map((id) => {
      const linkedPassage = passages.find((passage) => passage.id === id);
      return linkedPassage || getPassageById(id);
    })
    .filter(Boolean);
  const corePassageCount = passages.filter((passage) => passage.relation === "core").length;
  const submittedPapers = submittedPapersByTheme[theme.id] || [];
  const willToPowerReferences = getWillToPowerPassagesForTheme(theme.id);
  const relatedThemes = (meta.relatedThemeIds || [])
    .map((themeId) => getThemeById(themeId))
    .filter(Boolean);

  const counts = {
    all: passages.length,
    core: corePassageCount,
    essential: essentialPassages.length,
    papers: submittedPapers.length,
  };

  return (
    <main className="theme-study-page">
      <a href="#content" className="skip-link">
        Skip to content
      </a>

      <nav className="site-nav">
        <div className="site-nav__inner">
          <Link href="/" className="site-nav__brand">
            Nietzsche Study
          </Link>
          <div className="site-nav__links">
            <Link href="/themes">Themes</Link>
            <Link href="/the-will-to-power">Will to Power</Link>
            <Link href="/#theme-navigator">Navigator</Link>
            <Link href="/#lessons">Lessons</Link>
          </div>
        </div>
      </nav>

      <section className="theme-study-hero">
        <div className="theme-study-hero__inner">
          <div className="theme-study-hero__copy">
            <Link href="/themes" className="text-link">
              Back to all themes
            </Link>
            <div className="chip-row">
              <span className="meta-chip meta-chip--amber">{theme.category}</span>
              {meta.difficulty ? <span className="meta-chip">{meta.difficulty}</span> : null}
              {meta.period ? <span className="meta-chip">{meta.period}</span> : null}
            </div>
            <h1>{theme.title}</h1>
            <p className="theme-study-lede">{theme.overview}</p>
          </div>

          <aside className="theme-study-summary" aria-label="Theme summary">
            <p className="section-kicker">Study Guide</p>
            {meta.question ? (
              <div className="theme-study-summary__block">
                <h2>Key problem</h2>
                <p>{meta.question}</p>
              </div>
            ) : null}
            <div className="theme-study-stats">
              <ThemeStat label="passages indexed" value={counts.all} />
              <ThemeStat label="core passages" value={counts.core} />
              <ThemeStat label="essential path" value={counts.essential} />
              <ThemeStat label="papers" value={counts.papers} />
            </div>
            {meta.misreading ? (
              <div className="callout callout--amber">
                <strong>Misreading to avoid:</strong> {meta.misreading}
              </div>
            ) : null}
          </aside>
        </div>
      </section>

      <div id="content" className="theme-study-content">
        <section className="theme-study-section theme-study-section--split">
          <div className="theme-study-section__intro">
            <p className="section-kicker">Essential Path</p>
            <h2>Read these first.</h2>
            <p>
              The essential sequence gives the shortest reliable route into this theme before widening into the
              full corpus list.
            </p>
          </div>

          <div className="theme-study-list">
            {essentialPassages.map((passage, index) => (
              <PassageReference
                key={passage.id}
                passage={passage}
                relation={passage.relation || "core"}
                relevance={passage.relevance}
                index={index + 1}
              />
            ))}
          </div>
        </section>

        {willToPowerReferences.length > 0 ? (
          <section className="theme-study-section theme-study-section--network">
            <div className="theme-study-section__intro">
              <p className="section-kicker">The Will to Power</p>
              <h2>Notebook cross-references.</h2>
              <p>
                These related sections come from the posthumous compilation and should be read as Nachlass
                material beside the finished works above.
              </p>
              <Link href="/the-will-to-power" className="button button--secondary">
                Open the work guide
              </Link>
            </div>

            <div className="wtp-theme-reference-grid">
              {willToPowerReferences.map((reference) => (
                <Link
                  key={reference.id}
                  href={`/the-will-to-power#${reference.id}`}
                  className="theme-study-panel wtp-theme-reference"
                >
                  <span className="meta-chip">{reference.citation}</span>
                  <h3>{reference.title}</h3>
                  <p>{reference.summary}</p>
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        <section className="theme-study-section">
          <div className="theme-study-section__intro">
            <p className="section-kicker">Developmental Arc</p>
            <h2>How the problem changes.</h2>
          </div>

          <div className="theme-study-arc">
            {theme.developmentalArc.map((phase) => (
              <article key={phase.phase} className="theme-study-arc__card">
                <h3>{phase.phase}</h3>
                <p>{phase.description}</p>
                <div className="theme-study-mini-list">
                  {phase.representativePassageIds.map((id) => {
                    const passage = getPassageById(id);
                    if (!passage) return null;

                    return (
                      <div key={id} className="arc-reference">
                        <span>{passage.title}</span>
                        <small>
                          {passage.work} {passage.citation}
                        </small>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="theme-study-section theme-study-section--network">
          <div className="theme-study-section__intro">
            <p className="section-kicker">Concept Net</p>
            <h2>Nearby names and related themes.</h2>
          </div>

          <div className="theme-study-network">
            <div className="theme-study-panel">
              <h3>Related concepts</h3>
              <div className="concept-cloud">
                {theme.relatedConcepts.map((concept) => (
                  <span key={concept} className="meta-chip">
                    {concept}
                  </span>
                ))}
              </div>
            </div>

            <div className="theme-study-panel">
              <h3>Related themes</h3>
              <div className="theme-reference-list">
                {relatedThemes.map((relatedTheme) => (
                  <Link key={relatedTheme.id} href={`/themes/${relatedTheme.id}`} className="theme-reference">
                    <span>{relatedTheme.shortTitle || relatedTheme.title}</span>
                    <small>{relatedTheme.category}</small>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="theme-study-section theme-study-section--network">
          <div className="theme-study-section__intro">
            <p className="section-kicker">Submitted Papers</p>
            <h2>Student and research papers under this theme.</h2>
          </div>

          {submittedPapers.length === 0 ? (
            <div className="navigator-empty">No submitted papers have been added for this theme yet.</div>
          ) : (
            <div className="papers-grid">
              {submittedPapers.map((paper) => (
                <article key={paper.id} className="paper-card">
                  <div className="paper-card__header">
                    <h3>{paper.title}</h3>
                  </div>
                  {paper.summary ? <p>{paper.summary}</p> : null}
                  {paper.slug ? (
                    <div className="paper-card__actions">
                      <Link href={`/corpus/papers/${paper.slug}`} className="button button--ghost">
                        Read paper
                      </Link>
                    </div>
                  ) : null}
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
