import Link from "next/link";

import LessonProgress from "../../components/LessonProgress";
import course from "../../content/beginnerCourse.json";

export const metadata = {
  title: "Beginner Course: Values, Truth, and Affirmation",
  description: "Seven guided Nietzsche lessons with exact reading assignments, commentary, questions, objections, and short writing exercises. Edited by Bob Smith.",
  alternates: { canonical: "/lessons" },
  openGraph: {
    title: course.title,
    description: course.summary,
    url: "/lessons",
    type: "website",
  },
};

const sessionLinks = course.sessions.map(({ slug, title, number }) => ({ slug, title, number }));

export default function LessonsPage() {
  return (
    <main id="content" tabIndex={-1} className="course-page">
      <header className="course-hero">
        <p className="section-kicker">A beginner course · Seven sessions</p>
        <h1>{course.title}</h1>
        <p className="course-lede">{course.summary}</p>
        <p className="course-byline">Edited by <Link href="/about">{course.editor}</Link></p>
        <p>{course.estimatedTotal}</p>
        <div className="hero-actions">
          <Link href={`/lessons/${course.sessions[0].slug}`} className="button button--primary">Begin session 1</Link>
          <a href="#course-sessions" className="button button--secondary">See all seven sessions</a>
        </div>
      </header>

      <div className="course-body">
        <LessonProgress sessions={sessionLinks} />

        <section className="course-section" aria-labelledby="course-introduction">
          <h2 id="course-introduction">A question to follow</h2>
          {course.introduction.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </section>

        <section className="course-section" aria-labelledby="course-method">
          <h2 id="course-method">How to use the course</h2>
          <ol className="course-list">
            {course.readingMethod.map((step) => <li key={step}>{step}</li>)}
          </ol>
          <p>The lesson pages provide assignments and commentary. Read the primary text in your own edition or follow the free reading links beside each assignment.</p>
          <p><Link href="/method">Read the editorial method</Link></p>
        </section>

        <section id="course-sessions" className="course-section" aria-labelledby="course-sessions-heading">
          <h2 id="course-sessions-heading">The seven sessions</h2>
          <ol className="course-session-list">
            {course.sessions.map((session) => (
              <li key={session.slug} className="course-session-card">
                <span className="course-session-number" aria-hidden="true">{session.number}</span>
                <div>
                  <p className="section-kicker">Session {session.number}</p>
                  <h3><Link href={`/lessons/${session.slug}`}>{session.title}</Link></h3>
                  <p>{session.centralQuestion}</p>
                  <p><strong>Read:</strong> {session.assignment}</p>
                  <p className="course-detail">{session.totalStudyTime}</p>
                  <Link href={`/lessons/${session.slug}`} className="text-link">Open session {session.number} →</Link>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="course-section" aria-labelledby="course-editions">
          <h2 id="course-editions">Editions and free reading links</h2>
          {course.translationGuidance.slice(0, 3).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <p><Link href="/editions">Compare editions and translation choices</Link></p>
        </section>

        <section className="course-section course-callout" aria-labelledby="course-completion">
          <h2 id="course-completion">What finishing means</h2>
          <p>{course.completionStandard}</p>
          <p>You do not need to agree with Nietzsche to complete the course. Keep your written responses and return to the questions that remain unresolved.</p>
        </section>
      </div>
    </main>
  );
}
