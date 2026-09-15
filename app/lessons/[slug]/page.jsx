import Link from "next/link";
import { notFound } from "next/navigation";

import LessonProgress from "../../../components/LessonProgress";
import course from "../../../content/beginnerCourse.json";

export const dynamicParams = false;

export function generateStaticParams() {
  return course.sessions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const session = course.sessions.find((item) => item.slug === slug);
  if (!session) return { title: "Lesson not found" };

  return {
    title: `${session.title} — Session ${session.number}`,
    description: session.centralQuestion,
    alternates: { canonical: `/lessons/${session.slug}` },
    openGraph: {
      title: session.title,
      description: session.centralQuestion,
      url: `/lessons/${session.slug}`,
      type: "article",
    },
  };
}

const sessionLinks = course.sessions.map(({ slug, title, number }) => ({ slug, title, number }));

export default async function LessonPage({ params }) {
  const { slug } = await params;
  const index = course.sessions.findIndex((item) => item.slug === slug);
  if (index === -1) notFound();

  const session = course.sessions[index];
  const previous = course.sessions[index - 1];
  const next = course.sessions[index + 1];

  return (
    <main id="content" tabIndex={-1} className="course-page">
      <header className="course-hero">
        <Link href="/lessons" className="text-link">← Course overview</Link>
        <p className="section-kicker">Beginning Nietzsche · Session {session.number} of {course.sessions.length}</p>
        <h1>{session.title}</h1>
        <p className="course-lede">{session.centralQuestion}</p>
        <p className="course-byline">Edited by <Link href="/about">{course.editor}</Link></p>
        <p>{session.totalStudyTime}</p>
        <nav aria-label="On this lesson" className="course-on-page">
          <a href="#assignment">Reading</a>
          <a href="#commentary">Commentary</a>
          <a href="#questions">Questions</a>
          <a href="#writing">Writing</a>
        </nav>
      </header>

      <article className="course-body" aria-label={`Session ${session.number} study guide`}>
        <section id="assignment" className="course-section course-assignment" aria-labelledby="assignment-heading">
          <p className="section-kicker">Start with the text</p>
          <h2 id="assignment-heading">Your reading assignment</h2>
          <p className="course-assignment-text">{session.assignment}</p>
          <p><strong>Dates:</strong> {session.dating}</p>
          <p><strong>First reading:</strong> {session.firstReadingTime}</p>
          <p>Use your own edition or the free translations linked below. The numbered sections identify the assignment across editions.</p>
          <ul className="course-reading-links">
            {session.readings.map((reading) => (
              <li key={reading.url}>
                <a href={reading.url}>{reading.label} ↗</a>
                <p>{reading.locator}</p>
              </li>
            ))}
          </ul>
          {session.number === 7 ? <p><Link href="/lessons/the-crisis-of-value#assignment">Reopen the Session 1 reading links for §§125 and 343.</Link></p> : null}
          <p className="course-detail">These free links use older public-domain translations. <Link href="/editions">Read the translation guidance</Link> for the preferred editions and differences in terminology.</p>
        </section>

        <section id="commentary" className="course-section" aria-labelledby="commentary-heading">
          <p className="section-kicker">After your first reading</p>
          <h2 id="commentary-heading">Commentary</h2>
          {session.context.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>

        <section id="questions" className="course-section" aria-labelledby="questions-heading">
          <h2 id="questions-heading">Questions to take back to the text</h2>
          <ol className="course-list course-questions">
            {session.questions.map((question) => <li key={question}>{question}</li>)}
          </ol>
        </section>

        <section className="course-section course-callout" aria-labelledby="objection-heading">
          <h2 id="objection-heading">An objection to consider</h2>
          <p>{session.objection}</p>
        </section>

        <section id="writing" className="course-section" aria-labelledby="writing-heading">
          <h2 id="writing-heading">{next ? "Short writing exercise" : "Your final writing exercise"}</h2>
          <p>{session.writingExercise}</p>
          <p className="course-detail">Write in your own notebook or document. Use section numbers to make your evidence easy to find.</p>
        </section>

        <LessonProgress key={session.slug} sessions={sessionLinks} slug={session.slug} />

        <section className="course-section" aria-labelledby="continue-heading">
          <h2 id="continue-heading">{next ? "Continue the argument" : "Continue reading"}</h2>
          <p>{session.nextReason}</p>
          {!next ? (
            <div className="hero-actions">
              <Link href="/works" className="button button--primary">Choose a complete book</Link>
              <Link href="/themes" className="button button--secondary">Follow a theme</Link>
            </div>
          ) : null}
        </section>

        <nav className="course-pagination" aria-label="Course sessions">
          {previous ? (
            <Link href={`/lessons/${previous.slug}`} className="course-pagination-link">
              <span>← Previous · Session {previous.number}</span>
              <strong>{previous.title}</strong>
            </Link>
          ) : <Link href="/lessons" className="course-pagination-link"><span>← All seven sessions</span><strong>Course overview</strong></Link>}
          {next ? (
            <Link href={`/lessons/${next.slug}`} className="course-pagination-link course-pagination-next">
              <span>Next · Session {next.number} →</span>
              <strong>{next.title}</strong>
            </Link>
          ) : <Link href="/lessons" className="course-pagination-link course-pagination-next"><span>Return to your progress →</span><strong>Course overview</strong></Link>}
        </nav>
        <p className="course-support-links"><Link href="/lessons">All sessions</Link> · <Link href="/method">Editorial method</Link> · <Link href="/editions">Editions and terminology</Link></p>
      </article>
    </main>
  );
}
