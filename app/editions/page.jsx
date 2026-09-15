import Link from "next/link";
import "../editorial.css";

export const metadata = {
  title: "Editions and reading resources",
  description: "Translation guidance, free reading resources, key Nietzschean terms, citation practice, and routes into scholarly debates.",
  alternates: { canonical: "/editions" },
};

const terms = [
  ["Ressentiment", "A French term Nietzsche uses for a reactive process in which hostility can become value creation; distinguish it from every ordinary experience of resentment."],
  ["Übermensch", "Often translated as overman or superman. Read it within Zarathustra’s dramatic argument rather than as a label for personal superiority."],
  ["Amor fati", "Latin for love of fate. Ask how loving necessity differs from merely enduring it."],
  ["Wille zur Macht", "Will to power. Determine whether a particular passage concerns psychology, life, interpretation, society, or a wider hypothesis."],
  ["Umwertung", "Commonly rendered revaluation or transvaluation. Ask what is being assessed, by what standard, and with what proposed change."],
];

export default function EditionsPage() {
  return (
    <main id="content" tabIndex={-1} className="reading-page">
      <header>
        <p className="reading-kicker">Texts and interpretation</p>
        <h1>Editions and reading resources</h1>
        <p className="reading-byline">Edited by Bob Smith</p>
        <p>Use a complete edition with stable section numbers. Walter Kaufmann is the preferred translator where the assigned work is available in his translation. The site’s <em>Will to Power</em> references use the Kaufmann/Hollingdale edition. Other works require their own edition guidance; one translator’s name should not be applied to the entire corpus.</p>
      </header>
      <div className="reading-prose">
        <section>
          <h2>Free reading links and modern editions</h2>
          <p>Lessons link to accessible reading resources and identify the translator. Older English versions can differ substantially in tone and vocabulary from modern editions. Their availability makes them useful for access and comparison; it does not make every rendering preferable.</p>
          <p>For <em>The Gay Science</em>, Kaufmann’s edition is available from <a href="https://www.penguinrandomhouse.com/books/121942/the-gay-science-by-friedrich-nietzsche-translated-with-commentary-by-walter-kaufmann/">the publisher</a>. The older Thomas Common translation appears under the title <a href="https://www.gutenberg.org/files/52881/52881-h/52881-h.htm"><em>The Joyful Wisdom</em></a>. Both titles refer to the same work.</p>
          <p>For <em>Human, All Too Human</em>, <a href="https://www.cambridge.org/gb/universitypress/subjects/philosophy/philosophy-texts/nietzsche-human-all-too-human-book-free-spirits-2nd-edition">Cambridge’s R. J. Hollingdale edition</a> provides an alternative where the general Kaufmann preference does not apply. Check whether your edition includes both volumes and the later prefaces before following an assignment outside Volume I.</p>
          <p>The <Link href="/works">individual book guides</Link> identify the modern translation preference, the translator of each free edition, and any relevant differences in titles or contents.</p>
        </section>
        <section>
          <h2>A few terms to keep in view</h2>
          <dl className="reading-glossary">{terms.map(([term, note]) => <div key={term} style={{ display: "contents" }}><dt>{term}</dt><dd>{note}</dd></div>)}</dl>
        </section>
        <section>
          <h2>Beyond this guide</h2>
          <ul>
            <li><a href="https://plato.stanford.edu/entries/nietzsche/">Stanford Encyclopedia of Philosophy: Friedrich Nietzsche</a> provides a broad scholarly overview and routes into debates about value creation, interpretation, the self, and affirmation. Use it after an initial reading to compare explanations of the same problem.</li>
            <li><a href="https://plato.stanford.edu/entries/nietzsche-moral-political/">Nietzsche’s Moral and Political Philosophy</a> gives a more focused account of morality, naturalism, and political questions. Read it alongside difficult passages rather than using it to settle their meaning in advance.</li>
            <li><a href="https://www.nietzschesource.org/">Nietzsche Source</a> provides critical and documentary resources for readers who need to investigate the German texts and their transmission.</li>
          </ul>
        </section>
        <section>
          <h2>Citation practice</h2>
          <p>When citing Nietzsche, include the work, part or essay, section, and translation used. For example: <em>On the Genealogy of Morals</em>, First Essay §10, translated by Walter Kaufmann and R. J. Hollingdale. Add a page number if your course or publication requires one, while retaining the section locator.</p>
          <p>When citing site commentary, include the page title, editorial attribution, URL, and access date. Quoted wording should identify its translation; commentary and paraphrase should remain visibly distinct from quotation.</p>
        </section>
      </div>
      <nav aria-label="Continue studying"><ul><li><Link href="/method">How to read with this guide</Link></li><li><Link href="/works">Browse the books</Link></li></ul></nav>
    </main>
  );
}
