"use client";

import React, { useMemo, useState } from "react";

import CorpusNavigator from "./CorpusNavigator";
import {
  aphorisms,
  beginnerReadingPath,
  editionNotes,
  periods,
  principles,
  startingPoints,
  studyTracks,
  themeMeta,
  themeWeb,
  worksShelf,
} from "../content/studyContent";
import { themes, works } from "../content/corpusData";
import { getPassageById } from "../lib/corpus";

const themeById = new Map(themes.map((theme) => [theme.id, theme]));

function getStudyTheme(themeId) {
  const theme = themeById.get(themeId);
  if (!theme) return null;
  return { ...theme, ...(themeMeta[theme.id] || {}) };
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function getPhaseLabel(period) {
  return period === "mature" ? "Late" : period.charAt(0).toUpperCase() + period.slice(1);
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`.trim()}>{children}</div>;
}

function SectionKicker({ children }) {
  return <p className="section-kicker">{children}</p>;
}

function ThemeNotes({ theme }) {
  const essentialPassages = theme.essentialPassageIds.map((id) => getPassageById(id)).filter(Boolean);

  return (
    <div className="theme-notes">
      <div className="notes-panel">
        <p className="notes-label">Reading path</p>
        <ol className="notes-list">
          {essentialPassages.map((passage, index) => (
            <li key={passage.id} className="notes-list__item">
              <span className="notes-index">{index + 1}</span>
              <div>
                <p className="notes-title">{passage.title}</p>
                <p className="notes-copy">
                  <em>{passage.work}</em> {passage.citation}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <div className="notes-panel">
        <p className="notes-label">Development</p>
        <ul className="notes-bullets">
          {theme.developmentalArc.map((phase) => (
            <li key={phase.phase}>
              <span className="notes-bullets__title">{phase.phase}</span>
              <span>{phase.description}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="callout callout--amber">
        <strong>Misreading to avoid:</strong> {theme.misreading}
      </div>
    </div>
  );
}

export default function NietzscheStudySite() {
  const [openThemeId, setOpenThemeId] = useState("death-of-god-nihilism");
  const [selectedNavigatorThemeId, setSelectedNavigatorThemeId] = useState("death-of-god-nihilism");
  const [selectedNavigatorTab, setSelectedNavigatorTab] = useState("overview");
  const [selectedWorkId, setSelectedWorkId] = useState(works[0]?.id ?? "");

  const studyThemes = useMemo(
    () => themes.map((theme) => ({ ...theme, ...(themeMeta[theme.id] || {}) })),
    []
  );
  const orderedWorks = useMemo(
    () => [...works].sort((left, right) => left.publicationOrder - right.publicationOrder),
    []
  );
  const selectedWork = orderedWorks.find((work) => work.id === selectedWorkId) || orderedWorks[0] || null;

  const openNavigatorTheme = (themeId, tab = "overview") => {
    if (!themeId) return;
    setOpenThemeId(themeId);
    setSelectedNavigatorThemeId(themeId);
    setSelectedNavigatorTab(tab);
    scrollToSection("theme-navigator");
  };

  return (
    <main className="study-site">
      <a href="#content" className="skip-link">
        Skip to content
      </a>

      <nav className="site-nav">
        <div className="site-nav__inner">
          <a href="#top" className="site-nav__brand">
            Nietzsche Study
          </a>
          <div className="site-nav__links">
            <a href="#start">Start</a>
            <a href="#development">Development</a>
            <a href="#themes">Themes</a>
            <a href="#theme-web">Theme web</a>
            <a href="#lessons">Lessons</a>
          </div>
        </div>
      </nav>

      <section id="top" className="hero-shell">
        <div className="hero-shell__backdrop" />
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">A serious guide to Nietzsche, not a slogan machine</div>
            <h1 className="hero-title">
              Read Nietzsche as a provocation and a discipline.
            </h1>
            <p className="hero-summary">
              A study hub for tracing Nietzsche’s movement from tragedy and art, through the free-spirit critique
              of morality, into the late philosophy of revaluation, eternal recurrence, and life-affirmation.
            </p>
            <div className="hero-actions">
              <a href="#start" className="button button--primary">
                Start here
              </a>
              <a href="#themes" className="button button--secondary">
                Explore themes
              </a>
            </div>
          </div>

          <aside className="quote-panel" aria-label="Selected Nietzsche aphorisms">
            <div className="quote-panel__header">
              <span className="quote-mark">❝</span>
              <span>Aphorism desk</span>
            </div>
            <div className="quote-stack">
              {aphorisms.map((item) => (
                <figure key={item.source} className="quote-card">
                  <blockquote>{item.line}</blockquote>
                  <figcaption>{item.source}</figcaption>
                </figure>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <div id="content">
        <section id="start" className="content-section section-border">
          <div className="section-inner">
            <div className="section-header">
              <SectionKicker>Start here</SectionKicker>
              <h2>Choose the door that matches your purpose.</h2>
            </div>

            <div className="card-grid card-grid--three">
              {startingPoints.map((item) => (
                <Card key={item.title} className="card--padded">
                  <div className="card-header">
                    <h3>{item.title}</h3>
                    <span className="meta-chip">{item.marker}</span>
                  </div>
                  <p>{item.instruction}</p>
                </Card>
              ))}
            </div>

            <div className="feature-panel">
              <div className="feature-panel__header">
                <div>
                  <p className="feature-panel__label">Beginner reading path</p>
                  <h3>A five-step route into the main problem.</h3>
                </div>
                <a href="#lessons" className="text-link">
                  Turn this into lessons
                </a>
              </div>

              <div className="step-grid">
                {beginnerReadingPath.map((item, index) => (
                  <div key={item.reading} className="step-card">
                    <div className="step-card__header">
                      <span className="step-card__index">{index + 1}</span>
                      <p>{item.step}</p>
                    </div>
                    <h3>{item.reading}</h3>
                    <p>{item.purpose}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="development" className="content-section">
          <div className="section-inner">
            <div className="section-header section-header--split">
              <div>
                <SectionKicker>Development &amp; Works</SectionKicker>
                <h2>Nietzsche changes. Track the movement through the books.</h2>
              </div>
              <p className="section-sidecopy">
                The same term can mean different things across the early, middle, and late works. Good reading
                begins by locating the period.
              </p>
            </div>

            <div className="period-grid">
              {periods.map((period) => (
                <Card key={period.name} className="period-card">
                  <div className={`period-card__bar period-card__bar--${period.accent}`} />
                  <div className="period-card__body">
                    <div className="card-header">
                      <h3>{period.name}</h3>
                      <span className="meta-chip">{period.years}</span>
                    </div>
                    <p>{period.focus}</p>
                    <div className="period-question">{period.question}</div>
                    <p className="fine-print">{period.works}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="feature-panel">
              <div className="feature-panel__header">
                <div>
                  <p className="feature-panel__label">Works in order</p>
                  <h3>Read the books chronologically.</h3>
                </div>
                <p className="section-sidecopy">
                  Click a work to see its phase, its central concern, and why it matters in the sequence.
                </p>
              </div>

              <div className="works-grid">
                {orderedWorks.map((work) => (
                  <button
                    key={work.id}
                    type="button"
                    className={`navigator-theme-button ${selectedWork?.id === work.id ? "navigator-theme-button--active" : ""}`}
                    onClick={() => setSelectedWorkId(work.id)}
                  >
                    <div className="navigator-theme-button__header">
                      <h3>
                        {work.publicationOrder}. {work.title}
                      </h3>
                      <span>{getPhaseLabel(work.period)}</span>
                    </div>
                    <p className="navigator-theme-button__category">Published {work.publicationYear}</p>
                    <p className="navigator-theme-button__summary">{worksShelf[work.id]?.note}</p>
                  </button>
                ))}
              </div>

              {selectedWork && (
                <Card className="card--padded">
                  <div className="card-header">
                    <div>
                      <h3>{selectedWork.title}</h3>
                      <p className="fine-print">Published {selectedWork.publicationYear}</p>
                      <p>{worksShelf[selectedWork.id]?.note}</p>
                      <p className="fine-print">{worksShelf[selectedWork.id]?.edition}</p>
                    </div>
                    <span className="meta-chip">
                      {getPhaseLabel(selectedWork.period)} phase
                    </span>
                  </div>
                </Card>
              )}
            </div>
          </div>
        </section>

        <section id="themes" className="content-section section-border section-muted">
          <div className="section-inner">
            <div className="section-header">
              <div>
                <SectionKicker>Themes &amp; Navigator</SectionKicker>
                <h2>Map the themes, then open the passages.</h2>
                <p className="section-copy">
                  Use the theme cards to orient yourself, then jump straight into the passage-based navigator for
                  the full route through the corpus.
                </p>
              </div>
            </div>

            <div className="theme-grid">
              {studyThemes.map((theme) => {
                const isOpen = openThemeId === theme.id;

                return (
                  <Card key={theme.id} className="theme-card">
                    <div className="theme-card__body">
                      <div className="card-header">
                        <div>
                          <h3>{theme.title}</h3>
                          <p className="theme-card__question">{theme.question}</p>
                        </div>
                        <span className="meta-chip meta-chip--amber">{theme.tag}</span>
                      </div>

                      <div className="chip-row">
                        <span className="meta-chip">{theme.period}</span>
                        <span className="meta-chip">{theme.difficulty}</span>
                      </div>

                      <p>{theme.shortDescription}</p>

                      <button
                        type="button"
                        className="button button--ghost button--full"
                        onClick={() => setOpenThemeId(isOpen ? "" : theme.id)}
                      >
                        {isOpen ? "Hide study notes" : "Open study notes"}
                      </button>

                      {isOpen && <ThemeNotes theme={theme} />}

                      <button
                        type="button"
                        className="button button--primary button--full"
                        onClick={() => openNavigatorTheme(theme.id, "overview")}
                      >
                        Open in theme navigator
                      </button>
                    </div>
                  </Card>
                );
              })}
            </div>

            <div id="theme-navigator" className="section-inner theme-navigator-shell">
              <div className="section-header section-header--split theme-navigator-header">
                <div>
                  <SectionKicker>Theme navigator</SectionKicker>
                  <h2>Move from theme to passage to cross-reference.</h2>
                </div>
                <p className="section-sidecopy">
                  Choose a theme, open the essential path, then widen into the full corpus view and development arc.
                </p>
              </div>

              <CorpusNavigator
                initialThemeId={selectedNavigatorThemeId}
                initialTab={selectedNavigatorTab}
                showHero={false}
              />
            </div>
          </div>
          </section>

        <section id="theme-web" className="content-section section-border section-muted">
          <div className="section-inner">
            <div className="section-header section-header--split">
              <div>
                <SectionKicker>Theme web</SectionKicker>
                <h2>Nietzsche’s ideas do not stand alone.</h2>
              </div>
              <p className="section-sidecopy">
                This turns the site from a list of topics into a conceptual map. Each node shows how one problem pulls other problems into its orbit.
              </p>
            </div>

            <div className="theme-web-grid">
              {themeWeb.map((node) => {
                const centerTheme = getStudyTheme(node.centerThemeId);
                return (
                  <Card key={node.centerThemeId} className="card--padded">
                    <p className="feature-panel__label">{node.idea}</p>
                    <h3>{centerTheme?.title}</h3>
                    <p>{node.note}</p>
                    <div className="theme-reference-list">
                      {node.connects.map((themeId) => {
                        const relatedTheme = getStudyTheme(themeId);
                        return relatedTheme ? (
                          <button
                            key={themeId}
                            type="button"
                            className="theme-reference"
                            onClick={() => openNavigatorTheme(themeId, "corpus")}
                          >
                            <span>{relatedTheme.title}</span>
                            <small>Open related passages</small>
                          </button>
                        ) : null;
                      })}
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="method" className="content-section">
          <div className="section-inner section-inner--split">
            <div>
              <SectionKicker>Method</SectionKicker>
              <h2>How to read without flattening him.</h2>
              <p className="section-copy">
                This site treats Nietzsche as a philosopher of culture, psychology, nihilism, self-overcoming, and life-affirmation. The goal is to resist the reduction of the books into detached quotations.
              </p>
            </div>

            <div className="principles-grid">
              {principles.map((principle, index) => (
                <Card key={principle} className="card--padded">
                  <div className="number-badge">{index + 1}</div>
                  <p>{principle}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="lessons" className="content-section section-border section-muted">
          <div className="section-inner">
            <div className="section-header">
              <SectionKicker>Lessons</SectionKicker>
              <h2>Three ways into Nietzsche.</h2>
              <p className="section-copy">
                Keep the lesson section lean by focusing on clear reading paths instead of format templates.
              </p>
            </div>

            <div className="card-grid card-grid--three">
              {studyTracks.map((track) => (
                <Card key={track.title} className="card--padded">
                  <div className="card-header">
                    <h3>{track.title}</h3>
                    <span className="meta-chip meta-chip--amber">{track.level}</span>
                  </div>
                  <p>{track.description}</p>
                  <div className="reading-list">
                    {track.readings.map((reading, index) => (
                      <div key={reading} className="reading-list__item">
                        <span className="reading-list__index">{index + 1}</span>
                        <span>{reading}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="editions" className="content-section">
          <div className="section-inner section-inner--split">
            <div>
              <SectionKicker>Edition notes</SectionKicker>
              <h2>Build accuracy into the site from the beginning.</h2>
              <p className="section-copy">
                This gives the public site scholarly discipline without making it feel dry or forbidding.
              </p>
            </div>

            <div className="principles-grid">
              {editionNotes.map((note, index) => (
                <Card key={note} className="card--padded">
                  <div className="number-badge">{index + 1}</div>
                  <p>{note}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__seal">⛰</div>
          <h2>The task is not to admire Nietzsche. It is to learn how to read him.</h2>
          <p>
            Follow the aphorisms, compare the periods, resist easy slogans, and keep asking what kind of life a value serves.
          </p>
          <a href="#start" className="button button--footer">
            Return to the beginning
          </a>
        </div>
      </footer>
    </main>
  );
}
