import Link from "next/link";
import { works } from "../../content/corpusData";
import { worksShelf } from "../../content/studyContent";
import { workReadingLinks } from "../../content/workReadingLinks";
import "../editorial.css";

export const metadata = {
  title: "Book guides",
  description: "Read Nietzsche by book, with publication context, starting assignments, translation guidance, and links to free editions.",
  alternates: { canonical: "/works" },
};

export default function WorksPage() {
  return (
    <main id="content" tabIndex={-1} className="reading-page reading-page--wide">
      <header>
        <p className="reading-kicker">Read in context</p>
        <h1>Book guides</h1>
        <p className="reading-byline">Edited by Bob Smith</p>
        <p>Follow an argument through its own book before tracing it across Nietzsche’s work. Each guide gives you a starting sequence, a question to test, and clearly identified reading editions.</p>
        <nav aria-label="Ways to study"><ul><li><Link href="/lessons">Beginner course</Link></li><li><Link href="/themes">Explore themes</Link></li><li><Link href="/editions">Choosing a translation</Link></li></ul></nav>
      </header>
      <p className="reading-callout">The shelf follows the broad development of Nietzsche’s writing. Composition and publication can differ: the books written in 1888 include works first published in 1889, 1895, and 1908. Later prefaces and additions are dated separately.</p>
      <ol className="reading-shelf">
        {[...works].sort((a, b) => a.publicationOrder - b.publicationOrder).map((work) => {
          const guide = workReadingLinks[work.id];
          return <li key={work.id}>
            <p className="reading-date">{guide?.dates || work.publicationYear}</p>
            <h2><Link href={`/works/${work.id}`}>{work.title}</Link></h2>
            <p>{worksShelf[work.id]?.note}</p>
            <p>{guide?.overview}</p>
          </li>;
        })}
      </ol>
      <section className="reading-callout">
        <h2>The posthumous notebooks</h2>
        <p><Link href="/the-will-to-power">The Will to Power</Link> has its own guide. It is an editorial arrangement of notebook material, so it should not be read as a finished book Nietzsche authorized.</p>
      </section>
    </main>
  );
}
