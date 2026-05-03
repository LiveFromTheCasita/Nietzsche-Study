"use client";

import React, { useEffect, useMemo, useState } from "react";

import { relationTypes, themes } from "../content/corpusData";
import { getPassageById, getThemePassages, sortPassages, titleCase } from "../lib/corpus";

const createDefaultFilters = () => ({
  relation: "all",
  workId: "all",
  period: "all",
  query: "",
  sort: "importance",
});

export default function CorpusNavigator({
  initialThemeId = themes[0]?.id ?? "",
  initialTab = "overview",
  showHero = true,
}) {
  const [selectedThemeId, setSelectedThemeId] = useState(initialThemeId || themes[0]?.id || "");

  useEffect(() => {
    if (initialThemeId) {
      setSelectedThemeId(initialThemeId);
    }
  }, [initialThemeId]);
  const selectedTheme = themes.find((theme) => theme.id === selectedThemeId) || themes[0];

  return (
    <section className={`navigator-shell ${showHero ? "navigator-shell--page" : ""}`}>
      {showHero && (
        <header className="navigator-hero">
          <p className="navigator-hero__eyebrow">Nietzsche Corpus Navigator</p>
          <h1>Search a theme. Open the core path. Then enter the full corpus.</h1>
          <p>
            A passage-first study system for tracing Nietzschean themes across the corpus.
          </p>
        </header>
      )}

      <div className="navigator-layout">
        <aside className="navigator-sidebar">
          <p className="navigator-sidebar__label">Themes</p>

          <div className="navigator-sidebar__meta">
            <span>Themes</span>
            <span>{themes.length}</span>
          </div>

          <div className="navigator-theme-list">
            {themes.map((theme) => (
              <button
                key={theme.id}
                type="button"
                onClick={() => setSelectedThemeId(theme.id)}
                className={`navigator-theme-button ${theme.id === selectedTheme.id ? "navigator-theme-button--active" : ""}`}
              >
                <div className="navigator-theme-button__header">
                  <h3>{theme.shortTitle || theme.title}</h3>
                  <span>{theme.passageLinks.length}</span>
                </div>
                <p className="navigator-theme-button__category">{theme.category}</p>
                <p className="navigator-theme-button__summary">{theme.shortDescription}</p>
              </button>
            ))}
          </div>
        </aside>

        <main className="navigator-main">
          {selectedTheme ? <ThemePage theme={selectedTheme} initialTab={initialTab} /> : null}
        </main>
      </div>
    </section>
  );
}

function ThemePage({ theme, initialTab }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [filters, setFilters] = useState(createDefaultFilters);

  useEffect(() => {
    setActiveTab(initialTab);
    setFilters(createDefaultFilters());
  }, [theme.id, initialTab]);

  const themePassages = useMemo(() => getThemePassages(theme), [theme]);

  const passageLookup = useMemo(
    () => new Map(themePassages.map((passage) => [passage.id, passage])),
    [themePassages]
  );

  const essentialPassages = useMemo(
    () =>
      theme.essentialPassageIds
        .map((id) => passageLookup.get(id) || getPassageById(id))
        .filter(Boolean),
    [theme.essentialPassageIds, passageLookup]
  );

  const filteredPassages = useMemo(() => {
    let results = [...themePassages];
    const query = filters.query.trim().toLowerCase();

    if (filters.relation !== "all") results = results.filter((passage) => passage.relation === filters.relation);
    if (filters.workId !== "all") results = results.filter((passage) => passage.workId === filters.workId);
    if (filters.period !== "all") results = results.filter((passage) => passage.period === filters.period);

    if (query) {
      results = results.filter((passage) =>
        [passage.work, passage.citation, passage.title, passage.summary, passage.relevance, ...(passage.tags || [])]
          .join(" ")
          .toLowerCase()
          .includes(query)
      );
    }

    return sortPassages(results, filters.sort);
  }, [themePassages, filters]);

  const counts = {
    all: themePassages.length,
    core: themePassages.filter((passage) => passage.relation === "core").length,
    direct: themePassages.filter((passage) => passage.relation === "direct").length,
    related: themePassages.filter((passage) => passage.relation === "related").length,
    background: themePassages.filter((passage) => passage.relation === "background").length,
  };

  const availableWorks = useMemo(
    () =>
      [...new Map(themePassages.map((passage) => [passage.workId, { id: passage.workId, title: passage.work }])).values()].sort(
        (a, b) => a.title.localeCompare(b.title)
      ),
    [themePassages]
  );

  const availablePeriods = useMemo(
    () => [...new Set(themePassages.map((passage) => passage.period))],
    [themePassages]
  );

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "essential", label: "Essential Path" },
    { id: "corpus", label: `Full Corpus (${themePassages.length})` },
    { id: "arc", label: "Developmental Arc" },
    { id: "concepts", label: "Concept Net" },
  ];

  return (
    <div className="theme-page">
      <section className="theme-hero">
        <div className="chip-row">
          <span className="meta-chip meta-chip--amber">{theme.category}</span>
          <span className="meta-chip">{themePassages.length} passages indexed</span>
        </div>
        <h1>{theme.title}</h1>
        <p>{theme.overview}</p>
      </section>

      <div className="tab-strip">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActiveTab(tab.id)}
            className={`tab-button ${activeTab === tab.id ? "tab-button--active" : ""}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "overview" && (
        <section className="content-panel">
          <p className="panel-kicker">Theme Overview</p>
          <h2>What this theme means</h2>
          <p className="panel-copy">{theme.overview}</p>

          <div className="stats-grid">
            <StatCard label="All Passages" value={counts.all} />
            <StatCard label="Core" value={counts.core} />
            <StatCard label="Direct" value={counts.direct} />
            <StatCard label="Related" value={counts.related} />
            <StatCard label="Background" value={counts.background} />
          </div>

          <div className="action-grid">
            <ActionCard
              title="Start with the essential path"
              text={`The shortest reliable route into this theme contains ${essentialPassages.length} core passages. Read these first before opening the full corpus list.`}
              button="Open essential path"
              onClick={() => setActiveTab("essential")}
              primary
            />
            <ActionCard
              title="Then enter the full corpus"
              text="The full corpus view shows core, direct, related, and background passages across Nietzsche’s works."
              button="View all passages"
              onClick={() => setActiveTab("corpus")}
            />
          </div>
        </section>
      )}

      {activeTab === "essential" && (
        <section className="content-panel">
          <p className="panel-kicker">Essential Reading Path</p>
          <h2>Start here before opening the full corpus</h2>
          <p className="panel-copy panel-copy--narrow">
            The core sequence gives the shortest reliable path into the theme.
          </p>

          <div className="essential-list">
            {essentialPassages.map((passage, index) => (
              <article key={passage.id} className="essential-card">
                <div className="essential-card__index">{index + 1}</div>
                <div>
                  <div className="essential-card__header">
                    <h3>{passage.title}</h3>
                    <RelationBadge relation={passage.relation || "core"} />
                  </div>
                  <p className="essential-card__citation">
                    <em>{passage.work}</em> {passage.citation}
                  </p>
                  <p>{passage.summary}</p>
                  {passage.relevance && (
                    <p className="essential-card__relevance">
                      <strong>Why it matters:</strong> {passage.relevance}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {activeTab === "corpus" && (
        <section className="content-panel">
          <p className="panel-kicker">Full Corpus Passage List</p>
          <h2>All related passages for this theme</h2>
          <p className="panel-copy panel-copy--narrow">
            This is the expanded full-corpus view: core, direct, related, and background passages across Nietzsche’s works.
          </p>

          <PassageFilters
            filters={filters}
            setFilters={setFilters}
            availableWorks={availableWorks}
            availablePeriods={availablePeriods}
          />

          <div className="results-meta">
            <span>
              {filteredPassages.length} of {themePassages.length} passages shown
            </span>
            <span>Sorted by {filters.sort}</span>
          </div>

          <div className="passage-list">
            {filteredPassages.length === 0 ? (
              <div className="navigator-empty">No passages matched the current filters.</div>
            ) : (
              filteredPassages.map((passage) => (
                <PassageCard key={passage.id} passage={passage} />
              ))
            )}
          </div>
        </section>
      )}

      {activeTab === "arc" && (
        <section className="content-panel">
          <p className="panel-kicker">Developmental Arc</p>
          <h2>How the theme develops across Nietzsche’s works</h2>

          <div className="arc-grid">
            {theme.developmentalArc.map((phase) => (
              <article key={phase.phase} className="arc-card">
                <h3>{phase.phase}</h3>
                <p>{phase.description}</p>
                <div className="arc-card__passages">
                  {phase.representativePassageIds.map((id) => {
                    const passage = getPassageById(id);
                    if (!passage) return null;

                    return (
                      <div key={id} className="arc-reference">
                        <span>{passage.title}</span>
                        <small>{passage.citation}</small>
                      </div>
                    );
                  })}
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      {activeTab === "concepts" && (
        <section className="content-panel">
          <p className="panel-kicker">Concept Net</p>
          <h2>Other names and nearby ideas</h2>
          <div className="concept-cloud">
            {theme.relatedConcepts.map((concept) => (
              <span key={concept} className="meta-chip">
                {concept}
              </span>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

function PassageFilters({ filters, setFilters, availableWorks, availablePeriods }) {
  const updateFilter = (key, value) => setFilters((current) => ({ ...current, [key]: value }));

  return (
    <div className="filters-grid">
      <input
        value={filters.query}
        onChange={(event) => updateFilter("query", event.target.value)}
        placeholder="Search within this theme..."
        className="navigator-search"
      />

      <select
        value={filters.relation}
        onChange={(event) => updateFilter("relation", event.target.value)}
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
        value={filters.workId}
        onChange={(event) => updateFilter("workId", event.target.value)}
        className="navigator-select"
      >
        <option value="all">All works</option>
        {availableWorks.map((work) => (
          <option key={work.id} value={work.id}>
            {work.title}
          </option>
        ))}
      </select>

      <select
        value={filters.period}
        onChange={(event) => updateFilter("period", event.target.value)}
        className="navigator-select"
      >
        <option value="all">All periods</option>
        {availablePeriods.map((period) => (
          <option key={period} value={period}>
            {titleCase(period)}
          </option>
        ))}
      </select>

      <select
        value={filters.sort}
        onChange={(event) => updateFilter("sort", event.target.value)}
        className="navigator-select"
      >
        <option value="importance">Sort: Importance</option>
        <option value="relation">Sort: Relation</option>
        <option value="workOrder">Sort: Work order</option>
        <option value="readingOrder">Sort: Reading path</option>
      </select>
    </div>
  );
}

function PassageCard({ passage }) {
  const [expanded, setExpanded] = useState(false);
  const connectedPassages = (passage.connectedPassageIds || [])
    .map((id) => getPassageById(id))
    .filter(Boolean);

  return (
    <article className="passage-card">
      <div className="passage-card__header">
        <div>
          <div className="chip-row">
            <RelationBadge relation={passage.relation} />
            <span className="meta-chip">Importance {passage.importance}/5</span>
            <span className="meta-chip">{titleCase(passage.period)}</span>
          </div>
          <h3>{passage.title}</h3>
          <p className="passage-card__citation">
            <em>{passage.work}</em> {passage.citation}
          </p>
        </div>

        <button
          type="button"
          className="button button--ghost"
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Hide details" : "View details"}
        </button>
      </div>

      <p>{passage.summary}</p>

      <div className="chip-row chip-row--wide">
        {(passage.tags || []).slice(0, expanded ? passage.tags.length : 6).map((tag) => (
          <span key={tag} className="meta-chip">
            {tag}
          </span>
        ))}
      </div>

      {expanded && (
        <div className="passage-card__details">
          <div>
            <h4>Why it matters</h4>
            <p>{passage.relevance}</p>
          </div>

          {!!connectedPassages.length && (
            <div>
              <h4>Connected passages</h4>
              <div className="connected-grid">
                {connectedPassages.map((connected) => (
                  <div key={connected.id} className="connected-card">
                    <span>{connected.title}</span>
                    <small>{connected.citation}</small>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      )}
    </article>
  );
}

function RelationBadge({ relation }) {
  const info = relationTypes[relation] || { label: titleCase(relation) };
  return <span className={`relation-badge relation-badge--${relation}`}>{info.label}</span>;
}

function StatCard({ label, value }) {
  return (
    <div className="stat-card">
      <div className="stat-card__value">{value}</div>
      <div className="stat-card__label">{label}</div>
    </div>
  );
}

function ActionCard({ title, text, button, onClick, primary = false }) {
  return (
    <div className={`action-card ${primary ? "action-card--primary" : ""}`}>
      <h3>{title}</h3>
      <p>{text}</p>
      <button type="button" onClick={onClick} className={`button ${primary ? "button--primary" : "button--ghost"}`}>
        {button}
      </button>
    </div>
  );
}
