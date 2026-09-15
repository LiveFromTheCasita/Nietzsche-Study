import Link from "next/link";
import "../editorial.css";

export const metadata = {
  title: "About this guide",
  description: "An independent Nietzsche study guide edited by Bob Smith, with courses, themes, book guides, and a commitment to reading in context.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main id="content" tabIndex={-1} className="reading-page">
      <header>
        <p className="reading-kicker">The Will to Power</p>
        <h1>About this guide</h1>
        <p className="reading-byline">Edited by Bob Smith</p>
        <p>The Will to Power helps readers work through Nietzsche’s books, follow questions across them, and develop interpretations they can support with evidence. Start with the <Link href="/lessons">beginner course</Link>, enter through a <Link href="/themes">theme</Link>, or use a <Link href="/works">book guide</Link> to place an argument in its original setting.</p>
      </header>
      <div className="reading-prose">
        <p>The commentary is a companion to your reading. Each assignment identifies the work and section so you can use your own edition. Lessons provide context, questions, objections, and writing exercises; the assigned passages remain in the book or linked reading resource.</p>
        <section>
          <h2>What kind of guide is this?</h2>
          <p>This is an independent study project for readers willing to reread, take notes, and test an argument. You do not need previous training in philosophy. You do need to distinguish understanding Nietzsche from agreeing with him.</p>
          <p>The guides approach his writing through problems of morality, knowledge, art, culture, suffering, and affirmation. These themes connect, but they do not form a single settled system. A later passage may revise an earlier one; a dramatic speaker may complicate what a straightforward summary would imply.</p>
        </section>
        <section>
          <h2>Why this name?</h2>
          <p>Will to power is one of Nietzsche’s most disputed ideas. The site examines it within the wider range of his writing. The book published under the title <Link href="/the-will-to-power"><em>The Will to Power</em></Link> receives a separate guide because its editorial history requires special care: it is a posthumous arrangement of notebook material, not a completed book Nietzsche authorized.</p>
        </section>
        <section>
          <h2>Editorial responsibility</h2>
          <p>Bob Smith is the editor of this project. Site commentary offers interpretations that readers should evaluate against the assigned texts. It does not claim that every dispute has a settled answer or that agreement with Nietzsche is the goal of study.</p>
          <p>Use the <Link href="/method">method</Link> and <Link href="/editions">editions guide</Link> to understand the references. Essays should be read as individual arguments, with their editorial or author attribution shown separately from the primary texts. A hypothetical explanation written in Nietzsche’s voice is an imaginative reconstruction, never a primary source.</p>
        </section>
      </div>
    </main>
  );
}
