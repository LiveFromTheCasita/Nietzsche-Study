import Link from "next/link";
import { themes } from "../content/corpusData";
import LegacyHomeLinks from "./LegacyHomeLinks";

const featuredIds = ["death-of-god-nihilism", "master-slave-ressentiment", "eternal-recurrence-amor-fati"];

export default function NietzscheStudySite() {
  const featuredThemes = featuredIds.map((id) => themes.find((theme) => theme.id === id)).filter(Boolean);
  return (
    <main id="content" tabIndex={-1} className="study-site home-page">
      <LegacyHomeLinks />
      <section className="hero-shell">
        <div className="hero-shell__backdrop" />
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">An independent guide to reading Nietzsche</p>
            <h1 className="hero-title">Read closely.<br />Think for yourself.</h1>
            <p className="hero-summary">
              Work through Nietzsche’s questions about morality, truth, suffering, and affirmation.
              Begin with a guided course, then follow the arguments across his books.
            </p>
            <div className="hero-actions">
              <Link href="/lessons" className="button button--primary">Begin the course</Link>
              <Link href="/themes" className="button button--secondary">Explore themes</Link>
            </div>
            <p className="home-editor">Edited by <Link href="/about">Bob Smith</Link></p>
          </div>
          <aside className="home-reading-card" aria-label="Your first reading">
            <p className="section-kicker">Your first reading</p>
            <h2>What happens when inherited values lose their authority?</h2>
            <p>Begin with the madman in <em>The Gay Science</em> §125, then compare §343. Read the scene before deciding what the “death of God” means.</p>
            <div className="chip-row"><span className="meta-chip">Session 1 of 7</span><span className="meta-chip">45–60 minutes</span></div>
            <Link href="/lessons/the-crisis-of-value" className="text-link">Open the first lesson <span aria-hidden="true">→</span></Link>
          </aside>
        </div>
      </section>

      <section className="content-section" aria-labelledby="course-heading">
        <div className="section-inner home-course">
          <div>
            <p className="section-kicker">A place to begin</p>
            <h2 id="course-heading">Values, truth, and affirmation</h2>
            <p>Seven sessions, from the crisis of value to the question of affirming a life. Each offers an exact reading assignment, context, questions, an objection, and a short writing exercise.</p>
          </div>
          <div className="home-course__action">
            <p>7–9 hours at your own pace.<br />Use your own edition or the linked texts.</p>
            <Link href="/lessons" className="button button--primary">View the seven sessions</Link>
          </div>
        </div>
      </section>

      <section className="content-section section-border section-muted" aria-labelledby="questions-heading">
        <div className="section-inner">
          <div className="section-header section-header--split">
            <div><p className="section-kicker">Follow a question</p><h2 id="questions-heading">Three ways into the arguments</h2></div>
            <Link href="/themes" className="text-link">All {themes.length} theme guides <span aria-hidden="true">→</span></Link>
          </div>
          <div className="card-grid card-grid--three home-themes">
            {featuredThemes.map((theme) => (
              <article key={theme.id} className="card card--padded">
                <p className="section-kicker">{theme.category}</p>
                <h3><Link href={`/themes/${theme.id}`}>{theme.shortTitle || theme.title}</Link></h3>
                <p>{theme.shortDescription}</p>
                <Link href={`/themes/${theme.id}`} className="text-link">Read the guide <span aria-hidden="true">→</span></Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="content-section" aria-labelledby="reading-tools-heading">
        <div className="section-inner">
          <div className="section-header"><p className="section-kicker">Go further</p><h2 id="reading-tools-heading">Keep the passage in view</h2></div>
          <div className="card-grid card-grid--three home-tools">
            <article>
              <h3>Read through the books</h3>
              <p>Place a passage in its work and historical setting. Follow Nietzsche’s changing concerns from tragedy to his final writings.</p>
              <Link href="/works" className="text-link">Browse book guides <span aria-hidden="true">→</span></Link>
            </article>
            <article>
              <h3>Trace a passage</h3>
              <p>Search the indexed selections by theme, work, and period. Follow connections and return to a saved reading view.</p>
              <Link href="/navigator" className="text-link">Open the passage navigator <span aria-hidden="true">→</span></Link>
            </article>
            <article>
              <h3>The Will to Power</h3>
              <p>Explore the posthumous notebook compilation with editorial cautions and companion references to Nietzsche’s finished works.</p>
              <Link href="/the-will-to-power" className="text-link">Read the compilation guide <span aria-hidden="true">→</span></Link>
            </article>
          </div>
        </div>
      </section>
      <section className="home-method section-border">
        <div className="section-inner">
          <h2>A guide to interpretation, with room for disagreement.</h2>
          <p>Distinguish the text, the commentary, and your own judgment. Our <Link href="/method">reading method</Link> explains the approach; the <Link href="/editions">editions guide</Link> explains the references and translations.</p>
        </div>
      </section>
    </main>
  );
}
