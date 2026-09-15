"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef } from "react";

import { relationTypes, themes } from "../content/corpusData";
import { submittedPapersByTheme } from "../content/studyContent";
import { getPassageById, getThemePassages, sortPassages, titleCase } from "../lib/corpus";
import "./navigator.css";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "essential", label: "Essential reading" },
  { id: "corpus", label: "All indexed passages" },
  { id: "arc", label: "Development" },
  { id: "papers", label: "Essays" },
  { id: "concepts", label: "Related ideas" },
];
const sorts = ["importance", "relation", "workOrder", "readingOrder"];
const defaults = { relation: "all", workId: "all", period: "all", query: "", sort: "importance" };
const parameterKeys = ["theme", "tab", "relation", "work", "period", "query", "sort", "passage"];

function readState(params, initialThemeId, initialTab) {
  const theme = themes.find((item) => item.id === params.get("theme"))
    || themes.find((item) => item.id === initialThemeId) || themes[0];
  const passages = getThemePassages(theme);
  const workIds = new Set(passages.map((passage) => passage.workId));
  const periods = new Set(passages.map((passage) => passage.period));
  const requestedTab = params.get("tab") || initialTab;
  const passage = passages.some((item) => item.id === params.get("passage")) ? params.get("passage") : "";
  return {
    themeId: theme.id,
    tab: passage ? "corpus" : tabs.some((tab) => tab.id === requestedTab) ? requestedTab : "overview",
    filters: {
      relation: Object.hasOwn(relationTypes, params.get("relation")) ? params.get("relation") : "all",
      workId: workIds.has(params.get("work")) ? params.get("work") : "all",
      period: periods.has(params.get("period")) ? params.get("period") : "all",
      query: (params.get("query") || "").slice(0, 200),
      sort: sorts.includes(params.get("sort")) ? params.get("sort") : "importance",
    },
    passage,
  };
}

function stateParams(state) {
  const params = new URLSearchParams({ theme: state.themeId });
  if (state.tab !== "overview") params.set("tab", state.tab);
  Object.entries(state.filters).forEach(([key, value]) => {
    if (value !== defaults[key]) params.set(key === "workId" ? "work" : key, value);
  });
  if (state.passage) params.set("passage", state.passage);
  return params;
}

function passageHref(passageId, preferredThemeId) {
  const theme = themes.find((item) => item.id === preferredThemeId && item.passageLinks.some((link) => link.passageId === passageId))
    || themes.find((item) => item.passageLinks.some((link) => link.passageId === passageId));
  if (!theme) return null;
  return `/navigator?${new URLSearchParams({ theme: theme.id, tab: "corpus", passage: passageId })}`;
}

export default function CorpusNavigator({ initialThemeId = themes[0]?.id ?? "", initialTab = "overview", showHero = true }) {
  const searchParams = useSearchParams();
  const state = readState(searchParams, initialThemeId, initialTab);
  const selectedTheme = themes.find((theme) => theme.id === state.themeId);
  const lastScrolledPassage = useRef("");

  function updateState(next, { replace = false } = {}) {
    const params = new URLSearchParams(window.location.search);
    parameterKeys.forEach((key) => params.delete(key));
    stateParams(next).forEach((value, key) => params.set(key, value));
    const url = `${window.location.pathname}?${params.toString()}`;
    // Next.js integrates the native History API with useSearchParams. This keeps
    // filtering immediate and lets Back/Forward restore every discrete choice.
    window.history[replace ? "replaceState" : "pushState"](null, "", url);
  }

  function selectTheme(themeId) {
    updateState({ themeId, tab: "overview", filters: { ...defaults }, passage: "" });
  }

  useEffect(() => {
    if (!state.passage) {
      lastScrolledPassage.current = "";
      return;
    }
    const element = document.getElementById(`passage-${state.passage}`);
    if (!element) {
      lastScrolledPassage.current = "";
      return;
    }
    const positionKey = `${state.themeId}:${state.passage}`;
    if (lastScrolledPassage.current !== positionKey) {
      element.scrollIntoView({ block: "nearest" });
      lastScrolledPassage.current = positionKey;
    }
  }, [state.passage, state.themeId, searchParams]);

  return (
    <section className={`navigator-shell ${showHero ? "navigator-shell--page" : ""}`} aria-label="Passage navigator">
      {showHero && (
        <header className="navigator-hero">
          <p className="navigator-hero__eyebrow">Read across the works</p>
          <h1>Passage navigator</h1>
          <p>Choose a theme, follow an essential reading path, or search the indexed passages. These are curated references and study notes; consult the cited text for the full argument.</p>
          <p><Link href="/editions">Find an edition or a free reading copy</Link></p>
        </header>
      )}
      <div className="navigator-layout">
        <aside className="navigator-sidebar" aria-label="Choose a theme">
          <div className="navigator-mobile-theme">
            <label htmlFor="navigator-theme">Theme</label>
            <select id="navigator-theme" className="navigator-select" value={state.themeId} onChange={(event) => selectTheme(event.target.value)}>
              {themes.map((theme) => <option key={theme.id} value={theme.id}>{theme.title}</option>)}
            </select>
          </div>
          <div className="navigator-desktop-themes">
            <p className="navigator-sidebar__label">Themes</p>
            <p className="navigator-sidebar__meta">{themes.length} ways into the texts</p>
            <div className="navigator-theme-list">
              {themes.map((theme) => (
                <button key={theme.id} type="button" aria-pressed={theme.id === state.themeId} onClick={() => selectTheme(theme.id)} className={`navigator-theme-button ${theme.id === state.themeId ? "navigator-theme-button--active" : ""}`}>
                  <span className="navigator-theme-button__header"><strong>{theme.shortTitle || theme.title}</strong><span>{theme.passageLinks.length}</span></span>
                  <span className="navigator-theme-button__summary">{theme.shortDescription}</span>
                </button>
              ))}
            </div>
          </div>
        </aside>
        <div className="navigator-main">
          {selectedTheme && <ThemePage theme={selectedTheme} state={state} updateState={updateState} />}
        </div>
      </div>
    </section>
  );
}

function ThemePage({ theme, state, updateState }) {
  const { tab: activeTab, filters } = state;
  const themePassages = useMemo(() => getThemePassages(theme), [theme]);
  const passageLookup = useMemo(() => new Map(themePassages.map((passage) => [passage.id, passage])), [themePassages]);
  const essentialPassages = theme.essentialPassageIds.map((id) => passageLookup.get(id) || getPassageById(id)).filter(Boolean);
  const filteredPassages = useMemo(() => {
    const query = filters.query.trim().toLowerCase();
    return sortPassages(themePassages.filter((passage) =>
      (filters.relation === "all" || passage.relation === filters.relation)
      && (filters.workId === "all" || passage.workId === filters.workId)
      && (filters.period === "all" || passage.period === filters.period)
      && (!query || [passage.work, passage.citation, passage.title, passage.summary, passage.relevance, ...(passage.tags || [])].join(" ").toLowerCase().includes(query))
    ), filters.sort);
  }, [themePassages, filters.query, filters.relation, filters.workId, filters.period, filters.sort]);
  const availableWorks = [...new Map(themePassages.map((passage) => [passage.workId, { id: passage.workId, title: passage.work }])).values()].sort((a, b) => a.title.localeCompare(b.title));
  const availablePeriods = ["early", "middle", "late"].filter((period) => themePassages.some((passage) => passage.period === period));
  const submittedPapers = submittedPapersByTheme[theme.id] || [];
  const tabRefs = useRef({});
  const setActiveTab = (tab) => updateState({ ...state, tab, passage: "" });

  function tabKeyDown(event, index) {
    const offset = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    const target = event.key === "Home" ? 0 : event.key === "End" ? tabs.length - 1 : offset ? (index + offset + tabs.length) % tabs.length : null;
    if (target === null) return;
    event.preventDefault();
    setActiveTab(tabs[target].id);
    tabRefs.current[tabs[target].id]?.focus();
  }

  return (
    <div className="theme-page">
      <header className="theme-hero">
        <div className="chip-row"><span className="meta-chip meta-chip--amber">{theme.category}</span><span className="meta-chip">{themePassages.length} passages indexed</span></div>
        <h2>{theme.title}</h2>
        <p>{theme.overview}</p>
      </header>
      <div className="tab-strip" role="tablist" aria-label={`${theme.title}: views`}>
        {tabs.map((tab, index) => (
          <button key={tab.id} ref={(element) => { tabRefs.current[tab.id] = element; }} id={`navigator-tab-${tab.id}`} role="tab" aria-selected={activeTab === tab.id} aria-controls="navigator-panel" tabIndex={activeTab === tab.id ? 0 : -1} type="button" onClick={() => setActiveTab(tab.id)} onKeyDown={(event) => tabKeyDown(event, index)} className={`tab-button ${activeTab === tab.id ? "tab-button--active" : ""}`}>
            {tab.label}
          </button>
        ))}
      </div>
      <div id="navigator-panel" role="tabpanel" aria-labelledby={`navigator-tab-${activeTab}`} tabIndex={0}>
        {activeTab === "overview" && (
          <section className="content-panel">
            <p className="panel-kicker">Theme overview</p><h3>Where to begin</h3>
            <p className="panel-copy">The relation labels describe how directly a passage addresses this theme. They do not measure reading difficulty or settle its interpretation.</p>
            <div className="stats-grid">
              <StatCard label="Indexed passages" value={themePassages.length} />
              {Object.entries(relationTypes).map(([key, value]) => <StatCard key={key} label={value.label} value={themePassages.filter((passage) => passage.relation === key).length} />)}
            </div>
            <div className="action-grid">
              <ActionCard title="Follow the essential reading" text={`Begin with ${essentialPassages.length} selected passages, then test the connections against the wider context.`} button="Open essential reading" onClick={() => setActiveTab("essential")} primary />
              <ActionCard title="Explore the indexed passages" text="Filter the references by work, period, and relation to the theme. Save or share the resulting page address." button="View indexed passages" onClick={() => setActiveTab("corpus")} />
            </div>
          </section>
        )}
        {activeTab === "essential" && (
          <section className="content-panel">
            <p className="panel-kicker">Essential reading</p><h3>A starting sequence</h3>
            <p className="panel-copy">This selection offers one route into the theme. Read each numbered section in your edition, including its surrounding argument.</p>
            <div className="essential-list">
              {essentialPassages.map((passage, index) => (
                <article key={passage.id} className="essential-card">
                  <div className="essential-card__index" aria-hidden="true">{index + 1}</div>
                  <div>
                    <div className="essential-card__header"><h4>{passage.title}</h4><RelationBadge relation={passage.relation || "core"} /></div>
                    <p className="essential-card__citation"><em>{passage.work}</em> {passage.citation}</p><PassageDate passage={passage} />
                    <p>{passage.summary}</p>
                    {passage.relevance && <p className="essential-card__relevance"><strong>Why it matters:</strong> {passage.relevance}</p>}
                    <PassageLink passage={passage} themeId={theme.id}>Open passage notes</PassageLink>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}
        {activeTab === "corpus" && (
          <section className="content-panel">
            <p className="panel-kicker">All indexed passages</p><h3>Search within this theme</h3>
            <p className="panel-copy">A curated index of core, direct, related, and background references across Nietzsche’s works. It is not an exhaustive concordance.</p>
            <PassageFilters filters={filters} onChange={(key, value) => updateState({ ...state, filters: { ...filters, [key]: value }, passage: "" }, { replace: key === "query" })} availableWorks={availableWorks} availablePeriods={availablePeriods} />
            <div className="results-meta"><span role="status" aria-live="polite" aria-atomic="true">{filteredPassages.length} of {themePassages.length} passages shown</span><button className="navigator-reset" type="button" onClick={() => updateState({ ...state, filters: { ...defaults }, passage: "" })}>Reset filters</button></div>
            {state.passage && !filteredPassages.some((passage) => passage.id === state.passage) && (
              <p className="navigator-empty">The linked passage is outside these filters. <button type="button" className="navigator-reset" onClick={() => updateState({ ...state, filters: { ...defaults } })}>Show the linked passage</button></p>
            )}
            <div className="passage-list">
              {filteredPassages.length === 0 ? <p className="navigator-empty">No passages match these filters. Try a broader search or reset the filters.</p> : filteredPassages.map((passage) => (
                <PassageCard key={passage.id} passage={passage} themeId={theme.id} expanded={state.passage === passage.id} onToggle={() => updateState({ ...state, passage: state.passage === passage.id ? "" : passage.id })} />
              ))}
            </div>
          </section>
        )}
        {activeTab === "arc" && (
          <section className="content-panel">
            <p className="panel-kicker">Development</p><h3>Reading the theme across the works</h3>
            <p className="panel-copy">These stages organize an interpretation of the theme; they do not imply that Nietzsche’s thought follows a single continuous progression.</p>
            <div className="arc-grid">{theme.developmentalArc.map((phase) => (
              <article key={phase.phase} className="arc-card"><h4>{phase.phase}</h4><p>{phase.description}</p><div className="arc-card__passages">{phase.representativePassageIds.map((id) => {
                const passage = getPassageById(id);
                return passage ? <div key={id} className="arc-reference"><PassageLink passage={passage} themeId={theme.id}>{passage.title}</PassageLink><small><em>{passage.work}</em> {passage.citation}</small></div> : null;
              })}</div></article>
            ))}</div>
          </section>
        )}
        {activeTab === "concepts" && (
          <section className="content-panel"><p className="panel-kicker">Related ideas</p><h3>Terms to read alongside this theme</h3><div className="concept-cloud">{theme.relatedConcepts.map((concept) => <span key={concept} className="meta-chip">{concept}</span>)}</div><p><Link href="/themes">Explore all theme guides</Link></p></section>
        )}
        {activeTab === "papers" && (
          <section className="content-panel"><p className="panel-kicker">Essays</p><h3>Further interpretation</h3><p className="panel-copy">These essays develop readings of the texts. Compare their claims with the cited passages and consider where another interpretation is possible.</p>
            {submittedPapers.length === 0 ? <div className="navigator-empty">No essays are listed for this theme yet. Begin with the essential reading.</div> : <div className="papers-grid">{submittedPapers.map((paper) => <article key={paper.id} className="paper-card"><h4>{paper.title}</h4>{paper.author && <p className="paper-card__author">{paper.author}</p>}{paper.summary && <p>{paper.summary}</p>}{paper.slug && <div className="paper-card__actions"><Link href={`/corpus/papers/${paper.slug}`} className="button button--ghost">Read essay</Link></div>}</article>)}</div>}
          </section>
        )}
      </div>
    </div>
  );
}

function PassageFilters({ filters, onChange, availableWorks, availablePeriods }) {
  return (
    <div className="filters-grid">
      <label className="navigator-field" htmlFor="navigator-query"><span>Search passages</span><input id="navigator-query" type="search" maxLength={200} value={filters.query} onChange={(event) => onChange("query", event.target.value)} placeholder="Title, citation, or idea" className="navigator-search" /></label>
      <label className="navigator-field" htmlFor="navigator-relation"><span>Relation to theme</span><select id="navigator-relation" value={filters.relation} onChange={(event) => onChange("relation", event.target.value)} className="navigator-select"><option value="all">All relations</option>{Object.entries(relationTypes).map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}</select></label>
      <label className="navigator-field" htmlFor="navigator-work"><span>Work</span><select id="navigator-work" value={filters.workId} onChange={(event) => onChange("workId", event.target.value)} className="navigator-select"><option value="all">All works</option>{availableWorks.map((work) => <option key={work.id} value={work.id}>{work.title}</option>)}</select></label>
      <label className="navigator-field" htmlFor="navigator-period"><span>Period</span><select id="navigator-period" value={filters.period} onChange={(event) => onChange("period", event.target.value)} className="navigator-select"><option value="all">All periods</option>{availablePeriods.map((period) => <option key={period} value={period}>{titleCase(period)}</option>)}</select></label>
      <label className="navigator-field" htmlFor="navigator-sort"><span>Sort by</span><select id="navigator-sort" value={filters.sort} onChange={(event) => onChange("sort", event.target.value)} className="navigator-select"><option value="importance">Importance</option><option value="relation">Relation</option><option value="workOrder">Work order</option><option value="readingOrder">Reading path</option></select></label>
    </div>
  );
}

function PassageCard({ passage, themeId, expanded, onToggle }) {
  const connectedPassages = (passage.connectedPassageIds || []).map((id) => getPassageById(id)).filter(Boolean);
  const detailsId = `details-${passage.id}`;
  return (
    <article id={`passage-${passage.id}`} className={`passage-card ${expanded ? "passage-card--selected" : ""}`}>
      <div className="passage-card__header"><div><div className="chip-row"><RelationBadge relation={passage.relation} /><span className="meta-chip">Importance {passage.importance}/5</span><span className="meta-chip">{titleCase(passage.period)}</span></div><h4>{passage.title}</h4><p className="passage-card__citation"><em>{passage.work}</em> {passage.citation}</p><PassageDate passage={passage} /></div><button type="button" className="button button--ghost" aria-expanded={expanded} aria-controls={detailsId} aria-label={`${expanded ? "Hide" : "Show"} notes for ${passage.title}`} onClick={onToggle}>{expanded ? "Hide notes" : "Show notes"}</button></div>
      <p>{passage.summary}</p>
      <div className="chip-row chip-row--wide">{(passage.tags || []).slice(0, expanded ? (passage.tags || []).length : 6).map((tag) => <span key={tag} className="meta-chip">{tag}</span>)}</div>
      <div id={detailsId} className="passage-card__details" hidden={!expanded}>
        {passage.relevance && <div><h5>Why it matters</h5><p>{passage.relevance}</p></div>}
        {connectedPassages.length > 0 && <div><h5>Connected passages</h5><div className="connected-grid">{connectedPassages.map((connected) => <div key={connected.id} className="connected-card"><PassageLink passage={connected} themeId={themeId}>{connected.title}</PassageLink><small><em>{connected.work}</em> {connected.citation}</small></div>)}</div></div>}
        <ReadingCopy passage={passage} /><p><PassageLink passage={passage} themeId={themeId}>Link to this passage</PassageLink><span className="navigator-link-separator" aria-hidden="true"> · </span><Link href="/editions">Reading editions</Link></p>
      </div>
    </article>
  );
}

function PassageDate({ passage }) {
  if (!passage.publicationYear && !passage.dateNote) return null;
  const written = passage.writtenYear && String(passage.writtenYear) !== String(passage.publicationYear);
  return <p className="navigator-passage-date">{written ? `Written ${passage.writtenYear}; published ${passage.publicationYear}.` : passage.publicationYear ? `Published ${passage.publicationYear}.` : ""}{passage.dateNote ? ` ${passage.dateNote}` : ""}</p>;
}
function ReadingCopy({ passage }) {
  return passage.readingUrl ? <p><a href={passage.readingUrl}>Open reading copy</a><span> — find {passage.citation} in <em>{passage.work}</em>.</span></p> : null;
}
function PassageLink({ passage, themeId, children }) {
  const href = passageHref(passage.id, themeId);
  return href ? <Link href={href} scroll={false}>{children}</Link> : <span>{children}</span>;
}
function RelationBadge({ relation }) {
  const info = relationTypes[relation] || { label: titleCase(relation) };
  return <span className={`relation-badge relation-badge--${relation}`}>{info.label}</span>;
}
function StatCard({ label, value }) {
  return <div className="stat-card"><div className="stat-card__value">{value}</div><div className="stat-card__label">{label}</div></div>;
}
function ActionCard({ title, text, button, onClick, primary = false }) {
  return <div className={`action-card ${primary ? "action-card--primary" : ""}`}><h4>{title}</h4><p>{text}</p><button type="button" onClick={onClick} className={`button ${primary ? "button--primary" : "button--ghost"}`}>{button}</button></div>;
}
