import Link from "next/link";
import { notFound } from "next/navigation";
import { works, passages, themes } from "../../../content/corpusData";
import { worksShelf } from "../../../content/studyContent";
import { workReadingLinks } from "../../../content/workReadingLinks";
import WorkEssay, { normalizeWorkEssays } from "../../../components/WorkEssay";
import WorkEssayDisclosure from "../../../components/WorkEssayDisclosure";
import "../../editorial.css";

export function generateStaticParams() { return works.map((work) => ({ slug: work.id })); }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const work = works.find((item) => item.id === slug);
  if (!work) return { title: "Book not found" };
  return { title: `${work.title}: Reading guide`, description: workReadingLinks[slug]?.overview, alternates: { canonical: `/works/${slug}` } };
}

export default async function WorkPage({ params }) {
  const { slug } = await params;
  const work = works.find((item) => item.id === slug);
  const guide = workReadingLinks[slug];
  if (!work || !guide) notFound();
  const shelf = worksShelf[slug] || {};
  const essays = normalizeWorkEssays(shelf.essay, shelf.essays);
  const workPassages = new Set(passages.filter((item) => item.workId === slug).map((item) => item.id));
  const relatedThemes = themes.filter((theme) => theme.essentialPassageIds.some((id) => workPassages.has(id)));
  return (
    <main id="content" tabIndex={-1} className="reading-page">
      <header>
        <p className="reading-kicker"><Link href="/works">Book guides</Link></p>
        <h1>{work.title}</h1>
        <p className="reading-byline">Edited by Bob Smith · {guide.dates}</p>
        <p>{guide.overview}</p>
      </header>
      <div className="reading-prose">
        <section aria-labelledby="start-reading">
          <h2 id="start-reading">A first route through the book</h2>
          <ol>{guide.start.map((step) => <li key={step}>{step}</li>)}</ol>
          {slug === "genealogy-of-morals" && <p>The <Link href="/lessons/asking-about-moral-values">beginner course’s Genealogy sequence</Link> guides you through the Preface and the complete First Essay.</p>}
        </section>
        <section className="reading-callout" aria-labelledby="reading-question">
          <h2 id="reading-question">A question to test</h2>
          <p>{guide.question}</p>
          <p>Write a provisional answer, identify the passage that supports it, and then state the strongest objection you can find.</p>
        </section>
        <section aria-labelledby="editions-and-text">
          <h2 id="editions-and-text">Editions and the primary text</h2>
          <p>{guide.edition}</p>
          <ul>{guide.links.map((link) => <li key={link.url}><a href={link.url}>{link.label}</a><span className="reading-translator">Free edition at Project Gutenberg · {link.translator}</span></li>)}</ul>
          <p>The reading assignments use sections rather than page numbers. See the <Link href="/editions">editions guide</Link> for citation practice and scholarly resources.</p>
        </section>
        {relatedThemes.length > 0 && <section aria-labelledby="related-themes"><h2 id="related-themes">Continue through a theme</h2><ul>{relatedThemes.map((theme) => <li key={theme.id}><Link href={`/themes/${theme.id}`}>{theme.title}</Link></li>)}</ul></section>}
      </div>
      {essays.length > 0 && <section aria-labelledby="work-essays">
        <h2 id="work-essays">Companion essays</h2>
        <p>These are interpretations to read alongside the primary text. The hypothetical explanation in Nietzsche’s voice is an imaginative reconstruction, not a quotation or a newly discovered text by Nietzsche.</p>
        <nav className="work-essay-links" aria-label="Essays for this book"><ul>{essays.map((essay) => <li key={essay.id}><a href={`#${essay.anchorId}`}>{essay.title}</a></li>)}</ul></nav>
        {essays.map((essay) => <WorkEssayDisclosure key={essay.id} id={essay.anchorId} title={essay.title}><p className="reading-byline">Site commentary · Editorial responsibility: Bob Smith</p><WorkEssay essay={essay.content} /></WorkEssayDisclosure>)}
      </section>}
      <nav aria-label="Continue reading"><ul><li><Link href="/works">All book guides</Link></li><li><Link href="/navigator">Find indexed passages</Link></li></ul></nav>
    </main>
  );
}
