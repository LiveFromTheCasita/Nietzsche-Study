"use client";

import React, { useMemo, useState } from "react";

import CorpusNavigator from "./CorpusNavigator";
import {
  aphorisms,
  beginnerReadingPath,
  deepDiveThemeIds,
  editionNotes,
  featuredThemeIds,
  lessonModes,
  periods,
  principles,
  startingPoints,
  studyTracks,
  themeMeta,
  themeWeb,
  worksShelf,
} from "../content/studyContent";
import { relationTypes, themes, works } from "../content/corpusData";
import { getLibraryPassages, getPassageById, sortLibraryPassages, titleCase } from "../lib/corpus";

const themeById = new Map(themes.map((theme) => [theme.id, theme]));

function getStudyTheme(themeId) {
  const theme = themeById.get(themeId);
  if (!theme) return null;
  return { ...theme, ...(themeMeta[theme.id] || {}) };
}

function scrollToSection(sectionId) {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function Pill({ children, active = false, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`pill ${active ? "pill--active" : ""}`}
    >
      {children}
    </button>
  );
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

function PassageLibraryCard({
  passage,
  expanded,
  onToggle,
  onOpenLibrary,
  onOpenNavigator,
  activeThemeId,
}) {
  const activeReference =
    activeThemeId !== "all"
      ? passage.themes.find((themeReference) => themeReference.themeId === activeThemeId) || null
      : null;
  const leadReference = activeReference || passage.themes[0];
  const connectedPassages = (passage.connectedPassageIds || [])
    .map((id) => getPassageById(id))
    .filter(Boolean);
  const visibleTags = expanded ? passage.tags || [] : (passage.tags || []).slice(0, 6);

  return (
    <article className={`library-card ${expanded ? "library-card--expanded" : ""}`}>
      <div className="library-card__header">
        <div>
          <div className="chip-row">
            <span className={`relation-badge relation-badge--${leadReference?.relation || passage.strongestRelation}`}>
              {relationTypes[leadReference?.relation || passage.strongestRelation]?.label || "Related"}
            </span>
            <span className="meta-chip">{passage.work}</span>
            <span className="meta-chip">{titleCase(passage.period)}</span>
            <span className="meta-chip">{passage.themeCount} themes</span>
          </div>
          <h3>{passage.title}</h3>
          <p className="passage-card__citation">
            <em>{passage.work}</em> {passage.citation}
          </p>
        </div>

        <button type="button" className="button button--ghost" onClick={onToggle}>
          {expanded ? "Hide details" : "Open card"}
        </button>
      </div>

      <p>{activeReference?.relevance || passage.summary}</p>

      <div className="chip-row chip-row--wide">
        {visibleTags.map((tag) => (
          <span key={tag} className="meta-chip">
            {tag}
          </span>
        ))}
      </div>

      {expanded && (
        <div className="library-card__details">
          <div className="library-detail">
            <h4>Why it matters</h4>
            <p>{leadReference?.relevance || passage.libraryRelevance}</p>
          </div>

          <div className="library-detail">
            <h4>Theme appearances</h4>
            <div className="theme-reference-list">
              {passage.themes.map((themeReference) => (
                <button
                  key={`${passage.id}-${themeReference.themeId}`}
                  type="button"
                  className="theme-reference"
                  onClick={() => onOpenLibrary(themeReference.themeId, passage.id)}
                >
                  <span>{themeReference.themeShortTitle}</span>
                  <small>{relationTypes[themeReference.relation]?.label || "Related"}</small>
                </button>
              ))}
            </div>
          </div>

          {!!connectedPassages.length && (
            <div className="library-detail">
              <h4>Connected passages</h4>
              <div className="connected-grid">
                {connectedPassages.map((connectedPassage) => (
                  <button
                    key={connectedPassage.id}
                    type="button"
                    className="connected-card connected-card--button"
                    onClick={() => onOpenLibrary(activeThemeId !== "all" ? activeThemeId : "all", connectedPassage.id)}
                  >
                    <span>{connectedPassage.title}</span>
                    <small>
                      {connectedPassage.work} {connectedPassage.citation}
                    </small>
                  </button>
                ))}
              </div>
            </div>
          )}

          <div className="library-detail">
            <h4>Status</h4>
            <p>{passage.status}</p>
          </div>

          <div className="library-actions">
            <button
              type="button"
              className="button button--secondary"
              onClick={() => onOpenNavigator(leadReference?.themeId || passage.primaryThemeId)}
            >
              Open primary theme in navigator
            </button>
          </div>
        </div>
      )}
    </article>
  );
}

export default function NietzscheStudySite() {
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");
  const [selectedDifficulty, setSelectedDifficulty] = useState("all");
  const [openThemeId, setOpenThemeId] = useState("death-of-god-nihilism");
  const [selectedNavigatorThemeId, setSelectedNavigatorThemeId] = useState("death-of-god-nihilism");
  const [libraryQuery, setLibraryQuery] = useState("");
  const [selectedLibraryThemeId, setSelectedLibraryThemeId] = useState("all");
  const [selectedLibraryWorkId, setSelectedLibraryWorkId] = useState("all");
  const [selectedLibraryPeriod, setSelectedLibraryPeriod] = useState("all");
  const [selectedLibraryRelation, setSelectedLibraryRelation] = useState("all");
  const [selectedLibrarySort, setSelectedLibrarySort] = useState("coverage");
  const [expandedLibraryPassageId, setExpandedLibraryPassageId] = useState("");

  const studyThemes = useMemo(
    () => themes.map((theme) => ({ ...theme, ...(themeMeta[theme.id] || {}) })),
    []
  );

  const tags = useMemo(
    () => ["all", ...Array.from(new Set(studyThemes.map((theme) => theme.tag).filter(Boolean)))],
    [studyThemes]
  );

  const difficulties = useMemo(
    () => ["all", ...Array.from(new Set(studyThemes.map((theme) => theme.difficulty).filter(Boolean)))],
    [studyThemes]
  );

  const featuredThemes = useMemo(
    () => featuredThemeIds.map(getStudyTheme).filter(Boolean),
    []
  );

  const deepDiveThemes = useMemo(
    () => deepDiveThemeIds.map(getStudyTheme).filter(Boolean),
    []
  );

  const libraryPassages = useMemo(() => getLibraryPassages(), []);

  const filteredThemes = studyThemes.filter((theme) => {
    const matchesTag = selectedTag === "all" || theme.tag === selectedTag;
    const matchesDifficulty = selectedDifficulty === "all" || theme.difficulty === selectedDifficulty;
    const searchable = [
      theme.title,
      theme.shortTitle,
      theme.tag,
      theme.period,
      theme.difficulty,
      theme.question,
      theme.shortDescription,
      theme.overview,
      ...(theme.aliases || []),
      ...(theme.relatedConcepts || []),
    ]
      .join(" ")
      .toLowerCase();

    return matchesTag && matchesDifficulty && searchable.includes(query.toLowerCase());
  });

  const filteredLibraryPassages = useMemo(() => {
    const queryValue = libraryQuery.trim().toLowerCase();

    const filtered = libraryPassages.filter((passage) => {
      const matchesTheme =
        selectedLibraryThemeId === "all" || passage.themeIds.includes(selectedLibraryThemeId);
      const matchesWork = selectedLibraryWorkId === "all" || passage.workId === selectedLibraryWorkId;
      const matchesPeriod = selectedLibraryPeriod === "all" || passage.period === selectedLibraryPeriod;
      const matchesRelation =
        selectedLibraryRelation === "all" ||
        passage.themes.some((themeReference) => themeReference.relation === selectedLibraryRelation);
      const matchesQuery =
        !queryValue ||
        [
          passage.title,
          passage.work,
          passage.citation,
          passage.summary,
          passage.libraryRelevance,
          ...(passage.tags || []),
          ...passage.themes.map((themeReference) => themeReference.themeTitle),
          ...passage.themes.map((themeReference) => themeReference.themeCategory),
        ]
          .join(" ")
          .toLowerCase()
          .includes(queryValue);

      return matchesTheme && matchesWork && matchesPeriod && matchesRelation && matchesQuery;
    });

    return sortLibraryPassages(filtered, selectedLibrarySort);
  }, [
    libraryPassages,
    libraryQuery,
    selectedLibraryPeriod,
    selectedLibraryRelation,
    selectedLibrarySort,
    selectedLibraryThemeId,
    selectedLibraryWorkId,
  ]);

  const selectedLibraryTheme =
    selectedLibraryThemeId === "all" ? null : getStudyTheme(selectedLibraryThemeId);

  const libraryPeriods = useMemo(
    () => [...new Set(libraryPassages.map((passage) => passage.period))],
    [libraryPassages]
  );

  const openPassageLibrary = (themeId = "all", passageId = "") => {
    setSelectedLibraryThemeId(themeId || "all");
    setSelectedLibraryWorkId("all");
    setSelectedLibraryPeriod("all");
    setSelectedLibraryRelation("all");
    setSelectedLibrarySort(passageId ? "importance" : "coverage");
    setLibraryQuery("");
    setExpandedLibraryPassageId(passageId || "");
    scrollToSection("passage-library");
  };

  const openNavigatorTheme = (themeId) => {
    if (!themeId) return;
    setSelectedNavigatorThemeId(themeId);
    scrollToSection("corpus-navigator");
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
            <a href="#corpus-navigator">Navigator</a>
            <a href="#passage-library">Passages</a>
            <a href="#deep-dive">Deep dive</a>
            <a href="#theme-web">Theme web</a>
            <a href="#lessons">Lessons</a>
            <a href="#works">Works</a>
          </div>
        </div>
      </nav>

      <section id="top" className="hero-shell">
        <div className="hero-shell__backdrop" />
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow">A serious guide to Nietzsche, not a slogan machine</div>
            <h1 className="hero-title">
              Read Nietzsche as a problem, a provocation, and a discipline.
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
                <SectionKicker>Development</SectionKicker>
                <h2>Nietzsche changes. Track the movement.</h2>
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
          </div>
        </section>

        <section id="themes" className="content-section section-border section-muted">
          <div className="section-inner">
            <div className="section-header section-header--grid">
              <div>
                <SectionKicker>Themes</SectionKicker>
                <h2>A map of Nietzsche’s central problems.</h2>
                <p className="section-copy">
                  Each theme includes a guiding question, a compact interpretation, a deliberate reading path,
                  its development across the corpus, and a misreading to avoid.
                </p>
                <p className="section-count">
                  Showing {filteredThemes.length} of {studyThemes.length} themes.
                </p>
              </div>

              <div className="filter-toolbar">
                <label className="sr-only" htmlFor="theme-search">
                  Search themes, works, and sections
                </label>
                <div className="search-wrap">
                  <input
                    id="theme-search"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    placeholder="Search nihilism, Genealogy, truth, recurrence..."
                    className="search-field"
                  />
                  {query && (
                    <button type="button" className="search-clear" onClick={() => setQuery("")}>
                      Clear
                    </button>
                  )}
                </div>

                <div>
                  <p className="pill-label">Filter by family</p>
                  <div className="pill-row">
                    {tags.map((tag) => (
                      <Pill key={tag} active={selectedTag === tag} onClick={() => setSelectedTag(tag)}>
                        {tag}
                      </Pill>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="pill-label">Filter by difficulty</p>
                  <div className="pill-row">
                    {difficulties.map((difficulty) => (
                      <Pill
                        key={difficulty}
                        active={selectedDifficulty === difficulty}
                        onClick={() => setSelectedDifficulty(difficulty)}
                      >
                        {difficulty}
                      </Pill>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-panel feature-panel--compact">
              <p className="feature-panel__label">Core cluster</p>
              <div className="pill-grid">
                {featuredThemes.map((theme) => (
                  <button
                    key={theme.id}
                    type="button"
                    className="cluster-card"
                    onClick={() => {
                      setOpenThemeId(theme.id);
                      setSelectedTag("all");
                      setSelectedDifficulty("all");
                      setQuery("");
                    }}
                  >
                    <span>{theme.title}</span>
                    <small>{theme.tag}</small>
                  </button>
                ))}
              </div>
            </div>

            {filteredThemes.length === 0 ? (
              <Card className="empty-state">
                <h3>No matching themes.</h3>
                <p>Try searching for nihilism, Genealogy, truth, affirmation, or recurrence.</p>
              </Card>
            ) : (
              <div className="theme-grid">
                {filteredThemes.map((theme) => {
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
                          className="button button--secondary button--full"
                          onClick={() => openPassageLibrary(theme.id)}
                        >
                          Open in passage library
                        </button>

                        <button
                          type="button"
                          className="button button--primary button--full"
                          onClick={() => openNavigatorTheme(theme.id)}
                        >
                          Open in corpus navigator
                        </button>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        <section id="corpus-navigator" className="content-section">
          <div className="section-inner">
            <div className="section-header section-header--split">
              <div>
                <SectionKicker>Corpus navigator</SectionKicker>
                <h2>Move from theme to passage to cross-reference.</h2>
              </div>
              <p className="section-sidecopy">
                The normalized corpus engine stays intact here: choose a theme, open the essential path, then widen into the full passage list and development arc.
              </p>
            </div>

            <CorpusNavigator
              initialThemeId={selectedNavigatorThemeId}
              showHero={false}
              onOpenPassageLibrary={({ themeId, passageId }) => openPassageLibrary(themeId, passageId)}
            />
          </div>
        </section>

        <section id="passage-library" className="content-section section-border section-muted">
          <div className="section-inner">
            <div className="section-header section-header--split">
              <div>
                <SectionKicker>Passage library</SectionKicker>
                <h2>Make the passages themselves searchable.</h2>
              </div>
              <p className="section-sidecopy">
                This is the site-wide passage layer: filter by theme, work, period, or relation, then open a passage card to see why it matters and where else it appears.
              </p>
            </div>

            <div className="feature-panel feature-panel--compact">
              <div className="library-toolbar">
                <div className="search-wrap">
                  <input
                    value={libraryQuery}
                    onChange={(event) => setLibraryQuery(event.target.value)}
                    placeholder="Search madman, ressentiment, Zarathustra, guilt..."
                    className="search-field"
                  />
                  {libraryQuery && (
                    <button type="button" className="search-clear" onClick={() => setLibraryQuery("")}>
                      Clear
                    </button>
                  )}
                </div>

                <select
                  value={selectedLibraryThemeId}
                  onChange={(event) => setSelectedLibraryThemeId(event.target.value)}
                  className="navigator-select"
                >
                  <option value="all">All themes</option>
                  {studyThemes.map((theme) => (
                    <option key={theme.id} value={theme.id}>
                      {theme.shortTitle || theme.title}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLibraryWorkId}
                  onChange={(event) => setSelectedLibraryWorkId(event.target.value)}
                  className="navigator-select"
                >
                  <option value="all">All works</option>
                  {works.map((work) => (
                    <option key={work.id} value={work.id}>
                      {work.title}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLibraryPeriod}
                  onChange={(event) => setSelectedLibraryPeriod(event.target.value)}
                  className="navigator-select"
                >
                  <option value="all">All periods</option>
                  {libraryPeriods.map((period) => (
                    <option key={period} value={period}>
                      {titleCase(period)}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLibraryRelation}
                  onChange={(event) => setSelectedLibraryRelation(event.target.value)}
                  className="navigator-select"
                >
                  <option value="all">All relations</option>
                  {Object.entries(relationTypes).map(([key, value]) => (
                    <option key={key} value={key}>
                      {value.label}
                    </option>
                  ))}
                </select>

                <select
                  value={selectedLibrarySort}
                  onChange={(event) => setSelectedLibrarySort(event.target.value)}
                  className="navigator-select"
                >
                  <option value="coverage">Sort: Theme coverage</option>
                  <option value="importance">Sort: Importance</option>
                  <option value="workOrder">Sort: Work order</option>
                  <option value="alphabetical">Sort: Alphabetical</option>
                </select>
              </div>

              <div className="results-meta">
                <span>
                  {filteredLibraryPassages.length} of {libraryPassages.length} indexed passages shown
                </span>
                <span>
                  {selectedLibraryTheme
                    ? `Focused on ${selectedLibraryTheme.shortTitle || selectedLibraryTheme.title}`
                    : "Viewing all themes"}
                </span>
              </div>
            </div>

            {selectedLibraryTheme && (
              <div className="callout callout--amber">
                <strong>Theme focus:</strong> {selectedLibraryTheme.title}. The library is currently filtered to passages that appear inside this theme.
              </div>
            )}

            {filteredLibraryPassages.length === 0 ? (
              <Card className="empty-state">
                <h3>No matching passages.</h3>
                <p>Try loosening the filters or searching by work title, concept, or section number.</p>
              </Card>
            ) : (
              <div className="library-list">
                {filteredLibraryPassages.map((passage) => (
                  <PassageLibraryCard
                    key={passage.id}
                    passage={passage}
                    expanded={expandedLibraryPassageId === passage.id}
                    activeThemeId={selectedLibraryThemeId}
                    onToggle={() =>
                      setExpandedLibraryPassageId((current) => (current === passage.id ? "" : passage.id))
                    }
                    onOpenLibrary={(themeId, passageId) => openPassageLibrary(themeId, passageId)}
                    onOpenNavigator={(themeId) => openNavigatorTheme(themeId)}
                  />
                ))}
              </div>
            )}
          </div>
        </section>

        <section id="deep-dive" className="content-section">
          <div className="section-inner">
            <div className="section-header">
              <SectionKicker>Theme deep dive</SectionKicker>
              <h2>The themes that need more room.</h2>
              <p className="section-copy">
                These are the strongest candidates for standalone pages with passage guides, vocabulary sections, and cross-reference maps.
              </p>
            </div>

            <div className="deep-dive-grid">
              {deepDiveThemes.map((theme) => (
                <Card key={theme.id} className="deep-dive-card">
                  <div className="deep-dive-card__header">
                    <div className="chip-row">
                      <span className="meta-chip meta-chip--amber">{theme.difficulty}</span>
                      <span className="meta-chip">{theme.period}</span>
                      <span className="meta-chip">{theme.tag}</span>
                    </div>
                    <h3>{theme.title}</h3>
                    <p>{theme.question}</p>
                  </div>

                  <div className="deep-dive-card__grid">
                    <div>
                      <p>{theme.overview}</p>
                      <div className="callout callout--amber">
                        <strong>Misreading to avoid:</strong> {theme.misreading}
                      </div>
                    </div>
                    <div>
                      <p className="notes-label">Close-reading route</p>
                      <ol className="notes-list">
                        {theme.essentialPassageIds
                          .map((id) => getPassageById(id))
                          .filter(Boolean)
                          .map((passage, index) => (
                            <li key={passage.id} className="notes-list__item notes-list__item--compact">
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
                  </div>
                </Card>
              ))}
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
                    <div className="chip-row chip-row--wide">
                      {node.connects.map((themeId) => {
                        const relatedTheme = getStudyTheme(themeId);
                        return relatedTheme ? <span key={themeId} className="meta-chip">{relatedTheme.title}</span> : null;
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
              <SectionKicker>Lesson mode</SectionKicker>
              <h2>Turn the study map into teachable lessons.</h2>
              <p className="section-copy">
                This prepares the site for your broader educational project: reading passages, guided questions, vocabulary, close-reading prompts, and level-based lesson design.
              </p>
            </div>

            <div className="card-grid card-grid--three">
              {lessonModes.map((mode) => (
                <Card key={mode.title} className="card--padded">
                  <div className="card-header">
                    <h3>{mode.title}</h3>
                    <span className="meta-chip meta-chip--amber">{mode.level}</span>
                  </div>
                  <p>{mode.description}</p>
                  <div className="mini-panel">
                    <p className="notes-label">Sample prompt</p>
                    <p>{mode.sample}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="reading" className="content-section">
          <div className="section-inner">
            <div className="section-header">
              <SectionKicker>Reading tracks</SectionKicker>
              <h2>Three ways into Nietzsche.</h2>
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

        <section id="works" className="content-section section-border section-muted">
          <div className="section-inner">
            <div className="section-header">
              <SectionKicker>Works shelf</SectionKicker>
              <h2>The corpus at a glance.</h2>
              <p className="section-copy">
                Use this shelf to place a passage before interpreting it. Nietzsche’s style changes because his problems change.
              </p>
            </div>

            <div className="works-grid">
              {works.map((work) => (
                <Card key={work.id} className="card--padded">
                  <div className="card-header">
                    <div>
                      <h3>{work.title}</h3>
                      <p>{worksShelf[work.id]?.note}</p>
                      <p className="fine-print">{worksShelf[work.id]?.edition}</p>
                    </div>
                    <span className="meta-chip">{work.period}</span>
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
