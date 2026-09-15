import Link from "next/link";
import "../editorial.css";

export const metadata = {
  title: "How to read with this guide",
  description: "A method for reading Nietzsche through exact references, dramatic context, argument, historical development, and objections.",
  alternates: { canonical: "/method" },
};

const practices = [
  ["Find the exact passage", "References use work, part or essay, and section. Genealogy I §10 means the First Essay, section 10; it does not mean page 10. In Zarathustra, identify the part and named discourse. Chapter titles can vary between translations, so use the assignment’s location notes when necessary.", "Stay with one translation for a first reading. Compare a second when a particular word carries the argument or when the commentary seems difficult to reconcile with your text."],
  ["Ask who is speaking", "Distinguish a direct claim, a hypothesis, a quotation, a caricature of an opponent, and the voice of a dramatic character. A statement by Zarathustra or the madman should be interpreted within its scene, including how other characters respond."],
  ["Reconstruct the argument", "Write a provisional answer to three questions: What does this passage challenge? What explanation does it offer? What would have to be true for that explanation to succeed? Do this before turning the passage into a lesson about your own life."],
  ["Follow development without forcing agreement", "Early, middle, and late are orientation tools, not airtight categories. New prefaces and revisions have their own dates. The Gay Science first appeared in 1882; its expanded 1887 edition includes a new preface and Book V. A section in that later material should be located in the later context.", "Historical development and a teaching sequence serve different purposes. A course may place a later clarification before an earlier difficult passage. A developmental guide must still identify when each text was written or published."],
  ["Read difficult claims directly", "Do not remove hierarchy, cruelty, exclusion, or domination from Nietzsche’s writing simply because a more reassuring interpretation is available. Equally, do not assume that one provocative sentence exhausts the argument. Establish the context, identify the claim, and give the strongest objection you can support."],
  ["Distinguish evidence from interpretation", "The primary reference identifies what to read. The commentary explains a proposed interpretation. An objection tests it. Related passages extend or complicate it. These are different tasks; a connection between two passages does not prove that they say the same thing."],
  ["Use the notebook material carefully", "When a reference comes from The Will to Power, treat its section number as a locator in a posthumous compilation. Compare it with published works, and use a dated notebook reference when one is available. Editorial headings should not be treated as Nietzsche’s final organization of his philosophy."],
  ["Complete a session", "End with a short paragraph that makes one claim and identifies its textual basis. Then state one unresolved question. Lesson estimates include time for rereading and writing. A slower reading that clarifies an argument is useful progress."],
];

export default function MethodPage() {
  return (
    <main id="content" tabIndex={-1} className="reading-page">
      <header>
        <p className="reading-kicker">Reading practice</p>
        <h1>How to read with this guide</h1>
        <p className="reading-byline">Edited by Bob Smith</p>
        <p>Begin with a short assignment and read it once before opening the commentary. On your second reading, identify the claim, the steps supporting it, and the strongest difficulty you can find. Write down what in the passage supports your interpretation.</p>
      </header>
      <div className="reading-prose">{practices.map(([title, ...paragraphs]) => <section key={title}><h2>{title}</h2>{paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}</div>
      <nav aria-label="Put the method into practice"><ul><li><Link href="/lessons">Begin the course</Link></li><li><Link href="/editions">Choose a reading edition</Link></li></ul></nav>
    </main>
  );
}
